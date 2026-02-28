#!/usr/bin/env bash

set -euo pipefail

REPO="${GH_REPO:-}"

usage() {
  cat <<'EOF'
Usage:
  scripts/gh-issue-pr.sh start <issue-number>
  scripts/gh-issue-pr.sh open <issue-number>

Commands:
  start   Fetch the issue title and create a codex/ branch for the work.
  open    Push the current branch and open a PR linked to the issue.
EOF
}

require_cmd() {
  if ! command -v "$1" >/dev/null 2>&1; then
    printf 'Missing required command: %s\n' "$1" >&2
    exit 1
  fi
}

require_auth() {
  if ! gh auth status >/dev/null 2>&1; then
    cat <<'EOF' >&2
GitHub CLI is not authenticated.
Run:
  gh auth login --hostname github.com --git-protocol https --web
Then rerun this command.
EOF
    exit 1
  fi
}

resolve_repo() {
  if [[ -n "$REPO" ]]; then
    return
  fi

  REPO=$(gh repo view --json nameWithOwner --jq '.nameWithOwner' 2>/dev/null || true)
  if [[ -z "$REPO" ]]; then
    printf 'Unable to determine repository. Set GH_REPO=owner/name and rerun.\n' >&2
    exit 1
  fi
}

slugify() {
  printf '%s' "$1" \
    | tr '[:upper:]' '[:lower:]' \
    | sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$//; s/-{2,}/-/g'
}

issue_json() {
  local issue_number=$1
  gh issue view "$issue_number" --repo "$REPO" --json number,title,body,url
}

issue_field() {
  local issue_number=$1
  local field=$2
  issue_json "$issue_number" | python3 -c "import json,sys; print(json.load(sys.stdin)['$field'])"
}

start_issue() {
  local issue_number=$1
  local title
  local branch

  title=$(issue_field "$issue_number" title)
  branch="codex/issue-${issue_number}-$(slugify "$title")"

  if git rev-parse --verify "$branch" >/dev/null 2>&1; then
    git switch "$branch"
  else
    git switch -c "$branch"
  fi

  printf 'Issue #%s\n%s\n\n' "$issue_number" "$title"
  printf 'Branch: %s\n' "$branch"
  printf 'URL: %s\n' "$(issue_field "$issue_number" url)"
}

open_pr() {
  local issue_number=$1
  local title
  local body

  if [[ -n $(git status --short) ]]; then
    printf 'Working tree is dirty. Commit or stash changes before opening a PR.\n' >&2
    exit 1
  fi

  title=$(issue_field "$issue_number" title)
  body=$(cat <<EOF
Closes #$issue_number

## Summary
- Fixes: $title
EOF
)

  git push -u origin HEAD
  gh pr create \
    --repo "$REPO" \
    --title "Fix #$issue_number: $title" \
    --body "$body"
}

main() {
  if [[ $# -ne 2 ]]; then
    usage
    exit 1
  fi

  require_cmd git
  require_cmd gh
  require_cmd python3
  require_auth
  resolve_repo

  case "$1" in
    start)
      start_issue "$2"
      ;;
    open)
      open_pr "$2"
      ;;
    *)
      usage
      exit 1
      ;;
  esac
}

main "$@"

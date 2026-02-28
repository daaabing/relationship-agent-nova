# GitHub Helpers

Use `scripts/gh-issue-pr.sh` for a basic issue-to-PR workflow in this repo.

Examples:

```bash
scripts/gh-issue-pr.sh start 123
scripts/gh-issue-pr.sh open 123
```

Before using it, authenticate the GitHub CLI once:

```bash
gh auth login --hostname github.com --git-protocol https --web
```

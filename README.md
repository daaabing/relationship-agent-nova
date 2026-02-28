# relationship-agent-nova

## GitHub workflow helper

This repo includes a small helper for issue-to-PR work:

```bash
scripts/gh-issue-pr.sh start <issue-number>
scripts/gh-issue-pr.sh open <issue-number>
```

The one-time prerequisite is GitHub CLI authentication:

```bash
gh auth login --hostname github.com --git-protocol https --web
```

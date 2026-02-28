# Test Scaffold

Integration tests currently cover the hello flow backend contract:
- non-empty note text returns `uploaded=true`, `parsed=true`, and an empty inbox
- empty note text returns `uploaded=false`, `parsed=false`, and an empty inbox

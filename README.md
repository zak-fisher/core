# @fubo/core

A library containing global dependencies and configurations for micro-fe projects

## How to develop

This repo doesn't have a server, so you have to build it and consume it in another app.

Since every repo in this ecosystem consumes the core as a dependency, literally choose any of them :)

For example, if you have the SmartTV repo cloned, you can `cd ../smarttv`, then update `package.json` with a relative path to this repo.

```json
// smarttv/package.json
{
  ...,
  "dependencies": {
    "@fubo/core": "link:../core" // This should always point to a remote path in production
  }
}
```

> Each time you make a change in the core, you need to rebuild it and update the dependency in the consuming repo, then restart the server.

1. Chang: Added a new helper method!

2. Build that sucker :P
```bash
# core
yarn build
```

3. Install the new build and restart the server
```bash
# smarttv
rm -rf node_modules && yarn && yarn start
```

### Don't forget to set the `@fubo/core` dependency back to a remote path when you're done!


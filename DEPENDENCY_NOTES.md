# Dependency Notes

## `sucrase` override

The `sucrase` override in `package.json` is pinned to the minimum accepted version `3.35.1` while upstream dependency trees may still pull older `3.x` releases.

Removal readiness check:

1. Temporarily remove the `overrides.sucrase` entry from `package.json`.
2. Run `npm install`.
3. Run `npm ls sucrase`.
4. Remove the override only if every resolved entry is `sucrase@3.35.1` or newer and no `overridden` marker appears.

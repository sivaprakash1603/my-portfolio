# Dependency Notes

## `sucrase` override

The `sucrase` override in `package.json` is pinned to `3.35.1` to force a safe transitive resolution while upstream dependency trees are still pulling older versions.

This override can be removed once all direct dependencies resolve to `sucrase@3.35.1` (or newer safe versions) without using `overrides`.

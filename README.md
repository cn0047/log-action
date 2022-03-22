log action
-

[![Node.js CI](https://github.com/cn007b/log-action/actions/workflows/node.js.yml/badge.svg)](https://github.com/cn007b/log-action/actions/workflows/node.js.yml)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b82814fdb88d41b08664331e122b876b)](https://www.codacy.com/gh/cn007b/log-action/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=cn007b/log-action&amp;utm_campaign=Badge_Grade)
[![Maintainability](https://api.codeclimate.com/v1/badges/a122f10e93d38a1c7d0d/maintainability)](https://codeclimate.com/github/cn007b/log-action/maintainability)

[REAL-TIME log](https://github.com/cn007b/log) GitHub action.

## Inputs

#### `stream-id`

**Required** The REAL-TIME log streamId. Default `"cn007b-log-action"`.

#### `message`

The log message for REAL-TIME log. Default `""`.

## Outputs

#### `time`

Time when action was logged at.

## Example usage

````
uses: cn007b/log-action@v1.14
with:
  stream-id: "cn007b-log-action"
  message: "It works!"
````

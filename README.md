log action
-

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b82814fdb88d41b08664331e122b876b)](https://www.codacy.com/gh/cn007b/log-action/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=cn007b/log-action&amp;utm_campaign=Badge_Grade)

[REAL-TIME log](https://github.com/cn007b/log) GitHub action.

## Inputs

#### `stream-id`

**Required** The REAL-TIME log streamId. Default `"cn007b-log-action"`.

## Outputs

#### `time`

Time when action was logged at.

## Example usage

````
uses: cn007b/log-action@v1.10
with:
  stream-id: "cn007b-log-action"
````

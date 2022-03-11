log action
-

[REAL-TIME log](https://github.com/cn007b/log) GitHub action.

## Inputs

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/958d8c18693b4b62b97de5d8fde6d5fa)](https://app.codacy.com/gh/cn007b/log-action?utm_source=github.com&utm_medium=referral&utm_content=cn007b/log-action&utm_campaign=Badge_Grade_Settings)

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

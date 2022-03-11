log action
-

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

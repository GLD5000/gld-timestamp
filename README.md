# [gld-timestamp](https://www.npmjs.com/package/@gld5000k/timestamp)

A simple timestamp maker for use in e.g. CLI node.js scripts

## Example usage

### Install

```
npm i -D @gld5000k/timestamp
```

### Import (.mjs)

```
import  { getTimestamp, logTimestampArrow, logTimestamp } from '@gld5000k/timestamp';
```

### Return timestamp no arrow

```
const timestamp = getTimestamp();
```

### Log timestamp with arrow

```
logTimestampArrow('Starting');
```

### Log timestamp no arrow

```
LogTimestamp('Stopping');
```

## Console Output

### With Arrow

```
* * * *
* * * *
* * * *
* * * *
* * * * * * * *
* * * * * * *
* * * * * *
* * * * *
* * * *
* * *
* *
*
Starting 2025_07_06T16_26_38_102Z
```

### No Arrow

```
Stopping 2025_07_06T16_26_38_109Z
```

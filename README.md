# gld-timestamp
A simple timestamp maker for use in e.g. CLI node.js scripts

## Example usage
### Install
```
npm i -D @gld5000k/timestamp
```
### Import (.mjs)
```
import {createTimestampArrow, createTimestamp} from '@gld5000k/timestamp';
```
### Create timestamp with arrow
```
console.log('starting', createTimestampArrow());
```
### Create timestamp no arrow

```
console.log('starting', createTimestamp());
```
## Console Output
### With Arrow
```
* * * *
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
Starting 2025_07_06T16_26_38_109Z
```
### No Arrow
```
Starting 2025_07_06T16_26_38_102Z
```
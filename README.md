# candy-progress
Polymer element that creates candy progress bar.

## Install

~~~~
bower install candy-progress --save
~~~~

## Usage

Supported options:

| Option            | Description                                                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **progress**      | Value that sets the bar fill explicitly, the value is in percentage (The range should be 0-100)                |
| **loop**          | If set to true the bar is going to fill repetitively.                                                        |
| **fill**          | If set to true the bar is going to fill and stay filled.                                                      |
| **speed**         | Number represents the speed of bar filling (fitting values are 1 - 100, 1 the slowest and 100 the fastest) |

## Example

To use the element in HTML:

```html
<candy-progress class="orange" loop></candy-progress>
<candy-progress class="blue" progress="50"></candy-progress>
```

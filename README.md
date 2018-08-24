# candy-progress  [![Bower version](https://badge.fury.io/bo/candy-progress.svg)](http://badge.fury.io/bo/candy-progress) [![Travis state](https://travis-ci.org/Collaborne/candy-progress.svg?branch=master)](https://travis-ci.org/Collaborne/candy-progress) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/Collaborne/candy-progress)  
[![Published on Vaadin  Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/Collabornegoogle-analytics-tracker-behavior)
[![Stars on vaadin.com/directory](https://img.shields.io/vaadin-directory/star/Collabornegoogle-analytics-tracker-behavior.svg)](https://vaadin.com/directory/component/Collabornegoogle-analytics-tracker-behavior)

Polymer element that creates candy progress bar.

This element is a native Polymer 2 element (ES6 class syntax). Use version 2.0.x for Polymer 2 hybrid mode.

## Install

`bower install candy-progress --save`

## Usage

Supported options:

| Option            | Description                                                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **progress**      | Value that sets the bar fill explicitly, the value is in percentage (The range should be 0-100)                |
| **loop**          | If set to true the bar is going to fill repetitively.                                                        |
| **fill**          | If set to true the bar is going to fill and stay filled.                                                      |
| **speed**         | Number represents the speed of bar filling (fitting values are 1 - 100, 1 the slowest and 100 the fastest) |

## Example

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="candy-progress.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<style is="custom-style">
    candy-progress {
        --candy-progress-width: 100%;
        --candy-progress-height: 20px;
    }
    candy-progress.red {
        --candy-progress-color: #AC0000;
        --candy-progress-secondary-color: #FF0000;
    }
    candy-progress.green {
        --candy-progress-color: #006500;
        --candy-progress-secondary-color: #1FD01F;
    }
    candy-progress.orange {
        --candy-progress-color: #F48300;
        --candy-progress-secondary-color: #FF8826;
    }
    candy-progress.blue {
        --candy-progress-color: blue;
        --candy-progress-secondary-color: white;
    }
</style>
<candy-progress class="red" speed="35" fill></candy-progress>
<candy-progress class="green" speed="70" loop></candy-progress>
<candy-progress class="orange" loop></candy-progress>
<candy-progress class="blue" progress="50"></candy-progress>
```

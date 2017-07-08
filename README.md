# fnss
[![npm version](https://badge.fury.io/js/fnss.svg)](http://badge.fury.io/js/fnss)
[![downloads](http://img.shields.io/npm/dm/fnss.svg)](https://www.npmjs.com/package/fnss)

This package is used to provide extensible, functional styling to your React and React Native applications. This package is unopinionated and makes no assumptions about your application. Below is a simple example:

``` javascript
import React from 'react';
import { Text } from 'react-native';
import * as StyleSheet from 'fnss';

const StyleableText = StyleSheet.wrap(Text);

const primary = ({ primary = 'black' }) => primary;
const rem = (n = 1) => ({ rem = 16 }) => n * rem;

const styles = StyleSheet.create({
  text: {
    color: primary,
    fontSize: rem(2)
  }
});

export default class App extends React.Component {
  render() {
    return (
      <StyleSheet.Provider rem={10} primary="blue">
        <StyleableText style={styles.text}>
          Hello world
        </StyleableText>
      </StyleSheet.Provider>
    );
  }
}
```

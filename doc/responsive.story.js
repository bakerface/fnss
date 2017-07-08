/**
 * Copyright (c) 2017 Chris Baker <mail.chris.baker@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

'use strict';

import React from 'react';
import { Text, View } from 'react-native-web';
import { storiesOf } from '@storybook/react';
import * as StyleSheet from '../src';

function withLayout(Component) {
  return class LayoutProvider extends React.PureComponent {
    constructor(props) {
      super(props);

      this.handleLayout = this.handleLayout.bind(this);
      this.state = { };
    }

    handleLayout(e) {
      this.setState({
        layout: e.nativeEvent.layout
      });
    }

    renderComponent() {
      if (this.state.layout) {
        return (
          <Component layout={this.state.layout} {...this.props}/>
        );
      }

      return null;
    }

    render() {
      return (
        <View onLayout={this.handleLayout}>
          { this.renderComponent() }
        </View>
      );
    }
  };
}

const Provider = withLayout(StyleSheet.Provider);
const T = StyleSheet.wrap(Text);

const cond = (c, t, f) => c ? t : f;

const atleast = min => (t, f) => ({ layout }) =>
  cond(layout.width >= min, t, f);

const between = (min, max) => (t, f) => ({ layout }) =>
  cond(min <= layout.width && layout.width <= max, t, f);

const xs = between(0, 575);
const sm = between(576, 767);
const md = between(768, 991);
const lg = between(992, 1199);
const xl = atleast(1200);

const selected = { fontSize: 30 };
const unselected = { fontSize: 10 };

const styles = StyleSheet.create({
  xs: xs(selected, unselected),
  sm: sm(selected, unselected),
  md: md(selected, unselected),
  lg: lg(selected, unselected),
  xl: xl(selected, unselected)
});

function Example(props) {
  return (
    <Provider {...props}>
      <View>
        <T style={styles.xs}>xs</T>
        <T style={styles.sm}>sm</T>
        <T style={styles.md}>md</T>
        <T style={styles.lg}>lg</T>
        <T style={styles.xl}>xl</T>
      </View>
    </Provider>
  );
}

storiesOf('responsive')
  .add('breakpoints', () => <Example/>);

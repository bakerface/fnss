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
import PropTypes from 'prop-types';
import ReactNative from 'react-native-web';
import { storiesOf } from '@storybook/react';
import * as StyleSheet from '../src';

class TachyonsProvider extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { breakpoint: this.getBreakpoint() };
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  getBreakpoint() {
    const { rem } = this.props;
    const width = window.innerWidth;

    return (
      (width < 30 * rem && 's') ||
      (width < 60 * rem && 'm') ||
      'l'
    );
  }

  handleWindowResize() {
    const breakpoint = this.getBreakpoint();

    if (this.state.breakpoint !== breakpoint) {
      this.setState({ breakpoint });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  render() {
    return (
      <StyleSheet.Provider
        breakpoint={this.state.breakpoint}
        {...this.props}
        />
    );
  }
}

TachyonsProvider.propTypes = {
  rem: PropTypes.number
};

TachyonsProvider.defaultProps = {
  rem: 16
};

const Text = StyleSheet.wrap(ReactNative.Text);
const View = StyleSheet.wrap(ReactNative.View);

const ns = x => ({ breakpoint }) => breakpoint !== 's' && x;
const m = x => ({ breakpoint }) => breakpoint === 'm' && x;
const l = x => ({ breakpoint }) => breakpoint === 'l' && x;
const rem = (n = 1) => ({ rem = 16 }) => n * rem;

const spacing = n => ({ spacingScale = [ 0, 0.25, 0.5, 1, 2, 4, 8, 16 ] }) =>
  rem(spacingScale[n]);

const aifs = ({ alignItems: 'flex-start' });
const bg = c => ({ backgroundColor: c });
const fg = c => ({ color: c });
const ma = n => ({ margin: spacing(n) });
const pa = n => ({ padding: spacing(n) });

const styles = StyleSheet.create({
  aifs,
  bg_black: bg('black'),
  bg_gray: bg('gray'),
  ma0: ma(0),
  ma1: ma(1),
  ma2: ma(2),
  ma3: ma(3),
  ma4: ma(4),
  ma5: ma(5),
  ma6: ma(6),
  ma7: ma(7),
  ma0_ns: ns(ma(0)),
  ma1_ns: ns(ma(1)),
  ma2_ns: ns(ma(2)),
  ma3_ns: ns(ma(3)),
  ma4_ns: ns(ma(4)),
  ma5_ns: ns(ma(5)),
  ma6_ns: ns(ma(6)),
  ma7_ns: ns(ma(7)),
  ma0_m: m(ma(0)),
  ma1_m: m(ma(1)),
  ma2_m: m(ma(2)),
  ma3_m: m(ma(3)),
  ma4_m: m(ma(4)),
  ma5_m: m(ma(5)),
  ma6_m: m(ma(6)),
  ma7_m: m(ma(7)),
  ma0_l: l(ma(0)),
  ma1_l: l(ma(1)),
  ma2_l: l(ma(2)),
  ma3_l: l(ma(3)),
  ma4_l: l(ma(4)),
  ma5_l: l(ma(5)),
  ma6_l: l(ma(6)),
  ma7_l: l(ma(7)),
  pa0: pa(0),
  pa1: pa(1),
  pa2: pa(2),
  pa3: pa(3),
  pa4: pa(4),
  pa5: pa(5),
  pa6: pa(6),
  pa7: pa(7),
  pa0_ns: ns(pa(0)),
  pa1_ns: ns(pa(1)),
  pa2_ns: ns(pa(2)),
  pa3_ns: ns(pa(3)),
  pa4_ns: ns(pa(4)),
  pa5_ns: ns(pa(5)),
  pa6_ns: ns(pa(6)),
  pa7_ns: ns(pa(7)),
  pa0_m: m(pa(0)),
  pa1_m: m(pa(1)),
  pa2_m: m(pa(2)),
  pa3_m: m(pa(3)),
  pa4_m: m(pa(4)),
  pa5_m: m(pa(5)),
  pa6_m: m(pa(6)),
  pa7_m: m(pa(7)),
  pa0_l: l(pa(0)),
  pa1_l: l(pa(1)),
  pa2_l: l(pa(2)),
  pa3_l: l(pa(3)),
  pa4_l: l(pa(4)),
  pa5_l: l(pa(5)),
  pa6_l: l(pa(6)),
  pa7_l: l(pa(7)),
  white: fg('white')
});

function Example({ style, ...props }) {
  return (
    <View style={[ styles.ma1, styles.bg_gray ]}>
      <Text style={[ styles.bg_black, styles.white, style ]} {...props}/>
    </View>
  );
}

Example.propTypes = {
  style: PropTypes.any
};

Example.defaultProps = {
  style: []
};

storiesOf('tachyons')
  .add('margins', () => (
    <TachyonsProvider>
      <View style={styles.aifs}>
        <Example style={styles.ma0}>.ma0</Example>
        <Example style={styles.ma1}>.ma1</Example>
        <Example style={styles.ma2}>.ma2</Example>
        <Example style={styles.ma3}>.ma3</Example>
        <Example style={styles.ma4}>.ma4</Example>
        <Example style={styles.ma5}>.ma5</Example>
        <Example style={styles.ma6}>.ma6</Example>
        <Example style={styles.ma7}>.ma7</Example>
        <Example style={styles.ma0_ns}>.ma0-ns</Example>
        <Example style={styles.ma1_ns}>.ma1-ns</Example>
        <Example style={styles.ma2_ns}>.ma2-ns</Example>
        <Example style={styles.ma3_ns}>.ma3-ns</Example>
        <Example style={styles.ma4_ns}>.ma4-ns</Example>
        <Example style={styles.ma5_ns}>.ma5-ns</Example>
        <Example style={styles.ma6_ns}>.ma6-ns</Example>
        <Example style={styles.ma7_ns}>.ma7-ns</Example>
        <Example style={styles.ma0_m}>.ma0-m</Example>
        <Example style={styles.ma1_m}>.ma1-m</Example>
        <Example style={styles.ma2_m}>.ma2-m</Example>
        <Example style={styles.ma3_m}>.ma3-m</Example>
        <Example style={styles.ma4_m}>.ma4-m</Example>
        <Example style={styles.ma5_m}>.ma5-m</Example>
        <Example style={styles.ma6_m}>.ma6-m</Example>
        <Example style={styles.ma7_m}>.ma7-m</Example>
        <Example style={styles.ma0_l}>.ma0-l</Example>
        <Example style={styles.ma1_l}>.ma1-l</Example>
        <Example style={styles.ma2_l}>.ma2-l</Example>
        <Example style={styles.ma3_l}>.ma3-l</Example>
        <Example style={styles.ma4_l}>.ma4-l</Example>
        <Example style={styles.ma5_l}>.ma5-l</Example>
        <Example style={styles.ma6_l}>.ma6-l</Example>
        <Example style={styles.ma7_l}>.ma7-l</Example>
      </View>
    </TachyonsProvider>
  ))
  .add('padding', () => (
    <TachyonsProvider>
      <View style={styles.aifs}>
        <Example style={styles.pa0}>.pa0</Example>
        <Example style={styles.pa1}>.pa1</Example>
        <Example style={styles.pa2}>.pa2</Example>
        <Example style={styles.pa3}>.pa3</Example>
        <Example style={styles.pa4}>.pa4</Example>
        <Example style={styles.pa5}>.pa5</Example>
        <Example style={styles.pa6}>.pa6</Example>
        <Example style={styles.pa7}>.pa7</Example>
        <Example style={styles.pa0_ns}>.pa0-ns</Example>
        <Example style={styles.pa1_ns}>.pa1-ns</Example>
        <Example style={styles.pa2_ns}>.pa2-ns</Example>
        <Example style={styles.pa3_ns}>.pa3-ns</Example>
        <Example style={styles.pa4_ns}>.pa4-ns</Example>
        <Example style={styles.pa5_ns}>.pa5-ns</Example>
        <Example style={styles.pa6_ns}>.pa6-ns</Example>
        <Example style={styles.pa7_ns}>.pa7-ns</Example>
        <Example style={styles.pa0_m}>.pa0-m</Example>
        <Example style={styles.pa1_m}>.pa1-m</Example>
        <Example style={styles.pa2_m}>.pa2-m</Example>
        <Example style={styles.pa3_m}>.pa3-m</Example>
        <Example style={styles.pa4_m}>.pa4-m</Example>
        <Example style={styles.pa5_m}>.pa5-m</Example>
        <Example style={styles.pa6_m}>.pa6-m</Example>
        <Example style={styles.pa7_m}>.pa7-m</Example>
        <Example style={styles.pa0_l}>.pa0-l</Example>
        <Example style={styles.pa1_l}>.pa1-l</Example>
        <Example style={styles.pa2_l}>.pa2-l</Example>
        <Example style={styles.pa3_l}>.pa3-l</Example>
        <Example style={styles.pa4_l}>.pa4-l</Example>
        <Example style={styles.pa5_l}>.pa5-l</Example>
        <Example style={styles.pa6_l}>.pa6-l</Example>
        <Example style={styles.pa7_l}>.pa7-l</Example>
      </View>
    </TachyonsProvider>
  ));

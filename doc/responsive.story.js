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
import { Text } from 'react-native-web';
import { storiesOf } from '@storybook/react';
import * as StyleSheet from '../src';
import LayoutProvider from './layout-provider';

const T = StyleSheet.wrap(Text);

const width = ({ layout }) => layout.width;
const rem = (n = 1) => ({ rem = 16 }) => n * rem;
const medium = ({ medium = 30 }) => rem(medium);
const large = ({ large = 60 }) => rem(large);

const ns = style => stylesheet => {
  const resolve = StyleSheet.resolve(stylesheet);
  const w = resolve(width);
  const m = resolve(medium);

  return w >= m && style;
};

const m = style => stylesheet => {
  const resolve = StyleSheet.resolve(stylesheet);
  const w = resolve(width);
  const m = resolve(medium);
  const l = resolve(large);

  return m <= w && w < l && style;
};

const l = style => stylesheet => {
  const resolve = StyleSheet.resolve(stylesheet);
  const w = resolve(width);
  const l = resolve(large);

  return w >= l && style;
};

const styles = StyleSheet.create({
  text: [
    { backgroundColor: 'yellow' },
    ns({ fontSize: rem(2) }),
    m({ fontStyle: 'italic' }),
    l({ color: 'red' })
  ]
});

function Example(props) {
  return (
    <LayoutProvider>
      <StyleSheet.Provider {...props}>
        <T style={styles.text}>hello world</T>
      </StyleSheet.Provider>
    </LayoutProvider>
  );
}

storiesOf('responsive')
  .add('0, 30, 60', () => <Example/>)
  .add('0, 10, 20', () => <Example medium={10} large={20}/>);

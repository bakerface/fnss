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

const T = StyleSheet.wrap(Text);
const rem = (n = 1) => ({ rem = 16 }) => n * rem;

const styles = StyleSheet.create({
  title: {
    fontSize: rem(2)
  },
  subtitle: {
    fontSize: rem(1)
  }
});

function Example(props) {
  return (
    <StyleSheet.Provider {...props}>
      <View>
        <T style={styles.title}>TITLE</T>
        <T style={styles.subtitle}>subtitle</T>
      </View>
    </StyleSheet.Provider>
  );
}

storiesOf('rem')
  .add('default', () => <Example/>)
  .add('10px', () => <Example rem={10}/>)
  .add('20px', () => <Example rem={20}/>);

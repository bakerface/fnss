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
import withStyleSheet from './with-stylesheet';

function resolve(stylesheet) {
  return function recurse(style) {
    function reducer(target, key) {
      target[key] = recurse(style[key]);
      return target;
    }

    if (typeof style === 'function') {
      return recurse(style(stylesheet));
    }

    if (Array.isArray(style)) {
      return style.map(recurse);
    }

    if (typeof style === 'object') {
      return Object.keys(style).reduce(reducer, { });
    }

    return style;
  };
}

export default function wrap(C) {
  const name = C.displayName || C.name || 'Component';

  class StyleSheetWrapper extends React.Component {
    render() {
      const { stylesheet, style, ...props } = this.props;
      const styles = resolve(stylesheet)(style);

      return (
        <C style={styles} {...props}/>
      );
    }
  }

  StyleSheetWrapper.displayName = `StyleSheetWrapper(${name})`;

  StyleSheetWrapper.propTypes = {
    children: PropTypes.node,
    style: PropTypes.any,
    stylesheet: PropTypes.object.isRequired
  };

  StyleSheetWrapper.defaultProps = {
    children: null,
    style: []
  };

  return withStyleSheet(StyleSheetWrapper);
}

/**
 * Styled button component
 */

import component, { CSSStyleObject } from './eldef/component';

const style: CSSStyleObject = {
  width: '100px',
  borderRadius: '10px',
};

component.register({
  element: 'button',
  style,
});

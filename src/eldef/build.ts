/**
 * Module for building component to various frameworks.
 */
import { ComponentLibrary } from './component';
import buildCommon from './buildCommon';

/**
 * Valid build routine types
 */
export type BuildType = 'common' | 'react' | 'angularjs' | 'angular' | 'svelte';

/**
 * Maps build types to their build functions.
 */
export const buildMap = {
  common: buildCommon,
  react: () => {},
  angularjs: () => {},
  angular: () => {},
  svelte: () => {},
};

export default function (type: BuildType, component: ComponentLibrary) {
  component.items.forEach((item) => {
    console.log(
      `Hey, I'm building the '${item.element}' element to '${type}' right now!`
    );
  });
  return;
}

/**
 * Common function and types for generating a component.
 */

/**
 * Partial interface definition of CSSStyleDeclaration.
 */
export type CSSStyleObject = Partial<CSSStyleDeclaration>;

/**
 * Partial interface definition of GlobalEventHandlers.
 */
export type EventHandlers = Partial<GlobalEventHandlers>;

/**
 * Defines the properties and methods for a specific component.
 * These properties are used to generate a variety of distributable product builds.
 */
export interface ComponentDefinition {
  element: string;
  extends?: string;
  style?: CSSStyleObject;
  events?: EventHandlers;
}

/**
 * A class that registers stores the component definitions.
 */
export class ComponentLibrary {
  /**
   * Items registered to this component library.
   */
  items: ComponentDefinition[] = [];

  /**
   * Registers a component definition to this library instance so it can be compiled later.
   * @param component An object that defines the component.
   */
  register = (component: ComponentDefinition): void => {
    this.items.push(component);
  };
}

export default new ComponentLibrary();

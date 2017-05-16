var React = require('react');

function classComponent(component) {
  return (
    typeof component === 'function' &&
    component.prototype &&
    !!component.prototype.isReactComponent
  );
}

function functionComponent(component) {
  return (
    typeof component === 'function' &&
    String(component).includes('return React.createElement')
  );
}

function component(component) {
  return (
    classComponent(component) ||
    functionComponent(component)
  );
}

function element(element) {
  return React.isValidElement(element);
}

function DOMTypeElement(element) {
  return isElement(element) && typeof element.type === 'string';
}

function compositeTypeElement(element) {
  return isElement(element) && typeof element.type === 'function';
}

var isReact = {};

isReact.classComponent = classComponent;
isReact.functionComponent = functionComponent;
isReact.component = component;
isReact.element = element;
isReact.DOMTypeElement = DOMTypeElement;
isReact.compositeTypeElement = compositeTypeElement;

module.exports = isReact;

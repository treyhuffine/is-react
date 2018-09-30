var React = require('react');

const FUNCTION_REGEX = /react(\d+)?./i;

function classComponent(component) {
  return (
    typeof component === 'function' && component.prototype && !!component.prototype.isReactComponent
  );
}

// Ensure compatability with transformed code
function functionComponent(component) {
  return (
    typeof component === 'function' &&
    String(component).includes('return') &&
    !!String(component).match(FUNCTION_REGEX) &&
    String(component).includes('.createElement')
  );
}

function component(component) {
  return classComponent(component) || functionComponent(component);
}

function element(typeElement) {
  return React.isValidElement(typeElement);
}

function DOMTypeElement(typeElement) {
  return element(typeElement) && typeof typeElement.type === 'string';
}

function compositeTypeElement(typeElement) {
  return element(typeElement) && typeof typeElement.type === 'function';
}

function compatible(item) {
  return element(item) || component(item);
}

var isReact = {};

isReact.classComponent = classComponent;
isReact.functionComponent = functionComponent;
isReact.component = component;
isReact.element = element;
isReact.DOMTypeElement = DOMTypeElement;
isReact.compositeTypeElement = compositeTypeElement;
isReact.compatible = compatible;

module.exports = isReact;

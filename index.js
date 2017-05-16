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

module.exports = isReact;

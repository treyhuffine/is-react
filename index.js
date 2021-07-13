var React = require('react');

const FUNCTION_REGEX = /react(\d+)?./i;

function classComponent(component) {
  return (
    typeof component === 'function' && component.prototype && !!component.prototype.isReactComponent
  );
}

// Ensure compatability with transformed code
function functionComponent(component) {
  const componentStr = String(component)

  return (
    typeof component === 'function' &&
    // componentStr.includes('return') &&
    !!componentStr.match(FUNCTION_REGEX) &&
    // Webpack create syntax like this:
    // /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\" ...
    // String(component).includes('.createElement')
    (
      componentStr.includes('createElement')
      // new automatic runtime
      || componentStr.includes('react_jsx_runtime') // react/jsx-runtime
      || componentStr.includes('react_jsx_dev_runtime') // react/jsx-dev-runtime
    )
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

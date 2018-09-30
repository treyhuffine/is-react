const React = require('react');
const isReact = require('../');

// Class Component
class Foo extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}

const foo = <Foo />;

//Functional Component
function Bar(props) {
  return <h1>World</h1>;
}
const bar = <Bar />;
const Func = () => <h2>implicit</h2>;

// React Element
const header = <h1>Title</h1>;

it('Classifies class component', () => {
  expect(isReact.compatible(Foo)).toBe(true);
  expect(isReact.component(Foo)).toBe(true);
  expect(isReact.classComponent(Foo)).toBe(true);
  expect(isReact.functionComponent(Foo)).toBe(false);
  expect(isReact.element(Foo)).toBe(false);
});

it('Classifies composite element from class component', () => {
  expect(isReact.compatible(Foo)).toBe(true);
  expect(isReact.component(Foo)).toBe(true);
  expect(isReact.classComponent(Foo)).toBe(true);
  expect(isReact.functionComponent(Foo)).toBe(false);
  expect(isReact.element(Foo)).toBe(false);
});

it('Classifies function component', () => {
  expect(isReact.compatible(Bar)).toBe(true);
  expect(isReact.component(Bar)).toBe(true);
  expect(isReact.classComponent(Bar)).toBe(false);
  expect(isReact.functionComponent(Bar)).toBe(true);
  expect(isReact.element(Bar)).toBe(false);
  expect(isReact.compatible(Func)).toBe(true);
  expect(isReact.component(Func)).toBe(true);
  expect(isReact.classComponent(Func)).toBe(false);
  expect(isReact.functionComponent(Func)).toBe(true);
  expect(isReact.element(Func)).toBe(false);
});

it('Classifies composite element from function component', () => {
  expect(isReact.compatible(Bar)).toBe(true);
  expect(isReact.component(Bar)).toBe(true);
  expect(isReact.classComponent(Bar)).toBe(false);
  expect(isReact.functionComponent(Bar)).toBe(true);
  expect(isReact.element(Bar)).toBe(false);
});

it('Classifies DOM type element', () => {
  expect(isReact.compatible(header)).toBe(true);
  expect(isReact.component(header)).toBe(false);
  expect(isReact.element(header)).toBe(true);
  expect(isReact.DOMTypeElement(header)).toBe(true);
  expect(isReact.compositeTypeElement(header)).toBe(false);
});

describe('Native JavaScript', () => {
  it('Object is not valid React', () => {
    expect(isReact.compatible({})).toBe(false);
  });

  it('Array is not valid React', () => {
    expect(isReact.compatible({})).toBe(false);
  });

  it('Number is not valid React', () => {
    expect(isReact.compatible(1)).toBe(false);
  });

  it('String is not valid React', () => {
    expect(isReact.compatible('Hello, world')).toBe(false);
  });

  it('Function is not valid React', () => {
    expect(isReact.compatible(() => {})).toBe(false);
  });

  it('null is not valid React', () => {
    expect(isReact.compatible(null)).toBe(false);
  });

  it('undefined is not valid React', () => {
    expect(isReact.compatible(undefined)).toBe(false);
  });
});

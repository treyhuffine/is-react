const React = require('react');
const { shallow } = require('enzyme');
const isReact = require('../');

// Class Component
class Foo extends React.Component {
  render(){
      return <h1>Hello</h1>;
  }
}

const foo = <Foo />;

//Functional Component
function Bar (props) { return <h1>World</h1> }
const bar = <Bar />;

// React Element
const header = <h1>Title</h1>;

it('Identifies a Foo class component', () => {
  isReact.compatible(Foo) // true
  isReact.component(Foo); // true
  isReact.classComponent(Foo); // true
  isReact.functionComponent(Foo); // false
  isReact.element(Foo); // false
});

it('Identifies a <Foo/> composite element', () => {
  isReact.compatible(Foo) // true
  isReact.component(Foo); // true
  isReact.classComponent(Foo); // true
  isReact.functionComponent(Foo); // false
  isReact.element(Foo); // false
});

it('Identifies a Bar function component', () => {
  isReact.compatible(Bar) // true
  isReact.component(Bar); // true
  isReact.classComponent(Bar); // false
  isReact.functionComponent(Bar); // true
  isReact.element(Bar); // false
});

it('Identifies a <Bar/> composite element', () => {
  isReact.compatible(Bar) // true
  isReact.component(Bar); // true
  isReact.classComponent(Bar); // false
  isReact.functionComponent(Bar); // true
  isReact.element(Bar); // false
});

it('Identifies a DOM type element ', () => {
  isReact.compatible(header) // true
  isReact.component(header); // false
  isReact.element(header); // true
  isReact.DOMTypeElement(header) // true
  isReact.compositeTypeElement(header) // false
});

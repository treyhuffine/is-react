# Is React

![Is React?](is-react.png)

A library to determine if a variable or a statement is a React element or component.
This article [article](https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html) describing elements and components and this [article](https://facebook.github.io/react/docs/jsx-in-depth.html)
for an understanding of JSX syntax.

## Install

`yarn add is-react` or `npm i --save is-react` to use the package.

## Examples

Real world:
```
import React from 'react';
import isReact from 'isReact';

const MyImageComponent = ({ SomeProp }) => {
    if (typeof SomeProp === 'string') {
        // assume it's the src for an image
        return <img src={ SomeProp } />
    } else if (isReact.component(SomeProp)) {
        return <SomeProp />;
    } else if (isReact.element(SomeProp)) {
        return SomeProp;
    }

    return null;
}
```
______________________

Samples:
```

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

// Check
isReact.compatible(Foo) // true
isReact.component(Foo); // true
isReact.classComponent(Foo); // true
isReact.functionComponent(Foo); // false
isReact.element(Foo); // false

isReact.compatible(<Foo />) // true
isReact.component(<Foo />) // false
isReact.element(<Foo />) // true
isReact.DOMTypeElement(<Foo />) // false
isReact.compositeTypeElement(<Foo />) // true

isReact.compatible(Bar) // true
isReact.component(Bar); // true
isReact.classComponent(Bar); // false
isReact.functionComponent(Bar); // true
isReact.element(Bar); // false

isReact.compatible(<Bar />) // true
isReact.component(<Bar />) // false
isReact.element(<Bar />) // true
isReact.DOMTypeElement(<Bar />) // false
isReact.compositeTypeElement(<Bar />) // true

isReact.compatible(header) // true
isReact.component(header); // false
isReact.element(header); // true
isReact.DOMTypeElement(header) // true
isReact.compositeTypeElement(header) // false
```

## API
`import isReact from 'is-react'` to use the package

All functions return a `boolean`. The primary functions you will most likely
use are `compatible()`, `element()`, and `component()`.

#### `isReact.compatible()`

Determine if a variable or statement is compatible with React. Valid React
components and elements return `true`.

#### `isReact.element()`

Determine if a variable or statement is a React element. Will return `true`
for both DOM type and Composite type components.

#### `isReact.component()`

Determine if a variable or statement is a React component. Will return `true`
for both functional and class components.

#### `isReact.classComponent()`

Determine if a variable or statement is a React class component.

#### `isReact.functionComponent()`

Determine if a variable or statement is a React functional component.

#### `isReact.DOMTypeElement()`

Determine if a variable or statement is a React DOM type element.

#### `isReact.compositeTypeElement()`

Determine if a variable or statement is a React Composite type element.

## Thanks!

Inspired by this Stackoverflow [answer](http://stackoverflow.com/a/41658173)

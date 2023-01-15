## Topics:

* React Reconciliation: render(), diff algorithm
* JSX
* React.createElement vs JSX
* Benefits of JSX
* Behind the Scenes of JSX
* Babel & parcel role in JSX
* Components
* Functional Components
* Composing Components

## Notes:

### How `JSX` Works Behind The Scene ?

> React.createElement() --> Object --> HTML(DOM) (This whole process is done my react) <br>
> JSX --> React.createElement() ( This is done by Babel )

> JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript code. When your
> code is transpiled (converted) from JSX to regular JavaScript, the JSX is transformed into regular JavaScript function
> calls. <br><br>
> For example, consider the following JSX code:
> ```javascript
> <div className="container"> 
>   <h1>Hello, world!</h1>
>   <p>I am a paragraph.</p>
> </div>
> ```
> This JSX code will be transpiled by `Babel` into the following JavaScript code:
> ```javascript 
> React.createElement(
>    "div", {className: "container"},
>    React.createElement("h1", null, "Hello, world!"),
>    React.createElement("p", null, "I am a paragraph.")
> );
> ```
> As you can see, the `JSX` code is transformed into calls to the `React.createElement` function, which is used to
> create
> `React elements`. Each JSX element is transpiled into a call to React.createElement, and the
> attributes and children of the element are passed as arguments to the function.
> This transformation happens automatically when you use a tool like `Babel to transpile your JSX code into regular
> JavaScript`.

### React Components, How To Create Component?

> In React, a component is a piece of code that represents a part of a user interface. Components can be either
> __functional or class-based__, and they can be reused throughout an application to help make it more __modular and
> maintainable__.Here's an example of how you might create a simple `functional component` in React:
> ```javascript
> const MyComponent = (props) => {
>    return (
>        <div>
>            <h1>Hello, {props.name}!</h1>
>            <p>Welcome to my component.</p>
>        </div>);
> }
> export default MyComponent;
> ```
> To use this component in another part of your app, you would need to import it and then render it using JSX:
> ```javascript
> import React from 'react';
> import MyComponent from './MyComponent';
> 
> function App() {
>    return (
>        <div>
>           <MyComponent name="John"/>
>        </div>);
> }
> ```
> This would render a heading that says "Hello, John!" and a paragraph that says "Welcome to my component."
> `Class-based components` work in a similar way, but instead of using a function to define the component, you define a
> class with a __render()__ method that returns the JSX for the component:
> ```javascript
> class MyComponent extends React.Component {
>    render() {
>        return (<div>
>                <h1>Hello, {this.props.name}!</h1>
>                <p>Welcome to my component.</p>
>            </div>
>        );
>    }
> }
> 
> export default MyComponent;
> ```

### Component composition:

> If we use a component inside another component then it is called Component Composition.

```javascript
// Function Component
const Title = () => (
    <img
        className="logo"
        alt="logo"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
        style={{width: "60px", height: "70px"}} // inline-styling  in React
    ></img>
);

// Composing Components
const HeaderComponent = () => {
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
```

## Assignment:

### 1. What is JSX ?

> `JSX`(JavaScript XML) is a syntax extension for JavaScript that allows developers to write __HTML-like code__ in their
> JavaScript files. It was developed by Facebook as a way to make it easier for developers to build user interfaces (UI)
> using React, a JavaScript library for building user interfaces. <br/> <br/>
> `JSX looks similar to HTML, but it is not HTML`. It is a syntax extension for JavaScript, which means that it gets
> compiled into regular JavaScript code by a transpiler (e.g., Babel) before it is executed in the browser.
> Here's an example of a simple JSX element:
> ```javascript
> const element = <h1>Hello, world!</h1>;
> ```
> This JSX element is equivalent to the following JavaScript code:
> ```javascript 
> const element = React.createElement('h1', null, 'Hello, world!');
> ```
> JSX elements can be nested, just like HTML elements:
> ```javascript 
> const element = (
>   <div>
>       <h1>Hello, world!</h1>
>       <p>This is a paragraph.</p>
>   </div>
> );
> ```
> JSX elements can also include JavaScript expressions, using curly braces:
> ```javascript 
>   const name = 'John';
>   const element = <h1>Hello, {name}!</h1>;
> ```
> **Must read reference**: (as there are many details covered
> like `Embedding Expressions in JSX`, `JSX Prevents Injection Attacks`, `JSX is an Expression Too` etc) <br/>
> https://reactjs.org/docs/introducing-jsx.html

### 2. Superpowers of JSX!

> * `Easy to create React Elements`: JSX provides a syntax for writing HTML-like code in your JavaScript
    files, which in-turn transpiled into React.createElement() calls.
> * `Easier to read and write`: JSX is more concise and easier to read than the equivalent calls to React.createElement,
    which makes it easier to understand the structure of your React components.
> * `Support for JSX expressions`: You can use JSX expressions to embed JavaScript values in your JSX code, which can be
    useful for rendering dynamic content.
> * `Improved performance`: JSX can be optimized by the React runtime for better performance in some cases.
> * `Type checking`: JSX supports type checking with tools like TypeScript and Flow, which can help catch errors and
    improve the overall quality of your code.

### 3. Role of `type` attribute in `script` tag? What options can | use there?

> The `type` attribute in a script tag specifies the type of script that is being included in the HTML document. The
> value of the type attribute should be a valid MIME type for a script.
> Here are some common values for the type attribute:
> * `text/javascript`: This is the default value for the type attribute if it is not specified. It indicates that the
    script is written in JavaScript.
> * `module`: This value indicates that the script is a JavaScript module, which is a file that exports one or more
    JavaScript values and can be imported by other scripts using the import statement.
> * `text/ecmascript`: This value indicates that the script is written in ECMAScript, which is a standardized version of
    JavaScript.
> * `text/babel`: This value indicates that the script is written in a dialect of JavaScript that needs to be transpiled
    by the Babel transpiler.
> * `text/typescript`: This value indicates that the script is written in TypeScript, which is a superset of JavaScript
    that adds type annotations and other features.<br/> <br/>It is generally recommended to include the type attribute
    in your script tags to specify the type of script being included, as this can help the browser parse and execute the
    script correctly.

### 4. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX

> In JSX, curly braces { } are used to embed expressions or variables within the JSX code. The curly braces are used to
> evaluate the expression or variable and include its value in the resulting JSX element. <br/><br/>
> Here are some examples of how curly braces are used in JSX: <br/>
>
> `{TitleComponent}`: If we assume that TitleComponent is function component, then we included nothing but a function in
> the JSX. So, we will get below warning in the console.
> ```text
> Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. 
> Or maybe you meant to call this function rather than return it.
> ```
>
> `{<TitleComponent />}`: This syntax is used when we want to include TitleComponent in another component which is
> called component composition. Note that we can __omit curly braces__. Also, `{<TitleComponent></TitleComponent>}` is
> just longer version of `{<TitleComponent />}` <br/>
> So, `{<TitleComponent></TitleComponent>}` <=> `{<TitleComponent />}`  <=> `<TitleComponent />`

## References:

* React Reconciliation: render(), diffing algorithm: https://reactjs.org/docs/reconciliation.html
* Babel: https://babeljs.io/
* Attribute Type: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type
* JS Modules: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
* Babel Playground: https://babeljs.io/repl#
* React without JSX: https://reactjs.org/docs/react-without-jsx.html

## Coding Assignment:

1. Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
    * Create the same element using JSX
    * Create a functional component of the same with JSX
    * Pass attributes into the tag in JSX
    * Composition of Component(Add a component inside another)
    * `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX

2. Create a Header Component from scratch using Functional Components with JSX
    * Add a Logo on left
    * Adda search bar in middle
    * Add User icon on right
    * Add CSS to make it look nice

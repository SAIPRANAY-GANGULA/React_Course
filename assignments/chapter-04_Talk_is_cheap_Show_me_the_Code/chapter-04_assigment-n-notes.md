### 1. Is JSX mandatory for React?

> The `JSX` code is transformed into calls of the `React.createElement` function, which is used to create
> `React elements`. Each JSX element is transpiled into a call to React.createElement, and the
> attributes and children of the element are passed as arguments to the
> function. `React.createElement(component, props, ...children)`.
> This transformation happens automatically when you use a tool like `Babel to transpile your JSX code into regular
> JavaScript`. <br> <br>
> So, `JSX` is not a requirement for using React. Each JSX element is just syntactic sugar for
> calling `React.createElement(component, props, ...children)`. So, anything you can do with JSX can also be done with
> just plain JavaScript.

Reference: https://reactjs.org/docs/react-without-jsx.html

### 2. Is ES6 mandatory for React?

> ES6 is `not mandatory` for using React, but it's highly recommended to use ES6.
> Currently, a lot of React projects use ES6 features in React ecosystem, so it's better to have knowledge on ES6
> features like modules, destructuring, spread operator, template literals, classes, map, filter and reduce array
> methods. But, if you want to know how to react code in ES5 checkout below reference.

Reference: https://reactjs.org/docs/react-without-es6.html

### 3. How can I write comment in JSX?

> Comments are written like in any another javascript code. In javascript, we use `//` to comment a single line
> and `/*  */` to comment multiple lines.
> Similarly, in jsx we enclose js code inside {} and hence comments are also enclosed within { }.
> ```jsx
> const HeaderComponent = () => {
>    return (
>        <div className="header">
>            {
>                // Single Line Comment
>                /*
>                 *
>                 * Multi 
>                 * Line 
>                 * Comment
>                 * 
>                 */
>            }
>        </div>
>    )
> }
> ```

### 4. What is <React.Fragment></React.Fragment> and <></>?

> Your below `jsx` code get transformed
> ```jsx
> class App extends React.Component {
>    render() {
>        return (
>            <div>
>                <h1>Welcome to React</h1>
>            </div>
>        );
>    }
>}
> ```
> into this
> ```jsx
> _createClass(App, [{
>    key: 'render',
>    value: function render() {
>        return React.createElement(
>            'div',
>            null,
>            React.createElement(
>                'h1',
>                null,
>                'Welcome to React'
>            )
>        );
>    }
> }]);
> ```
> But if you do this
> ```text
> class App extends React.Component {
>    render() {
>        return (
>            <h1>Welcome to React</h1>
>            <div>Hi</div>
>        );
>    }
> }
> ```
> this gets converted into this (Just for illustration purpose, actually you will
> get `error : Adjacent JSX elements must
> be wrapped in an enclosing tag`)
> ```jsx
> _createClass(App, [{
>    key: 'render',
>    value: function render() {
>        return React.createElement(
>            'div',
>            null,
>            'Hi'
>        );
>        return React.createElement(
>            'h1',
>            null,
>            'Welcome to React'
>        )
>    }
> }]);
> ```
> In the above code you can see that you are trying to return twice from a method call, which is obviously wrong.
> <br><br>
> If you do not want to add extra div to wrap around and want to return more than one child components you can go with
`React.Fragments`.
> <br><br>
> `React.Fragments` (`<React.Fragments>`) are little faster and has less memory usage (no need to create an extra DOM
> node, less cluttered DOM tree).
> <br><br>
> So, using React.Fragment below code is converted
> ```jsx
> class App extends React.Component {
>     render() {
>        return (
>            <>
>                <h1>Welcome to React</h1>
>                <div>Hi</div>
>            </>
>        );
>    }
> }
> ```
> into this
> ```jsx
> class App extends React.Component {
>     render() {
>        return /*#__PURE__*/ React.createElement(
>            React.Fragment,
>            null,
>            /*#__PURE__*/ React.createElement("h1", null, "Welcome to React"),
>            /*#__PURE__*/ React.createElement("div", null, "Hi")
>        );
>    }
> }
> ```

### 5. What is Virtual DOM?

> The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory
> and synced with the “real” DOM by a library such as ReactDOM. This process is
> called [reconciliation](https://reactjs.org/docs/reconciliation.html).
> <br><br>
> This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes
> sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM
> updating that you would otherwise have to use to build your app.
> <br><br>
> Since “virtual DOM” is more of a pattern than a specific technology, people sometimes say it to mean different things.
> In React world, the term “virtual DOM” is usually associated with React elements since they are the objects
> representing
> the user interface. React, however, also uses internal objects called “fibers” to hold additional information about
> the component tree. They may also be considered a part of “virtual DOM” implementation in React.
> <br><br>
> Reference: https://reactjs.org/docs/faq-internals.html

### 6. What is Reconciliation in react?

> React uses diffing algorithm to diff one tree (actually dom) from another which determines what needs to be updated
> and only re-renders the diff.
> <br><br>
> In React, we pass props to a component, when any of the prop changes, a reconciliation process is triggered internally
> by react which traverses the whole component hierarchy to mark any changes required in the given component at a time.
> <br><br>
> Reconciler vs Renderer => Reconciler does the work of computing which parts of the tree have changed. Renderer uses
> this info to actually update the rendered app.
> <br><br>
> Read More: https://reactjs.org/docs/reconciliation.html

### 7. What is React Fibre?

> React Fiber is the new reconciliation engine in React 16. The goal of React Fiber is to increase its suitability for
> areas like `animation, layout, and gestures`. Its headline feature is `incremental rendering`: the ability to split
> rendering work into chunks and spread it out over multiple frames.
> <br><br>
> Read More: https://github.com/acdlite/react-fiber-architecture
>

### 8. Why do we need `key` in react? When do we need `key` in react?

> Key is used to uniquely identify our react elements so that the reconciliation can easily find the new added element
> and only re-render that elements instead of re-rendering all the similar elements.
> <br>
> We need Key in react when we have multiple elements of same html tag.
> <br><br>
> Read more: https://reactjs.org/docs/lists-and-keys.html

### 9. Can we use index as key in react?

> A key is the only thing React uses to identify DOM elements. It is not recommend to use indexes for keys if the order
> of items may change. This can negatively impact performance and may cause issues with component state.
> <br><br>
> But, nothing is better than anything. If we don't give a key, react by default assign id of that list item as it's
> key.
> <br><br>
> NO key << INDEX as key <<<<<< Unique id as key from data
> <br><br>
> Read More about index as key: https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/
> <br>
> Read More about why key is neccessary for
> performace : https://reactjs.org/docs/reconciliation.html#recursing-on-children

### 10. What is props in react?

> `Props (properties)` passed in Component are similar to the arguments passed in a js function call and received by
> that function as parameters.
> <br><br>
> Every parent component can pass some information to its child components by giving them props. Props are similar to
> HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.
> <br><br>
> Types of Props :
>- Familar Props - HTML attributes like className, src, width, height passed in HTML <img> tag
>- Passing Props to Component - props are the only argument to your component. React component functions accept a single
   argument, a props object.
>
> | Ways to pass props to component                                   |                   Ways to receive the props in another component                   | 
> |-------------------------------------------------------------------|:----------------------------------------------------------------------------------:| 
> | 1. Add props to the JSX, just like you would with HTML attributes |                   All props are sent into a single props object                    | 
> | ```<Profile name = { "Harshi"} age={28}   />```                   | ``` const Profile = (props) => { let name = props.name; let age = props.age; } ``` |  
> | 2.   Similar to the way mentioned in 1.                           |     Props object can be destructed using {} to receive only the required props     | 
> | ```<Profile name = { "Harshi"} age={28}   />```                   |                    ``` const Profile = ({name, age}) => { } ```                    | 
> | 3. Using spread syntax                                            |                       And props objects destructed using {}                        |
> | ```<Profile {...props}   />```                                    |                    ``` const Profile = ({name, age}) => { } ```                    |

### 11. What is config driven UI?

> Config-driven UI is one of the UI design pattern in which the UI is rendered based on the configuration parameter sent
> by the server (backend). This is one of the popular pattern used in the industry now.

## Notes

### Inline styling on JSX

> ```jsx
> const HeaderComponent = () => {
>    return (
>      <div className="header" 
>        style={{ backgroundColor: red, textDecoration: none }}
>      >
>      </div>
>    )
> }
> ```
> Note that css properties are written in camel-case (backgroundColor)
>

### Can we include `React.Fragment` inside another `React.Fragment`?

> Yes!
> ```jsx
> const jsx =   (
>      <>
>        <div className="header" ></div>
>        <h1></h1>
>        <>
>          <h1></h1>
>        </>
>        <h2></h2>
>      </>
> )
> ```





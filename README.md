# React

- **Notes-**
  - [CodeWithHarry](my-todos) 

## React <font size=1>by Mosh Hamedani</font>

## What is React

- JS library
- Component based architecture
- Have atleast one component - **App(root)**

- **Component-**

  - is the heart, a piece of UI.
  - Independent, Isolated & Reusable.
  - Implemented as JS class.
  - **Contains-**
    1. **State-** data
    2. **Render-** Describe how the UI looks, output is react Element.

- **React Element-** simple, plan, JS object that maps to DOM Element.
- **React Element (Virtual DOM)-** React keeps light weight representation of dom in memory.

- **DOM Element (Real DOM)-**
  When state change we get new react element. React compares this element & childrens with the previous one, it checks what is changed then update the part of real dom.

- **React-** reacts to state changes.

## First React App

- install create-react-app `npm i create-react-app`

- create react app `npx create-react-app react-app-name`

  - **This installs-**
    1. Development Server
    2. Webpack- hepls in bundling files
    3. Babel- helps in compiling js code
    4. Other tools

- install bootstrap `npm i bootstrap@4.1.1`

- Zero-Config-Setup

- for custom config use `npm run eject`

## First React Component

- use _jsx extension_ for better code completion.
- jsx expression must have a parent element.

## Specifying Children

- Some time we don't want extra div/element in that case we can use `<React.Fragment> <React.Fragment>`

## Embedding Expressions

- For rendering element dynamically use `{ }`

- We can pass any valid js expression in it like-  
  `{ this.state.variableName }`  
  `{ 2 + 2 }`  
  `{ this.functionName() }`

## Setting Attributes

Normally like-  
`scr = ""` or `scr = { }`  
`className = ""`  
`style = {}` or this for inline `style = { {} }`

## Rendering Lists

> React/JSX is not having the concept like loops because JSX is not a templating engine, it's just a simple syntax that eventually get compile to react elements.

Use `map()` function for rendering list.

Each child in an array or interator should have a unique **key**.

> React need to uniquely identify list item because if the state in virtual dom changes, react need to quickly figure out what element got changes and where in the real dom need to change to keep it in sync.

## Conditional Rendering

In JSX we don't have if & else.

### Ways for conditional rendering-

1. **Use Seperate Method**

   ```js
   renderTags() {
       if (true) return <p>True</p>;
       return <p>False</p>;
   }

   render() {
       return (
           <div>{ this.renderTags() }</div>
       );
   }
   ```

2. **Something like a single if statement**

   ```js
   render() {
       return (
           <div>
           { true && "Print" }
           </div>
           );
   }
   // ouput -> Print
   // returns the last statement
   // if -> true && "Hi" && 1
   // returns -> 1
   // condition && JSX Expression
   ```

## Handling Events

All react element has properties based on standard dom elements e.g., onClick, onKey ,etc.

- calling method - `{ this.function() }`

- passing reference - `{ this.function }`

## Binding Event Handlers

```js
    handleIncrement() {
        console.log(this);
    }
    // Does not have access to "this"
    // js behave differently from others languages.
    // Depending on how the function is called, this can reference to different objects.
    // if called like " obj.method(); " , then "this" will reference to that object.
    // if called like " function(); " , then "this" bydefault return reference to the windows object. if strict mode is enabled then returns "undefined"
```

- **Solution-**

1. **bind method-**

   ```js
       constructor() {
           super();
           this.handleIncrement = this.handleIncrement.bind(this);
           // This bind method will return new instance of handleIncrement function and in it "this" will always references the current object.
       }

       handleIncrement() {
           console.log(this);
       }
   ```

2. **Arrow function (Simple one)-**

   Convert the function into an arrow function.

   ```js
   handleIncrement = () => {
     console.log(this);
   };
   // Arrow functions don't rebind the this keyword, they inherit.
   ```

## Updating the State

In React, we can't modify the state directly like `this.state.count++;` , because its value got update but react is not aware of that.

To solve this, we have to use the **setState** method which is inherited from the base Component like `this.setState( {count: this.state.count + 1})`.

> In Angular, we don't have to do this, its automatically detects the changes because in it all browsers events are monkey patched.

## What Happens When State Changes

When we click increment button, the setState function will be called and tell react that the state of component is going to change, then react will schedule a call to render method (some time in future it will be called) async, then it compare new virtual dom & old virtual dom, and checks which elements got modified & it update only the changed element.

## Passing Arguments with Events

Can't do like this `onClick = { this.handleIncrement(1) }`

Solution use arrow function like `onClick = { () => this.handleIncrement(product) }`

## Passing Data to Components

We can pass data to component by specifing attributes in the element.

Every react component has a property called **props**, which is a plan js object that includes all the attributes that we passed to it.

Like `<Counter key={counter.id} value={counter.value} selected={true}>`

> key is not the part of props because this is the special attribute for uniquely indentification of elements.

## Passing Children

We have special prop called **children**, we use it when we have to pass something between the opening & closing tag of an element.

**E.g.,** using dialogue boxes.

```js
    // Parent Component
    return (
        <Counter>
            <h4>Title</h4>
        </Counter>
    );

    // Child Component
    return (
        {this.props.children}
    );
```

> Use when we want to pass complex element to a child component.

## Debugging React Apps

- React Developer Tools Extension

$r -> We can work with the instance of any component of our page.

Like $r, $r.render(), etc.

Also,  
$0 -> In Default developer tools, works similar to the above.

## Props vs State

- **Props-** Includes data which we give to a component.
- **State-** Includes data which is local/private to that component. Other component can't access it.

> Props are read only.

## Raising and Handling Events

> The component that owns a piece of the state, should be the one modifying it.

**Raising-** like onClick()  
**Handling-** using function

## Single Source of Truth

If we are maintaining local as well as root/parent level of state/attributes then there might be problem when local & parent level attributes are having different values.  
To solve this, remove the local source and make a single source of truth at the parent level.

## Removing the Local State

- **Controlled component-** it doesn't have its own local state, it receive all the data via props (through parent) and raise events whenever data need to be change. So, this component is enterally controlled by its parent.

## Multiple Components in Sync

> When there is no parent-child relationship between two components and we want to keep them in sync (share data between them), we need to lift the state up means move the state to the parent component & can share using props.

## Stateless Functional Components

> When we only have single render method & doesn't have eventhandlers/helpermethods/state. We can use stateless function instead of class.
>
> We have to pass props as a parameter, when we need props attributes.
>
> We can't use lifecycle hooks in it.

## Lifecycle Hooks

Component goes through few phase during the lifecycle.

- **Phases-**
  1. Mount
  2. Update
  3. Unmount

### 1. Mounting Phase

This is when an instance of component is created and inserted into the dom.

There are few methods which we can add to our components and react will automatically calls this methods, these methods are refers to as a **lifecycle hooks**.

They allow us to hook into certain movement during the lifecycle of a component and do something.

- **Hooks available (Ordered)-**

1. **contructor-** called only once when instance of a class is created.

   We can use it to intialize states.  
   We can't call setState() method here, because it can only be called when a component is rendered and placed in the dom.

   > We won't be have access to this.props unless we pass it as a parameter to the constructor & to the base class.

2. **render-** the component is rendered, which basically returns a react element which represent our virtual dom.

   > When a component is rendered all its children got rendered recursively.

3. **componentDidMount-** is called after a component is rendered into the real dom.
   > Perfect place for ajax calls, to get data from the server.

**E.g.,**

```text
 App - Constructed
 App - Rendered
 NavBar - Rendered
 Counters - Rendered
 Counter - Rendered
 App - Mounted
```

### 2. Updating Phase

This happens when state/props of a component get changed.

- **Hooks available (Ordered)-**

1. **render**
2. **componentDidUpdate-**
   This is called after a component is updated which means we have new state/props.

   We can compare new state with the old state here. Also, can make ajax call.

### 3. Unmounting Phase

This is when a component is removed from the dom like deleting a counter.

- **Hooks available-**

1. **componentWillUnmount-** is called just before a component is removed from the dom.

   > We can do any kind of cleanUp here.

> These are the most frequently used hooks.
>
> If we want to use lifecycle hooks then we only have to use class component.

---

#### Sources

- **Videos-**
  - [React JS - React Tutorial for Beginners](https://www.youtube.com/watch?v=Ke90Tje7VS0) _By Mosh Hamedani_
- **Some Links-**
  - [Babel](https://babeljs.io/repl)

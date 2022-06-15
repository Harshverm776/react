# React <font size=1>by CodeWithHarry</font>

- Single page application

- **JSX-**

  - JavaScript Syntax Extension / JavaScript XML
  - HTML with some change in which we can write JS & HTML

- **npx-** Doesn't installs the packages locally.

- In JSX-
  |HTML|JSX|
  |------|----------|
  |for | htmlFor |
  |class | className|

- **Type of Component-**
  1. Class component
  2. Functional component

If want to use bootstrap with react & want to make highly reactive/optimized app, then use -
https://react-bootstrap.github.io/

- **defaultProps-** are use to give default values to the props arguement

- **propTypes-** use for type checking for components

## useState Hook

- useState is use for allowing state variables in functional component
- similar to setState

```js
const [todos, setTodos] = useState([
  {
    sno: 1,
    title: "title1",
    desc: "desc1",
  },
  {
    sno: 2,
    title: "title2",
    desc: "desc2",
  },
]);
// todos - variable
// setTodos - function for updating it
```

## useEffect Hook

- lets us perform side effects in function components.

- similar to the combination of componentDidMount, componentDidUpdate, and componentWillUnmount

```js
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
// runs the statement whenever todos change
```

## React Router

- is the standard routing library

- install react-router-dom `npm install react-router-dom`

```js
<Router>
  <div>
    <nav></nav>
    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
    </Switch>
  </div>
</Router>
```

_Also Remeber,_  
a -> Link  
href -> to

### Sources

- **Videos-**

  - [React Tutorial in Hindi](https://www.youtube.com/watch?v=RGKi6LSPDLU&list=WL&index=3) _By CodeWithHarry_

- **Some Links-**
  - [React Docs](https://reactjs.org/docs/getting-started.html)

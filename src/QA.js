export const qadata = [
  {
    id: "async",
    heading: "async await",
    answer: `Async await is nothing but an easier implementation for promises,
        we can use async await much more easily. 
       We can code asynchronous code like synchronous code.
        We just need to wrap async to the function that is using await inside and when we encounter any async code we just need to prefix that with await. Which stops code execution at that point and continues like synchronous coding.`,
  },
  {
    id: "arrow",
    heading: "Arrow Functions",
    answer: `Arrow functions are a shorthand syntax for writing JavaScript functions. They were introduced in ES6. 
    They are easy to implement and don't have any bindings.
`,
  },
  {
    id: "authentication",
    heading: "Authentication",
    answer: `Once a user gets authenticated either from login or from SSO. we gets a JWT token from the backend 
    Then we set the headers in axios with the JWT for authentication.
    So from next time the API requests will have the token for authentications.
    we use axios interceptors, so if token expires and backend sends 401 response we can logout the user.
`,
  },
  {
    id: "box",
    heading: "BOX Model",
    answer: `In CSS it considers all html elements as a rectangular box,
    the box have height and width 
   a box consists of Content, Padding ,Border, Margin
`,
  },
  {
    id: "block",
    heading: "Block vs Inline",
    answer: `A Block element is an element that occupies an entire row in a webpage irrespective of the content.
    So a new element can only come below the block element.
    Ex : div tag and heading tags.
   An inline element is an element in HTML that only occupies the content space and won't block the entire row, 
   so other inline elements can come side by side on UI.
    Ex : <span> tag and anchor tags.
   
`,
  },
  {
    id: "Callbacks",
    heading: "Callbacks",
    answer: `A callback function is a function that is passed as an argument to another function, and is then called by that function at a later time. Callback functions are a way to write asynchronous code in JavaScript, and are commonly used with functions that take some time to complet
`,
  },
  {
    id: "Callback hell",
    heading: "Callback hell",
    answer: `Callback hell is a common problem in JavaScript, that occurs when you have multiple nested levels of callbacks, making the code difficult to read and maintain.
    It is advised to use promises or async await to deal with async code.    
`,
  },
  {
    id: "Call apply bind",
    heading: "Call apply bind",
    answer: `call, apply, and bind methods are used to set the <b>this</b> keyword of a function, and optionally pass arguments to the function.
    The call and apply methods are used to call a function with a specified <b>this </b>value
    Call have second parameter as the list of arguments
    Apply have second parameter as an array
    
    The bind method is used to create a new function with a specified this value
    
`,
  },
  {
    id: "centerdiv",
    heading: "Center A Div",
    answer: `There are few ways to center a div, but i prefer centering a div using flexbox with properties justify content center and align items center. 
    There are also other ways like setting margin: auto or adjust the absolute positioning.    
`,
  },
  {
    id: "class",
    heading: "Class",
    answer: `Classes are nothing but blueprints of objects. We declare classes with keyword class. When using an instance class we need to declare with the new keyword to create the objects.
`,
  },
  {
    id: "closure",
    heading: "closure",
    answer: `a closure is a function that has access to variables in its outer (enclosing) scope, even after the outer function has returned. In other words, a closure allows a function to "remember" the environment in which it was created.
`,
  },
  {
    id: "component",
    heading: "Components",
    answer: `Components in react are the building blocks of the application. Components are reusable and we can merge components to create large components. There are 2 types of components in reactjs 
<ul>
<li>functional components</li>
<li>Class components  </>
</ul>
    
`,
  },
  {
    id: "controlled",
    heading: "Controlled component",
    answer: `A controlled component means that the input values are mapped to state, 
    so when the user updates the input, it updates the state and in turn updates the components. Hence controlled component.<br/>
    
    An uncontrolled component means we use refs instead of state to gather the input data. There is no control over the ui and state change. Hence controlled components.    
`,
  },
  {
    id: "Dom",
    heading: "Dom",
    answer: `The Document Object Model (DOM) is a programming interface for HTML.
    It represents the page so that programs can change the document structure, style, and content   
`,
  },
  {
    id: "ES6",
    heading: "ES6 Features",
    answer: `Some of the ES6 features are 
    Let and const <br/>
    Arrow functions <br/>
    Spread operator (...) <br/>
    Classes <br/>
    Promises <br/>
    Async Await <br/>
`,
  },
  {
    id: "Event",
    heading: "Event",
    answer: `events are actions or occurrences that happen in the browser, such as a user clicking a button. 
    We can detect the events by attaching event listeners to the DOM like onClick, onChange and implement the required logics.
     When an event gets triggered by the respective actions the event listener will execute the logic.    
`,
  },
  {
    id: "Event Loop",
    heading: "Event Loop",
    answer: `The event loop is a concept in JavaScript that determines how code is executed in a non-blocking and asynchronous environment.
    It is the mechanism that enables JavaScript to handle input output operations and respond to user interactions without freezing the browser 
   
   The event loop is a continuous loop that checks the call stack and the message queue to determine what code needs to be executed next.    When the call stack is empty, the event loop looks for tasks in the message queue and pushes them to the call stack to be executed.
    Once the task is completed, the call stack is popped, and the event loop repeats the cycle.
   
`,
  },
  {
    id: "Functional",
    heading: "Functional vs class components",
    answer: `Functional components are simple compared to class components.
    In functional components we use react hooks to manage the state of the component.
   Whereas in class components we need to use this.state and life cycle methods to manage the state of the application. 
   <br/>I would prefer using functional components instead of class components, as they are much easier to understand and debug.
   Especially with useEffect we can manage all the life cycle methods.
`,
  },
  {
    id: "Flexbox",
    heading: "Flexbox",
    answer: `Flexbox is css design to create a flexible layout to arrange and distribute items within a container, regardless of their size or order
    We need to make a parent elements display property as flex to create flexbox and all the child elements now can be adjusted as per our choice using flexbox rules like justify content , flexdirection, alignitems
    
`,
  },
  {
    id: "HOC",
    heading: "Higher Order components",
    answer: `A higher order component is a function that takes a component as an argument and returns a new component with some enhanced features.
    We generally use higher order components to wrap other components if any common extra features like styling or authentications are needed.
    .
`,
  },
  {
    id: "hoisting",
    heading: "Hoisting",
    answer: `Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their respective scopes. 
    Var is hoisted meanwhile let and const are not hoisted to the top. 
    Hence it's a good practice to declare all your variables at the top to avoid any confusion .
    
`,
  },
  {
    id: "jsx",
    heading: "jsx",
    answer: `In react we use JSX instead of html,
    jsx is nothing but the syntactic sugar for React.createElement() method. react convert jsx to html behind the screen by using render method in index.js file
    
`,
  },
  {
    id: "lazyloading",
    heading: "Lazy Loading",
    answer: `Lazy loading is a technique used in web development for loading of non-critical resources until they are actually needed. 
    This can improve the performance of web pages by reducing the amount of data that needs to be downloaded and processed on the initial page load.
    In React we can use React.lazy method to load js files when needed on UI
    `,
  },
  {
    id: "Life Cycle methods",
    heading: "Life Cycle Methods",
    answer: `In react JS we have 4 important life cycle methods, that involved mounting, updating , unmounting
   <br/> The first stage is componentDidMount  , this happens when a component is loaded on to the UI . we can use this method to make any computation or api calls to display data when UI is loaded
   <br/>The second stage is shouldComponentUpdate, this method returns true or false. If true the component will re-render. This method has parameters of nextState and nextProps. So that we can compare them with the current state or props. To proceed with re-render or not.
   <br/>The third stage is componentDidUpdate, this method is triggered once component is updated, we can use this method to load any data from backend based on the props and state updated.
   <br/>The last stage is componentWillUnmount, this method is triggered when the component is getting removed from the UI. We can use this to clean the timers or subscriptions.
   <br/>Alternatively, We can simply use useEffect to maintain all these life cycle methods in functional components.
     `,
  },
  {
    id: "let/var/const",
    heading: "var/let/const",
    answer: `var and let are both used to declare variables, but they have some differences in their behavior and scope.
    Var is function-scoped, while let and const are block scoped means they are only visible within the blocks like loops, let/const are ES6 features
     `,
  },
  {
    id: "map",
    heading: "map",
    answer: `map method creates a new array by performing a specified operation on each element of an existing array. It takes a callback function as its argument, which is executed once for each element in the array. The callback function should return a new value for the current element, which is then added to the new array`,
  },
  {
    id: "filter",
    heading: "filter",
    answer: `The filter() method creates a new array that contains only the elements of an existing array that meet a specified condition. It also takes a callback function as its argument, which is executed once for each element in the array. The callback function should return a boolean value indicating whether or not the current element should be included in the new array`,
  },
  {
    id: "reduce",
    heading: "reduce",
    answer: `IThe reduce() method applies a specified function to the elements of an array and returns a single value. It takes a callback function as its argument, which is executed once for each element in the array. The callback function should take two arguments: an accumulator (which is the value returned by the previous iteration of the function) and the current element in the array. The callback function should return a new value for the accumulator, which is then passed to the next iteration of the function`,
  },
  {
    id: "statemanage",
    heading: "state mangement in react",
    answer: `In React we can use useState to set the state and then we can update the state with setState methods, in class components we can use this.state and this.setState to manage the state. When state changes, it will trigger a re-render of the UI component
    `,
  },
  {
    id: "oops",
    heading: "oops",
    answer: `object oriented programming we have concepts like Inheritance, encapsulation, abstraction and polymorphism. 
    Inheritance means inheriting parents properties and methods but extending the parent class
    Encapsulation means encapsulating properties and methods in a class.
    `,
  },
  {
    id: "purecomponetn",
    heading: "Pure Component",
    answer: `A pure component in React is a component that only renders based on its props and state.
    In React, pure components does a shallow comparison of the props and state, and only updates if they have changed.which can help improve performance by reducing the number of unnecessary re-renders. 
    Since a pure component only updates when its props or state change
    We use React.PureComponent  to create a pure component.
    `,
  },
  {
    id: "promise",
    heading: "Promise",
    answer: `Promises are used to represent a value that may not be available yet, but will be available in the future. Promises have two parameters, resolve and reject.We generally use promises to deal with async operations like fetching data with API calls, 
    we resolve if api is successful or reject if failed. 
    When using promises we use then if promise if successful and catch if promise is failed`,
  },
  {
    id: "props",
    heading: "Props",
    answer: `In React, Props is a shorthand for "properties" and is used to pass data from a parent component to a child component.
    Props are read-only and cannot be modified by the child component. Instead, the parent component can pass new props to the child component to trigger a re-render with updated data
   `,
  },
  {
    id: "Reference vs non-reference types",
    heading: "Reference vs non-reference types",
    answer: `By default all primitives like string, numbers, booleans are non-reference types.
    Data types like arrays, objects are reference types.
    They are stored in heap with a reference.
    When we assign a variable A to reference type the variable is only getting the reference. 
   So if we now assign the variable A to B and change the data in B it will change the A, as both are pointing to the same reference. 
   That is not the case with non-reference types
   `,
  },
  {
    id: "react",
    heading: "react",
    answer: `React is a JavaScript library for building user interfaces. With using react we can create complex user interfaces with ease.
    React uses features like Virtual Dom, JSX, oneway binding which makes application more efficient.
    `,
  },
  {
    id: "React Project Structure",
    heading: "React Project Structure",
    answer: `We can create react project npx create-react-app command
    In react project we have 
    <br/>Package.json -> it is a blueprint for our project, it contains details like app name, version, dependencies and scripts. 
    <br/>Package-lock.json: it is used to lock the dependencies versions used while development, so in future we can have the same libraries installed.
    <br/>Public folder: public folder consists of index.html and assets used in our application
    <br/>SRC folder: src folder is where our actual application code goes, in  src we have index.js file, which is the root of our application and react application renders from here.
    <br/>.gitignore: gitignore is used to ignore files or folders not needed to track with git, like node modules, env files.
    `,
  },
  {
    id: "redux",
    heading: "Redux",
    answer: `Redux is a state container to manage the state of a react application. The basic idea behind Redux is to centralize and manage the application's state in a predictable way. 
    The state is stored in the store, which can be updated only by dispatching actions. When an action is dispatched, it is sent to the Redux store, which then invokes a reducer function and updates the state, which is accessible to the entire application.
    `,
  },
  {
    id: "redux flow",
    heading: "redux flow",
    answer: `When a user interacts with ui and dispatches actions. 
    <br/>The action is dispatched to the Redux store.
    <br/>Then reducer updates the respective action with the given payload
    <br/>Then redux store stores and updates the new state
    <br/>Then store then updates the UI with new state
    `,
  },
  {
    id: "thunk",
    heading: "redux thunk",
    answer: `Redux Thunk is a middleware for Redux that allows you to write asynchronous logic that interacts with a Redux store. 
    It enables you to write action creators that return functions instead of objects, which can be useful for handling asynchronous operations such as API requests, data fetching
    `,
  },
  {
    id: "scope",
    heading: "scopes",
    answer: `the visibility of variables in the code logic. We have 3 scopes for variables.
    <br/>Global Scope (if we don't declare var or let or const)
    <br/>Local or Function Scope (var, let , const have local or functional scope)
    <br/>Block Scope (let and const have the block scope)
    `,
  },
  {
    id: "semantics",
    heading: "semantics",
    answer: `semantics refer to the way in which elements are used to convey meaning in a web page.
    Semantic HTML is the practice of using HTML elements to convey the structure and meaning of a web page, rather than just its appearance.
    It enhances the website's accessibility.
   `,
  },
  {
    id: "Shallow vs Deep Copy",
    heading: "Shallow vs Deep Copy",
    answer: `Shallow copy is just a copy of an object at a first level and if the object has multiple nestings we need to create copies at each level of nesting which is called deep copy. 
    If we don't create copies at each level , those levels are still be referenced to original object data, if we just do shallow copy
    `,
  },
  {
    id: "Testing",
    heading: "Testing",
    answer: `In our project we have a dedicated manual testing team so they take care of testing but I remember we can use libraries like JEST and Enzyme to write the test cases.`,
  },
  {
    id: "useState",
    heading: "useState",
    answer: `Use state is a react hook used to update state and rerender the react components. This is an alternative to this.state in class components.
    `,
  },
  {
    id: "useEffect",
    heading: "useEffect",
    answer: `useEffect is a react hook for maintaining the life cycles of a react component. When there is a state or props change useEffect will get triggered. We can control the renrenders with the second parameter in useEffect which is an array.
    <br/>If we just want he mounting stage we can simply pass the empty array as the second argument
    <br/>If we want components to control re-render or  re-render when a particular prop or state changes, we can pass the respective props or state to the array.
    <br/>If we need to execute any logic while updating the state, we need to pass the array with the exact props or state we need to rerender.
    Unmounting can also be handled by adding return statement in the useEffect itself
    We can use multiple use effects in a component.
    `,
  },
  {
    id: "useRef",
    heading: "useRef",
    answer: `useRef is a react hook to attach any reference to the DOM and get the details about the dom node.from that we can apply shift focus to the dom element or change the colors.
    Apart from refs are also used to persist a state between re-render without.
    Refs don't trigger re-renders
    `,
  },
  {
    id: "useMemo",
    heading: "useMemo",
    answer: `useMemo is used to optimize the computations in code by  memorizing the state and props. Instead of triggering computations whenever component re-renders we can now only trigger them when the needed props or state changed.`,
  },
  {
    id: "useContext",
    heading: "useContext",
    answer: `useContext is a hook to manage state globally , it's an alternative to Redux but only ideal for smaller applications. We only use redux in our project`,
  },
  {
    id: "virtual Dom",
    heading: "virtual Dom",
    answer: `a virtual DOM is a representation of the actual DOM. When the state changes, React updates the virtual DOM, calculates the difference between the current and new virtual DOM, and updates the actual DOM with only the necessary changes. This approach is more efficient than updating the entire DOM, and can improve the performance of large, complex web applications. `,
  },
  // {
  //   id: "",
  //   heading: "",
  //   answer: ``,
  // },
];

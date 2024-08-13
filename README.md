# JavaScript and ES6 Feature - Day 1 (7th Aug '24)

## What is JavaScript?
+ JavaScript is a programming language that adds interactivity to your website.
+ JavaScript is a single threaded, synchronous programming language.
+ JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

## Variable Decleration
+ In *JavaScript*, variables can be declared using three keywords: var, let, and const. Each has its own characteristics and scope rules.
+ *var* - (before ES6)
  + Scope: Function-scoped. A variable declared with var is accessible within the function it is defined in.
  + Hoisting: var variables are hoisted to the top of their scope, but they are initialized with undefined.
  + Re-declaration: Allowed within the same scope. (declaration again with same variable name).

+ *let* - (ES6)
  + Scope: Block-scoped. A variable declared with let is only accessible within the block, statement, or expression it is defined in.
  + Hoisting: let variables are hoisted to the top of their block but are not initialized. Accessing them before the declaration results in a ReferenceError.
  + Re-declaration: Not allowed within the same scope.)

+ *const* - (ES6)
  + Scope: Block-scoped, similar to let.
  + Hoisting: const variables are also hoisted to the top of their block but are not initialized. They must be assigned a value at the time of declaration.
  + Re-declaration: Not allowed within the same scope.
  + Immutability: The variable's reference cannot be reassigned, but if the variable is an object or array, its properties or elements can be modified.

## JavaScript ES6 
+ ES6, also known as ECMAScript 2015, introduced significant updates and new features to JavaScript. These additions enhance the language, making it more powerful and easier to use. Here's a detailed breakdown of the key ES6 updates, organized by headings and subheadings:

1. **Variable Declarations**
2. **Arrow Functions**
    + A concise syntax for writing function expressions.
    + Lexical this binding, meaning this retains the value from the context in which the arrow function is defined.
    + Define Function and show Arrow Function
3. **Template Literals**
    + Ex: var a = "JNU"
    + Ex: var b = `JNU ${}`
4. **Default Parameters**
    + function Add(num1=10, num2){
        console.log(`${num1}+${num2}`)
    }
5. **Spread and Rest Operators**
   1. Spread Operator
       + const arr = [1,2,3,4]
       + const newArr = [...arr, 5, 6, 7];
   2. Rest Operator
   3. 
        `function sum(...numbers) {
            let total = 0;
            for (const num of numbers) {
            total += num;
        }
        return total;
    }
console.log(sum(1, 2, 3, 4, 5)); // Output: 15`

6. **Object**


## Type of Function in JS
1. **Function Declarations:**
    + Named functions.
    + Hoisted to the top of their scope, meaning they can be called before they are defined.
    + Useful for defining functions that are used multiple times throughout the code.
    + `function greet(name) {
  return ``Hello, ${name}!``;
}
console.log(greet("Alice")); // Hello, Alice!`

2. **Function Expressions**
    + Not hoisted, meaning they cannot be called before they are defined.
    + Useful for defining functions that are used as data, passed around as arguments, or assigned as properties.
    + `const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3)); // 5`

3. **Arrow Function**
4. **Anonymous Functions**
    + `setTimeout(function() {
  console.log("This runs after 1 second");
}, 1000);`

5.  **Immediately Invoked Function Expressions (IIFE)**
    + `(function() {
  console.log("IIFE executed");
})();`

6. **Constructor Functions**
    + Named with a capitalized first letter by convention.
    + Used with the new keyword to create objects.
    + The this keyword inside the function refers to the newly created object.
    + `function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("John", 30);
console.log(person1.name); // John`

7. **Async Function**
8. **Callback function**
9. **Higher-Order Functions**
10. **Generator Functions**


# React JS - Day 2 (8th Aug '24)
+ React.js is a popular JavaScript library used for building user interfaces, particularly single-page applications where data can change over time without reloading the page.
+ **Feature of React JS**
  + Component-Based: React is based on a component-based architecture, where UIs are broken down into small, reusable pieces called components. Each component manages its own state and can be composed together to build complex UIs.
  + Virtual DOM: React maintains a lightweight representation of the real DOM (Document Object Model) called the Virtual DOM. This allows React to perform optimizations and minimize the number of DOM operations, which leads to better performance.
  + JSX (JavaScript XML): JSX is a syntax extension for JavaScript that allows developers to write HTML-like code directly within JavaScript. It makes React component structure more readable and intuitive.
  + Unidirectional Data Flow: React implements a unidirectional data flow. Data flows downwards from parent to child components via props, and child components can communicate with parents via callback functions.
  + Reusable Components: React promotes reusability and componentization, making it easier to maintain large codebases. Components can be reused across different parts of the application or even in different projects.
  + Community and Ecosystem: React has a large and active community of developers. This community contributes to a rich ecosystem of libraries, tools, and resources that enhance React's capabilities and support its development.
  + Performance: React's Virtual DOM and efficient rendering mechanism contribute to its high performance. By minimizing DOM operations and using reconciliation algorithms, React ensures that applications are responsive and fast.
  + React Native: React Native is a framework based on React that allows developers to build mobile applications using JavaScript and React. It enables developers to use React components to create a rich mobile UI experience.

# Day 3 (13th Aug)
## JavaScript - Array and It's Method

+ An array in JavaScript is a data structure that allows you to store multiple values in a single variable.
+ Arrays can hold various types of data, including numbers, strings, objects, and even other arrays.
+ They are indexed collections, meaning each element is accessible by an index starting from 0.

+ **Map Method:** The map method is used to transform each element of an array based on a function provided, returning a new array with the transformed elements.
+ **Syntax:** 
  + **array.map(function(currentValue, index, array) { ... }, thisArg)**
  + function(currentValue, index, array): A function to be applied to each element in the array.
  + thisArg (optional): A value to use as this when executing the callback function.

+ **Filter Method:** The filter method is used to create a new array with all elements that pass a test (provided by a function).
+ **Syntax:** 
  + **array.filter(function(currentValue, index, array) { ... }, thisArg)**
  + function(currentValue, index, array): A function that returns true if the element should be included in the resulting array.
  + **thisArg (optional)**: A value to use as this when executing the callback function.
  
+ **Reduce Method:** The reduce method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
+ **Syntax:** 
  + **array.reduce(function(accumulator, currentValue, index, array) { ... }, initialValue)**
  + **function(accumulator, currentValue, index, array):** A function that executes on each element of the array, taking four arguments:
  + **accumulator:** The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
  + **currentValue:** The current element being processed in the array.
  + **index:** The index of the current element being processed in the array.
  + **array:** The array reduce was called upon.
  + **initialValue (optional):** A value to use as the first argument to the first call of the callback. If no initialValue is supplied, the first element in the array will be used as the initial accumulator value.

-> **Code is available in Session.js**

# ReactJS - Day 3

### Export and Import
+ Two type of Export
  1. Default Export - 
     + using default keyword.
     + Only one default export in single js file.
  2. Name Export
      + export using components name with {} bracket.

### What is Library & Framework?

+ **Frameword:** A framework is like a structure that provides a base for the application development process. With the help of a framework, you can avoid writing everything from scratch. Frameworks provide a set of tools and elements that help in the speedy development process. It acts like a template that can be used and even modified to meet the project requirements.

+ **Library:** A library is a group of pre-written codes that make jobs easier to complete. A library is a collection of pre-defined methods and classes that developers can use to ease their work and accelerate development.

### Difference b/w Library & Frameword

| Library | Frameword|
|-------|----------|
|A set of assistance modules, objects, classes, functions, pre-written code, and so on| Includes a variety of APIs, compilers, support applications, libraries, and so on.|
|Can be easily substituted by another library.	| Are tough to replace.|
|When we call a method from a library, we are in control.	| Inversion of control, i.e. the framework calls us.|
| Since developing a library needs less code, performance and load time are improved.	| The construction of a framework necessitates large amounts of code, which reduces performance and increases load time.|
| Libraries can be simply linked into existing programs to add specific functionality.	| It is tough to incorporate a framework seamlessly into an existing project.|


### V-DOM : 
+ The Virtual DOM (V-DOM) is a key concept in modern web development, especially within library like React.

-> **What is V-DOM?**
  + The Virtual DOM is an in-memory representation of the real DOM elements generated by a web application’s UI.
  + It's a lightweight copy of the actual DOM that exists in memory and is kept in sync with the real DOM.
  + When the state of an application changes, the Virtual DOM updates first. Then, it compares the updated Virtual DOM with the previous one to identify what has changed (a process called "diffing").
  + Only the differences are then updated in the actual DOM, making the updates more efficient.

-> **Key Points About Virtual DOM:**
  + **Performance Optimization:**
    + The Virtual DOM minimizes the direct manipulation of the actual DOM, which can be slow and resource-intensive.
    + By batching updates and applying them all at once, it reduces the number of direct interactions with the real DOM, leading to better performance.
  + **Efficient Re-rendering:**
    + Virtual DOM uses a diffing algorithm to compare the old and new versions of the virtual DOM. Only the differences are then applied to the real DOM.
    + This process is much faster than updating the entire DOM because only the parts of the page that have changed are re-rendered.
  + **Declarative UI:**
    + Developers describe what the UI should look like at any given time, and the Virtual DOM handles the rendering and updating.
    + This abstraction allows developers to write code without worrying about how to efficiently update the DOM.
  + **Component-based Architecture:**
    + The use of Virtual DOM is tightly integrated with component-based architecture in frameworks like React.
    + Each component has its own Virtual DOM, making it easier to manage complex UIs by breaking them down into smaller, reusable parts.
  + **Cross-browser Compatibility:**
    + Virtual DOM provides a consistent way to manage updates across different browsers, abstracting away the inconsistencies of the real DOM across browsers.
  + **Reduced Memory Usage:**
    + Virtual DOMs are lightweight and do not require as much memory as the real DOM. This makes them an efficient tool for managing dynamic content.

-> **How it Works in Practice:**
1. **Initial Render:** When a component is first rendered, the Virtual DOM creates an initial version of the real DOM.
2. **State Change:** When the state of the application changes, a new Virtual DOM tree is created.
3. **Diffing Algorithm:**The new Virtual DOM tree is compared to the previous one using the diffing algorithm to identify changes.
4. **Patching the Real DOM:** Only the changes are applied to the real DOM, which updates the UI.

### Props (Properties)
1. Props is short for properties and is a mechanism to pass data from a parent component to a child component.
2. Props are read-only, meaning the child component cannot modify the data passed from the parent.
3. They are similar to function arguments, allowing you to customize child components with different data.
4. Props are essential for creating reusable and composable components.
5. They enable a unidirectional data flow, making it easier to reason about and debug applications.
6. Props can be passed as primitive values (strings, numbers, booleans), objects, or functions.
7. When passing objects, the child component receives a reference to the same object, so changes made in the child will affect the parent.
8. To avoid unintended side effects, it's recommended to create copies of objects before passing them as props.
9. Props are accessed within a child component using the this.props object in class components or directly as props in functional components.
10. Default props can be defined using the defaultProps property on a component to provide fallback values.
11. Props are crucial for building complex UI structures by breaking down components into smaller, reusable units.

-> **All code is available - Aug13 folder**

### Components: Two Type of Components.
1. **Function based Components**
   + Function-based components, also known as functional components, are one of the two primary ways to define components in React (the other being class-based components). Functional components are simpler, easier to read, and have become the standard way to write components in modern React applications, especially with the introduction of **React Hooks**.
   + **Key Features**
     1. **Simple JavaScript Functions:** Functional components are simply JavaScript functions that return JSX (a syntax extension that looks similar to HTML). These functions receive a props object as an argument and return the UI to be rendered.
     2. **Hooks for State and Lifecycle:** With the introduction of React Hooks in version 16.8, functional components can now handle state and side effects, which were previously only possible in class components. Hooks like useState and useEffect allow functional components to manage state and perform lifecycle-related tasks.
     3. **Stateless or Stateful:** Originally, functional components were referred to as "stateless" components because they couldn't manage their own state. However, with Hooks, functional components can now be either stateless or stateful.
2. **Class based Components** class-based components are one of the two ways to define components, with the other being functional components. Class-based components were the original way to create components in React before the introduction of hooks, and they are still widely used in many applications, especially those built before hooks were introduced.
   + **Key Features**
    1. **Defined Using ES6 Classes:** Class-based components are created using JavaScript ES6 classes. These classes extend from React.Component, which gives them access to several features, including lifecycle methods and state management.
    2. **Lifecycle Methods:** Class components have access to React's lifecycle methods, which allow you to hook into different stages of a component's life, such as when it is mounted, updated, or unmounted. Some common lifecycle methods include:
        + **componentDidMount():** Called once, immediately after the component is added to the DOM.
        + **componentDidUpdate():** Called after the component has been updated.
        + **componentWillUnmount():** Called just before the component is removed from the DOM.
3. **State Management:** Class-based components have their own internal state, which is an object that holds data that can change over time. State is managed using this.state and can be updated using this.setState().
4. **this Keyword:** In class components, you often work with the this keyword to access props, state, and methods. This is why it’s important to correctly bind methods in class components, either by using arrow functions or by binding them in the constructor.
5. **Render Method:** Every class-based component must implement a render() method, which returns the JSX that defines the component's UI. This method is called every time the component's state or props change.
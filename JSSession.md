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

+ *let* - (ES6
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


# React JS
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

### React Setup
+ install node installer
+ use commands - npx create-react-app "app name"
+ explain folder structure
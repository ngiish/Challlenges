## Key React Concepts

1. Components: In React, you can break your user interface into reusable and independent pieces called components. Each component represents a part of your UI and can have its own logic and state.

2. JSX: JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It makes it easier to create and manipulate React elements.

3. Virtual DOM: React uses a virtual representation of the actual DOM called the Virtual DOM. It's a lightweight copy of the real DOM, and React uses it to efficiently update only the necessary parts of the UI when the state of a component changes.

4. State: State is an object that holds data specific to a component. It determines how the component renders and behaves. When the state changes, React automatically re-renders the component.

5. Props: Props (short for properties) are used to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component.

6. Lifecycle Methods: React provides lifecycle methods that allow you to perform actions at specific points in a component's lifecycle, such as when it is first rendered, updated, or unmounted.

7. Hooks: Hooks are functions that allow you to use state and other React features in functional components. They provide a way to manage state and side effects without using class components.

# Difference between react Dom and Virtual Dom

React DOM is like the bridge between React and the actual web browser. It takes your React components and shows them on the screen as HTML elements that you can see and interact with.

Now, the Virtual DOM is like a behind-the-scenes helper that React uses to make things faster. It's like a lightweight copy of the real web browser DOM. Whenever you make changes to your React components, React first makes those changes to the Virtual DOM.

So, in simple terms, React DOM is the one that shows your components on the screen, and the Virtual DOM helps React update only the necessary parts of the page. It's like a teamwork to make your app run smoothly!

## What are props? Why do we need them? What is prop drilling?
- Props, short for "properties," are a way to pass data from one component to another in React. They allow you to customize and configure components by providing them with values.

- We need props because they enable components to be reusable and flexible. Instead of hardcoding values directly into a component, we can pass them as props, making the component more versatile. Props help in creating dynamic and interactive UIs by allowing components to receive and display different data based on the props they receive.

- Prop drilling refers to the process of passing props through multiple levels of nested components, even if some intermediate components don't directly use those props. It can happen when a component needs to pass data to its child component, which then passes it to its child component, and so on. This can lead to passing props through unnecessary components, making the code harder to maintain and understand.

## What is Hoisting? Explain in code

- Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use variables and functions before they are actually declared in your code.
- As you can see, the `let message` declaration is moved to the top, allowing the `console.log` statement to run without throwing an error. However, the value of `message` at that point would be `undefined` because the assignment happens later in the code.

- Only the declarations are hoisted, not the initializations. So, it's a good practice to declare your variables at the top of their scope to avoid any confusion or unexpected behavior.
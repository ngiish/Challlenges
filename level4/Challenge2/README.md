## What are hooks?
Hooks are functions that allow you to use state and other React features in a functional state.They allow the use of functionalities like lifecycle features without using classes.
Hooks allow function components to have state and to respond to lifecycle events too, and kind of make class components obsolete. They also allow function components to have a good way to handle events. Hooks do not work inside classes and are backward-compatible, meaning they have no breaking changes.
Examples of in-built react hooks:
1. useCallback
2. useContext
3. useEffect
4. useReducer
5. useState


## Define useState() and useEffect()

# useState:
-useState is a hook that allows functional components to manage state. 

"import { useState } from 'react'"
By importing useState, you are enabling the usage of this hook within the component where this import statement is located.

The syntax is as follows: 
"const [state, setState] = useState(initialState)"
Here, state is the current state value, and setState is a function that allows you to update the state, triggering a re-render.

# useEffect:
useEffect is a hook that performs side effects in function components.

import { useEffect } from 'react'
By importing useEffect from 'react', you can use it within a functional component to manage side effects. This can include data fetching, subscriptions, manually changing the DOM, and other similar operations that could not be done purely with a functional component.

The syntax is as follows:
" useEffect(() => { // effect }, [dependencies]);"
Here, the function passed to useEffect will run after the render is committed to the screen. It performs actions that don't need to be synchronized with the render.
The optional array of dependencies allows you to control when the effect runs. If any value in the array changes, the effect will be re-run.
s
## What does useState() return when it's called?
 It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.

## Name 4 basic and 4 advanced hooks and their usecases

# Some of the basic hooks in React include:

- useState: 
Used for adding state to functional components, allowing them to manage dynamic data. For example, managing form input values or toggling UI elements.
- useEffect: 
Enables performing side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It's similar to componentDidMount and componentDidUpdate lifecycle methods in class components.
- useContext:
 Provides a way to pass data through the component tree without having to pass props down manually at every level. It's especially useful for passing down global data such as themes, authentication, or preferred languages.
- useReducer: 
Offers a way to manage more complex state logic in a more predictable way. It's similar to Redux but can be used as a replacement for useState when the state is more complex.

# Some of the advanced Hooks in React:

- useRef: 
Allows access to a DOM node or a value that persists across renders without causing a re-render. Useful for accessing DOM elements, managing focus, or storing mutable values without triggering a re-render.
- useMemo:
 Caches the result of a function so that it's not recomputed on every render. It's useful for optimizing expensive computations by avoiding unnecessary re-execution of functions.
- useCallback: 
Returns a memoized version of the callback function that only changes if one of the dependencies has changed. Useful for optimizing performance by preventing unnecessary re-renders of child components that rely on callback functions.
- useLayoutEffect: 
Similar to useEffect, but it runs synchronously after all DOM mutations. It's useful for performing DOM measurements or executing imperative commands that require the DOM to be fully updated.

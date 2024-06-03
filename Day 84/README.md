## 🚀 Day 84 Challenge: Adding Interactivity and Transitioning to Next.js! 🚀

## Contents
- [Adding Interactivity with State](#adding-interactivity-with-state)
- [From React to Next.js](#from-react-to-nextjs)

## Adding Interactivity with State

In React, state allows components to create and manage their own data that can change over time. This interactivity is what makes React applications dynamic and responsive to user inputs. By updating state, components can re-render and display updated information automatically.

### Key Concepts:
- **useState Hook**: This hook lets you add state to functional components.
    ```jsx
    function Counter() {
        const [count, setCount] = React.useState(0);

        return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
            Click me
            </button>
        </div>
        );
    }
    ```
- **State Management**: Manage and update state using the `setState` function in class components or the `useState` hook in functional components.
- **Event Handling**: Handling events like clicks or form submissions to update the state and reflect changes in the UI.
    ```jsx
    function Form() {
        const [text, setText] = React.useState('');

        const handleChange = (event) => {
        setText(event.target.value);
        };

        return (
        <input type="text" value={text} onChange={handleChange} />
        );
    }
    ```

## From React to Next.js

Next.js is a React framework that enables server-side rendering, static site generation, and other performance optimizations. Transitioning from a traditional React application to Next.js can significantly improve the performance and SEO of your application while also simplifying many aspects of development.


## References
- [Adding Interactivity with State](https://nextjs.org/learn/react-foundations/updating-state)
- [From React to Next.js](https://nextjs.org/learn/react-foundations/from-react-to-nextjs)

---

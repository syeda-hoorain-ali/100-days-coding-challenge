## 🚀 Day 85 Challenge: Getting Started with Next.js! 🚀

## Contents
- [Installing Next.js](#installing-nextjs)
- [Server and Client Components](#server-and-client-components)

## Installing Next.js

Next.js is a popular React framework that offers powerful features like server-side rendering, static site generation, and file-based routing. It simplifies the development process and enhances the performance of React applications.

### Key Steps:
1. **Install Node.js and npm**: Ensure you have Node.js and npm installed on your machine. You can download them from the [official Node.js website](https://nodejs.org/).

2. **Install Dependencies**: Use the following command to create a new Next.js project:
    ```bash
    npm install react@latest react-dom@latest next@latest
    ```

3. **Create a New Next.js Project**: 
    - Create a file `app/page.js` in you root director.
    - Add this code in `page.js` file: 
        ```jsx
        export default function Page() {
            return (<div> 
                <h1>I am Home Page.</h1>
            </div>)
        }
        ```
    - Add a "next dev" script to your package.json file:
        ```json
        "scripts": {
            "dev": "next dev"
        },
        ```
4. **Running the Development Server**: 
    - Start the Next.js development server by running the following command:
        ```bash
        npm run dev
        ```
    - This will start the development server, and you can view your new Next.js app by opening a browser and navigating to http://localhost:3000.
    

## Server and Client Components

Next.js allows you to use both server and client components, enabling a hybrid approach to rendering. Server components are rendered on the server, providing improved performance and SEO, while client components are rendered on the client side, enabling rich interactivity.


## References
- [Installing Next.js](https://nextjs.org/learn/react-foundations/installation)
- [Server and Client Components](https://nextjs.org/learn/react-foundations/server-and-client-components)

---

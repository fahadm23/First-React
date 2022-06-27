// First react code line -- ReactDOM.render can take an element and display it using
// document.getElementByID and selecting the id in your html
// This is far simpler than appending and doing 3-4 extra steps in vanilla JS

//ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))

//Using the same example, make a list with 2 or more items
// ReactDOM.render(<ul>
//     <li>Item One</li>
//     <li>Item Two</li>
//     </ul>, document.getElementById("root"))

// React allows you to write composable code
// Instead of wrting thousands of line of code in HTML,
// React allows you to make custom components that you can insert
// This takes up significantly less lines/space

// CHALLENGE: Create custom react component -- an H1 element
// function MainContent() {
//     return (
//         <h1>I'm learning React!</h1>
//     )
// }

// Imperative vs Declarative -- Vanilla JS is imperative (you have to describe every step)
// CHALLENGE: Re-create h1 using vanilla JS
// const targetDiv = document.getElementById("root");
// const h1 = document.createElement("h1");
// h1.className = "header";
// const textnode = document.createTextNode("Hello, React!")
// h1.appendChild(textnode);
// targetDiv.appendChild(h1);

// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

// JSX is basically javascript written in an HTML way
// Small differences
// className = instead of class =
// JSX is kind of like a function that returns objects

// ReactDOM.render(
// <div>
//     <h1 className="header">This is JSX</h1>
//     <p>This is a paragraph</p>
// </div>,
// document.getElementById("root")
// )

// Storing values in a variable and then just using ReactDOM.render
// to call the variable instead of typing the content

// const page = (
// <div>
// <h1 className="header">This is JSX</h1>
// <p>This is a paragraph</p>
// </div>
// )
// ReactDOM.render(
//     page, document.getElementById("root")
// )

// Creatting a navbar using React
// const nav = (
//     <nav>
//         <h1>Website</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )
// ReactDOM.render(
//     nav, document.getElementById("root")
// )

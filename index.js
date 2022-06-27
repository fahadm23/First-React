// const page = (
//   <div>
//     <nav>
//       <img src="react-logo.png" alt="React logo" width="40" />
//     </nav>

//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// );

// function TempName() {
//   return (
//     <div>
//       <nav>
//         <img src="react-logo.png" alt="React logo" width="40" />
//       </nav>

//       <h1>Fun facts about React</h1>
//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100K stars on Github</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//     </div>
//   );
// }

// ReactDOM.render(<TempName />, document.getElementById("root"));

function ReactList() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
ReactDOM.render(<ReactList />, document.getElementById("root"));

// Creating a seperate component for the header section and inserting it into the list

function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src="react-logo.png" alt="React logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

// Creating a seperate footer component

function Footer() {
  return (
    <footer className="footer">
      &copy; 2022 Fahad development. All rights reserved.
    </footer>
  );
}

// Creating a seperate component for h1 and ol

function MainContent() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>HTML is my favourite language and React is basically HTML!</li>
        <li>It's the most popular JS library</li>
      </ol>
    </div>
  );
}

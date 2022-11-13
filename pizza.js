function App() {
  return (
    <div class="whole">
      <header className="header">
        <img
          src="https://img.freepik.com/free-vector/cute-smiling-pizza-slice-cartoon-vector-icon-illustration-food-object-icon-concept-isolated-premium_138676-4839.jpg?w=2000"
          className="logo"
        />
        <nav className="link">
          <a href="./pizza.html" className="home">
            Home
          </a>
          <a href="./about.html" className="home">
            About
          </a>
          <a href="./menu.html" className="home">
            Menu
          </a>
          <a href="./contact.html" className="home">
            Contact us
          </a>
        </nav>
      </header>
      <main className="main">
        <h3 className="pizza">"a slice a day ..."</h3>
        <img
          src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/05/papa-johns-pizza.jpg?quality=82&strip=1"
          className="image"
        />
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('hero'));

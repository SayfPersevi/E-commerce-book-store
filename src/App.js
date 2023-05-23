import Nav from "./components/Nav"
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from "./Pages/Home";
import { books } from "./data";
import Books from "./Pages/Books";

function App() {
  return (
    <Router>

    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" render={() => <Books books={books} />} />
      <Footer />
    </div>

    </Router>
  );
}

export default App;

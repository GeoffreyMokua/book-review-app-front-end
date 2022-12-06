import Navbar from "./components/navbar/Navbar";
import { Route , Switch} from 'react-router-dom'
import Home from "./components/home/Home";
import BookReview from "./components/bookReview/BookCard";
import Login from "./components/login/Login";

function App() {
  return (
   <div>
    <Navbar/>
    <Switch>

        <Route path="/reviews">
          <BookReview />
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/">
          <Home />
        </Route>

    </Switch>
    </div>
  );
}

export default App;

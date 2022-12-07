import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import BookReview from "./components/bookReview/BookCard";
import Login from "./components/login/Login";
import AddBook from "./components/AddBook/AddBook";

function App() {
  return (
   <div>
    <Navbar/>
    <Routes>
        <Route
          path="/reviews"
          element={
            <BookReview />
          }
        />
        <Route
          path="/add_books"
          element={<AddBook />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import BookReview from "./components/bookReview/BookCard";
import Login from "./components/login/Login";
import AddBook from "./components/AddBook/AddBook";
import Register from "./components/register/Register";
import BookDetail from "./components/bookDetail";

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
          path="/add-book"
          element={<AddBook />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
         <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/book-detail"
          element={<BookDetail />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

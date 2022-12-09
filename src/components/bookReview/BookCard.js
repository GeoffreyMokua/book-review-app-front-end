import { useEffect, useState } from "react";
import { Book } from "../../images";
import { useNavigate } from "react-router-dom";

export default function BookList() {

  const navigate = useNavigate()
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('/books')
      .then(r => r.json())
      .then(books => {
        console.log(books)
        setBooks(books)
      })
  }, [])

  return (
    <div className="bg-white h-screen">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Book List</h2>
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {books.map((book) => (
            <div key={book.id}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <img
                    src={Book}
                    alt={'Book placeholder'}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">{book.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{book.description}</p>
                  <p className="mt-1 text-sm text-gray-500">{book.author}</p>
                  <span
                    onClick={() => navigate("/book-detail", { state: { book } })}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200 cursor-pointer"
                  >
                    View Details
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


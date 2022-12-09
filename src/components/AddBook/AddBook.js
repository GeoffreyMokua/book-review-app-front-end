import { React, useState } from "react";
import { useNavigate } from "react-router-dom";


function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [Description, setDescription] = useState("");
  const autoNavigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(FormData),
    })
      .then((res) => res.json())
      .then(() => {
        setTitle("");
        setAuthor("");
        setDescription("");
      });
    autoNavigate("/reviews");
  }
  return (
    <div className="flex items-center mx-auto w-1/2 flex-col justify-center py-36">
      <h2 className="text-center mb-5">
        This page gives you a platform where you can add a Book to our
        collection.
      </h2>
      <form className="w-1/2 mx-auto flex flex-col justify-center " onSubmit={handleSubmit}>
        <label for="novel-title" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Book-Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="block w-full min-w-0 flex-1  rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          </input>
          
        <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          className="block w-full min-w-0 flex-1  rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          </input>
        <label for="book-description" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Book-Description</label>
        
          <textarea
            id="txt"
            rows="5"
            cols="50"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            required
          className="block w-full min-w-0 flex-1  rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            Enter description here...
          </textarea>{" "}
          <br />
          <br />
        <button type='submit' className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-5">Add book</button>
        </form>
      </div>
  );
}
export default AddBook;

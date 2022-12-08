import {React, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './AddBook.css'



function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [Description, setDescription] = useState('');
  const autoNavigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    // const form= {title,author,Description}
    fetch('/books',{
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(FormData)
    })
    .then((res) => res.json())
    .then(()=>{
      setTitle('')
      setAuthor('')
      setDescription('')
    })
    autoNavigate("/reviews")
  }
  return (
    <div className='addBook'>
      <p id="form-p">
        This page gives you a platform where you can add a Book to our
        collection.
      </p>
      <div>
        <form className="form-review" onSubmit={handleSubmit} >
          <label for="novel-title">Book-Title</label>
          <br />
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required></input>
          <br />
          <br />
          <label type="text" >Author</label> <br />
          <input type="text" value={author}  onChange={(e)=>setAuthor(e.target.value)} required></input>
          <br />
          <br />
          <label for="book-description">Book-Description</label>
          <br />
          <br />
         <textarea rows = "5" cols = "50"  value={Description} onChange={(e)=>setDescription(e.target.value)} required>
            Enter description here...
         </textarea> <br />
         <br/>
          <button>Add book...</button>
         </form>
      </div>
    </div>
  );
}
export default AddBook;
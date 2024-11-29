import React from 'react'
import '../App.css'

const Blog = () => {
  return (
    <div className='form-data'>
        <h1>Blog Form</h1>
        <form>
            <input type="text" name="bname" id="bid" placeholder='Enter Blog Name'/>
            <input type="text" placeholder='Author Name'/>
            <textarea placeholder='Description'></textarea>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Blog
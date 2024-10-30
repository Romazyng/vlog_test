import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form>
            <label>Blog title:</label>
                <input 
                type='text'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                ></input>
            <label>Blog body:</label>
            <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
            >
            </textarea>
            <label>blog author:</label>
            <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            >
            <option value='mario'>mario</option>
            <option value='yoshi'>yoshi</option>
            </select>
            <button>Add blog</button>
            <p>{title}</p>
            <h2>{body}</h2>
            <h5>{author}</h5>
            </form>
        </div>
     );
}
 
export default Create;
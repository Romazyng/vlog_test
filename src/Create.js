import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            setIsPending(false)
            history.push(`/create:{id++}`)
        }) 

    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
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
            {!isPending && <button>Add blog</button>}
            {isPending && <button>Adding blog...</button>}
            <p>{title}</p>
            <h2>{body}</h2>
            <h5>{author}</h5>
            </form>
        </div>
     );
}
 
export default Create;
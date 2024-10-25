const BlogList = ({blogs, title}) => {
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((e) => (
                <div className="blog-preview" key={e.id}>
                    <h2>{e.title}</h2>
                    <p>Made by {e.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;
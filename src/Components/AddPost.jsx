import { useState } from "react"
import { useAddPostMutation } from "../Service/posts";

const AddPost = () => {
    const [title,setTitle] = useState('');
    const [views,setViews] = useState(0);
    const [addPost] = useAddPostMutation();


    const handleSubmit = async () => {
        await addPost({title,views});
        setTitle('');
        setViews(0);
    }

    return (
        <div>
                <input
                    type="text"
                    placeholder="Add Title.."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Add Views"
                    value={views}
                    onChange={(e) => setViews(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}


export default AddPost;
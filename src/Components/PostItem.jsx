import { useDeletePostMutation } from "../Service/posts"

const PostItem = ({post}) => {

    const [deletePost] = useDeletePostMutation();

    return(
        <div>
            <h3>{post.title}</h3>
            <p>{post.views}</p>
            <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
    )
}

export default PostItem;
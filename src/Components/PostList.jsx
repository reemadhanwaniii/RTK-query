import { useGetPostQuery } from "../Service/posts"
import PostItem from "./PostItem";

const PostList = () => {

    const {data: posts,error,isLoading} = useGetPostQuery();

    if(isLoading) {
        return <>Loading....</>
    }
    if(error) {
        return <>Error Loading posts...</>
    }

    return (
        <div>
            {posts.map((post)=> (
                <PostItem post={post} key={post.id}/>
            ))}
        </div>
    )
}


export default PostList;
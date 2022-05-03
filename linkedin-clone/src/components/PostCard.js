
import { useNavigate } from "react-router-dom";


export default function PostCard({ post }) {
    const navigate = useNavigate();
   

    function handleClick() {
        navigate(`/posts/${post.id}`);
    }


   
    return (
        <article>
            <div onClick={handleClick}>
    
         
                <p>{post.body}</p>
            </div>
           
        </article>
    );
}

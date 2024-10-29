
import { GetPost } from "@/services/getPost";
import Link from "next/link";

export const generateMetadata = async({params})=>{
    const id = parseInt(params.id);
    const postData = await GetPost(id);
    return{
        title: `Post Details ${postData.title}`,
        description: postData.body,
        keywords: postData.body.split(' ')
    }
}

const PostDetailsPage = async({params}) => {
    const id = parseInt(params.id);
    const postData = await GetPost(id);
    console.log(postData);
    return (
        <div className="text-center my-10 p-6">
             <h2 className="text-2xl font-bold">{postData.title}</h2>
              <p>{postData.body}</p>
              <button className="bg-green-500 text-white px-2 py-1 rounded-md my-4"><Link href={`/posts`}>Go Back</Link></button>
        </div>
    );
};

export default PostDetailsPage;
import { getAllPosts } from "@/services/getAllPost";
import Link from "next/link";

export const metadata = {
  title: "Posts",
  description: "Posts page"
};
const PostsPage = async () => {
  const postsData = await getAllPosts();

  return (
    <div className="h-screen text-center">
      <h1 className="text-4xl font-bold pt-6">All Posts </h1>
      <div className="grid grid-cols-4 gap-6 p-10 ">
        {postsData.map((post) => {
          return (
            <div
              key={post.id}
              className="border-2 border-gray-200 p-6 bg-slate-200 rounded-md shadow-md"
            >
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p>{post.body}</p>
              <button className="bg-green-500 text-white px-2 py-1 rounded-md my-4"><Link href={`/posts/${post.id}`}>See Details</Link></button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostsPage;

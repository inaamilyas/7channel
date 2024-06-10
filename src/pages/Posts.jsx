import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import featuredPosts from "../constants";
import PostCard from "../components/PostCard";
function Posts() {
  const { id } = useParams();
  const [post, setPost] = useState(featuredPosts[0]);

  useEffect(() => {
    const foundPost = featuredPosts.find((post) => post.id === id);
    setPost(foundPost);
  }, [id]);

  return (
    <>
      <section className="w-[100%] bg-[#e5e5e5]">
        <div className="container mx-auto h-full py-[50px] px-5">
          <div className="h-full w-full md:w-[80%] lg:w-[50%] mx-auto shadow-2xl flex-col flex gap-10 p-5">
            <img src={post?.image} className="w-[full]" alt="" />
            <p className="text-[20px]">{post?.desc}</p>
          </div>
        </div>
      </section>

<hr />
      <section className="w-[100%]">
        <div className="container mx-auto h-full py-[50px] px-5">
        <h1 className="text-[35px] font-bold text-primary text-center mb-5 ">
            Featured Posts{" "}
          </h1>
          <div className="flex items-center flex-wrap gap-10 justify-center mx-auto">
            {featuredPosts.map((post, idx) => (
              <PostCard post={post} key={idx} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Posts;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import { featuredPosts } from "../constants/";
function Posts() {
  const { id } = useParams();
  const [post, setPost] = useState(featuredPosts[0]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const foundPost = featuredPosts.find((post) => post.id === id);
    setPost(foundPost);
  }, [id]);

  return (
    <>
      <section className="w-[100%] bg-[#e5e5e5]">
        <div className="container mx-auto h-full py-[50px] sm:px-5 ">
          <div className="h-full w-full mx-auto shadow-2xl flex flex-col lg:flex-row gap-10 md:p-10 bg-white cursor-pointer">
            <img
              src={post?.image}
              className=" object-cover h-[500px] mx-auto"
              alt=""
            />
            <p className="text-[23px] p-4 md:p-0">{post?.desc}</p>
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

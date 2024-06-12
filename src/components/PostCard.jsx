import React from "react";
import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <Link to={`/featured-posts/${post.id}`}>
      <div className="w-full sm:w-[450px] h-[450px] cursor-pointer group p-3 post-shadow rounded-[10px] transition-all transition-1000 hover:scale-[1.05]">
        <img src={post.image} className="w-full h-[80%] object-cover" alt="" />
        <h2 className="text-[22px] line-clamp-2 text-[black] p-2  font-semibold">
          {post.desc}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;

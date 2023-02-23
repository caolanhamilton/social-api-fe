import React from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";

type Props = {
  post: Post;
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
};

interface Post {
  id: number;
  text: string;
  userName: string;
}

function deletePost(
  id: number,
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>,
  post: Post
) {
  setPosts((prevPosts) => prevPosts.filter((post: Post) => post.id !== id));

  fetch(`http://localhost:8080/posts/${id}`, {
    method: "DELETE",
  }).catch((err) => {
    setPosts((prevPosts) => [...prevPosts, post]);
    alert("Something went wrong deleting your post, please try again later");
  });
}

export default function PostCard({ post, setPosts }: Props) {
  return (
    <div className="w-full px-6 border-b-2 border-sky-400 flex flex-row">
      <div className="flex flex-col items-start align-top w-14 mr-2 md:mr-8 py-4">
        <img
          src="https://static.vecteezy.com/system/resources/previews/009/749/832/original/boy-avatar-icon-cartoon-young-guy-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg"
          alt="user avatar"
          className="w-10 h-10  rounded-full"
        />
      </div>
      <div className="flex flex-col w-full justify-between py-4">
        <p className="text-sky-400 text-xs pb-1">{`@${post.userName}`}</p>
        <p className="text-sky-100 text-lg pl-1">{post.text}</p>
      </div>
      <XCircleIcon
        className="h-8 w-8 mt-2 text-sky-400"
        onClick={() => deletePost(post.id, setPosts, post)}
      ></XCircleIcon>
    </div>
  );
}

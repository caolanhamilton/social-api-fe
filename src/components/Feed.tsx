import React, { Suspense } from "react";
import { useEffect } from "react";
import PostCard from "./PostCard";
import { useState } from "react";

export default function Feed() {
  interface Post {
    id: number;
    text: string;
    userName: string;
  }

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <PostCard key={post.id} post={post} setPosts={setPosts}></PostCard>
        );
      })}
    </div>
  );
}

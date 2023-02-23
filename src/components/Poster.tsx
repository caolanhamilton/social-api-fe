import React, { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { CurrencyPoundIcon } from "@heroicons/react/24/outline";
import { GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline";

export default function Poster() {
  const [postText, setPostText] = useState<String>("");

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setPostText(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: postText,
        userName: "Caolán",
      }),
    });
  }

  return (
    <div className="bg-transparent p-6 h-auto ">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-row">
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/749/832/original/boy-avatar-icon-cartoon-young-guy-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg"
            alt="user avatar"
            className="w-12 h-12 lg:h-20 lg:w-20 my-4 rounded-full"
          />
          <textarea
            name="name"
            className="h-20 w-full m-4 p-2 focus:border-2 focus:border-gray-800 rounded-lg text-lg bg-transparent text-sky-400 resize-none"
            placeholder="What is on your mind?"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-row justify-between items-center mx-2 mt-2 md:mt-4">
          <div className="flex flex-row justify-between space-x-2 md:space-x-8">
            <CurrencyPoundIcon className="h-8 w-8 md:h-10 md:w-10 text-sky-400"></CurrencyPoundIcon>
            <PhotoIcon className="h-8 w-8 md:h-10 md:w-10 text-sky-400"></PhotoIcon>
            <GlobeEuropeAfricaIcon className="h-8 w-8 md:h-10 md:w-10 text-sky-400"></GlobeEuropeAfricaIcon>
          </div>
          <div className="flex justify-end px-2">
            <button
              type="submit"
              className="bg-sky-400 w-28 md:42 lg:w-48 hover:bg-sky-600 text-white font-bold py-2  rounded-full"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

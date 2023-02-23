import "./App.css";
import Poster from "./components/Poster";
import Feed from "./components/Feed";
import { Suspense } from "react";

function App() {
  return (
    <div>
      <Poster></Poster>
      <Suspense
        fallback={<div className="text-2xl text-white">Loading.........</div>}
      >
        <Feed></Feed>
      </Suspense>
    </div>
  );
}

export default App;

import { Suspense } from "react";
import ActionState from "./components/ActionState";
import Optimistic from "./components/Optimistic";
import ServerAction from "./components/ServerAction";
import ServerAction2 from "./components/ServerAction2";
import Use from "./components/Use";

//https://github.com/Neha/react-19-examples

const fetchPosts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

export default async function Home() {
  // サーバーコンポーネントでawaitを使ってデータを完全に取得する
  const users = await fetchPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <ServerAction /> */}
      {/* <ServerAction2 /> */}
      {/* <ActionState /> */}
      <Optimistic />
      <Use users={users} />
    </main>
  );
}

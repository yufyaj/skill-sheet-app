import type { MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Sidebar from "~/components/sidebar";
import { testLogin, getCareers } from "~/data";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// loader
// login check
// login ok -> career get api
// login ng -> redirect to /login

/**
 *  / <- ログインしてたら、経歴書画面を表示
 *        してなかったら -> /login
 */

export const loader = async () => {
  const resLogin = await testLogin();
  if (!resLogin) {
    return redirect(`/login`);
  }
  const resCareer = await getCareers({ userId: 1 });
  return resCareer;
};

export default function Layout() {
  return (
    <div className="grid grid-cols-[304px,1fr] h-full">
      <Sidebar />
      <main className="p-7">
        <Outlet />
      </main>
    </div>
  );
}

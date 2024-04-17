import type { MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
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

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-red-400 text-4xl">ダッシュボード</h1>
    </div>
  );
}

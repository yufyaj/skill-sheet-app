import { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Skill Sheet App" },
    { name: "description", content: "Let's make your resume!" },
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

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-red-400 text-4xl">SideBar</h1>
      <Outlet />
    </div>
  );
}

import { NavLink } from "@remix-run/react";

export default function Sidebar() {
  return (
    <nav className="bg-secondary p-8 h-screen">
      <h1 className="font-bold text-5xl">Skill Sheet</h1>
      <div className="font-bold flex flex-col items-end mt-20 space-y-12">
        <NavLink className="text-3xl" to="/resume">
          経歴書
        </NavLink>
        <NavLink className="text-3xl" to="/profile">
          プロフィール
        </NavLink>
        <NavLink className="text-3xl" to="/share">
          共有
        </NavLink>
      </div>
    </nav>
  );
}

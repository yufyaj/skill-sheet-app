import ActiveNavLink from "./elements/ActiveNavLink";

export default function Sidebar() {
  return (
    <nav className="bg-secondary p-8 h-screen">
      <h1 className="font-bold text-5xl">Skill Sheet</h1>
      <div className="font-bold flex flex-col items-end mt-20 space-y-12">
        <ActiveNavLink to="/resume" value="経歴書" />
        <ActiveNavLink to="/profile" value="プロフィール" />
        <ActiveNavLink to="/share" value="共有" />
      </div>
    </nav>
  );
}

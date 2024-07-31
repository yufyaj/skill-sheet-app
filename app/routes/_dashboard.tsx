import { redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { AuthProvider } from "~/components/auth/provider/AuthProvider";
import Sidebar from "~/components/sidebar";
import { testLogin } from "~/data";

export const loader = async () => {
  const resLogin = await testLogin();
  if (!resLogin) {
    return redirect(`/login`);
  }
  return null;
};

export default function Layout() {
  return (
    <div className="grid grid-cols-[304px,1fr] h-full">
      <AuthProvider>
        <Sidebar />
        <main className="p-7">
          <Outlet />
        </main>
      </AuthProvider>
    </div>
  );
}

import { json, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { AuthProvider } from "~/components/auth/provider/AuthProvider";
import Sidebar from "~/components/sidebar";
import { getSession } from "./session";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("userId")) {
    return json({});
  }

  return redirect(`/login`);
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

import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { commitSession, getSession } from "./session";

export async function action({ request }: ActionFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  const userId = (await request.formData()).get("userId");

  if (!userId) {
    return redirect("/login");
  }

  session.set("userId", userId as string);

  return redirect("/resume", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

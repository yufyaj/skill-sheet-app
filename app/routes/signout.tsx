import { ActionFunctionArgs, json } from "@remix-run/node";
import { getSession, destroySession } from "./session";

export async function action({ request }: ActionFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  return json(
    {},
    {
      headers: {
        "Set-Cookie": await destroySession(session),
      },
    }
  );
}

import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { testLogin } from "~/data";

export const action = async ({ params }: ActionFunctionArgs) => {
  console.log("action called");
  // const formData = await request.formData();
  // const updates = Object.fromEntries(formData);
  const res = await testLogin();
  if (res) {
    return redirect(`/`);
  }
  throw new Response("Not Found", { status: 404 });
};

export default function Login() {
  return (
    <>
      <Form method="post" className="mx-auto bg-blue-700 w-96 p-12 text-center">
        <button className="bg-black text-blue-500">ログイン</button>
      </Form>
    </>
  );
}

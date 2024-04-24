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
    return redirect(`/dashboard`);
  }
  throw new Response("Not Found", { status: 404 });
};

const boxStyle =
  "bg-loginBox text-center container mx-auto items-center w-[708px] h-[600px]";

const boxTitle = "text-[40px] font-bold";

const buttonStyle =
  "bg-loginButton w-[250px] h-[60px] text-xl text-white font-semibold shadow-xl rounded-lg";

export default function Login() {
  return (
    <>
      <body>
        <Form method="post" className="h-screen flex items-center">
          <div className={boxStyle}>
            <div className="mt-[156px]">
              <h1 className={boxTitle}>Skill Sheet App</h1>
            </div>
            <div className="mt-[130px]">
              <button className={buttonStyle}>ログイン</button>
            </div>
          </div>
        </Form>
      </body>
    </>
  );
}

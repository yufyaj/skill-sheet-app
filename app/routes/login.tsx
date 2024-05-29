import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import Button from "~/components/elements/button";
import { testLogin } from "~/data";

export const action = async () => {
  const res = await testLogin();
  if (res) {
    return redirect(`/resume`);
  }
  throw new Response("Not Found", { status: 404 });
};

export default function Login() {
  return (
    <Form method="post" className="h-screen flex items-center">
      <div className="bg-secondary text-center container mx-auto items-center w-[708px] h-[600px]">
        <div className="mt-[156px]">
          <h2 className="text-[40px] font-bold">Skill Sheet App</h2>
        </div>
        <div className="mt-[128px]">
          <Button variant="primary" size="large">
            ログイン
          </Button>
        </div>
      </div>
    </Form>
  );
}

import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Button from "~/components/elements/button";
import { testLogin } from "~/data";
import { auth } from "~/lib/firebaseConfig";

export const action = async () => {
  const res = await testLogin();
  if (res) {
    return redirect(`/resume`);
  }
  throw new Response("Not Found", { status: 404 });
};

export default function Login() {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // サインイン成功
      const user = result.user;
      const formData = new FormData();
      formData.append("userId", user.uid);
      const res = await fetch("/signin", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("something went wrong");
      }

      // useNavigationを使う
      window.location.href = "/resume";
    } catch (error) {
      // エラー処理
      console.error("Error during sign in:", error);
    }
  };

  return (
    <Form method="post" className="h-screen flex items-center">
      <div className="bg-secondary text-center container mx-auto items-center w-[708px] h-[600px]">
        <div className="mt-[156px]">
          <h2 className="text-[40px] font-bold">Skill Sheet App</h2>
        </div>
        <div className="mt-[128px]">
          <Button variant="primary" size="large" onClick={handleLogin}>
            ログイン
          </Button>
        </div>
      </div>
    </Form>
  );
}

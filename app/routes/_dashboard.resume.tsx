import { MetaFunction, json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Button from "~/components/button";
import ProjectItem from "~/components/projectItem";
import { testLogin, getCareers } from "~/data";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// loader
// login check
// login ok -> redirect to /dashboard
//  click 経歴書 /dashboard/profile に遷移
// login ng -> redirect to /login

/**
 *  / <- ログインしてたら、経歴書画面を表示
 *        してなかったら -> /login
 */

export const loader = async () => {
  const resLogin = await testLogin();
  if (!resLogin) {
    return redirect(`/login`);
  }
  const careers = await getCareers({ userId: 1 });
  return json({ careers });
};

export default function Resume() {
  const { careers } = useLoaderData<typeof loader>();

  return (
    <div className="mx-12">
      <h1 className="text-4xl font-bold">経歴書</h1>
      <div className="mt-14">
        <Button variant="primary" size="large">
          新規作成
        </Button>
      </div>
      <hr className="mt-6"></hr>
      <div className="mt-12 space-y-7">
        {careers.map((career) => (
          <ProjectItem key={career.id} career={career} />
        ))}
      </div>
    </div>
  );
}

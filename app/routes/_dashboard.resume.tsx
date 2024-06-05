import { MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Button from "~/components/elements/button";
import ProjectItem from "~/components/projectItem";
import { getCareers } from "~/data";

export const meta: MetaFunction = () => {
  return [{ title: "Resume" }, { name: "description", content: "Resume Page" }];
};

export const loader = async () => {
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
          <Link className="flex justify-center items-center" to="new">
            新規作成
          </Link>
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

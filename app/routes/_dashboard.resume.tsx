import { MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { collection, getDocs } from "firebase/firestore";
import Button from "~/components/elements/button";
import ProjectItem from "~/components/projectItem";
import { db } from "~/lib/firebaseConfig";
import { Career } from "~/types/career";

export const meta: MetaFunction = () => {
  return [{ title: "Resume" }, { name: "description", content: "Resume Page" }];
};

export const loader = async () => {
  const querySnapshot = await getDocs(collection(db, "careers"));
  const careers: Array<Career> = []; // 型を明示的に指定
  querySnapshot.forEach((doc) => {
    careers.push({ id: doc.id, ...(doc.data() as Omit<Career, "id">) });
  });
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

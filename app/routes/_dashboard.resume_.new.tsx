import { ActionFunctionArgs, redirect } from "@remix-run/node";
import ResumeForm from "~/components/ResumeForm";
import { postCareer } from "~/data";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const career = Object.fromEntries(formData);
  await postCareer({ userId: 1, ...career });

  return redirect("/resume");
};

export default function ResumeNew() {
  return <ResumeForm />;
}

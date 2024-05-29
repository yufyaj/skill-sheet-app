import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  json,
  redirect,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import ResumeForm from "~/components/ResumeForm";
import { getCareer, updateCareer } from "~/data";

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const careerId = params.careerId ?? "0";

  const formData = await request.formData();
  const career = Object.fromEntries(formData);
  await updateCareer({ userId: 1, id: parseInt(careerId), ...career });

  return redirect("/resume");
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.careerId, "Missing contactId param");
  const career = await getCareer({ userId: 1, id: parseInt(params.careerId) });
  if (!career) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ career });
};

export default function ResumeEdit() {
  const { career } = useLoaderData<typeof loader>();
  console.log(career);
  return <ResumeForm career={career} />;
}

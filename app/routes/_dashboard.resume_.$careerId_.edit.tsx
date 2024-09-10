import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  json,
  redirect,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import ResumeForm from "~/components/ResumeForm";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "~/lib/firebaseConfig";
import { Career } from "~/types/career";

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const careerId = params.careerId ?? "0";

  const formData = await request.formData();
  const career = Object.fromEntries(formData);
  await updateDoc(doc(db, "careers", careerId), career);

  return redirect("/resume");
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.careerId, "Missing contactId param");
  const docRef = doc(db, "careers", params.careerId);
  const career = await getDoc(docRef);

  return json({
    career: { id: career.id, ...(career.data() as Omit<Career, "id">) },
  });
};

export default function ResumeEdit() {
  const { career } = useLoaderData<typeof loader>();
  return <ResumeForm career={career} />;
}

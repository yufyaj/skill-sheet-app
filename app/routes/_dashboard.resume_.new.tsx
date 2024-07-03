import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { addDoc, collection } from "firebase/firestore";
import ResumeForm from "~/components/ResumeForm";
import { postCareer } from "~/data";
import { db } from "~/lib/firebaseConfig";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const career = Object.fromEntries(formData);
  await postCareer({ userId: 1, ...career });

  try {
    const docRef = await addDoc(collection(db, "careers"), {
      userId: career.userId,
      title: career.title,
      description: career.description,
    });
    console.log("Document written with ID: ", docRef.id, docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  return redirect("/resume");
};

export default function ResumeNew() {
  return <ResumeForm />;
}

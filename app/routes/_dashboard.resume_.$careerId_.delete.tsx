import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { deleteDoc, doc } from "firebase/firestore";
import invariant from "tiny-invariant";
import { db } from "~/lib/firebaseConfig";

export const action = async ({ params }: ActionFunctionArgs) => {
  invariant(params.careerId, "Missing careerId param");

  const careerId = params.careerId;
  await deleteDoc(doc(db, "careers", careerId));

  return redirect("/resume");
};

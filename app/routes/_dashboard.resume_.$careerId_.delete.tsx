import { ActionFunctionArgs, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import { deleteCareer } from "~/data";

export const action = async ({ params, request }: ActionFunctionArgs) => {
  invariant(params.careerId, "Missing careerId param");

  const careerId = params.careerId;
  const { userId } = Object.fromEntries(await request.formData());

  await deleteCareer({
    userId: parseInt(userId.toString()),
    id: parseInt(careerId),
  });

  return redirect("/resume");
};

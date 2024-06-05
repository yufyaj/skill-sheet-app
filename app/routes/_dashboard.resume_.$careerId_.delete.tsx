import { ActionFunctionArgs, redirect } from "@remix-run/node";

export const action = async ({ params, request }: ActionFunctionArgs) => {
  // const careerId = params.careerId ?? "0";

  // const formData = await request.formData();
  // const career = Object.fromEntries(formData);
  // await updateCareer({ userId: 1, id: parseInt(careerId), ...career });
  console.log("test");
  return redirect("/resume");
};

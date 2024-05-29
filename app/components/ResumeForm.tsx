import { Form, Link } from "@remix-run/react";
import Button from "~/components/elements/button";
import Input from "~/components/elements/input";
import Textarea from "~/components/elements/textarea";
import { Career } from "~/types/career";

type ResumeFormProps = {
  career?: Career;
};
export default function ResumeForm({ career }: ResumeFormProps) {
  return (
    <Form key={career?.id} className="mx-12" method="post">
      <h1 className="text-4xl font-bold mb-16">経歴書</h1>
      <hr />
      <div className="mx-5 mt-12 grid grid-cols-[224px,1fr] h-full space-x-6">
        <div className="bg-accent justify-center font-bold flex items-center text-2xl">
          案件情報
        </div>
        <div className="h-[600px] space-y-8">
          <div className="space-y-4">
            <label className="font-bold text-xl" htmlFor="projectName">
              案件名
            </label>
            <Input
              id="projectName"
              name="title"
              type="text"
              defaultValue={career?.title}
            />
          </div>
          <div className="pt-8 space-y-4 max-w-[320px]">
            <div className="flex items-center justify-between space-x-2">
              <div className="relative">
                <label
                  className="absolute -top-10  font-bold text-xl"
                  htmlFor="start"
                >
                  開始
                </label>
                <Input id="start" name="start" type="date" />
              </div>
              <span>〜</span>
              <div className="relative">
                <label
                  className="absolute -top-10 font-bold text-xl"
                  htmlFor="end"
                >
                  終了
                </label>
                <Input id="end" name="edit" type="date" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <label className="font-bold text-xl" htmlFor="description">
              説明
            </label>
            <Textarea
              id="description"
              name="description"
              className="h-40"
              defaultValue={career?.description}
            />
          </div>
        </div>
      </div>
      <div className="w-fit mx-auto space-x-16 mt-12">
        <Link to="/resume">
          <Button variant="outline" size="large">
            キャンセル
          </Button>
        </Link>
        <Button variant="primary" size="large" type="submit">
          保存
        </Button>
      </div>
    </Form>
  );
}

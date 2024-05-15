import { Form } from "@remix-run/react";
import Button from "~/components/elements/button";
import Input from "~/components/elements/input";
import Textarea from "~/components/elements/textarea";

export default function ResumeNew() {
  return (
    <Form className="mx-12">
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
            <Input id="projectName" type="text" />
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
                <Input id="start" type="date" />
              </div>
              <span>〜</span>
              <div className="relative">
                <label
                  className="absolute -top-10 font-bold text-xl"
                  htmlFor="end"
                >
                  終了
                </label>
                <Input id="end" type="date" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <label className="font-bold text-xl" htmlFor="description">
              説明
            </label>
            <Textarea id="description" className="h-40" />
          </div>
        </div>
      </div>
      <div className="w-fit mx-auto space-x-16 mt-12">
        <Button variant="outline" size="large">
          キャンセル
        </Button>
        <Button variant="primary" size="large">
          新規作成
        </Button>
      </div>
    </Form>
  );
}

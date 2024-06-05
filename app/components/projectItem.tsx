import { Career } from "~/types/career";
import Button from "./elements/button";
import { Form, Link, useSubmit } from "@remix-run/react";
import { AlertDialogDemo } from "./elements/AlertDialog";
import { useState } from "react";

type Props = {
  career: Career;
};
export default function ProjectItem({ career }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const submit = useSubmit();
  const handleClickDelete = () => {
    setIsOpen(!isOpen);
  };

  // dialogの削除決定ボタンを押されたら、submitを実行して、削除アクションを呼ぶようにする
  const handleSubmit = () => {
    submit("");
  };

  return (
    <div className="w-full h-32 py-4 px-8 flex justify-between space-x-8 bg-accent">
      <div className="min-w-[400px] w-full">
        <h3 className="text-lg font-bold">{career.title}</h3>
        <div className="line-clamp-3">{career.description}</div>
      </div>
      <div className="bg-secondary flex flex-col space-y-2">
        <Button variant="primary" size="small">
          <Link
            className="flex justify-center items-center"
            to={`${career.id}/edit`}
          >
            編集
          </Link>
        </Button>
        <Button
          variant="outline"
          size="small"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          削除
        </Button>
      </div>
      <AlertDialogDemo
        title="削除"
        description="削除しますか？"
        isOpen={isOpen}
        onOpenChange={handleClickDelete}
        handleSubmit={handleSubmit}
      />
      <Form
        onSubmit={() => {
          submit(
            { userId: 1, careerId: career.id },
            {
              action: `${career.id}/delete`,
              method: "delete",
            }
          );
        }}
      />
    </div>
  );
}

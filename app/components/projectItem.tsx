import { Career } from "~/types/career";
import Button from "./elements/button";
import { Link } from "@remix-run/react";

type Props = {
  career: Career;
};
export default function ProjectItem({ career }: Props) {
  return (
    <div className="w-full h-32 py-4 px-8 flex justify-between space-x-8 bg-accent">
      <div className="min-w-[400px] w-full">
        <h3 className="text-lg font-bold">{career.title}</h3>
        <div className="line-clamp-3">{career.description}</div>
      </div>
      <div className="bg-secondary flex flex-col space-y-2">
        <Link to={`${career.id}/edit`}>
          <Button variant="primary" size="small">
            編集
          </Button>
        </Link>
        <Button variant="outline" size="small">
          削除
        </Button>
      </div>
    </div>
  );
}

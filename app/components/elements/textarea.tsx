import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
} & React.ComponentProps<"textarea">;

export default function Textarea({ className, ...props }: Props) {
  return (
    <textarea
      {...props}
      className={twMerge(
        "block w-full rounded-lg border-2 border-primary h-40 p-2",
        className
      )}
    />
  );
}

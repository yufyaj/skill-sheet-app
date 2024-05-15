import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
} & React.ComponentProps<"input">;

export default function Input({ className, ...props }: Props) {
  return (
    <input
      {...props}
      className={twMerge(
        "block w-full rounded-lg border-2 border-primary h-10 px-2",
        className
      )}
    />
  );
}

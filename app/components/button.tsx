import { ReactNode } from "react";

type Props = {
  variant: "primary" | "secondary" | "outline";
  size: "large" | "small";
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const getStyle = (variant: Props["variant"]) => {
  switch (variant) {
    case "primary":
      return "bg-primary text-white";
    case "secondary":
      return "bg-secondary text-black";
    case "outline":
      return "bg-transparent border-4 border-primary text-primary";
    default:
      return "bg-primary text-white";
  }
};

export default function Button({ variant, size, children, ...props }: Props) {
  const style = getStyle(variant);
  const sizeStyle =
    size === "large"
      ? "w-[240px] h-[60px] text-2xl p-2"
      : "w-[112px] h-12 font-semibold p-1";
  return (
    <button
      className={`box-border shadow-xl rounded-lg hover:brightness-75 ${style} ${sizeStyle}`}
      {...props}
    >
      {children}
    </button>
  );
}

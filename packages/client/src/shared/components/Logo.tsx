import { cn } from "../lib/tailwind.ts";

interface IProps {
  className?: string;
}

export default function (props: IProps) {
  return (
    <img
      src="/logo.webp"
      alt="logo"
      className={cn("", props.className)}
    />
  );
}

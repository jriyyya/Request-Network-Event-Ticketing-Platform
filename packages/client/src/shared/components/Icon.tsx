import { ChevronDown, MapPin, Search } from "npm:lucide-react";

const icons = { Search, MapPin, ChevronDown };

interface IIconProps {
  name: keyof typeof icons;
  className?: string;
}

export default function (props: IIconProps) {
  const LucideIcon = icons[props.name];

  return <LucideIcon className={props.className} />;
}

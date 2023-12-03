import { useState } from "react";

import "./dropdown.css";
import { Button } from "../components/ui/button";

interface DropdownProps {
  size?: "small" | "medium" | "large";
  label: number;
  quantity: number;
  onClick?: () => void;
}

export const Dropdown = ({
  size = "medium",
  label,
  quantity,
  ...props
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  return <Button className="rounded-none">TEST</Button>;
};

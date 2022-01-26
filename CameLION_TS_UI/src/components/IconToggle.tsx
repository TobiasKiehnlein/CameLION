import { Children, FC, useState } from "react";
import { Button } from "@mui/material";

interface Props {
  onChange: (icon: string) => any;
}

export const IconToggle: FC<Props> = ({ children, onChange }) => {
  const childList = Children.toArray(children);
  console.assert(childList.length > 1, "Provide at least two Icons");
  const [currentIcon, setCurrentIcon] = useState<any>(childList[0]);

  const onIconClick = () => {
    const currentIndex = childList.indexOf(currentIcon);
    const newIcon = childList[(currentIndex + 1) % childList.length];
    console.log(newIcon);
    setCurrentIcon(newIcon);
    onChange("changed");
  };

  return <Button onClick={onIconClick}>{currentIcon}</Button>;
};

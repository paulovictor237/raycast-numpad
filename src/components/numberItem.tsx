import { FC } from "react";
import { ItemField } from "./item";
import { Icon } from "@raycast/api";
import { ContextProps } from "..";

export type Props = {
  id: string;
  context: ContextProps;
};

export const NumberItem: FC<Props> = ({ id, context }) => {
  return (
    <ItemField
      id={id}
      icon={Icon[("Number0" + id) as keyof typeof Icon]}
      title={"Number " + id}
      context={context}
    />
  );
};

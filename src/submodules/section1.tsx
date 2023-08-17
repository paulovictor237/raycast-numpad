import { Grid, Icon } from "@raycast/api";
import { ItemField, ItemProps } from "../components/item";
import { NumberItem } from "../components/numberItem";
import { FC } from "react";
import { ContextProps } from "../hooks/preview";

export type Props = {
  context: ContextProps;
};

export const Section1: FC<Props> = ({ context }) => {
  const extra: ItemProps[] = [
    { id: "=", icon: Icon["ShortParagraph"], title: "Equal" },
    { id: "*", icon: Icon["Multiply"], title: "Multiply" },
    { id: "/", icon: Icon["Italics"], title: "Divide" },
    { id: "save", icon: Icon["Heart"], title: "Save" },
  ];

  return (
    <Grid.Section>
      <NumberItem id="7" context={context} />
      <NumberItem id="8" context={context} />
      <NumberItem id="9" context={context} />
      {extra.map((item) => (
        <ItemField key={item.id} {...item} context={context} />
      ))}
    </Grid.Section>
  );
};

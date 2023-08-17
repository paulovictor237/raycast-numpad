import { Grid, Icon } from "@raycast/api";
import { ItemField, ItemProps } from "../components/item";
import { NumberItem } from "../components/numberItem";
import { ContextProps } from "..";
import { FC } from "react";

export type Props = {
  context: ContextProps;
};

export const Section1: FC<Props> = ({ context }) => {
  const extra: ItemProps[] = [
    { id: "=", icon: Icon["ShortParagraph"], title: "Equal" },
    { id: "*", icon: Icon["Multiply"], title: "Multiply" },
    { id: "/", icon: Icon["Italics"], title: "Divide" },
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

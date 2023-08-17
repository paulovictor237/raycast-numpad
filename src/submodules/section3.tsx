import { Color, Grid, Icon } from "@raycast/api";
import { ItemField, ItemProps } from "../components/item";
import { NumberItem } from "../components/numberItem";
import { ContextProps } from "..";
import { FC } from "react";

export type Props = {
  context: ContextProps;
};

export const Section3: FC<Props> = ({ context }) => {
  const extra: ItemProps[] = [
    { id: "0", icon: Icon["Number00"], title: "Number 0" },
    { id: "c", icon: Icon["Trash"], title: "Clear", color: Color.Red },
    { id: "s", icon: Icon["CheckCircle"], title: "Send", color: Color.Green },
  ];

  return (
    <Grid.Section>
      <NumberItem id="1" context={context} />
      <NumberItem id="2" context={context} />
      <NumberItem id="3" context={context} />
      {extra.map((item) => (
        <ItemField key={item.id} {...item} context={context} />
      ))}
    </Grid.Section>
  );
};

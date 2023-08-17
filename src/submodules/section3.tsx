import { Color, Grid, Icon } from "@raycast/api";
import { ItemField, ItemProps } from "../components/item";
import { NumberItem } from "../components/numberItem";
import { FC } from "react";
import { ContextProps } from "../hooks/preview";

export type Props = {
  context: ContextProps;
};

export const Section3: FC<Props> = ({ context }) => {
  const extra: ItemProps[] = [
    { id: "0", icon: Icon["Number00"], title: "Number 0" },
    { id: "undo", icon: Icon["Undo"], title: "Undo" },
    { id: "clean", icon: Icon["Trash"], title: "Clear", color: Color.Red },
    {
      id: "finish",
      icon: Icon["CheckCircle"],
      title: "Send",
      color: Color.Green,
    },
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

import { Grid, Icon } from "@raycast/api";
import { ItemField, ItemProps } from "../components/item";
import { NumberItem } from "../components/numberItem";
import { ContextProps } from "..";
import { FC } from "react";

export type Props = {
  context: ContextProps;
};

export const Section2: FC<Props> = ({ context }) => {
  const extra: ItemProps[] = [
    { id: ".", icon: Icon["CircleProgress100"], title: "Point" },
    { id: "-", icon: Icon["Minus"], title: "Minus" },
    { id: "+", icon: Icon["Plus"], title: "Plus" },
  ];

  return (
    <Grid.Section>
      <NumberItem id="4" context={context} />
      <NumberItem id="5" context={context} />
      <NumberItem id="6" context={context} />
      {extra.map((item) => (
        <ItemField key={item.id} {...item} context={context} />
      ))}
    </Grid.Section>
  );
};
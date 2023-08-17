import { Grid } from "@raycast/api";
import { FC } from "react";

export type Props = {
  preview: string;
  historic: string[];
};

export const Dropdown: FC<Props> = ({ preview }) => {
  return (
    <Grid.Dropdown tooltip="Grid Item Size">
      <Grid.Dropdown.Section title="Current">
        <Grid.Dropdown.Item title={preview} value={preview} />
      </Grid.Dropdown.Section>
      <Grid.Dropdown.Section title="Historic">
        <Grid.Dropdown.Item title="Two" value="two" />
      </Grid.Dropdown.Section>
    </Grid.Dropdown>
  );
};

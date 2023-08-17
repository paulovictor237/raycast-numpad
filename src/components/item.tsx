import { Grid, Color, ActionPanel, Action, Icon } from "@raycast/api";
import { FC } from "react";
import { ContextProps } from "..";

export type ItemProps = {
  id: string;
  icon: Icon;
  title: string;
  color?: Color;
  context?: ContextProps;
};

export const ItemField: FC<ItemProps> = (item) => {
  return (
    <Grid.Item
      id={item.id}
      keywords={[item.id]}
      content={{
        value: {
          source: item.icon,
          tintColor: item.color ?? Color.PrimaryText,
        },
        tooltip: item.title,
      }}
      actions={
        <ActionPanel>
          <Action
            title="Push"
            onAction={() => item.context?.onAction(item.id)}
          />
          <Action
            title="Paste"
            shortcut={{ modifiers: ["cmd"], key: "enter" }}
            onAction={item.context?.onSubmit}
          />
          <Action
            title="Copy"
            shortcut={{ modifiers: ["cmd", "shift"], key: "enter" }}
            onAction={item.context?.copyAndClose}
          />
        </ActionPanel>
      }
    />
  );
};

import { useEffect, useState } from "react";
import { Grid } from "@raycast/api";
import { Section1 } from "./submodules/section1";
import { Section2 } from "./submodules/section2";
import { Section3 } from "./submodules/section3";
import { Dropdown } from "./components/dropdown";
import { usePreview } from "./hooks/preview";

// options
// permitir paste
// enviar apenas com dois cliques
// colocar hook de update asynrono pra n travar as teclas

type Symbols1 = "7" | "8" | "9" | "=" | "*" | "/" | "save";
type Symbols2 = "4" | "5" | "6" | "." | "-" | "+" | "unSave";
type Symbols3 = "1" | "2" | "3" | "0" | "undo" | "clean" | "finish";

export type Symbols = Symbols1 | Symbols2 | Symbols3;

export default function Command() {
  const [selection, setSelection] = useState<Symbols | null>();
  const context = usePreview();

  useEffect(() => {
    if (selection) context.onAction(selection);
  }, [selection]);

  return (
    <Grid
      columns={7}
      fit={Grid.Fit.Fill}
      inset={Grid.Inset.Large}
      selectedItemId="finish"
      onSelectionChange={(i) => setSelection(i as Symbols)}
      searchBarAccessory={<Dropdown preview={context.preview} />}
    >
      <Section1 context={context} />
      <Section2 context={context} />
      <Section3 context={context} />
    </Grid>
  );
}

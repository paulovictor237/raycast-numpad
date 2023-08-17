import { useEffect, useState } from "react";
import { Clipboard, Grid, closeMainWindow, showHUD } from "@raycast/api";
import { Section1 } from "./submodules/section1";
import { Section2 } from "./submodules/section2";
import { Section3 } from "./submodules/section3";
import { Dropdown } from "./components/dropdown";

// options
// permitir paste
// enviar apenas com dois cliques

export type ContextProps = {
  onSubmit: () => void;
  copyAndClose: () => void;
  onAction: (input: string) => void;
};

export default function Command() {
  const [preview, setPreview] = useState("");
  const [selection, setSelection] = useState<string | null>();

  const onSubmit = async () => {
    if (!preview.length) return;
    setPreview("");
    await Clipboard.copy(preview);
    await Clipboard.paste(preview);
    await showHUD("Copied date to clipboard");
  };

  const clear = () => {
    setPreview("");
  };

  const onAction = (input: string) => {
    switch (input) {
      case "c":
        return clear();
      case "s":
        return onSubmit();
      default:
        setPreview((p) => p + input);
    }
  };

  const copyAndClose = async () => {
    setPreview("");
    await Clipboard.copy(preview);
    await closeMainWindow({ clearRootSearch: true });
  };

  const context: ContextProps = {
    onSubmit,
    copyAndClose,
    onAction,
  };

  useEffect(() => {
    if (selection) onAction(selection);
  }, [selection]);

  return (
    <Grid
      columns={20}
      fit={Grid.Fit.Fill}
      inset={Grid.Inset.Large}
      selectedItemId="s"
      onSelectionChange={setSelection}
      searchBarAccessory={<Dropdown preview={preview} />}
    >
      <Section1 context={context} />
      <Section2 context={context} />
      <Section3 context={context} />
    </Grid>
  );
}

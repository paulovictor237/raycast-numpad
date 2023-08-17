import { Clipboard, showHUD, closeMainWindow } from "@raycast/api";
import { useState } from "react";
import { Symbols } from "..";
import { useHistoric } from "./historic";

export type ContextProps = {
  preview: string;
  onSubmit: () => void;
  copyAndClose: () => void;
  onAction: (input: Symbols) => void;
};

export const usePreview = (): ContextProps => {
  const [preview, setPreview] = useState("");
  const { historic, save, unSave } = useHistoric();

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

  const undo = () => {
    setPreview((p) => p.slice(0, -1));
  };

  const onAction = (input: Symbols) => {
    switch (input) {
      case "clean":
        return clear();
      case "finish":
        return onSubmit();
      case "undo":
        return undo();
      case "save":
        return save(preview);
      case "unSave":
        return unSave(preview);
      default:
        setPreview((p) => p + input);
    }
  };

  const copyAndClose = async () => {
    setPreview("");
    await Clipboard.copy(preview);
    await closeMainWindow({ clearRootSearch: true });
  };

  return {
    preview,
    onSubmit,
    copyAndClose,
    onAction,
  };
};

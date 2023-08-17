import { LocalStorage } from "@raycast/api";

const key = "Numpad-Saves";

export const savePreview = async (itens: string[]) => {
  await LocalStorage.setItem(key, JSON.stringify(itens));
};
export const removePreview = async () => {
  await await LocalStorage.removeItem(key);
};
export const getSavePreview = async () => {
  const itens = await LocalStorage.getItem<string>(key);
  return JSON.parse(itens ?? "[]");
};

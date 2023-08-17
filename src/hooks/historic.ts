import { useState, useEffect } from "react";
import { getSavePreview, savePreview } from "../services/storage";

export const useHistoric = () => {
  const [historic, setHistoric] = useState<string[]>([]);
  console.log("🐞 ~ historic:", historic);

  const save = (input: string) => {
    const repeated = historic.find((i) => i === input);
    if (repeated || input.length === 0) return;
    setHistoric((p) => [...p, input]);
  };
  const unSave = (input: string) => {
    setHistoric((p) => p.filter((item) => item !== input));
  };

  const setOldData = async () => {
    const data = await getSavePreview();
    setHistoric(data);
  };

  useEffect(() => {
    setOldData();
  }, []);

  useEffect(() => {
    savePreview(historic);
  }, [historic]);

  return { historic, save, unSave };
};

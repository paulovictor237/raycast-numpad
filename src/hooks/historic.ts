import { useState, useEffect } from "react";
import { getStorageKey, storeKey } from "../services/storage";

export const useHistoric = () => {
  const [historic, setHistoric] = useState<string[]>([]);

  const save = (input: string) => {
    const repeated = historic.find((i) => i === input);
    if (repeated || input.length === 0) return;
    setHistoric((p) => [...p, input]);
  };

  const unSave = (input: string) => {
    setHistoric((p) => p.filter((item) => item !== input));
  };

  const setOldData = async () => {
    const data = await getStorageKey();
    setHistoric(data);
  };

  const deleteAllSaves = () => setHistoric([]);

  useEffect(() => {
    setOldData();
  }, []);

  useEffect(() => {
    storeKey(historic);
  }, [historic]);

  return { historic, save, unSave, deleteAllSaves };
};

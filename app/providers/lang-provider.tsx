"use client";

import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

type LangType = {
  lang: string;
  setLang: Dispatch<SetStateAction<string>>;
};

export const LangContext = createContext({} as LangType);

export default function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState("tsx");

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

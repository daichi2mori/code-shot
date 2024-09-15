import { create } from "zustand";

type State = {
  lang: string;
}

type Action = {
  setLang: (lang: string) => void;
}

export const useLangSelector = create<State & Action>()((set) => ({
  lang: "tsx",
  setLang: (lang) => set(() => ({ lang: lang }))
}))

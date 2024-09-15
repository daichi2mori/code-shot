"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { bundledLanguagesInfo } from "shiki";
import { useLangSelector } from "../store/lang-store";

const LangSelector = () => {
  const lang = useLangSelector((state) => state.lang)
  const setLang = useLangSelector((state) => state.setLang)

  return (
    <Select defaultValue={lang} onValueChange={(value) => setLang(value)}>
      <SelectTrigger className="w-36 rounded-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {bundledLanguagesInfo.map((item) => (
            <SelectItem key={item.id} value={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LangSelector;

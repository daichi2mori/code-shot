"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContext } from "react";
import { bundledLanguagesInfo } from "shiki";
import { LangContext } from "../providers/lang-provider";

const LangSelector = () => {
  const { lang, setLang } = useContext(LangContext);

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

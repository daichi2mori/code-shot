"use client";

import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Check, ChevronsUpDown } from "lucide-react"
import { bundledLanguagesInfo } from "shiki";
import { useLangSelector } from "../store/lang-store";
import { cn } from "@/lib/utils"

const LangSelector = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("TSX")
  const lang = useLangSelector((state) => state.lang)
  const setLang = useLangSelector((state) => state.setLang)

  return (
    <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className="w-[150px] justify-between rounded-full"
      >
        {value}
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-[200px] p-0">
      <Command>
        <CommandInput placeholder="Search lang..." />
        <CommandList>
          <CommandEmpty>No lang found.</CommandEmpty>
          <CommandGroup>
            {bundledLanguagesInfo.map((item) => (
              <CommandItem
                key={item.id}
                value={item.id}
                onSelect={(currentValue) => {
                  setLang(currentValue)
                  setValue(item.name)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    lang === item.name ? "opacity-100" : "opacity-0"
                  )}
                />
                {item.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
  );
};

export default LangSelector;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const EditorHeader = () => {
  return (
    <div className="grid grid-cols-[5rem_1fr_5rem] px-5 pt-3">
      <div className="grid grid-flow-col items-center justify-start gap-2">
        <div className="h-3 w-3 rounded-full bg-[#EC6A5E]"></div>
        <div className="h-3 w-3 rounded-full bg-[#F3BF4F]"></div>
        <div className="h-3 w-3 rounded-full bg-[#61C554]"></div>
      </div>
      <div className="flex items-center justify-center gap-3 hidden">
        <Button variant="secondary" className="h-auto px-2 py-1 text-xs font-light">
          Select icon
        </Button>
        <Input
          placeholder="example.js"
          className="h-6 w-auto text-xs focus-visible:ring-transparent"
        />
      </div>
    </div>
  );
};

export default EditorHeader;

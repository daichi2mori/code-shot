"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { domToDataUrl, type Options } from "modern-screenshot";

const options: Options = {
  scale: 2,
  features: {
    removeControlCharacter: false,
  },
};

const generateImage = async () => {
  const element = document.getElementById("canvas")!;
  const width = element.offsetWidth;
  const height = element.offsetHeight;

  if (width && height && height * (16 / 9) > width) {
    element.style.width = `${height * (16 / 9)}px`;
  }

  const result = await domToDataUrl(element, options);

  return result;
};

const DownloadButton = () => {
  const downloadImage = async () => {
    const link = document.createElement("a");
    link.download = "screenshot.png";
    link.href = await generateImage();
    link.click();
  };

  return (
    <Button size="icon" onClick={downloadImage} className="rounded-full">
      <Download size={20} />
      <span className="sr-only">Download Image</span>
    </Button>
  );
};

export default DownloadButton;

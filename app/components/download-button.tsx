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
    element.style.maxWidth = "none";
  }

  const result = await domToDataUrl(element, options);

  if (width < 768) {
    element.style.width = "100%";
    element.style.maxWidth = "700px";
  } else if (width < 1024) {
    element.style.width = "100%";
    element.style.maxWidth = "1000px";
  }

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

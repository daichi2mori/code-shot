"use client";

import {
  type KeyboardEventHandler,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import EditorHeader from "./editor-header";
import { LangContext } from "../providers/lang-provider";
import { codeToHtml } from "shiki/bundle/web";

const Editor = () => {
  const [value, setValue] = useState("");
  const [html, setHtml] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { lang } = useContext(LangContext);

  const handleHotKey: KeyboardEventHandler<HTMLTextAreaElement> = useCallback((e) => {
    const shiftKey = e.shiftKey;
    const textarea = e.target as HTMLTextAreaElement;
    const val = textarea.value;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const tabSize = 2;

    if (e.key === "Tab") {
      e.preventDefault();

      if (shiftKey) {
        if (val.substring(start - tabSize, start) === " ".repeat(tabSize)) {
          textarea.value = val.substring(0, start - tabSize) + val.substring(start);
          textarea.selectionStart = textarea.selectionEnd = start - tabSize;
        }
      } else {
        textarea.value = val.substring(0, start) + " ".repeat(tabSize) + val.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + tabSize;
      }

      textarea.dispatchEvent(new Event("input"));
    }
  }, []);

  useEffect(() => {
    codeToHtml(value, {
      lang,
      themes: {
        dark: "dark-plus",
        light: "dark-plus",
      },
      defaultColor: false,
      meta: {
        tabindex: "-1",
      },
    }).then((res) => setHtml(res));
  }, [value, lang]);

  const resize = useCallback((el: HTMLTextAreaElement) => {
    requestAnimationFrame(() => {
      el.style.height = "20px";
      el.style.height = el.scrollHeight + "px";
    });
  }, []);

  useEffect(() => {
    if (textareaRef.current) {
      resize(textareaRef.current);
    }
  }, [value, resize]);

  return (
    <div
      id="canvas"
      className="aspect-video w-full grid place-items-center bg-gradient-to-r from-sky-500 to-indigo-500"
    >
      <div className="w-10/12 bg-black/85 rounded-md">
        <EditorHeader />
        <div className="w-full px-6 pt-6 pb-8 grid font-mono leading-5">
          <textarea
            autoFocus
            ref={textareaRef}
            value={value}
            spellCheck="false"
            className="editor"
            onKeyDown={handleHotKey}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <div className="formatted" dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
      </div>
    </div>
  );
};

export default Editor;

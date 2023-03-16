import { useState } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

export const NoteEditor = ({
  onSave,
}: {
  onSave: (note: { title: string; content: string }) => void;
}) => {
  const [title, setTitle] = useState<string>("");
  const [code, setCode] = useState<string>("");

  return (
    <div className="border-solid">
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="Note Title"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Note Title
        </label>
        <input
          type="text"
          name="Note Title"
          className="mt-2 block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <CodeMirror
          value={code}
          width="100%"
          height="100%"
          minHeight="30vh"
          minWidth="100%"
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
          onChange={(value) => setCode(value)}
          className="mt-2 block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            onSave({ title, content: code });
            setTitle("");
            setCode("");
          }}
          className="m-2 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          disabled={title.trim().length === 0 || code.trim().length === 0}
        >
          Save
        </button>
      </div>
    </div>
  );
};

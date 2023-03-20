import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { type RouterOutputs } from "../utils/api";

type Note = RouterOutputs["note"]["getAll"][0];

export const NoteCard = ({
  note,
  onDelete,
}: {
  note: Note;
  onDelete: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <div className="mt-2 block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      <div className="flex justify-between">
        <div className="text-xl font-bold">{note.title}</div>
        <div className="">
          <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
            <ReactMarkdown>{note.content}</ReactMarkdown>
          </article>
        </div>
      </div>
      <div className="card-actions mx-2 flex justify-end">
        <button className="m-2 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={onDelete}>
          Delete</button>
      </div>
    </div>
  );
};

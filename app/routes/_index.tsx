import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { CustomDialog } from "~/components/custom-dialog";
import { CurrentFileContextLayout } from "~/utils/context/use-context-helper";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(true);
  }

  return (
    <div className="p-4 font-sans">
      <div className="flex items-center justify-center">
        <span className="rounded-md bg-black p-2 text-3xl text-white">
          React File Viewer
        </span>
      </div>

      <button
        type="button"
        className="rounded-md bg-black p-2 text-xl text-white"
        onClick={handleClick}
        title="Open Dialog"
      >
        Open Dialog
      </button>

      <CurrentFileContextLayout>
        <CustomDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      </CurrentFileContextLayout>
    </div>
  );
}

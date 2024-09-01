// External Dependencies
import { useContext } from "react";

// Internal Dependencies
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "~/components/custom-dialog/custom-dialog-base";
import { CurrentFileContext } from "~/utils/context/use-context-helper";
import { documentArray } from "~/utils/data";
import { CustomCarousel } from "../custom-carousel";
import { CustomFileHeader } from "../custom-file-header";

interface CustomDialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomDialog = ({ isOpen, setIsOpen }: CustomDialogProps) => {
  const { setCurrentFile } = useContext(CurrentFileContext);

  return (
    <Dialog
      onOpenChange={() => {
        setCurrentFile(documentArray[0]);
        setIsOpen(false);
      }}
      open={isOpen}
    >
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent>
        <CustomFileHeader documentArray={documentArray} />
        <DialogHeader>
          <CustomCarousel />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export { CustomDialog };

// External Dependencies
import { useContext } from "react";

// Internal Dependencies
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  VisuallyHidden,
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
      <DialogContent>
        <CustomFileHeader documentArray={documentArray} />
        <DialogHeader>
          <VisuallyHidden.Root>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
          </VisuallyHidden.Root>
          <CustomCarousel />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export { CustomDialog };

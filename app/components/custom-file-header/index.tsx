// External Dependencies
import { useContext, useEffect } from "react";

// Internal Dependencies
import { CurrentFileContext } from "~/utils/context/use-context-helper";
import {
  CustomFileHeaderLayout,
  FileDownloadButton,
  FileNameLayout,
  FileNumber,
} from "./custom-file-header-components";
import { DocumentFileType } from "~/utils/types";
import { getFileNameFromFileURL } from "~/utils/helper-functions/file-name-helpers";

const CustomFileHeader = ({
  documentArray,
}: {
  documentArray: DocumentFileType[];
}) => {
  const { currentFile, currentFileNumber, setCurrentFile } =
    useContext(CurrentFileContext);

  // console.log("currentFile :>> ", currentFile);
  // console.log("currentFileNumber :>> ", currentFileNumber);

  const totalDocuments = documentArray?.length;
  const fileName = getFileNameFromFileURL(currentFile?.documentUrl);

  useEffect(() => {
    if (!currentFile) {
      setCurrentFile(documentArray[0]);
    }
  }, [currentFile, documentArray, setCurrentFile]);

  return (
    <div className="absolute -top-14 z-50 w-full bg-[#212121] p-2">
      <CustomFileHeaderLayout>
        <FileNameLayout file={currentFile} fileName={fileName}>
          {fileName}
        </FileNameLayout>

        <FileNumber>
          Document {currentFile?.id} of {totalDocuments}
        </FileNumber>
        <FileDownloadButton documentUrl={currentFile?.documentUrl} />
      </CustomFileHeaderLayout>
    </div>
  );
};

export { CustomFileHeader };

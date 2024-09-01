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

  useEffect(() => {
    if (!currentFile) {
      setCurrentFile(documentArray[0]);
    }
  }, [currentFile, documentArray, setCurrentFile]);

  return (
    <div className="absolute left-0 right-0 top-0 z-50 bg-[#212121] p-2">
      <CustomFileHeaderLayout>
        <FileNameLayout file={currentFile}>
          {`${currentFile?.documentName}.${currentFile?.documentType}`}
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

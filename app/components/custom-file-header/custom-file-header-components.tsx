// External Dependencies
import { FiDownload } from "react-icons/fi";
import { MdPhoto } from "react-icons/md";
import { BiSolidFilePdf } from "react-icons/bi";

// Internal Dependencies
import { cnm } from "~/utils/class-name-helpers";
import { DocumentTypeExtension, FileNameLayoutProps } from "~/utils/types";

const FileName = ({ children, className }: React.ComponentProps<"span">) => {
  return (
    <span className={cnm("text-lg font-medium text-white", className)}>
      {children}
    </span>
  );
};

const FileIcon = ({
  documentType,
}: {
  documentType: DocumentTypeExtension;
}) => {
  return String(documentType) === "pdf" ? (
    <BiSolidFilePdf className="text-2xl text-red-500" />
  ) : (
    <MdPhoto className="text-2xl text-red-500" />
  );
};

const FileNameLayout = ({ className, children, file }: FileNameLayoutProps) => {
  return (
    <div className={cnm("flex items-center gap-x-2", className)}>
      <FileIcon documentType={file?.documentType} />
      <FileName>{children}</FileName>
    </div>
  );
};

const FileNumber = ({ children, className }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cnm(
        "rounded-full bg-[#404040] p-2 px-4 text-[#EAEAEA]",
        className,
      )}
    >
      <span className="max-w-fit">{children}</span>
    </div>
  );
};

const FileDownloadButton = ({ documentUrl }: { documentUrl: string }) => {
  return (
    <a
      href={documentUrl}
      className="flex max-w-fit items-center gap-x-2 rounded-full bg-blue-300 p-2 px-4"
      target="_blank"
      rel="noreferrer"
      title="Download"
    >
      <FiDownload className="text-xl" />
      <span>Download</span>
    </a>
  );
};

const CustomFileHeaderLayout = ({
  className,
  children,
}: React.ComponentProps<"div">) => {
  return (
    <div className={cnm("flex items-center justify-between", className)}>
      {children}
    </div>
  );
};

export {
  CustomFileHeaderLayout,
  FileDownloadButton,
  FileIcon,
  FileName,
  FileNameLayout,
  FileNumber,
};

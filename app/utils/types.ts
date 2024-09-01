export type DocumentTypeExtension = "pdf" | "jpg" | "png";

export interface DocumentFileType {
  documentName: string;
  documentType: DocumentTypeExtension;
  documentUrl: string;
  id: number;
}

export interface ImageStateType {
  rotate: number;
  scale: number;
}

export interface ImageStateActionType {
  type: "zoom-in" | "zoom-out" | "rotate-right" | "rotate-left" | "reset";
}

export interface FileNameLayoutProps extends React.ComponentProps<"div"> {
  file: DocumentFileType;
}

export type ImageDispatchActionType = React.Dispatch<ImageStateActionType>;

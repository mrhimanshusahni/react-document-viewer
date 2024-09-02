export const getFileNameFromFileURL = (fileName: string = "") => {
  const documentName = fileName?.split("/")?.at(-1);
  return documentName ?? "N/A";
};
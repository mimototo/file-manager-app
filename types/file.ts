export type FileType = {
  id: string;
  name: string;
  type: "file" | "folder";
  size?: string;
  lastModified: string;
  status?: "uploading" | "downloading";
  children?: FileType[];
};

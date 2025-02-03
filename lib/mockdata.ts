import { FileType } from "@/types/file";

export const mockLocalFiles: FileType[] = [
  {
    id: "1",
    name: "foo",
    type: "folder",
    lastModified: "2024/07/03 23:00",
    children: [
      {
        id: "1-1",
        name: "bar",
        type: "folder",
        lastModified: "2024/07/03 23:00",
        children: [
          {
            id: "1-1-1",
            name: "2000",
            type: "folder",
            lastModified: "2024/07/03 23:00",
            children: [
              {
                id: "1-1-1-1",
                name: "sample",
                type: "folder",
                lastModified: "2024/07/03 23:00",
                children: [
                  {
                    id: "1-1-1-1-1",
                    name: "sample.tar",
                    type: "file",
                    size: "100GB",
                    lastModified: "2024/07/02 16:56",
                    status: "uploading",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "sample.tar.gz",
    type: "file",
    size: "1.5TB",
    lastModified: "2024/07/01 23:23",
  },
  {
    id: "3",
    name: "longlongname.tar.gz",
    type: "file",
    size: "2.5TB",
    lastModified: "2024/07/03 20:51",
  },
];

export const mockRemoteFiles: FileType[] = [
  {
    id: "r1",
    name: "data",
    type: "folder",
    lastModified: "2024/07/03 23:00",
    children: [
      {
        id: "r1-1",
        name: "em",
        type: "folder",
        lastModified: "2024/07/03 23:00",
        children: [
          {
            id: "r1-1-1",
            name: "2022",
            type: "folder",
            lastModified: "2024/07/03 23:00",
            children: [
              {
                id: "r1-1-1-1",
                name: "20220926_Riken",
                type: "folder",
                lastModified: "2024/07/03 23:00",
                children: [
                  {
                    id: "r1-1-1-1-1",
                    name: "sample.tar",
                    type: "file",
                    size: "100GB",
                    lastModified: "2024/07/02 16:56",
                    status: "downloading",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "r2",
    name: "sample.tar.gz",
    type: "file",
    size: "1.5TB",
    lastModified: "2024/07/01 23:23",
  },
  {
    id: "r3",
    name: "20220926_Riken.proc-4.cr...",
    type: "file",
    size: "2.5TB",
    lastModified: "2024/07/03 20:51",
  },
];

import { FileType } from "@/types/file";
import { Description, Folder } from "@mui/icons-material";
import {
  Box,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";
import React from "react";

interface FileTreeProps {
  files: FileType[];
}

// ファイルツリーのヘッダー部分
const TableHeader = () => (
  <TableHead>
    <TableRow>
      <TableCell>ファイル/フォルダ名</TableCell>
      <TableCell>サイズ</TableCell>
      <TableCell>更新日時</TableCell>
      <TableCell>状態</TableCell>
    </TableRow>
  </TableHead>
);

// 個別のファイル/フォルダ行のレンダリング
const FileRow = ({ file }: { file: FileType }) => (
  <TableRow>
    <TableCell>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {file.type === "folder" ? (
          <Folder color="primary" fontSize="small" />
        ) : (
          <Description fontSize="small" />
        )}
        <Typography variant="body2">{file.name}</Typography>
      </Box>
    </TableCell>
    <TableCell>
      <Typography variant="body2">{file.size || "-"}</Typography>
    </TableCell>
    <TableCell>
      <Typography variant="body2">{file.lastModified}</Typography>
    </TableCell>
    <TableCell>
      {file.status && (
        <Box sx={{ width: "100%" }}>
          <Typography variant="body2" color="primary">
            {file.status === "uploading" ? "アップロード中" : "ダウンロード中"}
          </Typography>
          <LinearProgress />
        </Box>
      )}
    </TableCell>
  </TableRow>
);

// 再帰的にTreeItemをレンダリング
const renderTree = (node: FileType) => (
  <TreeItem key={node.id} itemId={node.id} label={<FileRow file={node} />}>
    {Array.isArray(node.children)
      ? node.children.map((child) => renderTree(child))
      : null}
  </TreeItem>
);

const FileTree: React.FC<FileTreeProps> = ({ files }) => {
  return (
    <Table size="small">
      <TableHeader />
      <TableBody>
        <SimpleTreeView
          // defaultCollapseIcon={<ExpandMore />}
          // defaultExpandIcon={<ChevronRight />}
          // onNodeSelect={(event: React.SyntheticEvent, nodeId: string) => {
          //   onNodeSelect?.(nodeId);
          // }}
          sx={{
            ".MuiTreeItem-content": {
              padding: 0,
              ".MuiTreeItem-label": {
                width: "100%",
              },
            },
          }}
        >
          {files.map((file) => renderTree(file))}
        </SimpleTreeView>
      </TableBody>
    </Table>
  );
};

export default FileTree;

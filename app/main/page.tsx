import FileTree from "@/components/FileTree";
import { mockLocalFiles, mockRemoteFiles } from "@/lib/mockdata";
import { CreateNewFolder, Delete, Refresh, Upload } from "@mui/icons-material";
import { Box, IconButton, Paper, Typography } from "@mui/material";

const FTPClient = () => {
  return (
    <>
      <Box sx={{ display: "flex", flex: 1, p: 2, gap: 2 }}>
        {/* ローカルファイル */}
        <Box sx={{ flex: 1 }}>
          <Paper sx={{ height: "100%" }}>
            <Box sx={{ p: 1, borderBottom: 1, borderColor: "divider" }}>
              <Typography variant="subtitle1">オンプレサーバー</Typography>
              <Box sx={{ display: "flex", gap: 1, my: 1 }}>
                <IconButton size="small">
                  <Refresh />
                </IconButton>
                <IconButton size="small">
                  <Upload />
                </IconButton>
                <IconButton size="small">
                  <CreateNewFolder />
                </IconButton>
                <IconButton size="small">
                  <Delete />
                </IconButton>
              </Box>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                /foo/bar/2000
              </Typography>
            </Box>
            <FileTree files={mockLocalFiles} />
          </Paper>
        </Box>

        {/* リモートファイル */}
        <Box sx={{ flex: 1 }}>
          <Paper sx={{ height: "100%" }}>
            <Box sx={{ p: 1, borderBottom: 1, borderColor: "divider" }}>
              <Typography variant="subtitle1">CSI AWS S3</Typography>
              <Box sx={{ display: "flex", gap: 1, my: 1 }}>
                <IconButton size="small">
                  <Refresh />
                </IconButton>
                <IconButton size="small">
                  <Upload />
                </IconButton>
                <IconButton size="small">
                  <CreateNewFolder />
                </IconButton>
                <IconButton size="small">
                  <Delete />
                </IconButton>
              </Box>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                s3://chugai-research-cryoem-archive
              </Typography>
            </Box>
            <FileTree files={mockRemoteFiles} />
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default FTPClient;

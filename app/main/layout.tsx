"use client";

import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* ヘッダー */}
      <AppBar position="static" sx={{ backgroundColor: "#2f3241" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6">クライオ電顕データ管理システム</Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">ステータス管理</Button>
            <Button color="inherit">ログアウト</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
}

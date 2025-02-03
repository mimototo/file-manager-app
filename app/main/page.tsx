"use client";

import { Box, Container, Typography } from "@mui/material";

export default function MainPage() {
  return (
    <Container>
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          メイン画面へようこそ
        </Typography>
      </Box>
    </Container>
  );
}

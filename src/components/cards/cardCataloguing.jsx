"use client";
// MUI Components
import { Typography, Card, CardContent, IconButton, Box } from "@mui/material";

// Next Components
import Link from "next/link";

export default function CardCataloguing({ name, link, Icon }) {
  return (
    <Card
      sx={{
        width: 230,
      }}
    >
      <Link href={link}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ textAlign: "center" }}>
            {name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <IconButton color="primary">
              <Icon sx={{ fontSize: 50 }} />
            </IconButton>
          </Box>
        </CardContent>
      </Link>
    </Card>
  );
}

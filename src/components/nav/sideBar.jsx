"use client";
// MUI Components
import MuiDrawer from "@mui/material/Drawer";
import {
  Box,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material/";

// MUI Icons
import { LocalLibrary, DashboardCustomize, Home, PersonAdd } from "@mui/icons-material/";

// MUI Styles
import { styled } from "@mui/material/styles";

// Next Components
import Link from "next/link";

// Providers BiblioKeia
import { useProgress } from "src/providers/progress";

import { usePathname } from "next/navigation";

const drawerWidth = 260;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: "60px",
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const menuLinks = [
  { href: "/admin", label: "Inicio", icon: <Home /> },
  { href: "/admin/authority", label: "Autoridades", icon: <PersonAdd />  },
  { href: "/admin/cataloguing", label: "Catalogação", icon: <DashboardCustomize />  },
];

export default function SideBar({ open }) {
  const { initProgress } = useProgress();
  const pathname = usePathname();

  const styleMenu = {
    borderRadius: "6px",
    mx: "0.5rem",
    pl: "0.5rem",
    ":hover": { backgroundColor: "hover.background" },
  };
  const styleMenuActive = {
    borderRadius: "6px",
    mx: "0.5rem",
    pl: "0.5rem",
    backgroundColor: "hover.background",
    ":hover": { backgroundColor: "hover.background" }
  };
  return (
    <Drawer variant="permanent" open={open}>
      <Box
        sx={{
          minHeight: "60px",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "flex-start",
          pl: "16px",
          fontWeight: 600,
        }}
      >
        <LocalLibrary color="primary" sx={{ fontSize: 35 }} />
        <Typography
          variant="h6"
          gutterBottom
          sx={{ mb: 0, mt: "0.5rem", fontWeight: 600 }}
        >
          BiblioKeia
        </Typography>
      </Box>
      <MenuList sx={{display: "flex", flexDirection: "column", gap: "8px"}}>
        {menuLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link href={link.href} key={link.label}>
              <MenuItem sx={isActive ? styleMenuActive : styleMenu}>
                <ListItemIcon>
                  {link.icon}
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 400,
                      fontSize: "0.9rem",
                      lineHeight: 1.3,
                      ml: "0.5rem",
                    }}
                  >
                    {link.label}
                  </Typography>
                </ListItemText>
              </MenuItem>
            </Link>
          );
        })}

      </MenuList>
    </Drawer>
  );
}

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Container, Content, DrawerHeader, Title, UserName } from "./style";
import OptionsMenuClient from "../OptionsMenuClient";
import { useUserContext } from "../../contexts/userContext/UserContext";

const Layout = (props) => {
  const { userContextState } = useUserContext();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            onClick={handleDrawerOpen}
            color="inherit"
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Title>Home</Title>
        </Toolbar>
      </AppBar>
      <Content>{props.children}</Content>
      <Drawer anchor="left" open={open} onClose={() => handleDrawerOpen()}>
        <DrawerHeader>
          <Avatar alt="Cindy Baker" src={userContextState.avatar} />
          <UserName>{userContextState.name}</UserName>
          <IconButton onClick={() => handleDrawerOpen()}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box
          role="presentation"
          sx={{ width: 250 }}
          onClick={() => handleDrawerOpen()}
          onKeyDown={() => handleDrawerOpen()}
        >
          <OptionsMenuClient />
        </Box>
      </Drawer>
    </Container>
  );
};

export default Layout;

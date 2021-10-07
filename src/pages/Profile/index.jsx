import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import MessageIcon from "@mui/icons-material/Message";
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
import {
  Container,
  Content,
  DrawerHeader,
  ItemBar,
  ListBar,
  Title,
  UserName,
} from "./style";

const Profile = () => {
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
      <Content>
        <h1>Hello World</h1>
      </Content>
      <Drawer anchor="left" open={open} onClose={() => handleDrawerOpen()}>
        <DrawerHeader>
          <Avatar
            alt="Cindy Baker"
            src="https://cdn.pixabay.com/photo/2016/03/31/19/57/avatar-1295404_960_720.png"
          />
          <UserName>Username</UserName>
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
          <ListBar>
            <ItemBar button>
              <AccountCircleIcon /> Perfil
            </ItemBar>
            <ItemBar button>
              <BookmarkIcon />
              Lojas favoritas
            </ItemBar>
            <ItemBar button>
              <FavoriteIcon />
              Produtos favoritos
            </ItemBar>
            <ItemBar button>
              <MessageIcon />
              Comentários
            </ItemBar>
            <ItemBar button>
              <ExitToAppIcon /> Sair
            </ItemBar>
          </ListBar>
        </Box>
      </Drawer>
    </Container>
  );
};

export default Profile;

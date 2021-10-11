import { ItemBar, ListBar } from "./style";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";

const OptionsMenuClient = () => {
  return (
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
  );
};

export default OptionsMenuClient;

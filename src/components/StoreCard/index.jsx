import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { NameStore, StyleCard } from "./style";

const StoreCard = ({ image, name }) => {
  return (
    <StyleCard>
      <CardMedia component="img" image={image} alt="Combo Food" />
      <CardContent>
        <NameStore>{name}</NameStore>
      </CardContent>
    </StyleCard>
  );
};

export default StoreCard;

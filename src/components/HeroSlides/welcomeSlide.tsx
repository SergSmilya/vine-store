import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import welcomeBackground from "../../assets/welcomeBackground.jpeg";
import CustomButton from "../button";
import RouterLink from "../../routes/routerLink";
import { paths } from "../../config/path";

function WelcomeSlide() {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        backgroundImage: `url(${welcomeBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "inset 0 0 0 2000px #00000080",
        borderRadius: "0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        gap: "163px",
        height: "810px",
        paddingTop: "132px"
      }}
    >
      <Stack sx={{
        gap: "31px",
        textAlign: "center",
        maxWidth: "550px",
        color: theme.palette.info.main
      }}>
        <Typography variant="h5">
          Online wine store
        </Typography>
        <Typography variant="h1">
          Welcome to WineYard!
        </Typography>
        <Typography variant="h3">
          Taste the World: Discover Europe's Vineyards at Your Door
        </Typography>
      </Stack>
      <RouterLink to={paths.CATALOG} style={{ textDecoration: "none" }}>
        <CustomButton
          color="primary"
          text="Browse Wines"
          width="272px"
          height="62px"
        />
      </RouterLink>
    </Box>
  );
}

export default WelcomeSlide;
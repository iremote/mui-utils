import { styled } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const CenteredBox = styled(Box)({
  display: "flex",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledCircularProgress = styled(CircularProgress)({
  position: "relative",
});

export const CenteredTypography = styled(Typography)({
  position: "absolute",
  paddingTop: "0.5rem",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

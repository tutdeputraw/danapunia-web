import { Box, CircularProgress } from "@mui/material";

export const LoadingComponent = () => (<Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    minHeight="100vh" // Set minimum height to cover the entire viewport
>
    <CircularProgress color="primary" />
</Box>)
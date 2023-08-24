import { Button, Box } from "@mui/material";

export const Profile = () => {
    return (
        <div className="p-2">
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="start"
                alignItems="stretch"
                height="100vh"
            >
                <Button variant="contained" color="primary">
                    Sign Out
                </Button>
            </Box>
        </div>
    );
}
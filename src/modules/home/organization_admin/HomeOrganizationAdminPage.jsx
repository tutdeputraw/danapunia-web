import { AppBar, Fab, IconButton, Paper, Toolbar } from "@mui/material"
import { PuniaListPage } from "../../punia/list/PuniaListPage"
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

export const HomeOrganizationAdminPage = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Your App Name
                    </Typography>
                </Toolbar>
            </AppBar>
            <PuniaListPage />
            <Fab variant="extended" color="primary" style={{
                position: 'absolute',
                bottom: '75px',
                right: '25px'
            }}>
                Buat Program
            </Fab>
        </div>
    )
}
import { AppBar, Fab, IconButton, Paper, Toolbar } from "@mui/material"
import { PuniaListPage } from "../../punia/list/list/PuniaListPage"
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { PuniaListOrganizationAdminPage } from "../../punia/list/organization_admin/PuniaListOrganizationAdminPage";
import { useNavigate } from "react-router-dom";
import { PuniaCreateOrganizationAdmin } from "../../punia/create/organization_admin/PuniaCreateOrganizationAdmin";
import { routePuniaCreate } from "../../../routes/AppRouteName";

export const HomeOrganizationAdminPage = () => {
    const navigate = useNavigate();

    const fabOnClicked = () => {
        navigate(routePuniaCreate);
    }

    return (
        <div>
            {/* <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Your App Name
                    </Typography>
                </Toolbar>
            </AppBar> */}
            <PuniaListOrganizationAdminPage />
            <Fab variant="extended" color="primary" style={{
                position: 'absolute',
                bottom: '75px',
                right: '25px'
            }}
                onClick={fabOnClicked}>
                Buat Program
            </Fab>
        </div>
    )
}
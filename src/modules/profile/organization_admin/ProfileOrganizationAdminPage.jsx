import { Box } from "@mui/material"
import { ProfileButtonComponent } from "../components/button"
import AuthStore from "../../auth/auth/AuthStore"
import { useNavigate } from "react-router-dom"

export const ProfileOrganizationAdminPage = () => {
    const signOutOnClicked = () => {
        AuthStore.signOut();
        window.location.reload();
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="stretch"
            minHeight="100vh"
            className="p-3"
        >
            <ProfileButtonComponent
                name={'Sign Out'}
                onclick={signOutOnClicked}
            />
        </Box>
    )
}
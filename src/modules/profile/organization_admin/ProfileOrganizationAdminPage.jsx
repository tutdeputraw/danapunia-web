import { Box } from "@mui/material"
import { ProfileButtonComponent } from "../components/button"
import AuthStore from "../../auth/auth/AuthStore"

export const ProfileOrganizationAdminPage = () => {
    const signOutOnClicked = () => {
        AuthStore.signOut();
        window.location.reload();
    }

    const logUser = async () => {
        console.log('AuthStore.user:', AuthStore.user.organizationAdmin.Organization.name);
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
            <ProfileButtonComponent
                name={'user'}
                onclick={logUser}
            />
        </Box>
    )
}
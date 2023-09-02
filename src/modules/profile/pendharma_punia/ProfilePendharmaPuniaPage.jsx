import { Box } from "@mui/material"
import { ProfileButtonComponent } from "../components/button"
import { useNavigate } from "react-router-dom"
import { routeAuthSignIn } from "../../../routes/AppRouteName"

export const ProfilePendharmaPuniaPage = () => {
    const navigate = useNavigate();

    const ProfilePendharmaPuniaSignInButtonOnClicked = () => navigate(routeAuthSignIn);

    return (
        <div className="p-2">
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="start"
                alignItems="stretch"
                height="100vh"
            >
                <ProfileButtonComponent
                    name={'Sign In'}
                    onclick={ProfilePendharmaPuniaSignInButtonOnClicked}
                />
            </Box>
        </div>
    );
}
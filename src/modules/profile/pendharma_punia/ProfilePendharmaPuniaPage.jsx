import { Box } from "@mui/material"
import { ProfileButtonComponent } from "../components/button"
import { useNavigate } from "react-router-dom"
import { routeAuthSignIn } from "../../../routes/AppRouteName"
import AuthStore from "../../auth/auth/AuthStore"
import { useEffect, useState } from "react"

export const ProfilePendharmaPuniaPage = () => {
    const navigate = useNavigate();
    const [isUserSignedIn, setIsUserSignedIn] = useState(false);

    useEffect(() => {
        getIsUserSignedIn();
    }, []);

    const getIsUserSignedIn = async () => {
        setIsUserSignedIn(await AuthStore.isUserSignedIn());
    }

    const signInOnClicked = () => navigate(routeAuthSignIn);

    const signOutOnClicked = () => {
        AuthStore.signOut();
        window.location.reload();
    }

    return (
        <div className="p-2">
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="start"
                alignItems="stretch"
                height="100vh"
            >
                {isUserSignedIn ? (
                    <ProfileButtonComponent
                        name={'Sign Out'}
                        onclick={signOutOnClicked}
                    />
                ) : (
                    <ProfileButtonComponent
                        name={'Sign In'}
                        onclick={signInOnClicked}
                    />
                )}
            </Box>
        </div>
    );
}
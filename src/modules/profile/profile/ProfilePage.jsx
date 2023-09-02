import { Button, Box } from "@mui/material";
import { ProfileButtonComponent } from "../components/button";
import { APISignIn } from "../../../api/api";

export const ProfilePage = () => {
    const signInClicked = async () => {
        console.log("signInClicked");

        const result = await APISignIn({
            email: "user2334@gmail.com",
            password: "apapunitu",
        });

        console.log(result);
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
                <ProfileButtonComponent
                    name={'Sign In'}
                    onclick={signInClicked}
                />
            </Box>
        </div>
    );
}
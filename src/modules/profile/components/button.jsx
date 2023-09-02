import { Button } from "@mui/material";

export const ProfileButtonComponent = ({ name, onclick }) => (<Button
    variant="contained"
    color="primary"
    onClick={onclick}
>
    {name}
</Button>)
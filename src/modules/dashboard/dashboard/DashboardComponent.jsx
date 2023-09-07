import { Box } from "@mui/material";
import { observer } from "mobx-react";

export const DashboardComponent = observer(({ dashboardTabBarStore, pages }) => {
    return (
        <div>
            {pages[dashboardTabBarStore.currentIndex]}
        </div>
    );
})
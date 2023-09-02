import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { observer } from "mobx-react";

export const DashboardTabBarComponent = observer(({ dashboardTabBarStore, tabComponents }) => {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={dashboardTabBarStore.currentIndex}
                onChange={(event, newValue) => dashboardTabBarStore.updateCurrentIndex(newValue)}
            >
                {tabComponents}
            </BottomNavigation>
        </Paper>
    );
});
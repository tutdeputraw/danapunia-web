import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useState } from "react";
import { observer } from "mobx-react";
import TabbarStore from "./mobx/Tabbar.store";

const TabBarDashboard = observer(() => (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
            showLabels
            value={TabbarStore.currentIndex}
            onChange={(event, newValue) => TabbarStore.updateCurrentIndex(newValue)}
        >
            <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} />
            <BottomNavigationAction label="Search" icon={<SearchRoundedIcon />} />
            <BottomNavigationAction label="Profile" icon={<AccountCircleRoundedIcon />} />
        </BottomNavigation>
    </Paper>
));

export default TabBarDashboard
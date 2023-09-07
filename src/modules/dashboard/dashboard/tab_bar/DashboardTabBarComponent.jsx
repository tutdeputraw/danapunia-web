import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { observer } from "mobx-react";
import { useEffect, useRef } from "react";

export const DashboardTabBarComponent = observer(({ dashboardTabBarStore, tabComponents }) => {
    const divRef = useRef(null);

    useEffect(() => {
        if (divRef.current) {
            const divHeight = divRef.current.offsetHeight;
            // console.log('Height of the div:', divHeight);
        }
    }, []);

    return (
        <BottomNavigation
            ref={divRef}
            showLabels
            value={dashboardTabBarStore.currentIndex}
            onChange={(event, newValue) => dashboardTabBarStore.updateCurrentIndex(newValue)}
            style={{
                position: 'fixed',
                bottom: '0',
                left: '0',
                right: '0',
            }}
        >
            {tabComponents}
        </BottomNavigation>
    );
});
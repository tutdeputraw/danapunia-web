import { BottomNavigationAction, Box } from "@mui/material"
import MobxRootStore from "../../../helpers/mobx/MobxRootStore"
import { DashboardComponent } from "../dashboard/DashboardComponent"
import { DashboardTabBarComponent } from "../dashboard/tab_bar/DashboardTabBarComponent"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { HomeOrganizationAdminPage } from "../../home/organization_admin/HomeOrganizationAdminPage"
import { SearchOrganizationAdminPage } from "../../search/organization_admin/SearchOrganizationAdmin"
import { ProfileOrganizationAdminPage } from "../../profile/organization_admin/ProfileOrganizationAdminPage"
import { useEffect } from "react"

export const DashboardOrganizationAdminPage = () => {
    useEffect(() => {
        MobxRootStore.dashboardTabbarOrganizationAdminStore.updateCurrentIndex(0);
    }, []);

    return (<div>
        <DashboardComponent
            dashboardTabBarStore={MobxRootStore.dashboardTabbarPendharmaPuniaStore}
            pages={[
                <HomeOrganizationAdminPage />,
                <SearchOrganizationAdminPage />,
                <ProfileOrganizationAdminPage />
            ]}
        />
        <DashboardTabBarComponent
            dashboardTabBarStore={MobxRootStore.dashboardTabbarPendharmaPuniaStore}
            tabComponents={[
                <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} />,
                <BottomNavigationAction label="Search" icon={<SearchRoundedIcon />} />,
                <BottomNavigationAction label="Profile" icon={<AccountCircleRoundedIcon />} />
            ]}
        />
    </div>);
}
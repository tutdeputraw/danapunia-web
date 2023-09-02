import { BottomNavigationAction } from "@mui/material"
import MobxRootStore from "../../../helpers/mobx/MobxRootStore"
import { HomePage } from "../../home/home/HomePage"
import { SearchPage } from "../../search/search/SearchPage"
import { DashboardComponent } from "../dashboard/DashboardComponent"
import { DashboardTabBarComponent } from "../dashboard/tab_bar/DashboardTabBarComponent"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { ProfilePage } from "../../profile/profile/ProfilePage"
import { HomePendharmaPuniaPage } from "../../home/pendharma_punia/HomePendharmaPuniaPage"
import { SearchPendharmaPuniaPage } from "../../search/pendharma_punia/searchPendharmaPunia"
import { ProfilePendharmaPuniaPage } from "../../profile/pendharma_punia/ProfilePendharmaPuniaPage"

export const DashboardPendharmaPuniaPage = () => {
    return (<div>
        <DashboardComponent
            dashboardTabBarStore={MobxRootStore.dashboardTabbarPendharmaPuniaStore}
            pages={[
                <HomePendharmaPuniaPage />,
                <SearchPendharmaPuniaPage />,
                <ProfilePendharmaPuniaPage />
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

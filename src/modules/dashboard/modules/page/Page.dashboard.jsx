import { observer } from "mobx-react";
import TabbarStore from "../tabBar/mobx/Tabbar.store";
import { Search } from "../../../search/Search";
import { Home } from "../../../home/Home";
import { Profile } from "../../../profile/Profile";

const Pages = [<Home />, <Search />, <Profile />];

const PageDashboard = observer(() => (
    <div>
        {Pages[TabbarStore.currentIndex]}
    </div>
))
export default PageDashboard;
import DashboardTabBarStore from "../../modules/dashboard/dashboard/tab_bar/DashboardTabBarStore";


class MobxRootStore {
    constructor() {
        this.dashboardTabbarPendharmaPuniaStore = DashboardTabBarStore;
        this.dashboardTabbarOrganizationAdminStore = DashboardTabBarStore;
    }
}

export default new MobxRootStore();
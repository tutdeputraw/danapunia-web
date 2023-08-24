import tabbarStore from "../../layouts/tabBar/mobx/Tabbar.store";

class MobxRootStore {
    constructor() {
        this.tabbarStore = tabbarStore;
    }
}

export default new MobxRootStore();
import { action, makeObservable, observable } from "mobx";

class TabbarStore {
    currentIndex = 0;

    constructor() {
        makeObservable(this, {
            currentIndex: observable,
            updateCurrentIndex: action,
        });
    }

    updateCurrentIndex(newIndex) {
        this.currentIndex = newIndex;
        console.log("currentIndex: ", this.currentIndex);
    }
}

export default new TabbarStore();
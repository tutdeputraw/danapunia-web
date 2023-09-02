import { action, makeObservable, observable } from "mobx";
import { TOKEN_CONSTANT_KEY } from "../constants/AuthConstant";

class AuthStore {
    user = null;
    token = sessionStorage.getItem(TOKEN_CONSTANT_KEY);

    constructor() {
        makeObservable(this, {
            user: observable,
            token: observable,
            removeUserAndToken: action,
            setUserAndToken: action,
            isUserSignedIn: action,
        });
    }

    setUserAndToken({ user, token }) {
        this.user = user;
        this.token = token;

        sessionStorage.setItem(TOKEN_CONSTANT_KEY, token);
    }

    removeUserAndToken() {
        this.user = null;
        this.token = null;

        sessionStorage.removeItem(TOKEN_CONSTANT_KEY);
    }

    isUserSignedIn() {
        if (this.token) {
            return true;
        }
        return false;
    }
}

export default new AuthStore();
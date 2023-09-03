import { action, makeObservable, observable } from "mobx";
import { AUTH_CONSTANT_ROLE_ORGANIZATION_ADMIN, AUTH_CONSTANT_ROLE_PENDHARMA_PUNIA, AUTH_CONSTANT_TOKEN_KEY } from "../constants/AuthConstant";
import { APIGetUserByToken } from "../../../api/api";
import Cookies from 'js-cookie';

class AuthStore {
    user = null;
    token = Cookies.get(AUTH_CONSTANT_TOKEN_KEY);

    constructor() {
        makeObservable(this, {
            user: observable,
            token: observable,
            setToken: action,
            setUser: action,
            signIn: action,
            signOut: action,
        });
    }

    signIn({ user, token }) {
        this.setUser(user);
        this.setToken(token);
        Cookies.set(AUTH_CONSTANT_TOKEN_KEY, token,
            { expires: new Date().getTime() + 5 * 60 * 60 * 1000 },
        );
    }

    signOut() {
        this.setUser(null);
        this.setToken(null);
        Cookies.remove(AUTH_CONSTANT_TOKEN_KEY)
    }


    setUser(newUser) {
        this.user = newUser;
    }

    setToken(newToken) {
        this.token = newToken;
    }

    async isUserSignedIn() {
        if (!this.token) {
            return false;
        }
        if (!this.user) {
            this.user = await APIGetUserByToken(this.token);
        }
        return true;
    }

    async getUser() {
        if (!(await this.isUserSignedIn())) return null;
        return this.user;
    }

    async getUserRole() {
        if (!(await this.isUserSignedIn())) return AUTH_CONSTANT_ROLE_PENDHARMA_PUNIA;
        return this.user.roleName;
    }

    async isRoleOrganizationAdmin() {
        if (!(await this.isUserSignedIn())) return false;
        return this.user.roleName === AUTH_CONSTANT_ROLE_ORGANIZATION_ADMIN;
    }

    async isRolePendharmaPunia() {
        if (!(await this.isUserSignedIn())) return false;
        return this.user.roleName === AUTH_CONSTANT_ROLE_PENDHARMA_PUNIA;
    }
}

export default new AuthStore();
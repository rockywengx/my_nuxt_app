import { defineStore } from "pinia";
import { login, logout } from "~/apis/userApi";
export const useUserStore = defineStore("user", {
  state: () => ({
    _token: "",
    _name: "",
    _avatar: "",
    _user: {},
  }),
  actions: {
    // 定義action
    setToken(token: string) {
      this._token = token;
    },
    setName(name: string) {
      this._name = name;
    },
    setAvatar(avatar: string) {
      this._avatar = avatar;
    },
    async login(account: string, password: string) {
      // 這裡是登入的邏輯
      let user = await login({ account, password });
      this._user = user;
      this.setToken(user.token);
      // this.setName(user.name);
    },
  },
  getters: {
    // 定義getter
    token(): string {
      return this._token;
    },
    name(): string {
      return this._name;
    },
    avatar(): string {
      return this._avatar;
    },
    user(): any {
      return this._user;
    }
  },
});


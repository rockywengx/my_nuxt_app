import { defineStore } from "pinia";
import { login, logout } from "~/apis/userApi";
import { get12HoursCookies } from "~/utils/cookies";
export const useUserStore = defineStore("user", {
  state: () => {
    const userState = get12HoursCookies("userState");
    if (userState.value && (userState.value as any).token) {
      return ({
        _token: (userState.value as any).token,
        _name: (userState.value as any).name,
        _avatar: (userState.value as any).avatar,
        _user: userState.value,
      })
    }
    return ({
    _token: "",
    _name: "",
    _avatar: "",
    _user: {},
  })},
  actions: {
    // 定義action
    setAvatar(avatar: string) {
      this._avatar = avatar;
    },
    setUser(user: any) {
      this._user = user;
      this._name = user.name;
      this._token = user.token;
      this._avatar = user.avatar;
    },
    async login(account: string, password: string) {
      // 這裡是登入的邏輯
      let user = await login({ account, password });
      const cookie = get12HoursCookies("userState");
      cookie.value = user;
      this.setUser(user);
    },
    async logout() {
      // 這裡是登出的邏輯
      await logout();
      const cookie = get12HoursCookies("userState");
      cookie.value = {};
      this.setUser({
        _token: "",
        _name: "",
        _avatar: "",
        _user: {},
      });
    }
  },
  getters: {
    // 定義getter
    token(): string {
      // const userState = get12HoursCookies("userState");
      // let $token = this._token;
      // if (userState.value && (userState.value as any).token) {
      //   $token = (userState.value as any).token;
      // }
      // return $token;
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
    },
  },
});

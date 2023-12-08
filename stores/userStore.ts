import { defineStore } from "pinia";
import { login, logout } from "~/apis/userApi";
import { get12HoursCookies } from "~/utils/cookies";
export const useUserStore = defineStore("user", {
  state: () => {
    const userState = get12HoursCookies("userState");
    if (userState.value && (userState.value as any).token) {
      return ({
        token: (userState.value as any).token,
        name: (userState.value as any).name,
        avatar: (userState.value as any).avatar,
        user: userState.value,
      })
    }
    return ({
    token: "",
    name: "",
    avatar: "",
    user: {},
  })},
  actions: {
    // 定義action
    setAvatar(avatar: string) {
      this.avatar = avatar;
    },
    setUser(user: any) {
      this.user = user;
      this.name = user.name;
      this.token = user.token;
      this.avatar = user.avatar;
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
        token: "",
        name: "",
        avatar: "",
        user: {},
      });
    }
  },
  getters: {
  },
});

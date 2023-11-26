import { useUserStore } from "@/stores/userStore";
export default defineNuxtPlugin({
  name: "auth",
  enforce: "post", // or 'post'
  setup(nuxt) {
    addRouteMiddleware(
      "auth",
      (to) => {
        const userStore = useUserStore();
        const token = userStore.token;
        let newRoute = "";
        if (!token) {
          newRoute = "/login";
        } else {
          newRoute = "/store";
        }

        if (newRoute === to.path) {
          return;
        }
        navigateTo(newRoute);
      },
      { global: true }
    );
  },
});

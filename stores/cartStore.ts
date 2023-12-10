import { defineStore } from "pinia";
import { get12HoursCookies } from "@/utils/cookies";
import { saveCart, putItem } from "@/apis/cartApi";

export const useCartStore = defineStore("cart", {
  state: () => {
    const cartState = get12HoursCookies("cartState");
    if (cartState.value && (cartState.value as any).items) {
      return {
        items: (cartState.value as any).items,
      };
    }
    return {
      items: [] as any,
    };
  },
  actions: {
    // 定義action
    async putItem(item: any, quantity: number) {
      item.quantity = quantity;
      let response = await putItem(item);
      this.items = response.items;
      const cookie = get12HoursCookies("cartState");
      cookie.value = { items: this.items };
    },
    async setQuantity(item: any, quantity: number) {
      if (this.items.length > 0) {
        this.items.forEach((element: any) => {
          if (element.id === item.id) {
            element.quantity = quantity;
            return;
          }
        });
      }
      const cookie = get12HoursCookies("cartState");
      cookie.value = { items: this.items };
    },
    async removeItem(item: any) {
      if (this.items.length > 0) {
        this.items.forEach((element: any) => {
          if (element.id === item.id) {
            this.items.splice(this.items.indexOf(element), 1);
            return;
          }
        });
      }
      const cookie = get12HoursCookies("cartState");
      cookie.value = { items: this.items };
    },
    async saveCart() {
      console.log('saveCart', this.items)
    },
    exists(item: any): boolean {
      let exists = false;
      if (this.items.length > 0) {
        this.items.forEach((element: any) => {
          if (element.id === item.id) {
            exists = true;
            return;
          }
        });
      }
      return exists;
    },
  },
  getters: {
    // 定義getter
    getItems(): any {
      return this.items;
    },
  },
});

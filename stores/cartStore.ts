import { defineStore } from "pinia";
export const useCartStore = defineStore("cart", {
  state: () => {
    const cartState = get12HoursCookies("cartState");
    if (cartState.value && (cartState.value as any).items) {
      console.log(cartState.value);
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
      if (this.items.length > 0) {
        this.items.forEach((element: any) => {
          if (element.id === item.id) {
            element.quantity += quantity;
            return;
          }
        });
      } else {
        item.quantity = quantity;
        this.items.push(item);
      }
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
  },
  getters: {
    // 定義getter
  },
});

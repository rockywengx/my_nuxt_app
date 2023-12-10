import { defineStore } from "pinia";
import { loadItems, findItem } from "~/apis/commodityApi";
export const useCommodityStore = defineStore("commodities", {
  state: () => {
    return {
      list: [] as any,
      page: 1,
      perPage: 12,
      total: 0,
    };
  },
  actions: {
    // 定義action
    async load() {
      let result = await loadItems({ page: this.page, perPage: this.perPage });
      this.list = result.list;
      this.page = result.page;
      this.perPage = result.perPage;
      this.total = result.total;
    },
    async loadMore() {
      this.page++;
      let result = await loadItems({ page: this.page, perPage: this.perPage });
      this.list = [...this.list, ...result.list];
      this.page = result.page;
      this.perPage = result.perPage;
      this.total = result.total;
    },
    async find(id: number) {
      let result = await findItem(id);
      return result;
    }
  },
  getters: {
    // 定義getter
    getList(): any {
      return this.list;
    },
    pagination(): any {
      return {
        page: this.page,
        perPage: this.perPage,
        total: this.total,
      };
    }
  },
});

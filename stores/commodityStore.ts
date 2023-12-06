import { defineStore } from "pinia";
import { loadItems, findItem } from "~/apis/commodityApi";
export const useCommodityStore = defineStore("commodities", {
  state: () => {
    return {
      _list: [] as any,
      _page: 1,
      _perPage: 12,
      _total: 0,
    };
  },
  actions: {
    // 定義action
    async load() {
      let result = await loadItems({ page: this._page, perPage: this._perPage });
      this._list = result.list;
      this._page = result.page;
      this._perPage = result.perPage;
      this._total = result.total;
    },
    async loadMore() {
      this._page++;
      let result = await loadItems({ page: this._page, perPage: this._perPage });
      this._list = [...this._list, ...result.list];
      this._page = result.page;
      this._perPage = result.perPage;
      this._total = result.total;
    },
    async find(id: number) {
      let result = await findItem(id);
      console.log(result);
      return result;
    }
  },
  getters: {
    // 定義getter
    list(): any {
      return this._list;
    },
    pagination(): any {
      return {
        page: this._page,
        perPage: this._perPage,
        total: this._total,
      };
    }
  },
});

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  return await new Promise((resolve, reject) => {
    const result: { id: number, name: string, description: string, price: number, newPrice: number, imageUrl: string }[] = [];
    let page = query.page as number;
    let perPage = query.perPage as number;
    for (let i = 1 + (page - 1) * perPage ; i <= perPage * page; i++) {
      result.push({
        id: i,
        name: "商品" + i,
        description: "商品" + i + "的描述",
        price: 10 * i,
        newPrice: 10 * i - i,
        imageUrl: "images/image1.jpg",
      });
    }
    resolve({
      success: true,
      msg: "成功",
      data: {
        list: [...result],
        page: page,
        perPage: perPage,
        total: 100,
        query: query,
      },
    });
  });
});

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id') as string;
    const _id = parseInt(id);

    return await new Promise((resolve, reject) => {
      resolve({
        success: true,
        msg: "成功",
        data: {
            id: _id,
            name: "商品" + _id,
            description: "商品" + _id + "的描述",
            price: 10 * _id,
            newPrice: 10 * _id - _id,
            imageUrl: "images/image1.jpg",
        },
      });
    });
  });
  
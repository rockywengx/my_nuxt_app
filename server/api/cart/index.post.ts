export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log('cart post', body)
    let item = body;

    return await new Promise((resolve, reject) => {
      resolve({
        success: true,
        msg: "成功",
        data: {
            items: [
                {
                    id: 1,
                    name: "商品1",
                    description: "商品1的描述",
                    price: 10,
                    newPrice: 9,
                    imageUrl: "images/image1.jpg",
                    quantity: 1,
                },
                {
                    id: 2,
                    name: "商品2",
                    description: "商品2的描述",
                    price: 20,
                    newPrice: 18,
                    imageUrl: "images/image2.jpg",
                    quantity: 2,
                },
                {
                    id: 3,
                    name: "商品3",
                    description: "商品3的描述",
                    price: 30,
                    newPrice: 27,
                    imageUrl: "images/image3.jpg",
                    quantity: 3,
                },
                item,
            ],
        },
      });
    });
  });
  
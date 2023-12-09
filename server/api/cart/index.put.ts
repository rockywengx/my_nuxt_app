export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    return await new Promise((resolve, reject) => {
      const result: { id: number, name: string, description: string, price: number, newPrice: number, imageUrl: string }[] = [];
      let user = body.user;
      let items = body.items;

      // todo save to db 
      resolve({
        success: true,
        msg: "成功",
        data: {
            id: 1,
        },
      });
    });
  });
  
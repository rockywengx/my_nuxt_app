export default defineEventHandler(async (event) => {
    return await new Promise((resolve, reject) => {
      resolve( {
        success: true,
        msg: '成功',
        data: {
          id: 1,
          name: 'John Maverick',
          token: 'abc-123',
        },event
      });
    });
});

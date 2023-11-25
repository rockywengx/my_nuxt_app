import { http, HttpResponse } from "msw";
export const handlers = [
  http.post('http://localhost:3030/api/login', async ({ request }) => {
    return HttpResponse.json({
      success: true,
      msg: '登出成功',
      data: {
        id: 1,
        name: 'John Maverick',
        token: 'abc-123',
      },
    })
  }),
  http.post('http://localhost:3030/api/logout', async ({ request }) => {
    return HttpResponse.json({
      success: true,
      msg: '登出成功',
      data: null,
    })
  }),
];
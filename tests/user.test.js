import { describe, test, vi, expect } from 'vitest'

import { setup, $fetch } from '@nuxt/test-utils'

describe('User Test', async () => {
  await setup({
    // test context options
  })

  test('login', async () => {
    // ...
    const mockFetch = vi.fn().mockResolvedValue({
        // account: 'test',
        // password: '1qaz2wsx'
        id: 1,
        name: 'test',
        token: '1234567890'
    })
    
    globalThis.fetch = mockFetch

    const user = await fetch('/login')

    expect(mockFetch).toBeCalledWith('/login')
    
    expect(user.id).toBe(1)
  })
})
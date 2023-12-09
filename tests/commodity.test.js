import { describe, test, vi, expect } from 'vitest'

import { setup, $fetch } from '@nuxt/test-utils'
import { useCommodityStore } from '@/store/commodity'

describe('Commodity Test', async () => {
  await setup({
    // test context options
  })

  test('load', async () => {
    // ...
    const commodityStore = useCommodityStore() 
    await commodityStore.load()
    
    // 不等於空陣列
    expect(commodityStore.list).not.toEqual([])
  })
})
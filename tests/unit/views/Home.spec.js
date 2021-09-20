import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('renders title', () => {
    const msg = 'Introducción al Compostaje mediante el juego'
    const wrapper = shallowMount(Home)
    expect(wrapper.text()).toMatch(msg)
  })
})

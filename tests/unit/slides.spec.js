import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Slides from '@/slides/slides.vue'
import SlidesItem from '@/slides/slides-item.vue'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Vue from 'vue'
chai.use(sinonChai)
Vue.component('b-slides-item', SlidesItem)

describe('Slides.vue', () => {
  it('Slides存在', () => {
    expect(Slides).to.exist
  })
  it('接受BlueSlidesItem,默认展示第一个', (done) => {
    const wrapper = mount(Slides, {
      propsData: {
        autoPay: false,
      },
      slots: {
        default: `
          <b-slides-item name="1">
            <div class="box1">1</div>
          </b-slides-item>
          <b-slides-item name="2">
            <div class="box2">2</div>
          </b-slides-item>
          <b-slides-item name="3">
            <div class="box3">3</div>
          </b-slides-item>
        `,
      },
    })
    setTimeout(() => {
      expect(wrapper.find('.box1').exists()).to.be.true
      done()
    })
  })
  it('点击第二个，展示第二个', () => {
    const wrapper = mount(Slides, {
      propsData: {
        autoPay: false,
      },
      slots: {
        default: `
          <b-slides-item name="1">
            <div class="box1">1</div>
          </b-slides-item>
          <b-slides-item name="2">
            <div class="box2">2</div>
          </b-slides-item>
          <b-slides-item name="3">
            <div class="box3">3</div>
          </b-slides-item>
        `,
      },
      listeners: {
        'update:selected': (x) => {
          expect(x).to.equal('2')
        },
      },
    })
    setTimeout(() => {
      wrapper.find('[data-index="1"]').trigger('click')
    })
  })
  it('可以自动播放', (done) => {
    const callback = sinon.fake()
    const wrapper = mount(Slides, {
      propsData: {
        selected: '1',
        autoPlay: true,
        autoPlayDelay: 100,
      },
      slots: {
        default: `
          <b-slides-item name="1">
            <div class="box1">1</div>
          </b-slides-item>
          <b-slides-item name="2">
            <div class="box2">2</div>
          </b-slides-item>
          <b-slides-item name="3">
            <div class="box3">3</div>
          </b-slides-item>
        `,
      },
      listeners: {
        'update:selected': callback,
      },
    })
    setTimeout(() => {
      expect(callback).to.have.been.calledWith('2')
      done()
    }, 101)
  })
  xit('可以点击上一张', () => {})
  xit('可以点击上一张', () => {})
})

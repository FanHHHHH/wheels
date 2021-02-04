import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Uploader from '@/uploader.vue'

import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import http from '../../src/http.js'

describe('Uploader.vue', () => {
  it('Uploader存在', () => {
    expect(Uploader).to.exist
  })
  it('可以上传一个文件', (done) => {
    http.post = (url, options) => {
      setTimeout(() => {
        options.callback(options.name, JSON.stringify({ id: '123' }), 'success')
        setTimeout(() => {
          expect(vm.find('use').exists()).to.eq(false)
          expect(vm.find('img').exists()).to.eq(true)
          expect(vm.find('img').attributes().src).to.eq('/preview/123')
          done()
        })
      }, 1500)
    }
    const vm = mount(Uploader, {
      propsData: {
        name: 'file',
        action: '/upload',
        method: 'POST',
        multiple: true,
        fileList: [],
        parseUrl: (response) => {
          let obj = JSON.parse(response)
          return '/preview/' + obj.id
        },
      },
      slots: {
        default: `<button id='x'>点击上传</button>`,
      },
      listeners: {
        'update:fileList': (fileList) => {
          vm.setProps({ fileList: fileList })
        },
      },
    })
    vm.find('#x').trigger('click')
    const inputWrapper = vm.find('input[type="file"]')
    const input = inputWrapper.element
    const file1 = new File(['this is file1'], 'xxx.txt', { type: 'image/png' })
    // 给 input 添加文件
    // 利用 dataTransfer

    const dataTransfer = new DataTransfer()
    dataTransfer.items.add(file1)
    input.files = dataTransfer.files

    input.dispatchEvent(new Event('change'))
    // 存在loading状态
    setTimeout(() => {
      let use = vm.find('use')
      expect(use.exists()).to.eq(true)
    }, 500)
  })
})

import Vue from "vue";
import Button from "./button.vue";
import Icon from "./Icon.vue";
import ButtonGroup from "./button-group";
import Input from "./Input.vue";
import Row from "./row.vue";
import Col from "./col.vue";
import Layout from "./layout.vue";
import Content from "./content.vue";
import Header from "./header.vue";
import Sider from "./sider.vue";
import Footer from "./footer.vue";
import Toast from "./toast.vue";
import plugin from "./plugin";
import Tabs from "./tabs";
import TabsNav from "./tabs-nav";
import TabsContent from "./tabs-content";
import TabsItem from "./tabs-item";
import TabsPane from "./tabs-pane";
import Popover from "./popover";
import Collapse from "./collapse/collapse";
import CollapseItem from "./collapse/collapse-item";
import Cascader from "./cascader/cascader";
Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-input", Input);
Vue.component("g-row", Row);
Vue.component("g-col", Col);
Vue.component("g-layout", Layout);
Vue.component("g-content", Content);
Vue.component("g-header", Header);
Vue.component("g-footer", Footer);
Vue.component("g-sider", Sider);
Vue.component("g-toast", Toast);
Vue.use(plugin);
Vue.component("g-tabs", Tabs);
Vue.component("g-tabs-nav", TabsNav);
Vue.component("g-tabs-content", TabsContent);
Vue.component("g-tabs-item", TabsItem);
Vue.component("g-tabs-pane", TabsPane);
Vue.component("g-popover", Popover);
Vue.component("g-collapse", Collapse);
Vue.component("g-collapse-item", CollapseItem);
Vue.component("g-cascader", Cascader);

new Vue({
  el: "#app",
  data() {
    return {
      source: [
        {
          name: "江苏",
          children: [
              { name: "苏州", children: [{ name: "吴江" }, { name: "姑苏" }, { name: "工业园区" }] }, 
              { name: "盐城", children: [{ name: "大丰" }, { name: "建湖" }] }, { name: "宿迁" }],
        },
        { name: "浙江", 
          children: [
              { name: "杭州" , children: [{name: '余杭'}]}, 
              { name: "湖州" }, 
              { name: "绍兴" }] },
      ],
    };
  },
  // methods: {

  // }
});

// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)

// const expect = chai.expect
// //单元测试
// try{
//     {
//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings'
//             }
//         })
//         vm.$mount()
//         const useElement = vm.$el.querySelector('use')
//         const href = useElement.getAttribute('xlink:href')
//         expect(href).to.eq('#icon-settings')
//         vm.$el.remove()
//         vm.$destroy()
//     }
//     // positon
//     {
//         const div = document.createElement('div')
//         document.body.appendChild(div)
//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings'
//             }
//         })
//         vm.$mount(div)
//         const svg = vm.$el.querySelector('svg')
//         const {order} = window.getComputedStyle(svg)
//         expect(order).to.eq('1')
//         vm.$el.remove()
//         vm.$destroy()
//     }
//     {
//         const div = document.createElement('div')
//         document.body.appendChild(div)

//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings',
//                 iconPosition: 'right'
//             }
//         })
//         vm.$mount(div)
//         const svg = vm.$el.querySelector('svg')
//         const {order} = window.getComputedStyle(svg)
//         expect(order).to.eq('2')
//         vm.$el.remove()
//         vm.$destroy()
//     }
//     //click
//     {
//         // mock
//         const div = document.createElement('div')
//         document.body.appendChild(div)

//         const Constructor = Vue.extend(Button)
//         const vm = new Constructor({
//             propsData: {
//                 icon: 'settings',
//                 iconPosition: 'right'
//             }
//         })
//         vm.$mount(div)
//         const spy = chai.spy(function () { })

//         vm.$on('click', spy)

//         const button = vm.$el
//         button.click()
//         expect(spy).to.have.been.called()
//         vm.$el.remove()
//         vm.$destroy()
//     }
// }catch (err) {
//     window.errors = [err]
// }finally {
//     window.errors && window.errors.forEach( err => {
//         console.log(err.message);
//     })
// }

const expect = chai.expect;
import Vue from "vue";
import Toast from "../src/toast";
Vue.use(Toast);

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Toast", () => {
  it("存在.", () => {
    expect(Toast).to.be.ok;
  });
  describe("props", function () {
    this.timeout(15000);
    it("可以设置autoClose", (done) => {
      const div = document.createElement("div");
      document.body.appendChild(div);
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          autoClose: 1,
        },
      }).$mount(div);
      vm.$on("beforeClose", () => {
        expect(document.body.contains(vm.$el)).to.eq(false);
        done();
      });
    });
    it("可以设置closeButton", (done) => {
      const callback = sinon.spy();
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: "测试关闭按钮",
            callback,
          },
        },
      }).$mount();
      const closeButton = vm.$el.querySelector(".close");
      expect(closeButton.textContent.trim()).to.eq("测试关闭按钮");
      //bug 修复 ： 如果mount之后直接click，速度太快，不能再$nexttick()，之后close() toast组件，所以会造成undefined错误
      setTimeout(() => {
        closeButton.click();
        expect(callback).to.have.been.called;
        done();
      }, 200);
    });
    it("可以设置enableHTML", () => {
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          enableHTML: true,
        },
      });
      vm.$slots.default = ['<strong id="test">测试</strong>'];
      vm.$mount();
      const strong = vm.$el.querySelector("#test");
      expect(strong).to.exist;
    });
    it("可以设置position", () => {
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          position: "middle",
        },
      }).$mount();
      expect(vm.$el.classList.contains("position-middle")).to.be.true;
    });
  });
});

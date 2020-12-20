const expect = chai.expect;
import Vue from "vue";
import Popover from "../src/popover";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("popover", () => {
  it("存在.", () => {
    expect(Popover).to.be.ok;
  });
  it("可以设置position", (done) => {
    Vue.component("g-popover", Popover);
    const div = document.createElement("div");
    document.body.appendChild(div);

    div.innerHTML = `
      <g-popover position="bottom" ref='a'>
        <template slot="content">
          content内容
        </template>
        <button>按钮</button>
      </g-popover>
    `;

    const vm = new Vue({
      el: div,
    });

    vm.$el.querySelector("button").click();
    vm.$nextTick(() => {
      expect(vm.$refs.a.$refs.contentWrapper.classList.contains("position-bottom")).to.be.true;
      done();
    });
  });
  xit("可以设置trigger", (done) => {
    Vue.component("g-popover", Popover);
    const div = document.createElement("div");
    document.body.appendChild(div);

    div.innerHTML = `
      <g-popover position="bottom" ref='a'>
        <template slot="content">
          content内容
        </template>
        <button>按钮</button>
      </g-popover>
    `;

    const vm = new Vue({
      el: div,
    });

    const event = new Event("mouseenter");

    vm.$nextTick(() => {
      vm.$el.dispatchEvent(event);
      vm.$nextTick(() => {
        const { contentWrapper } = vm.$refs.a.$refs;
        // console.log(contentWrapper);
        done();
      });
      done();
    });
  });
});

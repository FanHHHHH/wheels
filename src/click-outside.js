const onclickDocument = (e) => {
  const { target } = e;
  callbacks.forEach((item) => {
    if (target === item.el || item.el.contains(target)) {
      return;
    }
    item.callback();
  });
};
document.addEventListener("click", onclickDocument);
const callbacks = [];
export default {
  bind: function(el, binding) {
    callbacks.push({ el, callback: binding.value });
  },
};

const removeListener = () => {
  document.removeEventListener("click", onclickDocument);
};
export { removeListener };

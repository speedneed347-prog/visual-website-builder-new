export function generateRuntime(): string {
  return `
(function(){
  "use strict";

  window.builderBind = function(id, eventName, action, value) {
    const element = document.querySelector('[data-element-id="' + CSS.escape(id) + '"]');
    if (!element) return;

    element.addEventListener(eventName, function(event) {
      if (action === "navigate" && value) {
        window.location.href = value;
      } else if (action === "scroll" && value) {
        document.querySelector(value)?.scrollIntoView({ behavior: "smooth" });
      } else if (action === "toggle-class" && value) {
        element.classList.toggle(value);
      } else if (action === "prevent-default") {
        event.preventDefault();
      }
    });
  };
})();
`;
}

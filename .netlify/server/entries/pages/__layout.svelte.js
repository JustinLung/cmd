var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_62012ddc = require("../../immutable/chunks/index-62012ddc.js");
var globals = "";
var theme = "";
var Navigation_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "nav.svelte-1iqpoop.svelte-1iqpoop{display:none}nav.svelte-1iqpoop a.svelte-1iqpoop{position:relative;color:var(--color-black)}nav.svelte-1iqpoop a.svelte-1iqpoop::before{content:'';position:absolute;bottom:-0.3rem;right:0;width:0;height:2px;background-color:var(--color-black);transition:width 1s cubic-bezier(0.25, 1, 0.5, 1);display:none}nav.svelte-1iqpoop a.svelte-1iqpoop:hover::before{left:0;right:auto;width:100%}nav.active.svelte-1iqpoop.svelte-1iqpoop{position:fixed;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:1.3rem;font-weight:bold;gap:0.8rem;inset:0;width:100%;height:100vh;background-color:var(--color-cmd-yellow);overflow:hidden}nav.active.svelte-1iqpoop a.svelte-1iqpoop{background-color:var(--color-cmd-yellow);filter:brightness(85%);width:85%;padding:0.5rem}button.svelte-1iqpoop.svelte-1iqpoop{all:unset;display:block;position:relative;z-index:1;cursor:pointer}button.svelte-1iqpoop span.svelte-1iqpoop{display:block;width:2rem;height:0.2rem;margin-bottom:5px;position:relative;background-color:var(--color-black);border-radius:6px;transform-origin:0 0;transition:0.4s}button.svelte-1iqpoop span.svelte-1iqpoop:last-child{margin:0}button.active.svelte-1iqpoop span.svelte-1iqpoop:nth-child(1){transform:translate(0px, -2px) rotate(45deg)}button.active.svelte-1iqpoop span.svelte-1iqpoop:nth-child(2){opacity:0;transform:translateX(15px)}button.active.svelte-1iqpoop span.svelte-1iqpoop:nth-child(3){transform:translate(-3px, 3px) rotate(-45deg)}@media(min-width: 60rem){nav.svelte-1iqpoop.svelte-1iqpoop{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1rem}button.svelte-1iqpoop.svelte-1iqpoop{display:none}nav.svelte-1iqpoop a.svelte-1iqpoop::before{display:block}}",
  map: null
};
const Navigation = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<nav class="${["svelte-1iqpoop", ""].join(" ").trim()}"><a href="${"/beoogde-leerresultaten"}" class="${"svelte-1iqpoop"}">Beoogde leerresultaten</a>
	<a href="${"/onderwijsleeromgeving"}" class="${"svelte-1iqpoop"}">Onderwijsleeromgeving</a>
	<a href="${"/toetsing"}" class="${"svelte-1iqpoop"}">Toetsing</a>
	<a href="${"/gerealiseerde-leerresultaten"}" class="${"svelte-1iqpoop"}">Gerealiseerde toetsresultaten</a></nav>
<button class="${["svelte-1iqpoop", ""].join(" ").trim()}"><span class="${"svelte-1iqpoop"}"></span>
	<span class="${"svelte-1iqpoop"}"></span>
	<span class="${"svelte-1iqpoop"}"></span>
</button>`;
});
var Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "a.svelte-19oirx7{position:relative;font-size:1.5rem;font-weight:bold;color:var(--color-black);z-index:1}header.svelte-19oirx7{background-color:var(--color-cmd-yellow);display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:1rem}@media(min-width: 75rem){header.svelte-19oirx7{padding:1rem 6rem}}",
  map: null
};
const Header = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="${"svelte-19oirx7"}"><a href="${"/"}" class="${"svelte-19oirx7"}">CMD Mid-term</a>
	${(0, import_index_62012ddc.v)(Navigation, "Navigation").$$render($$result, {}, {}, {})}
</header>`;
});
var Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-elz9wf{background-color:var(--color-black);color:var(--color-white);text-align:center;padding:3rem 0}",
  map: null
};
const Footer = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"svelte-elz9wf"}"><span>\xA9 2022 CMD AMSTERDAM</span>
</footer>`;
});
const _layout = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_62012ddc.v)(Header, "Header").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${(0, import_index_62012ddc.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});

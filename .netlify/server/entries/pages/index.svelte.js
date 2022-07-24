var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_62012ddc = require("../../immutable/chunks/index-62012ddc.js");
var helpers = __toESM(require("@prismicio/helpers"));
var import_PageTransition_b2d7673e = require("../../immutable/chunks/PageTransition-b2d7673e.js");
var Button_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "button.svelte-xhnkhu{all:unset;background-color:var(--color-black);color:var(--color-white);padding:1rem 2rem;font-weight:bold;text-align:center}button.svelte-xhnkhu:hover{cursor:pointer;background-color:var(--color-cmd-yellow);color:var(--color-black)}",
  map: null
};
const Button = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  let { buttonText } = $$props;
  if ($$props.buttonText === void 0 && $$bindings.buttonText && buttonText !== void 0)
    $$bindings.buttonText(buttonText);
  $$result.css.add(css$7);
  return `<button class="${"svelte-xhnkhu"}">${(0, import_index_62012ddc.e)(buttonText)}</button>`;
});
var ButtonSection_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "div.svelte-1m5khkr{margin-top:1rem;display:flex;flex-direction:column;gap:1rem}@media(min-width: 60rem){div.svelte-1m5khkr{width:20rem}}",
  map: null
};
const ButtonSection = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<div class="${"svelte-1m5khkr"}">${(0, import_index_62012ddc.v)(Button, "Button").$$render($$result, { buttonText: "Midterm" }, {}, {})}
	${(0, import_index_62012ddc.v)(Button, "Button").$$render($$result, { buttonText: "Curriculum 2022-2024" }, {}, {})}
</div>`;
});
var Hero_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "section.svelte-cts3f7{background:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),\r\n			url('/assets/images/hero-image.jpg');background-size:cover;background-position:center;height:15rem;color:var(--color-white);padding:1rem;display:flex;flex-direction:column;justify-content:center}h2.svelte-cts3f7{max-width:45rem;text-align:center}@media(min-width: 60rem){section.svelte-cts3f7{height:25rem;padding:0 5rem}h2.svelte-cts3f7{font-size:3rem;text-align:left}}@media(min-width: 75rem){section.svelte-cts3f7{height:30rem;padding:0 6rem}}",
  map: null
};
const Hero = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  let { heroTitle } = $$props;
  if ($$props.heroTitle === void 0 && $$bindings.heroTitle && heroTitle !== void 0)
    $$bindings.heroTitle(heroTitle);
  $$result.css.add(css$5);
  return `<section class="${"svelte-cts3f7"}"><h2 class="${"svelte-cts3f7"}">${(0, import_index_62012ddc.e)(heroTitle)}</h2>
	${(0, import_index_62012ddc.v)(ButtonSection, "ButtonSection").$$render($$result, {}, {}, {})}
</section>`;
});
var Introduction_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "section.svelte-1g668jp{background-color:var(--color-cmd-yellow);padding:2rem 1rem;display:flex;flex-direction:column}img.svelte-1g668jp{align-self:center;width:12rem}p.svelte-1g668jp{max-width:30rem}@media(min-width: 40rem){section.svelte-1g668jp{flex-direction:row;align-items:center;justify-content:center;padding:3rem 0;gap:1rem}}@media(min-width: 60rem){img.svelte-1g668jp{width:18rem}h2.svelte-1g668jp{font-size:2rem;padding-bottom:1rem}p.svelte-1g668jp{font-size:1.2rem}}",
  map: null
};
const Introduction = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  let { introduction } = $$props;
  let { introductionTitle } = $$props;
  if ($$props.introduction === void 0 && $$bindings.introduction && introduction !== void 0)
    $$bindings.introduction(introduction);
  if ($$props.introductionTitle === void 0 && $$bindings.introductionTitle && introductionTitle !== void 0)
    $$bindings.introductionTitle(introductionTitle);
  $$result.css.add(css$4);
  return `<section class="${"svelte-1g668jp"}"><div><h2 class="${"svelte-1g668jp"}">${(0, import_index_62012ddc.e)(introductionTitle)}</h2>
		<p class="${"svelte-1g668jp"}"><!-- HTML_TAG_START -->${helpers.asHTML(introduction)}<!-- HTML_TAG_END --></p></div>
	<img src="${"/assets/images/cmd-laptop.png"}" alt="${"Laptop"}" class="${"svelte-1g668jp"}">
</section>`;
});
var Seperator_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "span.svelte-1we5t8v{width:100%;height:0.3rem;background:var(--color-cmd-yellow);display:block;margin:0.5rem 0}",
  map: null
};
const Seperator = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<span class="${"svelte-1we5t8v"}"></span>`;
});
var Standard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "section.svelte-152flmh.svelte-152flmh{display:flex;flex-direction:column}section.svelte-152flmh a.svelte-152flmh{color:var(--color-black);font-size:1.3rem;font-weight:bold;transition:0.1s ease-in-out}section.svelte-152flmh a.svelte-152flmh:hover{color:var(--color-cmd-grey)}@media(min-width: 60rem){section.svelte-152flmh.svelte-152flmh{width:100%}}",
  map: null
};
const Standard = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  let { standardTitle } = $$props;
  let { standardUID } = $$props;
  if ($$props.standardTitle === void 0 && $$bindings.standardTitle && standardTitle !== void 0)
    $$bindings.standardTitle(standardTitle);
  if ($$props.standardUID === void 0 && $$bindings.standardUID && standardUID !== void 0)
    $$bindings.standardUID(standardUID);
  $$result.css.add(css$2);
  return `<section class="${"svelte-152flmh"}"><a${(0, import_index_62012ddc.a)("href", standardUID, 0)} class="${"svelte-152flmh"}">${(0, import_index_62012ddc.e)(standardTitle)}</a>
	${slots.default ? slots.default({}) : ``}
</section>`;
});
var StandardChapter_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "p.svelte-yyxyj8{padding:0.5rem 0}",
  map: null
};
const StandardChapter = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  let { chapterTitle } = $$props;
  if ($$props.chapterTitle === void 0 && $$bindings.chapterTitle && chapterTitle !== void 0)
    $$bindings.chapterTitle(chapterTitle);
  $$result.css.add(css$1);
  return `<p class="${"svelte-yyxyj8"}">${(0, import_index_62012ddc.e)(chapterTitle)}</p>`;
});
var StandardSection_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-1j9ond5{display:flex;flex-direction:column;gap:1rem;padding:2rem 1rem}@media(min-width: 60rem){div.svelte-1j9ond5{flex-direction:row;padding:3rem 5rem}}@media(min-width: 75rem){div.svelte-1j9ond5{padding:5rem 6rem}}",
  map: null
};
const StandardSection = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"svelte-1j9ond5"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const Routes = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  let { page } = $$props;
  let { standards } = $$props;
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.standards === void 0 && $$bindings.standards && standards !== void 0)
    $$bindings.standards(standards);
  return `${(0, import_index_62012ddc.v)(import_PageTransition_b2d7673e.P, "PageTransition").$$render($$result, {}, {}, {
    default: () => {
      var _a;
      return `<main>${(0, import_index_62012ddc.v)(Hero, "Hero").$$render($$result, { heroTitle: page.data.title }, {}, {})}
		${(0, import_index_62012ddc.v)(Introduction, "Introduction").$$render($$result, {
        introduction: (_a = page.data) == null ? void 0 : _a.introduction,
        introductionTitle: "Mid Term"
      }, {}, {})}
		${(0, import_index_62012ddc.v)(StandardSection, "StandardSection").$$render($$result, {}, {}, {
        default: () => {
          return `${(0, import_index_62012ddc.b)(standards, (standard) => {
            var _a2;
            return `${(0, import_index_62012ddc.v)(Standard, "Standard").$$render($$result, {
              standardUID: `/${standard == null ? void 0 : standard.uid}`,
              standardTitle: `${standard == null ? void 0 : standard.data.standardnumber}.0 ${(_a2 = standard.data) == null ? void 0 : _a2.title}`
            }, {}, {
              default: () => {
                var _a3;
                return `${(0, import_index_62012ddc.v)(Seperator, "Seperator").$$render($$result, {}, {}, {})}
					${(0, import_index_62012ddc.b)((_a3 = standard.data) == null ? void 0 : _a3.chapters, (chapter, i) => {
                  var _a4;
                  return `${(0, import_index_62012ddc.v)(StandardChapter, "StandardChapter").$$render($$result, {
                    chapterTitle: `${standard == null ? void 0 : standard.data.standardnumber}.${i + 1} ${(_a4 = chapter.data) == null ? void 0 : _a4.title}`
                  }, {}, {})}`;
                })}
				`;
              }
            })}`;
          })}`;
        }
      })}</main>`;
    }
  })}`;
});

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
  default: () => U5Buidu5D
});
module.exports = __toCommonJS(stdin_exports);
var import_index_62012ddc = require("../../immutable/chunks/index-62012ddc.js");
var helpers = __toESM(require("@prismicio/helpers"));
var import_PageTransition_b2d7673e = require("../../immutable/chunks/PageTransition-b2d7673e.js");
var ChapterSection_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "section.svelte-1s4qjm5.svelte-1s4qjm5{padding:1rem;max-width:75rem;margin:0 auto}section.svelte-1s4qjm5 h2.svelte-1s4qjm5{padding:0.5rem 0;margin-bottom:1rem;font-size:1.3rem;border:2px solid var(--color-black);max-width:30rem}section.svelte-1s4qjm5 span.svelte-1s4qjm5{margin-bottom:1rem;font-size:1.3rem;max-width:30rem;border:2px solid var(--color-black);background-color:var(--color-cmd-yellow)}div.svelte-1s4qjm5.svelte-1s4qjm5{display:grid;grid-gap:1rem}@media(min-width: 45rem){section.svelte-1s4qjm5.svelte-1s4qjm5{padding:2rem 3rem}}@media(min-width: 60rem){section.svelte-1s4qjm5.svelte-1s4qjm5{padding:2rem 5rem}div.svelte-1s4qjm5.svelte-1s4qjm5{display:grid;grid-template-columns:repeat(2, 1fr);grid-gap:1rem}}",
  map: null
};
const ChapterSection = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  let { chapterTitle } = $$props;
  let { chapterNumber } = $$props;
  let { chapterUID } = $$props;
  if ($$props.chapterTitle === void 0 && $$bindings.chapterTitle && chapterTitle !== void 0)
    $$bindings.chapterTitle(chapterTitle);
  if ($$props.chapterNumber === void 0 && $$bindings.chapterNumber && chapterNumber !== void 0)
    $$bindings.chapterNumber(chapterNumber);
  if ($$props.chapterUID === void 0 && $$bindings.chapterUID && chapterUID !== void 0)
    $$bindings.chapterUID(chapterUID);
  $$result.css.add(css$5);
  return `<section class="${"chapter svelte-1s4qjm5"}"${(0, import_index_62012ddc.a)("id", chapterUID, 0)}><span class="${"svelte-1s4qjm5"}">${(0, import_index_62012ddc.e)(chapterNumber)}</span>
	<h2 class="${"svelte-1s4qjm5"}">${(0, import_index_62012ddc.e)(chapterTitle)}</h2>
	<div class="${"svelte-1s4qjm5"}">${slots.default ? slots.default({}) : ``}</div>
</section>`;
});
var ChapterContentLeft_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "img.svelte-1wmf3ck{max-width:100%}p.svelte-1wmf3ck{max-width:30rem}div.svelte-1wmf3ck{display:flex;flex-direction:column}",
  map: null
};
const ChapterContentLeft = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  let { contentLeftText } = $$props;
  let { contentLeftImage } = $$props;
  let { contentLeftAlt } = $$props;
  if ($$props.contentLeftText === void 0 && $$bindings.contentLeftText && contentLeftText !== void 0)
    $$bindings.contentLeftText(contentLeftText);
  if ($$props.contentLeftImage === void 0 && $$bindings.contentLeftImage && contentLeftImage !== void 0)
    $$bindings.contentLeftImage(contentLeftImage);
  if ($$props.contentLeftAlt === void 0 && $$bindings.contentLeftAlt && contentLeftAlt !== void 0)
    $$bindings.contentLeftAlt(contentLeftAlt);
  $$result.css.add(css$4);
  return `<div class="${"svelte-1wmf3ck"}"><p class="${"svelte-1wmf3ck"}">${(0, import_index_62012ddc.e)(contentLeftText)}</p>
	<img${(0, import_index_62012ddc.a)("src", contentLeftImage, 0)}${(0, import_index_62012ddc.a)("alt", contentLeftAlt, 0)} class="${"svelte-1wmf3ck"}">
</div>`;
});
var ChapterContentRight_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "img.svelte-tfjzc2{max-width:70%}div.svelte-tfjzc2{display:flex;flex-direction:column}p.svelte-tfjzc2{max-width:30rem}",
  map: null
};
const ChapterContentRight = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  let { contentRightText } = $$props;
  let { contentRightImage } = $$props;
  let { contentRightAlt } = $$props;
  if ($$props.contentRightText === void 0 && $$bindings.contentRightText && contentRightText !== void 0)
    $$bindings.contentRightText(contentRightText);
  if ($$props.contentRightImage === void 0 && $$bindings.contentRightImage && contentRightImage !== void 0)
    $$bindings.contentRightImage(contentRightImage);
  if ($$props.contentRightAlt === void 0 && $$bindings.contentRightAlt && contentRightAlt !== void 0)
    $$bindings.contentRightAlt(contentRightAlt);
  $$result.css.add(css$3);
  return `<div class="${"svelte-tfjzc2"}"><p class="${"svelte-tfjzc2"}">${(0, import_index_62012ddc.e)(contentRightText)}</p>
	<img${(0, import_index_62012ddc.a)("src", contentRightImage, 0)}${(0, import_index_62012ddc.a)("alt", contentRightAlt, 0)} class="${"svelte-tfjzc2"}">
</div>`;
});
var StandardHero_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "section.svelte-yy5b9v{background:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),\r\n			url('/assets/images/detail-hero-image.jpg');background-size:cover;background-position:center;height:15rem;color:var(--color-white);padding:1rem;display:flex;flex-direction:column;justify-content:center}h1.svelte-yy5b9v{color:var(--color-cmd-yellow);font-style:normal}div.svelte-yy5b9v{max-width:50rem}@media(min-width: 45rem){section.svelte-yy5b9v{padding:2rem 3rem}h1.svelte-yy5b9v{font-size:2rem}div.svelte-yy5b9v{font-size:1.2rem}}@media(min-width: 60rem){section.svelte-yy5b9v{height:20rem;padding:3rem 5rem}h1.svelte-yy5b9v{font-size:2.5rem}}@media(min-width: 75rem){section.svelte-yy5b9v{height:25rem;padding:3rem 6rem}}",
  map: null
};
const StandardHero = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  let { standardHeaderTitle } = $$props;
  let { standardHeaderIntroduction } = $$props;
  let { standardNumber } = $$props;
  if ($$props.standardHeaderTitle === void 0 && $$bindings.standardHeaderTitle && standardHeaderTitle !== void 0)
    $$bindings.standardHeaderTitle(standardHeaderTitle);
  if ($$props.standardHeaderIntroduction === void 0 && $$bindings.standardHeaderIntroduction && standardHeaderIntroduction !== void 0)
    $$bindings.standardHeaderIntroduction(standardHeaderIntroduction);
  if ($$props.standardNumber === void 0 && $$bindings.standardNumber && standardNumber !== void 0)
    $$bindings.standardNumber(standardNumber);
  $$result.css.add(css$2);
  return `<section class="${"svelte-yy5b9v"}"><h1 class="${"svelte-yy5b9v"}">${(0, import_index_62012ddc.e)(`${standardNumber}.0`)} ${(0, import_index_62012ddc.e)(standardHeaderTitle)}</h1>
	<div class="${"svelte-yy5b9v"}"><!-- HTML_TAG_START -->${helpers.asHTML(standardHeaderIntroduction)}<!-- HTML_TAG_END --></div>
</section>`;
});
var StandardNavigation_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-1ghv4ds.svelte-1ghv4ds{background-color:var(--color-cmd-yellow);position:fixed;bottom:2rem;right:1rem;border-radius:0.5rem;text-align:right;padding:1rem}span.svelte-1ghv4ds.svelte-1ghv4ds{font-size:1rem;font-weight:bold;cursor:pointer}span.svelte-1ghv4ds.svelte-1ghv4ds:hover{color:var(--color-cmd-grey)}nav.svelte-1ghv4ds.svelte-1ghv4ds{display:flex;flex-direction:column;gap:1rem}nav.active.svelte-1ghv4ds.svelte-1ghv4ds{display:none}nav.svelte-1ghv4ds a.svelte-1ghv4ds{font-weight:bold;color:var(--color-black);transition:0.3 ease-in-out}nav.svelte-1ghv4ds a.svelte-1ghv4ds:hover{color:var(--color-cmd-grey)}@media(min-width: 45rem){span.svelte-1ghv4ds.svelte-1ghv4ds{font-size:1.2rem}}",
  map: null
};
const StandardNavigation = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  let { navigationLink } = $$props;
  if ($$props.navigationLink === void 0 && $$bindings.navigationLink && navigationLink !== void 0)
    $$bindings.navigationLink(navigationLink);
  $$result.css.add(css$1);
  return `<div class="${"svelte-1ghv4ds"}"><span class="${"svelte-1ghv4ds"}">Menu</span>
	<nav class="${["svelte-1ghv4ds", "active"].join(" ").trim()}">${slots.default ? slots.default({}) : ``}
		<a${(0, import_index_62012ddc.a)("href", `${navigationLink}/#`, 0)} class="${"svelte-1ghv4ds"}">Back To Top</a></nav>
</div>`;
});
var StandardNavigationLink_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-16m4hwb{color:var(--color-black);max-width:20rem}a.svelte-16m4hwb:hover{color:var(--color-cmd-grey)}a.svelte-16m4hwb:first-child{padding-top:0.5rem}",
  map: null
};
const StandardNavigationLink = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  let { chapterLink } = $$props;
  let { chapter } = $$props;
  if ($$props.chapterLink === void 0 && $$bindings.chapterLink && chapterLink !== void 0)
    $$bindings.chapterLink(chapterLink);
  if ($$props.chapter === void 0 && $$bindings.chapter && chapter !== void 0)
    $$bindings.chapter(chapter);
  $$result.css.add(css);
  return `<a${(0, import_index_62012ddc.a)("href", chapterLink, 0)} class="${"svelte-16m4hwb"}">${(0, import_index_62012ddc.e)(chapter)}</a>`;
});
const U5Buidu5D = (0, import_index_62012ddc.c)(($$result, $$props, $$bindings, slots) => {
  let { standard } = $$props;
  if ($$props.standard === void 0 && $$bindings.standard && standard !== void 0)
    $$bindings.standard(standard);
  return `${(0, import_index_62012ddc.v)(import_PageTransition_b2d7673e.P, "PageTransition").$$render($$result, {}, {}, {
    default: () => {
      var _a;
      return `${standard && Object.keys(standard).length ? `${(0, import_index_62012ddc.v)(StandardHero, "StandardHero").$$render($$result, {
        standardHeaderTitle: standard.data.title,
        standardHeaderIntroduction: standard.data.introduction,
        standardNumber: standard.data.standardnumber
      }, {}, {})}
		${(0, import_index_62012ddc.b)((_a = standard.data) == null ? void 0 : _a.chapters, (chapter, i) => {
        return `${(0, import_index_62012ddc.v)(ChapterSection, "ChapterSection").$$render($$result, {
          chapterTitle: chapter == null ? void 0 : chapter.data.title,
          chapterNumber: `${standard == null ? void 0 : standard.data.standardnumber}.${i + 1}`,
          chapterUID: chapter == null ? void 0 : chapter.uid
        }, {}, {
          default: () => {
            var _a2, _b;
            return `${(0, import_index_62012ddc.b)((_a2 = chapter.data) == null ? void 0 : _a2.contentleft, (contentleft) => {
              return `${(0, import_index_62012ddc.v)(ChapterContentLeft, "ChapterContentLeft").$$render($$result, {
                contentLeftText: contentleft.text,
                contentLeftImage: contentleft.url
              }, {}, {})}`;
            })}
				${(0, import_index_62012ddc.b)((_b = chapter.data) == null ? void 0 : _b.contentright, (contentright) => {
              return `${(0, import_index_62012ddc.v)(ChapterContentRight, "ChapterContentRight").$$render($$result, {
                contentRightText: contentright.text,
                contentRightImage: contentright.url
              }, {}, {})}`;
            })}
			`;
          }
        })}`;
      })}
		${(0, import_index_62012ddc.v)(StandardNavigation, "StandardNavigation").$$render($$result, { navigationLink: standard.uid }, {}, {
        default: () => {
          return `${(0, import_index_62012ddc.b)(standard.data.chapters, (chapter) => {
            return `${(0, import_index_62012ddc.v)(StandardNavigationLink, "StandardNavigationLink").$$render($$result, {
              chapterLink: `${standard.uid}/#${chapter == null ? void 0 : chapter.uid}`,
              chapter: chapter == null ? void 0 : chapter.data.title
            }, {}, {})}`;
          })}`;
        }
      })}` : ``}`;
    }
  })}`;
});

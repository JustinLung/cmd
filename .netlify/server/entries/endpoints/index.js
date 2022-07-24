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
  get: () => get
});
module.exports = __toCommonJS(stdin_exports);
var import_prismicClient_defcf1de = require("../../immutable/chunks/prismicClient-defcf1de.js");
var import_client = require("@prismicio/client");
async function get({ fetch }) {
  const client = (0, import_prismicClient_defcf1de.c)({ fetch });
  const page = await client.getSingle("midterm");
  const standards = await Promise.all(page.data.standards.map(async (s) => {
    const standard = await client.getByUID("standard", s.standard.uid);
    const chapters = await Promise.all(standard.data.chapters.map(async (s2) => {
      const chapter = await client.getByUID("chapter", s2.chapter.uid);
      return chapter;
    }));
    standard.data.chapters = chapters;
    return standard;
  }));
  if (page)
    return {
      body: {
        page,
        standards
      }
    };
  return {
    status: 404
  };
}

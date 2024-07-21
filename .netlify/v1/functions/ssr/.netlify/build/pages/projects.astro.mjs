/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BLBFWlNj.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_B--OOOY0.mjs';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_UWqc1hdW.mjs';
import { $ as $$ArrowCard } from '../chunks/ArrowCard_5FZcS8Hl.mjs';
import { P as PROJECTS } from '../chunks/consts_4qx2RGZz.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("projects")).filter((project) => !project.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": PROJECTS.TITLE, "description": PROJECTS.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<aside data-pagefind-ignore> <div class="space-y-10"> <div class="animate font-semibold text-black dark:text-white">
Projects
</div> <ul class="animate not-prose flex flex-col gap-4"> ${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "ArrowCard", $$ArrowCard, { "entry": project })} </li>`)} </ul> </div> </aside> ` })} ` })}`;
}, "C:/laragon/www/adityaprayoga/src/pages/projects/index.astro", void 0);

const $$file = "C:/laragon/www/adityaprayoga/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

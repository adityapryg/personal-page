/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BLBFWlNj.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_B--OOOY0.mjs';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_UWqc1hdW.mjs';
import { $ as $$ArrowCard } from '../chunks/ArrowCard_5FZcS8Hl.mjs';
import { B as BLOG } from '../chunks/consts_4qx2RGZz.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const data = (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const posts = data.reduce((acc, post) => {
    const year = post.data.date.getFullYear().toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});
  const years = Object.keys(posts).sort((a, b) => parseInt(b) - parseInt(a));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": BLOG.TITLE, "description": BLOG.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<aside data-pagefind-ignore> <div class="space-y-10"> <div class="space-y-4"> ${years.map((year) => renderTemplate`<section class="animate space-y-4"> <div class="font-semibold text-black dark:text-white"> ${year} </div> <div> <ul class="not-prose flex flex-col gap-4"> ${posts[year].map((post) => renderTemplate`<li> ${renderComponent($$result3, "ArrowCard", $$ArrowCard, { "entry": post })} </li>`)} </ul> </div> </section>`)} </div> </div> </aside> ` })} ` })}`;
}, "C:/laragon/www/adityaprayoga/src/pages/blog/index.astro", void 0);

const $$file = "C:/laragon/www/adityaprayoga/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

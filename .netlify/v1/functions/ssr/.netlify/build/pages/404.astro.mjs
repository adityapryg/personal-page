/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BLBFWlNj.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_UWqc1hdW.mjs';
import { $ as $$BackToPrevious } from '../chunks/BackToPrevious_CZgCUCLk.mjs';
import { S as SITE } from '../chunks/consts_4qx2RGZz.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404", "description": SITE.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-16 grid place-items-center gap-3"> <h4 class="animate text-2xl font-semibold text-black dark:text-white">
404: Page not found
</h4> <span class="animate"> ${renderComponent($$result3, "BackToPrevious", $$BackToPrevious, { "href": "/" }, { "default": ($$result4) => renderTemplate`Go to home page` })} </span> </div> ` })} ` })}`;
}, "C:/laragon/www/adityaprayoga/src/pages/404.astro", void 0);

const $$file = "C:/laragon/www/adityaprayoga/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

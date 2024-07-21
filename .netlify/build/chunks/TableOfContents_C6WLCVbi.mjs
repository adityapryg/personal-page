import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from './astro/server_BLBFWlNj.mjs';
import 'kleur/colors';
import 'clsx';
import { b as $$Link } from './Layout_UWqc1hdW.mjs';
/* empty css                          */

const $$Astro$2 = createAstro("https://adityapryg.my.id");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("id-ID", {
    month: "long",
    day: "2-digit",
    year: "numeric"
  })} </time>`;
}, "C:/laragon/www/adityaprayoga/src/components/FormattedDate.astro", void 0);

const $$Astro$1 = createAstro("https://adityapryg.my.id");
const $$TableOfContentsHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TableOfContentsHeading;
  const { heading } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="list-inside list-disc px-6 py-1.5 text-sm"> ${renderComponent($$result, "Link", $$Link, { "href": "#" + heading.slug, "underline": true }, { "default": ($$result2) => renderTemplate`${heading.text}` })} ${heading.subheadings.length > 0 && renderTemplate`<ul class="translate-x-3"> ${heading.subheadings.map((subheading) => renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "heading": subheading })}`)} </ul>`} </li>`;
}, "C:/laragon/www/adityaprayoga/src/components/TableOfContentsHeading.astro", void 0);

const $$Astro = createAstro("https://adityapryg.my.id");
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { headings } = Astro2.props;
  const toc = buildToc(headings);
  function buildToc(headings2) {
    const toc2 = [];
    const parentHeadings = /* @__PURE__ */ new Map();
    headings2.forEach((h) => {
      const heading = { ...h, subheadings: [] };
      parentHeadings.set(heading.depth, heading);
      if (heading.depth === 2) {
        toc2.push(heading);
      } else {
        parentHeadings.get(heading.depth - 1).subheadings.push(heading);
      }
    });
    return toc2;
  }
  return renderTemplate`${maybeRenderHead()}<details open class="animate rounded-lg border border-black/15 dark:border-white/20" data-astro-cid-xvrfupwn> <summary data-astro-cid-xvrfupwn>Table of Contents</summary> <nav class="" data-astro-cid-xvrfupwn> <ul class="py-3" data-astro-cid-xvrfupwn> ${toc.map((heading) => renderTemplate`${renderComponent($$result, "TableOfContentsHeading", $$TableOfContentsHeading, { "heading": heading, "data-astro-cid-xvrfupwn": true })}`)} </ul> </nav> </details> `;
}, "C:/laragon/www/adityaprayoga/src/components/TableOfContents.astro", void 0);

export { $$FormattedDate as $, $$TableOfContents as a };

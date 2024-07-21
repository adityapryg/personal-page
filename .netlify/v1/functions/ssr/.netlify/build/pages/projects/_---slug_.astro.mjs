/* empty css                                     */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BLBFWlNj.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_B--OOOY0.mjs';
import { a as $$Layout, $ as $$Container, r as readingTime, b as $$Link } from '../../chunks/Layout_UWqc1hdW.mjs';
import { $ as $$FormattedDate, a as $$TableOfContents } from '../../chunks/TableOfContents_C6WLCVbi.mjs';
import { $ as $$BackToPrevious } from '../../chunks/BackToPrevious_CZgCUCLk.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://adityapryg.my.id");
async function getStaticPaths() {
  const projects = (await getCollection("projects")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return projects.map((project) => ({
    params: { slug: project.slug },
    props: project
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const project = Astro2.props;
  const { Content, headings } = await project.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": project.data.title, "description": project.data.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> ${renderComponent($$result3, "BackToPrevious", $$BackToPrevious, { "href": "/projects" }, { "default": ($$result4) => renderTemplate`Back to projects` })} </div> <div class="animate my-10 space-y-1"> <div class="flex items-center gap-1.5"> <div class="font-base text-sm"> ${renderComponent($$result3, "FormattedDate", $$FormattedDate, { "date": project.data.date })} </div>
&bull;
<div class="font-base text-sm"> ${readingTime(project.body)} </div> </div> <h1 class="text-3xl font-semibold text-black dark:text-white"> ${project.data.title} </h1> ${(project.data.demoURL || project.data.repoURL) && renderTemplate`<nav class="flex gap-1"> ${project.data.demoURL && renderTemplate`${renderComponent($$result3, "Link", $$Link, { "href": project.data.demoURL, "external": true }, { "default": ($$result4) => renderTemplate`
demo
` })}`} ${project.data.demoURL && project.data.repoURL && renderTemplate`<span>/</span>`} ${project.data.repoURL && renderTemplate`${renderComponent($$result3, "Link", $$Link, { "href": project.data.repoURL, "external": true }, { "default": ($$result4) => renderTemplate`
repo
` })}`} </nav>`} </div> ${renderComponent($$result3, "TableOfContents", $$TableOfContents, { "headings": headings })} <article class="animate"> ${renderComponent($$result3, "Content", Content, {})} </article> ` })} ` })}`;
}, "C:/laragon/www/adityaprayoga/src/pages/projects/[...slug].astro", void 0);

const $$file = "C:/laragon/www/adityaprayoga/src/pages/projects/[...slug].astro";
const $$url = "/projects/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

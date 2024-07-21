/* empty css                                     */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../../chunks/astro/server_BLBFWlNj.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_B--OOOY0.mjs';
import { a as $$Layout, $ as $$Container, r as readingTime } from '../../chunks/Layout_UWqc1hdW.mjs';
import { $ as $$FormattedDate, a as $$TableOfContents } from '../../chunks/TableOfContents_C6WLCVbi.mjs';
import { $ as $$BackToPrevious } from '../../chunks/BackToPrevious_CZgCUCLk.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://adityapryg.my.id");
const $$PostNavigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostNavigation;
  const { prevPost, nextPost } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-2 gap-1.5 sm:gap-3"> ${prevPost?.slug ? renderTemplate`<a${addAttribute(`/blog/${prevPost?.slug}`, "href")} class="group relative flex flex-nowrap rounded-lg border border-black/15 px-4 py-3 pl-10 no-underline transition-colors duration-300 ease-in-out hover:bg-black/5 hover:text-black focus-visible:bg-black/5 focus-visible:text-black dark:border-white/20 dark:hover:bg-white/5 dark:hover:text-white dark:focus-visible:bg-white/5 dark:focus-visible:text-white"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="absolute left-2 top-1/2 size-5 -translate-y-1/2 fill-none stroke-current stroke-2"> <line x1="5" y1="12" x2="19" y2="12" class="translate-x-3 scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100 group-focus-visible:translate-x-0 group-focus-visible:scale-x-100"></line> <polyline points="12 5 5 12 12 19" class="translate-x-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-focus-visible:translate-x-0"></polyline> </svg> <div class="flex items-center text-sm">${prevPost?.data.title}</div> </a>` : renderTemplate`<div class="invisible"></div>`} ${nextPost?.slug ? renderTemplate`<a${addAttribute(`/blog/${nextPost?.slug}`, "href")} class="group relative flex flex-grow flex-row-reverse flex-nowrap rounded-lg border border-black/15 px-4 py-4 pr-10 no-underline transition-colors duration-300 ease-in-out hover:bg-black/5 hover:text-black focus-visible:bg-black/5 focus-visible:text-black dark:border-white/20 dark:hover:bg-white/5 dark:hover:text-white dark:focus-visible:bg-white/5 dark:focus-visible:text-white"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="absolute right-2 top-1/2 size-5 -translate-y-1/2 fill-none stroke-current stroke-2"> <line x1="5" y1="12" x2="19" y2="12" class="translate-x-3 scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100 group-focus-visible:translate-x-0 group-focus-visible:scale-x-100"></line> <polyline points="12 5 19 12 12 19" class="-translate-x-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-focus-visible:translate-x-0"></polyline> </svg> <div class="flex items-center text-sm">${nextPost?.data.title}</div> </a>` : renderTemplate`<div class="invisible"></div>`} </div>`;
}, "C:/laragon/www/adityaprayoga/src/components/PostNavigation.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Giscus = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div class="giscus"></div> <script data-astro-rerun src="https://giscus.app/client.js" data-repo="adityapryg/adityapryg" data-repo-id="R_kgDOGI0-vg" data-category="General" data-category-id="DIC_kwDOGI0-vs4ChDfZ" data-mapping="pathname" data-strict="0" data-reactions-enabled="1" data-emit-metadata="0" data-input-position="top" data-theme="preferred_color_scheme" data-lang="id" data-loading="lazy" crossorigin="anonymous" async>\n<\/script>'])), maybeRenderHead());
}, "C:/laragon/www/adityaprayoga/src/components/Giscus.astro", void 0);

const $$Astro = createAstro("https://adityapryg.my.id");
async function getStaticPaths() {
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const posts = (await getCollection("blog")).filter((post2) => !post2.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  function getNextPost() {
    let postIndex;
    for (const post2 of posts) {
      if (post2.slug === Astro2.params.slug) {
        postIndex = posts.indexOf(post2);
        return posts[postIndex + 1];
      }
    }
  }
  function getPrevPost() {
    let postIndex;
    for (const post2 of posts) {
      if (post2.slug === Astro2.params.slug) {
        postIndex = posts.indexOf(post2);
        return posts[postIndex - 1];
      }
    }
  }
  const nextPost = getNextPost();
  const prevPost = getPrevPost();
  const post = Astro2.props;
  const { Content, headings } = await post.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title, "description": post.data.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> ${renderComponent($$result3, "BackToPrevious", $$BackToPrevious, { "href": "/blog" }, { "default": ($$result4) => renderTemplate`Back to blog` })} </div> <div class="my-10 space-y-1"> <div class="animate flex items-center gap-1.5"> <div class="font-base text-sm"> ${renderComponent($$result3, "FormattedDate", $$FormattedDate, { "date": post.data.date })} </div>
&bull;
<div class="font-base text-sm"> ${readingTime(post.body)} </div> </div> <h1 class="animate text-3xl font-semibold text-black dark:text-white"> ${post.data.title} </h1> </div> ${headings.length > 0 && renderTemplate`${renderComponent($$result3, "TableOfContents", $$TableOfContents, { "headings": headings })}`}<article class="animate"> ${renderComponent($$result3, "Content", Content, {})} <div class="mt-24"> ${renderComponent($$result3, "PostNavigation", $$PostNavigation, { "prevPost": prevPost, "nextPost": nextPost })} </div> <div class="mt-24"> ${renderComponent($$result3, "Giscus", $$Giscus, {})} </div> </article> ` })} ` })}`;
}, "C:/laragon/www/adityaprayoga/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/laragon/www/adityaprayoga/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

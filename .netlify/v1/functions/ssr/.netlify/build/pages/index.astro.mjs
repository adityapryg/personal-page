/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BLBFWlNj.mjs';
import 'kleur/colors';
import { $ as $$Container, b as $$Link, a as $$Layout } from '../chunks/Layout_UWqc1hdW.mjs';
import { S as SITE, a as SOCIALS, H as HOME } from '../chunks/consts_4qx2RGZz.mjs';
import { $ as $$ArrowCard } from '../chunks/ArrowCard_5FZcS8Hl.mjs';
import { g as getCollection } from '../chunks/_astro_content_B--OOOY0.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const blog = (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()).slice(0, SITE.NUM_POSTS_ON_HOMEPAGE);
  const projects = (await getCollection("projects")).filter((project) => !project.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()).slice(0, SITE.NUM_PROJECTS_ON_HOMEPAGE);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": HOME.TITLE, "description": HOME.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<aside data-pagefind-ignore> <div class="flex items-center space-x-4"> <img src="/profile.png" alt="Profile Picture" class="w-16 h-16 rounded-full"> <div> <h1 class="animate font-semibold text-black dark:text-white">
Mas, Adit, Yoga
</h1> <h2 class="animate font-light text-black dark:text-white">
Software Developer, System Analyst
</h2> </div> </div> <div class="space-y-16 mt-4"> <section> <article class="space-y-4"> <span class="animate"> <p>
Hey, I'm a software developer from Indonesia, currently working as a Developer & System Analyst at
${renderComponent($$result3, "Link", $$Link, { "href": "https://brainmatics.id", "external": true }, { "default": ($$result4) => renderTemplate` Brainmatics ` })} & ${renderComponent($$result3, "Link", $$Link, { "href": "https://braindevs.id", "external": true }, { "default": ($$result4) => renderTemplate`Braindevs` })}.
                I help build software for both companies and ministries, primarily focusing on frontend development with ReactJS and backend development with Laravel.
</p> </span> <!-- Photo Gallery Section --> <section class="animate space-y-6 mt-8"> <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4"> <img src="/aditya/photo2.jpg" alt="Photo 2" class="w-full h-auto rounded-lg object-cover"> <img src="/aditya/photo3.jpg" alt="Photo 3" class="w-full h-auto rounded-lg object-cover"> <img src="/aditya/photo4.jpg" alt="Photo 4" class="w-full h-auto rounded-lg object-cover"> <img src="/aditya/photo5.jpg" alt="Photo 5" class="w-full h-auto rounded-lg object-cover"> </div> </section> <span class="animate"> <p>
I also work as a trainer for various IT courses, teaching Laravel, Java, React, Software Testing, and more. 📄
${renderComponent($$result3, "Link", $$Link, { "href": "/aditya-cv-jun-2024.pdf" }, { "default": ($$result4) => renderTemplate`
Resume
` })} </p> </span> </article> </section> <section class="animate space-y-6"> <div class="flex flex-wrap items-center justify-between gap-y-2"> <h2 class="font-semibold text-black dark:text-white">
Latest posts
</h2> ${renderComponent($$result3, "Link", $$Link, { "href": "/blog" }, { "default": ($$result4) => renderTemplate` See all posts ` })} </div> <ul class="not-prose flex flex-col gap-4"> ${blog.map((post) => renderTemplate`<li> ${renderComponent($$result3, "ArrowCard", $$ArrowCard, { "entry": post })} </li>`)} </ul> </section> <section class="animate space-y-6"> <div class="flex flex-wrap items-center justify-between gap-y-2"> <h2 class="font-semibold text-black dark:text-white">
Recent projects
</h2> ${renderComponent($$result3, "Link", $$Link, { "href": "/projects" }, { "default": ($$result4) => renderTemplate` See all projects ` })} </div> <ul class="not-prose flex flex-col gap-4"> ${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "ArrowCard", $$ArrowCard, { "entry": project })} </li>`)} </ul> </section> <section class="animate space-y-4"> <h2 class="font-semibold text-black dark:text-white">
Let's Connect
</h2> <article> <p>
If you want to get in touch with me about something or just to say
              hi, reach out on social media or send me an email.
</p> </article> <ul class="not-prose flex flex-wrap gap-2"> ${SOCIALS.map((SOCIAL) => renderTemplate`<li class="flex gap-x-2 text-nowrap"> ${renderComponent($$result3, "Link", $$Link, { "href": SOCIAL.HREF, "external": true, "aria-label": `${SITE.TITLE} on ${SOCIAL.NAME}` }, { "default": ($$result4) => renderTemplate`${SOCIAL.NAME}` })} ${"/"} </li>`)} <li class="line-clamp-1"> ${renderComponent($$result3, "Link", $$Link, { "href": `mailto:${SITE.EMAIL}`, "aria-label": `Email ${SITE.TITLE}` }, { "default": ($$result4) => renderTemplate`${SITE.EMAIL}` })} </li> </ul> </section> </div> </aside> ` })} ` })}`;
}, "C:/laragon/www/adityaprayoga/src/pages/index.astro", void 0);

const $$file = "C:/laragon/www/adityaprayoga/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

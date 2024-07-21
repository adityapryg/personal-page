import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_BLBFWlNj.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://adityapryg.my.id");
const $$ArrowCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArrowCard;
  const { entry } = Astro2.props;
  const typeColorClass = "type" in entry.data && entry.data.type === "public" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/${entry.collection}/${entry.slug}`, "href")} class="not-prose group relative flex flex-nowrap rounded-lg border border-black/15 px-4 py-3 pr-10 transition-colors duration-300 ease-in-out hover:bg-black/5 hover:text-black focus-visible:bg-black/5 focus-visible:text-black dark:border-white/20 dark:hover:bg-white/5 dark:hover:text-white dark:focus-visible:bg-white/5 dark:focus-visible:text-white"> <div class="flex flex-1 flex-col truncate"> <div class="font-semibold"> ${entry.data.title} </div> <div class="text-sm"> ${entry.data.description} </div> <div class="flex flex-wrap mt-2 space-x-2"> ${"type" in entry.data && renderTemplate`<span${addAttribute(`inline-block ${typeColorClass} text-xs px-2 py-1 rounded-full`, "class")}> ${entry.data.type} </span>`} ${"tags" in entry.data && entry.data.tags && Array.isArray(entry.data.tags) && entry.data.tags.map((tag) => renderTemplate`<span class="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full"> ${tag} </span>`)} </div> </div> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="absolute right-2 top-1/2 size-5 -translate-y-1/2 fill-none stroke-current stroke-2"> <line x1="5" y1="12" x2="19" y2="12" class="translate-x-3 scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100 group-focus-visible:translate-x-0 group-focus-visible:scale-x-100"></line> <polyline points="12 5 19 12 12 19" class="-translate-x-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-focus-visible:translate-x-0"></polyline> </svg> </a>`;
}, "C:/laragon/www/adityaprayoga/src/components/ArrowCard.astro", void 0);

export { $$ArrowCard as $ };

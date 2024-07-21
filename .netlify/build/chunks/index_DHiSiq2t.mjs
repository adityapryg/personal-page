const id = "00-micro-changelog/index.mdx";
						const collection = "blog";
						const slug = "00-micro-changelog";
						const body = "\r\nimport Callout from \"@/components/Callout.astro\";\r\n\r\n---\r\n\r\n## Pagefind search 🔎\r\n\r\n[Pagefind](https://pagefind.app) is a search library for static websites. Micro uses [Sergey Shishkin's](https://github.com/shishkin) [astro-pagefind](https://github.com/shishkin/astro-pagefind) integration. This integration simplifies development and does not require any changes to the default build script.\r\n\r\nPress <kbd>/</kbd> or <kbd>CTRL</kbd> + <kbd>K</kbd> to open the search dialog. For Mac users, <kbd>⌘</kbd> + <kbd>K</kbd> can also be used. To dismiss the search dialog, press <kbd>Esc</kbd> or click on an area outside the component.\r\n\r\n### Build and develop\r\n\r\n<Callout type=\"error\">\r\n  The site **must** be built at least once so Pagefind can index the content.\r\n</Callout>\r\n\r\n```bash\r\n# Pagefind must index the site to function\r\nnpm run build\r\n```\r\n\r\nWhen developing you can continue to use `npm run dev` and Pagefind will use the index from the last available build.\r\n\r\n---\r\n\r\n## Giscus comments 💬\r\n\r\n[Giscus](https://giscus.app) leverages Github discussions to act as a comments system. To get Giscus working on your own website, see [here](/blog/01-getting-started#deploy-the-site).\r\n\r\n---\r\n\r\n## Callout component 🆕\r\n\r\n<Callout>\r\n  Adipisicing et officia reprehenderit fugiat occaecat cupidatat exercitation\r\n  labore consequat ullamco nostrud non.\r\n</Callout>\r\n\r\n<Callout type=\"info\">\r\n  Adipisicing et officia reprehenderit fugiat occaecat cupidatat exercitation\r\n  labore consequat ullamco nostrud non.\r\n</Callout>\r\n\r\n<Callout type=\"warning\">\r\n  Adipisicing et officia reprehenderit fugiat occaecat cupidatat exercitation\r\n  labore consequat ullamco nostrud non.\r\n</Callout>\r\n\r\n<Callout type=\"error\">\r\n  Adipisicing et officia reprehenderit fugiat occaecat cupidatat exercitation\r\n  labore consequat ullamco nostrud non.\r\n</Callout>\r\n\r\n---\r\n\r\n## UI enhancements 🎨\r\n\r\n- Elements are styled and animate on focus\r\n- Increased contrast in light mode\r\n- Active theme is indicated by theme buttons\r\n- Separate syntax highlight themes for light and dark mode\r\n- Code blocks have a copy button\r\n- Add pagination to the bottom of blog posts\r\n- Create 404 page\r\n- Add ToC component to posts\r\n\r\n---\r\n\r\n## Other changes\r\n\r\n- Change fonts to Geist Sans and Geist Mono\r\n- Switch base color from \"stone\" to \"neutral\"\r\n- Change formatted date to use \"long\" option for month\r\n- Minor spacing changes throughout\r\n- Remove \"work\" collection and components\r\n  - If desired, you can get the code from [Astro Nano](https://github.com/markhorn-dev/astro-nano)\r\n- Slightly increased link decoration offset\r\n- Slightly sped-up animations\r\n- Reversed animation\r\n- Ensure posts use an h1 tag for post titles\r\n- Tweaked typography\r\n\r\n---\r\n\r\n## Issues ⚠️\r\n\r\n### Active issues\r\n\r\n- [PostNavigation.astro is broken when deployed with Cloudflare Pages](https://github.com/trevortylerlee/astro-micro/issues/39)\r\n\r\n### Closed issues\r\n\r\n- Fixed by [blopker](https://github.com/blopker): [Pagefind requires a refresh to function when ViewTransitions is enabled](https://github.com/trevortylerlee/astro-micro/issues/7)\r\n- Fixed by [blopker](https://github.com/blopker): [ToC links are obscured by Header when scrolled to](https://github.com/trevortylerlee/astro-micro/issues/4)\r\n- Fixed by [cgranier](https://github.com/cgranier): [Pagination links advance by slug/folder](https://github.com/trevortylerlee/astro-micro/issues/26)\r\n- Fixed by [cgranier](https://github.com/cgranier): [Hides Table of Contents when there are no headings](https://github.com/trevortylerlee/astro-micro/pull/30)\r\n- Fixed by [arastoonet](https://github.com/arastoonet): [Fix typo in README](https://github.com/trevortylerlee/astro-micro/pull/19)\r\n- Fixed by [luciancah](https://github.com/luciancah): [Prevent Pagefind from double-indexing results](https://github.com/trevortylerlee/astro-micro/issues/40)\r\n";
						const data = {title:"Everything new in Astro Micro",description:"Features, enhancements, and changes.",date:new Date(1715212800000)};
						const _internal = {
							type: 'content',
							filePath: "C:/laragon/www/adityaprayoga/src/content/blog/00-micro-changelog/index.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };

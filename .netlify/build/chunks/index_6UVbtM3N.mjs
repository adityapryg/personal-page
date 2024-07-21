import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot, F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_BLBFWlNj.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Bdj6nx-l.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                               */

const $$Astro = createAstro("https://adityapryg.my.id");
const $$Callout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Callout;
  const { type = "default" } = Astro2.props;
  let emoji = "\u{1F4A1}";
  if (type === "info") {
    emoji = "\u2139\uFE0F";
  } else if (type === "warning") {
    emoji = "\u26A0\uFE0F";
  } else if (type === "error") {
    emoji = "\u{1F6A8}";
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`not-prose callout callout-${type}`, "class")} data-astro-cid-mrmim4ef> <span class="emoji pointer-events-none select-none" data-astro-cid-mrmim4ef>${emoji}</span> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/laragon/www/adityaprayoga/src/components/Callout.astro", void 0);

const frontmatter = {
  "title": "Everything new in Astro Micro",
  "description": "Features, enhancements, and changes.",
  "date": "2024-05-09"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "pagefind-search",
    "text": "Pagefind search 🔎"
  }, {
    "depth": 3,
    "slug": "build-and-develop",
    "text": "Build and develop"
  }, {
    "depth": 2,
    "slug": "giscus-comments",
    "text": "Giscus comments 💬"
  }, {
    "depth": 2,
    "slug": "callout-component",
    "text": "Callout component 🆕"
  }, {
    "depth": 2,
    "slug": "ui-enhancements",
    "text": "UI enhancements 🎨"
  }, {
    "depth": 2,
    "slug": "other-changes",
    "text": "Other changes"
  }, {
    "depth": 2,
    "slug": "issues-️",
    "text": "Issues ⚠️"
  }, {
    "depth": 3,
    "slug": "active-issues",
    "text": "Active issues"
  }, {
    "depth": 3,
    "slug": "closed-issues",
    "text": "Closed issues"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "pagefind-search",
      children: "Pagefind search 🔎"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://pagefind.app",
        children: "Pagefind"
      }), " is a search library for static websites. Micro uses ", createVNode(_components.a, {
        href: "https://github.com/shishkin",
        children: "Sergey Shishkin’s"
      }), " ", createVNode(_components.a, {
        href: "https://github.com/shishkin/astro-pagefind",
        children: "astro-pagefind"
      }), " integration. This integration simplifies development and does not require any changes to the default build script."]
    }), "\n", createVNode(_components.p, {
      children: ["Press ", createVNode("kbd", {
        children: "/"
      }), " or ", createVNode("kbd", {
        children: "CTRL"
      }), " + ", createVNode("kbd", {
        children: "K"
      }), " to open the search dialog. For Mac users, ", createVNode("kbd", {
        children: "⌘"
      }), " + ", createVNode("kbd", {
        children: "K"
      }), " can also be used. To dismiss the search dialog, press ", createVNode("kbd", {
        children: "Esc"
      }), " or click on an area outside the component."]
    }), "\n", createVNode(_components.h3, {
      id: "build-and-develop",
      children: "Build and develop"
    }), "\n", createVNode($$Callout, {
      type: "error",
      children: createVNode(_components.p, {
        children: ["The site ", createVNode(_components.strong, {
          children: "must"
        }), " be built at least once so Pagefind can index the content."]
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code css-variables",
      style: {
        backgroundColor: "var(--astro-code-color-background)",
        color: "var(--astro-code-color-text)",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-comment)"
            },
            children: "# Pagefind must index the site to function"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string)"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string)"
            },
            children: " build"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["When developing you can continue to use ", createVNode(_components.code, {
        children: "npm run dev"
      }), " and Pagefind will use the index from the last available build."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "giscus-comments",
      children: "Giscus comments 💬"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://giscus.app",
        children: "Giscus"
      }), " leverages Github discussions to act as a comments system. To get Giscus working on your own website, see ", createVNode(_components.a, {
        href: "/blog/01-getting-started#deploy-the-site",
        children: "here"
      }), "."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "callout-component",
      children: "Callout component 🆕"
    }), "\n", createVNode($$Callout, {
      children: createVNode(_components.p, {
        children: "Adipisicing et officia reprehenderit fugiat occaecat cupidatat exercitation\r\nlabore consequat ullamco nostrud non."
      })
    }), "\n", createVNode($$Callout, {
      type: "info",
      children: createVNode(_components.p, {
        children: "Adipisicing et officia reprehenderit fugiat occaecat cupidatat exercitation\r\nlabore consequat ullamco nostrud non."
      })
    }), "\n", createVNode($$Callout, {
      type: "warning",
      children: createVNode(_components.p, {
        children: "Adipisicing et officia reprehenderit fugiat occaecat cupidatat exercitation\r\nlabore consequat ullamco nostrud non."
      })
    }), "\n", createVNode($$Callout, {
      type: "error",
      children: createVNode(_components.p, {
        children: "Adipisicing et officia reprehenderit fugiat occaecat cupidatat exercitation\r\nlabore consequat ullamco nostrud non."
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "ui-enhancements",
      children: "UI enhancements 🎨"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Elements are styled and animate on focus"
      }), "\n", createVNode(_components.li, {
        children: "Increased contrast in light mode"
      }), "\n", createVNode(_components.li, {
        children: "Active theme is indicated by theme buttons"
      }), "\n", createVNode(_components.li, {
        children: "Separate syntax highlight themes for light and dark mode"
      }), "\n", createVNode(_components.li, {
        children: "Code blocks have a copy button"
      }), "\n", createVNode(_components.li, {
        children: "Add pagination to the bottom of blog posts"
      }), "\n", createVNode(_components.li, {
        children: "Create 404 page"
      }), "\n", createVNode(_components.li, {
        children: "Add ToC component to posts"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "other-changes",
      children: "Other changes"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Change fonts to Geist Sans and Geist Mono"
      }), "\n", createVNode(_components.li, {
        children: "Switch base color from “stone” to “neutral”"
      }), "\n", createVNode(_components.li, {
        children: "Change formatted date to use “long” option for month"
      }), "\n", createVNode(_components.li, {
        children: "Minor spacing changes throughout"
      }), "\n", createVNode(_components.li, {
        children: ["Remove “work” collection and components\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["If desired, you can get the code from ", createVNode(_components.a, {
              href: "https://github.com/markhorn-dev/astro-nano",
              children: "Astro Nano"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "Slightly increased link decoration offset"
      }), "\n", createVNode(_components.li, {
        children: "Slightly sped-up animations"
      }), "\n", createVNode(_components.li, {
        children: "Reversed animation"
      }), "\n", createVNode(_components.li, {
        children: "Ensure posts use an h1 tag for post titles"
      }), "\n", createVNode(_components.li, {
        children: "Tweaked typography"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "issues-️",
      children: "Issues ⚠️"
    }), "\n", createVNode(_components.h3, {
      id: "active-issues",
      children: "Active issues"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/trevortylerlee/astro-micro/issues/39",
          children: "PostNavigation.astro is broken when deployed with Cloudflare Pages"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "closed-issues",
      children: "Closed issues"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Fixed by ", createVNode(_components.a, {
          href: "https://github.com/blopker",
          children: "blopker"
        }), ": ", createVNode(_components.a, {
          href: "https://github.com/trevortylerlee/astro-micro/issues/7",
          children: "Pagefind requires a refresh to function when ViewTransitions is enabled"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fixed by ", createVNode(_components.a, {
          href: "https://github.com/blopker",
          children: "blopker"
        }), ": ", createVNode(_components.a, {
          href: "https://github.com/trevortylerlee/astro-micro/issues/4",
          children: "ToC links are obscured by Header when scrolled to"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fixed by ", createVNode(_components.a, {
          href: "https://github.com/cgranier",
          children: "cgranier"
        }), ": ", createVNode(_components.a, {
          href: "https://github.com/trevortylerlee/astro-micro/issues/26",
          children: "Pagination links advance by slug/folder"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fixed by ", createVNode(_components.a, {
          href: "https://github.com/cgranier",
          children: "cgranier"
        }), ": ", createVNode(_components.a, {
          href: "https://github.com/trevortylerlee/astro-micro/pull/30",
          children: "Hides Table of Contents when there are no headings"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fixed by ", createVNode(_components.a, {
          href: "https://github.com/arastoonet",
          children: "arastoonet"
        }), ": ", createVNode(_components.a, {
          href: "https://github.com/trevortylerlee/astro-micro/pull/19",
          children: "Fix typo in README"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Fixed by ", createVNode(_components.a, {
          href: "https://github.com/luciancah",
          children: "luciancah"
        }), ": ", createVNode(_components.a, {
          href: "https://github.com/trevortylerlee/astro-micro/issues/40",
          children: "Prevent Pagefind from double-indexing results"
        })]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/00-micro-changelog/index.mdx";
const file = "C:/laragon/www/adityaprayoga/src/content/blog/00-micro-changelog/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/laragon/www/adityaprayoga/src/content/blog/00-micro-changelog/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

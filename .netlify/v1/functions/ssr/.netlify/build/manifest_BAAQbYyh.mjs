import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_BLBFWlNj.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/laragon/www/adityaprayoga/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Bfd9A_oI.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.B4iyyNg7.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Bfd9A_oI.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.B4iyyNg7.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Bfd9A_oI.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.B4iyyNg7.css"}],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Bfd9A_oI.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.B4iyyNg7.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://adityapryg.my.id","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/laragon/www/adityaprayoga/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["C:/laragon/www/adityaprayoga/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["C:/laragon/www/adityaprayoga/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/laragon/www/adityaprayoga/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/laragon/www/adityaprayoga/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/laragon/www/adityaprayoga/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/laragon/www/adityaprayoga/src/pages/projects/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/laragon/www/adityaprayoga/src/pages/projects/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/laragon/www/adityaprayoga/src/components/PageFind.astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/laragon/www/adityaprayoga/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/projects/[...slug]@_@astro":"pages/projects/_---slug_.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_BAAQbYyh.mjs","C:/laragon/www/adityaprayoga/src/content/blog/00-micro-changelog/index.mdx?astroContentCollectionEntry=true":"chunks/index_DHiSiq2t.mjs","C:/laragon/www/adityaprayoga/src/content/projects/bukubook/index.md?astroContentCollectionEntry=true":"chunks/index_BLXR5cIW.mjs","C:/laragon/www/adityaprayoga/src/content/blog/00-micro-changelog/index.mdx?astroPropagatedAssets":"chunks/index_Bk6d_hyD.mjs","C:/laragon/www/adityaprayoga/src/content/projects/bukubook/index.md?astroPropagatedAssets":"chunks/index_C6kztSuR.mjs","C:/laragon/www/adityaprayoga/src/content/blog/00-micro-changelog/index.mdx":"chunks/index_6UVbtM3N.mjs","C:/laragon/www/adityaprayoga/src/content/projects/bukubook/index.md":"chunks/index_DhubQEy_.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Bfd9A_oI.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/geist-sans-latin-400-normal.gapTbOY8.woff2","/_astro/geist-mono-latin-400-normal.ao2e9zgx.woff2","/_astro/bukubook.BXuRhgnG.png","/_astro/geist-sans-latin-400-normal.BOaIZNA2.woff","/_astro/geist-mono-latin-400-normal.CQcZBlNU.woff","/_astro/_slug_.B4iyyNg7.css","/aditya-cv-jun-2024.pdf","/deploy_netlify.svg","/deploy_vercel.svg","/profile.png","/aditya/photo1.jpg","/aditya/photo2.jpg","/aditya/photo3.jpg","/aditya/photo4.jpg","/aditya/photo5.jpg","/pagefind/pagefind-entry.json","/pagefind/pagefind-highlight.js","/pagefind/pagefind-modular-ui.css","/pagefind/pagefind-modular-ui.js","/pagefind/pagefind-ui.css","/pagefind/pagefind-ui.js","/pagefind/pagefind.en_2e70f624f4.pf_meta","/pagefind/pagefind.en_3fd8bd6252.pf_meta","/pagefind/pagefind.en_45ddb13fe8.pf_meta","/pagefind/pagefind.js","/pagefind/wasm.en.pagefind","/pagefind/wasm.unknown.pagefind","/_astro/hoisted.Bfd9A_oI.js","/pagefind/index/en_8739159.pf_index","/pagefind/index/en_d0dad81.pf_index","/pagefind/fragment/en_26435e5.pf_fragment","/pagefind/fragment/en_2a5e6b1.pf_fragment","/pagefind/fragment/en_2fed8eb.pf_fragment","/pagefind/fragment/en_3131981.pf_fragment","/pagefind/fragment/en_3923b3d.pf_fragment","/pagefind/fragment/en_3ccfc4e.pf_fragment","/pagefind/fragment/en_3ec1c2b.pf_fragment","/pagefind/fragment/en_42f73b1.pf_fragment","/pagefind/fragment/en_4885cf2.pf_fragment","/pagefind/fragment/en_4cc991a.pf_fragment","/pagefind/fragment/en_4f7e69c.pf_fragment","/pagefind/fragment/en_51fdb47.pf_fragment","/pagefind/fragment/en_54fba64.pf_fragment","/pagefind/fragment/en_6935ba6.pf_fragment","/pagefind/fragment/en_6ee846f.pf_fragment","/pagefind/fragment/en_7a47df9.pf_fragment","/pagefind/fragment/en_7cbffcd.pf_fragment","/pagefind/fragment/en_8826d47.pf_fragment","/pagefind/fragment/en_a1fb37a.pf_fragment","/pagefind/fragment/en_a3eb135.pf_fragment","/pagefind/fragment/en_ad42bb6.pf_fragment","/pagefind/fragment/en_bbc53aa.pf_fragment","/pagefind/fragment/en_cf248be.pf_fragment","/pagefind/fragment/en_cf8ecb3.pf_fragment","/pagefind/fragment/en_fbe187d.pf_fragment","/pagefind/fragment/en_fefcc58.pf_fragment"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { manifest };

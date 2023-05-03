import { c as create_ssr_component, a as setContext, v as validate_component, m as missing_component } from "./index.js";
let base = "";
let assets = base;
const initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
function set_building() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      stores.page.set(page);
    }
    $$rendered = `


${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}

${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE HTML><html lang="en" dir="auto" itemscope="" itemtype="https://schema.org/WebPage"><head><meta charset="utf-8"><link rel="dns-prefetch" href="https://cdnjs.cloudflare.com"><link rel="preconnect" href="https://cdnjs.cloudflare.com"><link rel="manifest" href="manifest.json"><link rel="apple-touch-icon" href="favicon.ico"><link rel="icon" href="favicon.ico"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0-alpha3/css/bootstrap.min.css" integrity="sha512-iGjGmwIm1UHNaSuwiNFfB3+HpzT/YLJMiYPKzlQEVpT6FWi5rfpbyrBuTPseScOCWBkRtsrRIbrTzJpQ02IaLA==" crossorigin="anonymous" referrerpolicy="no-referrer"><script type="application/ld+json">{"@context": "https://schema.org","@type": "BreadcrumbList","itemListElement": [{"@type": "ListItem","position": 1,"name": "Home","item": "https://voldmc.com"}, {"@type": "ListItem","position": 2,"name": "Rules","item": "https://voldmc.com/rules"}, {"@type": "ListItem","position": 3,"name": "Maps","item": "https://voldmc.com/maps"}, {"@type": "ListItem","position": 4,"name": "Vote","item": "https://voldmc.com/vote"}, {"@type": "ListItem","position": 5,"name": "Staff","item": "https://voldmc.com/staff"}, {"@type": "ListItem","position": 6,"name": "Shop","item": "https://voldmc-shop.tebex.io"}, {"@type": "ListItem","position": 7,"name": "SitemapHtml","item": "https://voldmc.com/sitemap"}, {"@type": "ListItem","position": 8,"name": "SitemapXml","item": "https://voldmc.com/sitemap.xml"]}<\/script><meta itemprop="image" content="img/Logo.webp"><meta itemprop="description" content="Ласкаво просимо на Офіційний сайт Майнкрафт сервера VoldMc, сервер працює з 2022 року версія сервера 1.13 до 1.20+"><meta itemprop="name" content="Офіційний Сайт VoldMc | Офіційний Майнкрафт Сервер VoldMc"><meta name="publisher" content="VoldMc"><meta name="theme-color" content="#ff9800"><meta name="application-name" content="VoldMc"><meta name="viewport" content="width=device-width"><meta name="copyright" content="VoldMc"><meta name="author" content="VoldMc"><meta name="viewport" content="width=device-width">' + head + '</head><body data-sveltekit-preload-data="hover"><div style="display:contents">' + body + '</div><script>(()=>{let e=localStorage.getItem("theme"),t=()=>e||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),a=function(e){"auto"===e&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.setAttribute("data-bs-theme","dark"):document.documentElement.setAttribute("data-bs-theme",e)};a(t());let r=e=>{document.querySelector(".theme-icon-active use");let t=document.querySelector(`[data-bs-theme-value="${e}"]`);document.querySelectorAll("[data-bs-theme-value]").forEach((e=>{e.classList.remove("active")})),t.classList.add("active")};window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(()=>{("light"!==e||"dark"!==e)&&a(t())})),window.addEventListener("DOMContentLoaded",(()=>{r(t()),document.querySelectorAll("[data-bs-theme-value]").forEach((e=>{e.addEventListener("click",(()=>{let t=e.getAttribute("data-bs-theme-value");localStorage.setItem("theme",t),a(t),r(t)}))}))}))})(),"serviceWorker"in navigator&&addEventListener("load",(function(){navigator.serviceWorker.register("pwa.js")}));<\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0-alpha3/js/bootstrap.bundle.min.js" integrity="sha512-vIAkTd3Ary9rwf0lrb9kIipyIkavKpYGnyopBXs6SiLfNSzAvCNvvQvKwBV5Xlag4O8oZpZ5U5n4bHoErGQxjw==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script></body></html>',
    error: ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "12qabzv"
};
function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  set_assets as c,
  set_building as d,
  set_private_env as e,
  get_hooks as g,
  options as o,
  public_env as p,
  reset as r,
  set_public_env as s
};

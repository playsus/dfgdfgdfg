import { c as create_ssr_component } from "../../chunks/index.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="d-flex align-items-center justify-content-center vh-100"><div class="text-center"><h1 class="display-1 fw-bold">404</h1><p class="fs-3"><span class="text-danger">Opps! </span>Page not found.</p><p class="lead">The page you’re looking for doesn’t exist.</p><a href="/" class="btn btn-danger">Go Home</a></div></div>`;
});
export {
  Error as default
};

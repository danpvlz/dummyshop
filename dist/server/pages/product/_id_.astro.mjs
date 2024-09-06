import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_Dkj7PUF3.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_B3r1TMHz.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/404");
  }
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());
  if (!product) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-lpkum7gf": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-lpkum7gf> <a href="/shop" data-astro-cid-lpkum7gf>Go to shop</a> <div class="product" data-astro-cid-lpkum7gf> <img${addAttribute(product.image, "src")} data-astro-cid-lpkum7gf> <div data-astro-cid-lpkum7gf> <h1 data-astro-cid-lpkum7gf>${product.title}</h1> <h2 data-astro-cid-lpkum7gf>$${product.price}</h2> <p data-astro-cid-lpkum7gf>${product.description}</p> </div> </div> </main> ` })} `;
}, "C:/daniela/car-shop/src/pages/product/[id].astro", void 0);

const $$file = "C:/daniela/car-shop/src/pages/product/[id].astro";
const $$url = "/product/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

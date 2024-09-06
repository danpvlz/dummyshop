import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent } from '../chunks/astro/server_Dkj7PUF3.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B3r1TMHz.mjs';
import 'clsx';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body, imageURL } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-dohjnao5> <a${addAttribute(href, "href")} data-astro-cid-dohjnao5> <img${addAttribute(imageURL, "src")} data-astro-cid-dohjnao5> <h2 data-astro-cid-dohjnao5> ${title} <span data-astro-cid-dohjnao5>&rarr;</span> </h2> <p data-astro-cid-dohjnao5> ${body} </p> </a> </li> `;
}, "C:/daniela/car-shop/src/components/Card.astro", void 0);

const prerender = false;
const $$Shop = createComponent(async ($$result, $$props, $$slots) => {
  const products = await fetch("https://fakestoreapi.com/products").then((res) => res.json());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Shop page.", "data-astro-cid-5w43p2qc": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-5w43p2qc> <h1 data-astro-cid-5w43p2qc>Products:</h1> <a href="/" data-astro-cid-5w43p2qc>Go back</a> <div class="products" data-astro-cid-5w43p2qc> ${products.map(
    (product) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "href": `/product/${product.id}`, "title": product.title, "imageURL": product.image, "body": "", "data-astro-cid-5w43p2qc": true })}`
  )} </div> </main> ` })} `;
}, "C:/daniela/car-shop/src/pages/shop.astro", void 0);

const $$file = "C:/daniela/car-shop/src/pages/shop.astro";
const $$url = "/shop";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Shop,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

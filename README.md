# Spade reference rebuild

A responsive recreation of the supplied Spade landing-page reference, built with TypeScript, React, and the Next.js App Router. Real text and responsive components implement every major section; the supplied reference provides the padlock and payment imagery.

## Run

Requires Node.js 22.13 or later and pnpm.

```sh
pnpm install
pnpm dev
```

## Verify and export

```sh
pnpm typecheck
pnpm build
```

The static site is generated in `out/`. Deploy that directory to a static host, or import this repository into a Next.js hosting platform.

## Included

- Responsive navigation and full landing-page layout
- Horizontal feature carousel with arrow controls
- Accessible enrichment demo tabs
- Testimonials, industries, customer stories, and footer
- Keyboard focus styles and reduced-motion support

This is a reference recreation, not the official Spade website. Contact and editorial links point to Spade. Transaction and enrichment panels demonstrate UI behavior and do not process transactions. No form pretends to submit data. Original brand copy and supplied imagery remain the property of their respective owners. Fine details are approximated from the screenshot.

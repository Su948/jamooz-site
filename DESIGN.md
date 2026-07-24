# Jamooz redesign design contract

## Design Direction
The design transitions Jamooz from a standard green B2B site to a premium clinical wellness brand inspired by Therabody-style editorial commerce. The core idea is technical elegance: warm cream surfaces, high-contrast serif headlines, exact product specifications, soft clinical cards, and a bright orange RFQ conversion path.

## Reference Sources
- `vendor/open-design/adapter/STATIC_POLICY.md`
- `vendor/open-design/upstream/design-systems/Architectural-Warm-Minimalism/DESIGN.md`
- `vendor/open-design/upstream/design-systems/Architectural-Warm-Minimalism/tokens.css`
- `vendor/open-design/upstream/design-systems/Architectural-Warm-Minimalism/components.html`
- `vendor/open-design/upstream/design-systems/Biotic-Minimalist-Science/DESIGN.md`
- `vendor/open-design/upstream/craft/anti-ai-slop.md`
- User image: `Jamooz 首页整体效果图.png` for home hero, best sellers, solution cards, partner strip.
- User image: `Jamooz Mega Menu 与产品卡片效果图.png` for 4-column Mega Menu and B2B product card structure.
- User image: `Jamooz Science 模块效果图.png` for science module and dark research-grade standards section.
- User image: `Jamooz 定制器页面效果图.png` for OEM/ODM configuration workflow.

## Design Tokens
- Background: `#f6f1e8`, secondary cream `#fbf8f1`, white surface `#ffffff`.
- Text: deep ink `#0d1b2f`, muted taupe `#69635c`, dark panel `#111214`.
- Accent: conversion orange `#f26322`, hover orange `#d94d12`.
- Supporting blue/navy: `#10284a` for selected states and technical badges.
- Display font: system serif stack (`Georgia`, `Times New Roman`, serif fallback).
- Body font: Chinese-safe system stack, no external font CDN.
- Cards: thin warm borders, 14-24px radius, calm shadows.

## Page Structure
- Global header: black announcement bar, white navigation, Jamooz wordmark, Solutions/Shop/Custom/R&D/About/Resources navigation, hover Mega Menu, Contact R&D Team CTA.
- Homepage: editorial hero, trust badges, best sellers grid, science-backed performance column, solutions cards, OEM/ODM partner strip, large science module.
- Products page: B2B best-seller catalog using JMZ-R007-A/B/C/D scalp massager cards with MOQ, price, certificates, and technical chips.
- Customizer page: split view with large scalp massager visual, thumbnails, 5-step configuration rail, material/color options, accordion steps, sticky configuration summary and orange Request Quote CTA.

## Component Plan
- `Navbar`: announcement bar, hoverable Mega Menu, mobile-safe stacked fallback.
- `ProductShowcase`: reusable B2B product cards with real model IDs, MOQ, prices, certificates, and specs.
- `ScienceModule`: warm top feature section plus dark research-grade standards section.
- `CustomPage`: interactive configuration state for color, finish, nodes, branding, packaging.
- `Footer`: premium B2B footer with contact and capability links.

## Copy Tone
Clinical, premium, specific, B2B-oriented. Use phrases like “Science-backed recovery technology”, “OEM/ODM solutions for global brands”, “650nm red light”, “2000mAh battery”, “IPX7 waterproof”, and “200M negative ions”. Avoid generic claims.

## Responsive Rules
Desktop uses full editorial grids and wide cards. Tablet falls to two-column card grids. Mobile stacks hero, mega menu, science panels, and customizer controls; CTAs remain easy to tap.

## Implementation Notes
- Remove `next/font/google` usage and rely on local/system font stacks.
- Keep commerce non-transactional: product display and RFQ only, no cart/checkout/payment.
- Use user-provided image URLs only as reference/visual support, not as hidden trackers or external font assets.
- Use semantic sections and alt text for product/science visuals.

## Image Manifest
- `https://sc02.alicdn.com/kf/Haa0fba01a3bf46ad9e69a65bbbc953e36.jpg` — homepage reference.
- `https://sc02.alicdn.com/kf/Hd3f94fc9b1014257945778881b6f2da1F.jpg` — mega menu/product card reference.
- `https://sc02.alicdn.com/kf/H1768d0330bc6448eaafcfb3d7ca51ec0I.jpg` — science module reference.
- `https://sc02.alicdn.com/kf/He0fbe84fafee43ec86aa3246773e9a47W.jpg` — customizer reference.
- CSS-generated product visuals are used for cards and configurator when no separate product PNG exists.

## Risks / Open Questions
- No original cut-out product images were found in the current `public/` folder, so the redesign uses CSS-generated premium product visuals and the supplied screenshots as visual references.
- The site remains frontend/RFQ focused; any real inquiry persistence or CRM integration would need a later backend step.

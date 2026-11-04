# VOID hero comparison — BRAND-001

Historical preview checkpoint: preview-only scope requested on 2026-11-03. At capture time neither direction was selected and the neutral storefront was unchanged. **Current update:** the learner subsequently selected postmodernism and authorized the branded implementation; see [current SPEC](../../SPEC.md) and [final validation](../validation/VOID.md). The previews remain preserved as comparison evidence. Current branch: `feature/BRAND-001` in `itssfariha-lab/is117-brand-studio`.

## Open locally

Reuse the existing development server at <http://127.0.0.1:5173/explorations/>. Full pages: [modernist](http://127.0.0.1:5173/explorations/modernist.html) and [postmodernist](http://127.0.0.1:5173/explorations/postmodernist.html). The index embeds both in equal-size frames. Desktop and phone screenshots below are actual Chromium renders, not mockups.

## Controlled content

Both use the original `public/assets/white-shirt.svg`, the headline “Your body. Your canvas.” (AI-proposed copy, not approved final copy), the learner-supplied promise “VOID transforms an ordinary white T-shirt into a canvas for personal expression.” and the action “Add to demo bag.” Product labels, size options and disclaimers match. No artwork is added to the shirt. The existing `public/shop.js` provides the temporary bag behavior in each independent page.

## References inspected

- **Modernist:** Josef Müller-Brockmann, _Musica Viva_, 1958, [MoMA collection](https://www.moma.org/collection/works/7233/). Inspected the museum's full image: a large pale diamond, small repeated colored squares, and aligned sans-serif blocks on diagonal axes. MoMA lists linocut and letterpress. The preview translates geometric organization into an upright web grid, ruled information and a diamond behind the product. It uses reusable CSS shapes and system type rather than reproducing the poster. Hypothesis: visitors can quickly read the product as an art canvas. Risk: controlled organization may feel institutional.
- **Postmodernist:** April Greiman, _Does it make sense? / Design Quarterly #133_, 1986, [designer's project page](https://www.aprilgreiman.com/does-it-make-sense). Inspected the reverse montage linked from that page: pixel textures, photographic rectangles overlapping at different scales, and dispersed text blocks. The preview translates mixed media into a dotted field, an offset image frame, oversized background type and a serif italic interruption. Hypothesis: creative visitors may associate this mixed visual language with personal expression. Risk: layers may distract from the shirt; controls remain upright and the narrow layout simplifies. This is an interpretation of postmodern design, not a claim that all Greiman work fits one category.

Both keep the dark brief and lavender accent; the comparison concerns hierarchy and visual languages, not merely color. Reference images were inspected from temporary downloads and are not redistributed as project assets. The initial web image request for Greiman failed; a direct download of the same linked image succeeded and was visually inspected.

## Actual verification

Baseline `npm run check`: passed formatting/lint, 7 server tests and 10 browser tests. The first restricted run could not open local test sockets; rerunning with local-server permission passed.

After previews: `npm run check` passes formatting/lint, 7 server tests and 18 browser tests. New browser cases cover identical product/copy/form content; missing size; keyboard size selection and submission; bag clearing/reload; loaded product images; expected Arial/Georgia font declarations; no horizontal overflow at 1440px and 375px; and automated axe checks. Existing tests remain intact. Passing axe checks do not prove complete accessibility or brand fit.

AI visual inspection at matching 1440 × 960 and 375 × 960 viewports checked hierarchy, shirt loading, typography, readable controls and isolated layout. The desktop inspection exposed an image overlapping the modernist caption; the image was reduced before the final captures and checks. System fonts avoid network font dependencies. Font rendering can vary across systems.

Example actual check: submitting without a size displays the size error, keeps bag count at zero and focuses size S; keyboard ArrowRight selects M, then Tab and Enter add one M shirt. These are automated results, not learner observations.

| Width  | Modernist                           | Postmodernist                           |
| ------ | ----------------------------------- | --------------------------------------- |
| 1440px | [Actual render](modernist-1440.png) | [Actual render](postmodernist-1440.png) |
| 375px  | [Actual render](modernist-375.png)  | [Actual render](postmodernist-375.png)  |

## Workflow and learner-evidence limits at the preview checkpoint

The existing branch was reused. The GitHub issues page showed zero open issues and a Sign in link; no issue was created because the available browser was signed out. Issue creation remains pending. SPEC.md and LEARNING.md are left unchanged because AGENTS.md places decision recording after the issue exists. No commit, push, PR, final identity, logo approval, merge or deployment was performed.

Available learner contribution: the current request names VOID, supplies its promise and creative audience, and prefers postmodernist typography/layout because it makes the white shirt feel artistic and expressive. This is a supplied reason and intended effect, not a review of the new previews. Exact voice traits, archetype, concrete audience situation and secondary hypothesis remain unresolved. No learner browser testing, test interpretation or final keep/revise decision is evidenced. Earlier conversation is unavailable. AI wrote the preview headline, layouts, annotations and checks.

Next step at that earlier checkpoint was preview review. That selection has now been supplied; current remaining work is in SPEC.md. Issue creation and learning-record publication review remain pending.

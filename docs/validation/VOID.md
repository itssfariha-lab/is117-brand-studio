# VOID local validation — updated 2026-11-04

`npm run check`: formatting, HTML/CSS/JavaScript lint, 7 server tests and 21 Chromium browser tests pass. `git diff --check` passes. No prepared rule was lowered and no existing test was removed.

The development-refresh test initially failed because the new page loaded a differently named stylesheet. The implementation was corrected to preserve `styles.css` as the actual storefront/guide stylesheet; the studio's original base styles were preserved in `studio-base.css`. The original reload test then passed unchanged.

Checks cover missing/valid sizes, keyboard control, bag clearing/reload, asset/link integrity, narrow overflow and automated axe assertions. A new identity test compares actual CSS tokens, logo source and navigation width, plus primary-action background/shadow between storefront and guide. Both preview directions retain controlled content.

Actual negative case: press Add to demo bag without selecting a size. The test asserts a visible error and count 0; it passed. Learner explanation of what this would catch is pending.

AI inspected current renders of storefront, live guide and studio at matching 1440 × 960 and 375 × 960 viewports. Shirt and logos load; the selected layered frame and contrasting typography remain visible; controls remain readable; guide logo presentations are flat one-color at 260px, actual 130px and 110px. The guide shows the same palette roles, primary action and headline typography as the storefront. Studio content/layout stays on its original styles. The separate ethical proposal page was also captured and checked; both sections are now applied to the storefront after the learner explained the styling-tip benefit. Storefront, guide and reference-page screenshots were refreshed at 1440px and 375px. The full check rerun passed 7 server and 21 browser tests.

| Page              | Desktop                            | Narrow                            |
| ----------------- | ---------------------------------- | --------------------------------- |
| Storefront        | [Render](void-storefront-1440.png) | [Render](void-storefront-375.png) |
| Live guide        | [Render](void-styleguide-1440.png) | [Render](void-styleguide-375.png) |
| Studio            | [Render](void-studio-1440.png)     | [Render](void-studio-375.png)     |
| Ethical proposals | [Render](void-persuasion-1440.png) | [Render](void-persuasion-375.png) |

These are AI/automated observations. They do not establish learner testing, customer demand, complete accessibility or completed course submission.

# Review 1 — T-shirt research for VOID

**Research question:** How can a T-shirt storefront communicate alternative, artistic self-expression while still helping visitors understand the item and use its controls?

**Checked:** November 12, 2026 (after the November 10 deadline). This is a source-based desk review, **not** a record of research performed before building VOID. Existing design choices were already made in [SPEC](../SPEC.md). The findings below offer comparisons and possible refinements; they do not prove what customers prefer. External pages can change.

## Three clothing-site comparisons

| Original site and access date | Observed evidence from the linked page | Interpretation / assumption (not an observed customer result) | Proposed decision and check |
| --- | --- | --- | --- |
| [UNIQLO US — Crew Neck T-Shirt](https://www.uniqlo.com/us/en/products/E424873-000/00?colorDisplayCode=31), accessed Nov 12, 2026 | Product page provides a named T-shirt, color and sizes, size guide, price, add-to-cart control and fabric/fit details. | Basic information and a clear size path may reduce ambiguity, even on an expressive site. No usability study was performed. | **Keep** VOID's prominent size selector and give the demo-bag action explicit feedback. **Check:** manually attempt adding without a size and with a selected size; confirm visible feedback and bag count. Existing automated evidence: [validation](validation/VOID.md). |
| [Stüssy — Tees](https://www.stussy.com/collections/tees), accessed Nov 12, 2026 | Collection lists both basic-logo shirts and numerous named graphic tees, with prices shown beside entries. | Graphic variety supports an art/streetwear positioning, but a visitor may still need a clear product path. Visual influence is a design inference, not an interview result. | **Keep** VOID's artistic identity but make the white shirt and primary action immediately identifiable. **Check:** ask a reviewer to identify the shirt and next action from the first screen without explanation. **Planned, not observed.** |
| [Online Ceramics — T-shirts](https://onlineceramics.us/t-shirts/), accessed Nov 12, 2026 | Catalogue presents many individually named themed graphic T-shirts and Quick View links. The site foregrounds distinctive designs in its product assortment. | Narrative or unusual graphics may attract people who value personal expression; this audience claim is an untested hypothesis. | **Keep as hypothesis** VOID's postmodernist layered frame and contrasting typography; retain readable product and action text. **Check:** ask whether a visitor can explain the brand impression *and* find the size action at desktop and mobile widths. **Planned, not observed.** |

**Source accuracy:** The observations above are about **page content**, not measured customer motivations, conversion, accessibility or product quality. The external pages were checked after the due date; do not backdate them. No page is evidence that VOID has real inventory, sold products or graphic printing services.

## Two positions considered

1. **Everyday essentials / quiet utility.** Emphasize plain styling, product specifications and a simple buying path. UNIQLO illustrates clear functional product details. Strength: straightforward information. Risk for VOID: too generic for the chosen creative-expression promise.
2. **Experimental wearable art / expressive streetwear.** Use an unusual composition, distinctive typography and a message about self-expression while preserving basic product controls. Stüssy's graphic range and Online Ceramics' themed assortment offer relevant comparison points, **not proof** of audience response. Strength: closer to VOID's stated creative identity. Risk: visual complexity could obscure the item or next action.

**Chosen position:** expressive streetwear. The learner previously selected the postmodernist direction: layered framing and contrasting typography feel artistic and unconventional for people who express themselves through streetwear ([existing design record](../SPEC.md)). This was **chosen before this November 12 research review**; the comparison does not retroactively establish the original cause.

## Two short persona hypotheses (not real interviews)

- **Primary — creative outfit builder:** Someone preparing an outfit for an art gathering wants to express an individual point of view; worries a generic page will feel interchangeable. They should quickly understand that VOID values personal expression. **Proposed check:** ask them to describe the brand in one sentence without prompts.
- **Secondary — curious newcomer:** Someone exploring alternative streetwear for an everyday outfit wants creative options without confusing navigation; worries that experimental visuals may hide essential information. They should find the shirt, size selector and demo action. **Proposed check:** observe them attempting these steps without help.

The primary audience is the learner-selected group: creative people interested in alternative streetwear and individuality. Concrete situations are AI-proposed assumptions already noted in [SPEC](../SPEC.md), not evidence of real users.

## Look, brand character and ethical persuasion

VOID's recorded direction is dark, mysterious, bold and experimental, with a **Creator** brand character. The existing page uses a layered product frame, contrasting typography, and the line “Your body. Your canvas.” These are actual project choices, not evidence of customer approval. See [storefront](../public/index.html) and [style guide](../public/styleguide.html).

**Honest persuasion:** Existing free styling tips offer something useful before requesting a purchase (reciprocity); “For people who dress to express” invites identification with an idea (unity). These are design intentions, not measured effects. The storefront remains a demo: do not claim checkout, verified inventory, product materials, shipping, popularity, scarcity, or custom printing.

## Traceable research-to-feature examples

| Question or finding | Proposed decision / location | Verification status |
| --- | --- | --- |
| UNIQLO explicitly lists sizes and a size guide. Can a VOID visitor select the correct demo size? | Preserve [size selector and demo bag](../public/index.html) with informative missing-size feedback. | Existing automated checks documented in [VOID validation](validation/VOID.md); **new independent reviewer retry not done**. |
| Graphic T-shirts are visibly central to the Stüssy collection. Can VOID present an artistic identity without losing product clarity? | Preserve the learner-chosen [postmodernist composition](../public/explorations/postmodernist.html) and legible shirt/action labels. | Existing project render checks documented in [SPEC](../SPEC.md); **new reviewer test planned**. |
| Online Ceramics uses numerous distinctive graphic product names. Does VOID communicate an individual creative identity? | Keep creator-focused copy and [style guide](../public/styleguide.html). Avoid pretending the plain white shirt is a printed commercial product. | **Proposed peer explanation task; no observed customer finding.** |

## Peer-review handoff and decision history

**Reviewer request:** Open one original source link above, identify a page observation, follow its proposed decision to the linked VOID page or documentation, and try the stated check. Explain the intended VOID audience back to the author. If the claim is unsupported, report that distinction.

**Incoming feedback:** Not yet provided or verified. **Do not invent issues.** This repository's earlier BRAND-001 issue is not a substitute for current classmate research feedback.

For each real incoming issue, document: (1) exact observation and link, (2) whether to implement, investigate, defer or decline and why, (3) linked documentation/code commit or PR referencing its issue number, (4) what was actually verified, and (5) reviewer's retry **before closing a resolved issue**. Unfinished work remains open with a next step.

**Outgoing review quota:** The Canvas instructions require **3–5 constructive issues per classmate per project** on the classmate's repository; this author cannot truthfully claim to have done that yet. Review partners and their repository URLs still need to be supplied.

## Status and open questions

- Completed in this document: three sources/date/content observations; evidence-versus-assumption distinction; two positions; two persona hypotheses; learner's audience/visual choice; ethical-persuasion discussion; proposed decisions and checks.
- Already implemented in the existing project: postmodernist storefront, style guide, size selector and demo bag. **No code change made for this research review.**
- Outstanding: independent original-source click/review, actual peer issues and feedback responses, new reviewer verification/retry, deployed/published documentation-site URL (not yet verified), and Canvas submission.
- AI assistance: AI collected the linked page observations, wrote the comparison and proposed checks. Learner's pre-existing brand/audience/visual choice is attributed to the learner. Review and correct any observations before submitting.

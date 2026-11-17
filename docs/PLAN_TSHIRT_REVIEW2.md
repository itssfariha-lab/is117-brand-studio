# Review 2 — Plan — T-shirt: VOID
Date: November 17, 2026. Status: planning only.

This plan extends [SPEC.md](../SPEC.md), the existing [VOID storefront](../public/index.html), and [style guide](../public/styleguide.html). It does not claim that checkout or SQLite has already been built.

## Audience and existing choices
VOID's promise is to turn an ordinary white T-shirt into a canvas for personal expression. The primary audience hypothesis is creative people interested in expressive alternative streetwear; the secondary is newcomers who want clear navigation. These are hypotheses, not interview findings. The student chose the postmodernist direction for its layered shirt frame and contrasting typography. Keep the dark, artistic look, chalk text, lavender accents, original SVG logo, and Creator brand voice.

## Compare two approaches
**A — Extend existing Node + HTML/CSS/JS storefront with SQLite (preferred).** Reuse current size selector, demo bag, styling and tests. Add server routes and a file-backed SQLite database. This meets the backend requirement without rebuilding the site, but requires new implementation and testing.

**B — Rebuild as a client-side SPA.** Could support more complex transitions but requires more rebuilding; browser storage alone would not meet the SQLite requirement, so a separate SQLite server would still be needed.

**Proposed decision:** A, subject to student review.

## User stories, features and observable checks
1. **As a creative shopper, I want to see the shirt and styling inspiration so I can judge the brand.** Feature: existing hero and free styling tips. Check: narrow-screen layout is readable, without horizontal scrolling.
2. **As a shopper, I want to select a size before adding a shirt so I don't choose accidentally.** Feature: existing size selector and demo bag. Check: missing size prevents adding; valid size adds correct item.
3. **As a cautious visitor, I want to review my demo bag before confirming so I know what I selected.** Feature: simulated checkout review of shirt, size and quantity, labeled as a demo. Check: review matches bag and no payment information is requested.
4. **As a visitor, I want my demo confirmation to be saved so I can retrieve it later.** Feature: Node API and real SQLite file storing demo orders and items. Check: submit an order and record its ID; inspect the SQLite file outside `public/` to verify the order and items; stop and restart the server; retrieve that same ID through the API and compare product, size and quantity. Invalid size/quantity must not create a database row. **These are planned checks, not executed results.**
5. **As a keyboard/mobile visitor, I want to finish the demo flow without a mouse.** Feature: semantic controls, visible focus, responsive layout. Check: keyboard journey works and mobile review/confirmation is readable.

## Simulated checkout and required working SQLite backend
- Keep existing selection and bag UI. Add a clearly labeled **demo checkout; no real purchase or payment**.
- Show a review step with product, size and quantity. Avoid collecting payment, address or unnecessary personal data.
- Proposed routes: `POST /api/demo-orders` and `GET /api/demo-orders/:id`. Validate sizes and quantities on the server.
- Proposed SQLite schema: `demo_orders(id, created_at, status)` and `demo_order_items(order_id, product_key, size, quantity)`. Store database outside `public/`; use parameterized queries and a transaction.
- Required verification after implementation: create order → confirm SQLite row/items → stop and restart server → retrieve same order. Browser storage alone is insufficient.
- Add negative tests for missing size/invalid quantity and accessibility tests for keyboard and mobile.

**Current implementation status:** Existing size selector and temporary demo bag are documented in SPEC.md. The simulated checkout and SQLite persistence are **planned, not yet implemented or tested**.

## Ethical persuasion carried forward
- **Reciprocity:** Free “Style it your way” outfit tips without signup or purchase.
- **Unity:** “For people who dress to express” invites shared creativity without invented testimonials or membership claims.
Neither is a measured conversion result.

## AI-assisted review and documented revision
[Issue #4](https://github.com/itssfariha-lab/is117-brand-studio/issues/4) identified an ambiguity in Story #4's persistence check. **Decision: implement in the plan.** The acceptance check now specifies inspecting the real SQLite file, restarting the server, comparing retrieved values, and rejecting invalid input without creating rows. **Documentation verification:** compared the revised Story #4 with the issue's requested checks. **Implementation verification remains pending** because the backend is not built. This is explicitly AI-assisted review, **not** classmate feedback.

## Classmate review and next decision
**Peer question: pending actual classmate feedback.** Ask a classmate to explain one story and how they would verify it. Record their real question as a GitHub issue. Reply with a reasoned implement/investigate/defer/decline decision. For accepted changes, reference the issue in a commit, link the change, document the real verification, ask the reviewer to retry, and close only after confirmation. Leave unfinished work open.

## AI disclosure
ChatGPT organized this planning document, drafted the two approaches, stories, checks and proposed SQLite design using the student's existing VOID choices and assignment instructions. The student must review these proposals and add actual peer observations; no peer feedback, deployment, backend implementation or test results are fabricated.

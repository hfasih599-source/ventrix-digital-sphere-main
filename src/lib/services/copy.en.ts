export type Item = { t: string; d: string };
export type ServiceCopy = {
  tagline: string;
  intro: string;
  deliverables: Item[];
  why: Item[];
  faq: { q: string; a: string }[];
};

export const enServiceCopy: Record<string, ServiceCopy> = {
  "graphic-design": {
    tagline: "Design that makes people stop scrolling.",
    intro:
      "From social creative to pitch decks and print, we produce graphics with the composition, typography and restraint of a premium brand — at the volume a growing company actually needs.",
    deliverables: [
      { t: "Creative concepts", d: "Two to three distinct routes explored before we commit to one." },
      { t: "Master artwork", d: "Layered, production-ready source files in Figma and Adobe formats." },
      { t: "Format adaptations", d: "Every asset resized for social, ads, web and print without recomposing." },
      { t: "Usage guidelines", d: "A short doc so your team can extend the work correctly." },
    ],
    why: [
      { t: "Senior designers only", d: "No junior handoffs — the person who pitched the concept executes it." },
      { t: "Systems, not one-offs", d: "We build reusable templates so the next fifty assets take hours, not weeks." },
      { t: "Fast, predictable turnaround", d: "Standard requests land in 48–72 hours." },
    ],
    faq: [
      { q: "Can you work inside our existing brand?", a: "Yes — we start from your guidelines and extend them rather than replace them." },
      { q: "Do we get editable files?", a: "Always. You own layered source files and fonts documentation on delivery." },
      { q: "Is there a monthly option?", a: "Yes, a design retainer covers a rolling queue with agreed turnaround times." },
    ],
  },
  branding: {
    tagline: "A brand people remember and competitors can't copy.",
    intro:
      "Positioning, identity and voice built together, so the way you look, sound and sell all point in one direction. We ship a complete brand system your team can run with from day one.",
    deliverables: [
      { t: "Brand strategy", d: "Positioning, audience, value proposition and messaging pillars." },
      { t: "Visual identity", d: "Logo suite, colour, typography, imagery and graphic language." },
      { t: "Verbal identity", d: "Tone of voice, taglines and core copy blocks." },
      { t: "Brand guidelines", d: "A practical manual plus templates for deck, social and web." },
    ],
    why: [
      { t: "Strategy before aesthetics", d: "Every visual decision traces back to a commercial reason." },
      { t: "Built to scale", d: "Systems tested against real applications, not just a pretty presentation." },
      { t: "Launch support", d: "We help you roll the brand out across product, site and campaigns." },
    ],
    faq: [
      { q: "How long does a full rebrand take?", a: "Typically six to ten weeks depending on scope and stakeholder count." },
      { q: "Do you handle trademark checks?", a: "We flag risks and work alongside your counsel during naming and mark design." },
      { q: "Can you rebrand without disrupting sales?", a: "Yes — we plan a phased rollout so revenue-critical assets change last." },
    ],
  },
  "logo-design": {
    tagline: "A mark that works at 16 pixels and on a billboard.",
    intro:
      "We design logos as engineered systems: a primary mark, the variations you'll actually need, and clear rules that keep it consistent everywhere it appears.",
    deliverables: [
      { t: "Concept exploration", d: "Multiple directions with rationale, presented in real context." },
      { t: "Full logo suite", d: "Primary, horizontal, stacked, monogram and favicon versions." },
      { t: "Colour and mono variants", d: "Light, dark, single-colour and reversed lockups." },
      { t: "Logo usage rules", d: "Clear space, minimum sizes, misuse examples and file index." },
    ],
    why: [
      { t: "Tested in the wild", d: "Every mark is reviewed on signage, app icons, invoices and merch mockups." },
      { t: "Geometry that holds", d: "Optically balanced construction, not a stock icon with a font next to it." },
      { t: "Complete file pack", d: "SVG, EPS, PDF and PNG sets organised for teams and vendors." },
    ],
    faq: [
      { q: "How many concepts do we see?", a: "Three considered directions, then two rounds of refinement on the chosen one." },
      { q: "Do we own the logo outright?", a: "Yes, full ownership transfers on final payment." },
      { q: "Can you refresh our current mark?", a: "Often the smarter move — we modernise while retaining recognition." },
    ],
  },
  "ui-ux-design": {
    tagline: "Interfaces that feel obvious and convert.",
    intro:
      "Research-informed product design: flows mapped, screens crafted, components systemised — handed to engineering with everything they need to build it exactly as designed.",
    deliverables: [
      { t: "UX flows and wireframes", d: "Key journeys mapped and pressure-tested before pixels." },
      { t: "High-fidelity UI", d: "Polished screens for every state: empty, loading, error, success." },
      { t: "Design system", d: "Tokens and components in Figma, ready to mirror in code." },
      { t: "Prototype", d: "A clickable build for user testing and stakeholder sign-off." },
    ],
    why: [
      { t: "Conversion-minded", d: "We design for the metric you're accountable for, not for dribbble." },
      { t: "Engineer-ready", d: "Specs, tokens and edge cases documented so build time drops." },
      { t: "Iterative validation", d: "Fast usability rounds catch problems while they're cheap to fix." },
    ],
    faq: [
      { q: "Do you run user research?", a: "Yes — interviews, usability tests and analytics review, scoped to your stage." },
      { q: "Can you work with our developers?", a: "Regularly. We join standups and review builds against the design." },
      { q: "Figma or something else?", a: "Figma by default; we can adapt to your existing toolchain." },
    ],
  },
  "website-design": {
    tagline: "A site that sells while you sleep.",
    intro:
      "Marketing sites designed around narrative and conversion — strong hierarchy, fast pages, and a layout system your team can extend without hiring a designer for every new page.",
    deliverables: [
      { t: "Sitemap and narrative", d: "Page structure and messaging sequence mapped to buyer intent." },
      { t: "Designed pages", d: "Desktop, tablet and mobile artboards for every template." },
      { t: "Component library", d: "Reusable sections so new pages assemble in minutes." },
      { t: "Motion direction", d: "Scroll, hover and transition specs for a premium feel." },
    ],
    why: [
      { t: "Built around a funnel", d: "Every section has a job: capture, convince or convert." },
      { t: "Performance-aware", d: "We design within real performance budgets, so it ships fast." },
      { t: "SEO-ready structure", d: "Heading hierarchy and content depth planned with search in mind." },
    ],
    faq: [
      { q: "Do you build it too?", a: "Yes — our engineering practice can take the design straight to production." },
      { q: "Can you design for Webflow or Shopify?", a: "Absolutely, we design to the constraints of your chosen platform." },
      { q: "How many pages are typical?", a: "Most launches run six to twelve templates plus reusable sections." },
    ],
  },
  "mobile-app-design": {
    tagline: "Native-feeling apps people open every day.",
    intro:
      "iOS and Android product design that respects platform conventions, handles the messy states, and gives your engineers a component library instead of a pile of screens.",
    deliverables: [
      { t: "Product flows", d: "Onboarding, core loop, settings and edge-case journeys." },
      { t: "Platform-accurate UI", d: "Designs that respect iOS and Android patterns rather than fight them." },
      { t: "Interaction specs", d: "Gestures, transitions and micro-interactions documented." },
      { t: "App store assets", d: "Icon, screenshots and listing visuals ready for submission." },
    ],
    why: [
      { t: "Retention-focused", d: "We design the second and tenth session, not just the first." },
      { t: "Accessible by default", d: "Contrast, tap targets and dynamic type checked throughout." },
      { t: "Handoff engineers like", d: "Component-driven files that map cleanly to SwiftUI, Compose or React Native." },
    ],
    faq: [
      { q: "Do you design for both platforms?", a: "Yes, with a shared core and platform-specific adjustments." },
      { q: "Can you improve an existing app?", a: "We run a UX audit first, then prioritise fixes by impact." },
      { q: "Do you provide a prototype?", a: "Yes, a device-testable prototype for validation before build." },
    ],
  },
  "product-mockups": {
    tagline: "Photoreal product visuals without a photoshoot.",
    intro:
      "3D and composite mockups that show your product exactly as it should look — for launch pages, ads, investor decks and marketplace listings.",
    deliverables: [
      { t: "3D or composite renders", d: "Studio-lit visuals from the angles your channels need." },
      { t: "Scene variations", d: "Multiple backgrounds, colourways and lighting moods." },
      { t: "Channel exports", d: "Sized and compressed for web, ads and marketplaces." },
      { t: "Editable scene files", d: "So future variants cost a fraction of the first." },
    ],
    why: [
      { t: "Cheaper than photography", d: "No studio, no logistics, unlimited variants." },
      { t: "Pixel-accurate branding", d: "Colours and finishes matched to your brand spec." },
      { t: "Fast revisions", d: "Angle, colour or label changes in hours, not another shoot." },
    ],
    faq: [
      { q: "What do you need from us?", a: "Dimensions, artwork files and reference photos — that's usually enough." },
      { q: "Can you animate the mockups?", a: "Yes, our motion team turns the same scenes into short product films." },
      { q: "Do you do packaging renders?", a: "Yes, including dielines applied to accurate 3D geometry." },
    ],
  },
  "packaging-design": {
    tagline: "Shelf presence that earns the pick-up.",
    intro:
      "Structural and graphic packaging design built for real production: correct dielines, print-ready artwork, and a hierarchy that reads from three metres away.",
    deliverables: [
      { t: "Dieline setup", d: "Accurate structural templates confirmed with your printer." },
      { t: "Packaging artwork", d: "Front-of-pack hierarchy, back-of-pack detail and legal panels." },
      { t: "Print-ready files", d: "Correct colour space, bleed, spot colours and finishes." },
      { t: "Shelf and unboxing visuals", d: "Renders for e-commerce listings and marketing." },
    ],
    why: [
      { t: "Production-savvy", d: "We speak printer, so files pass pre-press first time." },
      { t: "Range thinking", d: "Systems that scale across SKUs and future flavours or variants." },
      { t: "Tested at distance", d: "Legibility checked at shelf scale and in thumbnail listings." },
    ],
    faq: [
      { q: "Can you liaise with our printer?", a: "Yes, we handle specs and pre-press queries directly." },
      { q: "Do you cover compliance panels?", a: "We lay out the content you supply and flag anything missing." },
      { q: "How many SKUs can you handle?", a: "Full ranges — we design a system first, then roll out variants quickly." },
    ],
  },
  "website-development": {
    tagline: "Fast, accessible sites engineered to last.",
    intro:
      "Production websites built on modern frameworks with clean, typed code, sensible CMS structures and Core Web Vitals treated as a requirement rather than an afterthought.",
    deliverables: [
      { t: "Pixel-accurate build", d: "Responsive implementation matched to the design system." },
      { t: "CMS integration", d: "Editable content models your marketing team can manage safely." },
      { t: "Performance pass", d: "Image strategy, caching and bundle work to hit strong Core Web Vitals." },
      { t: "Analytics and tracking", d: "Events, goals and consent wired up before launch." },
    ],
    why: [
      { t: "Maintainable code", d: "Typed, reviewed and documented so any team can pick it up." },
      { t: "SEO-first rendering", d: "Server rendering and clean metadata on every route." },
      { t: "Post-launch care", d: "Monitoring and a support window included with every build." },
    ],
    faq: [
      { q: "Which stack do you use?", a: "Modern React frameworks with SSR by default; we adapt to your ecosystem." },
      { q: "Can you migrate our old site?", a: "Yes, including redirects and content migration to protect rankings." },
      { q: "Do you offer maintenance?", a: "Monthly plans cover updates, monitoring and small enhancements." },
    ],
  },
  "ecommerce-development": {
    tagline: "Storefronts engineered to raise revenue per visit.",
    intro:
      "Shopify, headless or custom commerce builds where merchandising, checkout speed and post-purchase flows are treated as revenue levers — because they are.",
    deliverables: [
      { t: "Storefront build", d: "Custom theme or headless front end tuned for speed." },
      { t: "Catalogue and merchandising", d: "Collections, filters, search and upsell logic configured." },
      { t: "Checkout optimisation", d: "Fewer steps, more payment options, tracked drop-off." },
      { t: "Integrations", d: "ERP, shipping, subscriptions, reviews, email and analytics connected." },
    ],
    why: [
      { t: "Revenue-focused", d: "We optimise AOV and conversion rate, not just page aesthetics." },
      { t: "Peak-season ready", d: "Load-tested builds that hold up on launch and sale days." },
      { t: "Experiment-friendly", d: "Structure that makes A/B testing straightforward." },
    ],
    faq: [
      { q: "Shopify or headless?", a: "We recommend based on catalogue size, team capability and roadmap — not preference." },
      { q: "Can you replatform us?", a: "Yes, with data migration, SEO preservation and a staged cutover." },
      { q: "Do you handle subscriptions?", a: "Yes, including billing logic and customer portal work." },
    ],
  },
  "software-development": {
    tagline: "Custom software that fits how you actually operate.",
    intro:
      "Internal tools, portals and integrations engineered around your real workflows — replacing spreadsheet sprawl with systems your team trusts.",
    deliverables: [
      { t: "Technical discovery", d: "Workflow mapping, architecture and a costed delivery plan." },
      { t: "Application build", d: "Iterative sprints with working software reviewed every two weeks." },
      { t: "Integrations and APIs", d: "Secure connections to the systems you already run." },
      { t: "Testing and documentation", d: "Automated tests plus handover docs for your team." },
    ],
    why: [
      { t: "Senior engineering", d: "Small teams of experienced engineers, no offshore relay races." },
      { t: "Security by default", d: "Role-based access, audit trails and sane data handling from day one." },
      { t: "Own your code", d: "Full repository ownership and clean handover whenever you want it." },
    ],
    faq: [
      { q: "How do you scope fixed budgets?", a: "A short paid discovery produces an architecture and a realistic range." },
      { q: "Can you take over a stalled project?", a: "Yes, starting with a code audit and a stabilisation plan." },
      { q: "Who owns the IP?", a: "You do — completely." },
    ],
  },
  "saas-development": {
    tagline: "From idea to a product you can charge for.",
    intro:
      "Multi-tenant SaaS platforms with authentication, billing, roles and analytics built in — architected so version two doesn't require a rewrite.",
    deliverables: [
      { t: "Product architecture", d: "Multi-tenancy, data model, permissions and scaling plan." },
      { t: "MVP build", d: "The smallest version that a customer will genuinely pay for." },
      { t: "Billing and auth", d: "Subscriptions, trials, roles and secure account management." },
      { t: "Admin and analytics", d: "Internal dashboards so you can see usage and churn signals." },
    ],
    why: [
      { t: "Commercially literate", d: "We've shipped products that reached paying customers, not just demos." },
      { t: "Scales with you", d: "Infrastructure sized for today, structured for 100x." },
      { t: "Fast to first revenue", d: "MVPs typically live within eight to twelve weeks." },
    ],
    faq: [
      { q: "How long to an MVP?", a: "Usually eight to twelve weeks depending on scope and integrations." },
      { q: "Can you continue after launch?", a: "Most clients move to a product retainer for continuous delivery." },
      { q: "Do you help with pricing?", a: "We advise on packaging and plan structure based on the build." },
    ],
  },
  "custom-web-applications": {
    tagline: "Complex web apps that stay fast as they grow.",
    intro:
      "Dashboards, marketplaces and data-heavy interfaces engineered with real-time updates, robust state handling and performance that survives real production data.",
    deliverables: [
      { t: "Application architecture", d: "Data flow, state strategy and API contracts defined upfront." },
      { t: "Interface build", d: "Complex tables, charts, editors and real-time views." },
      { t: "Auth and permissions", d: "Granular roles enforced on both client and server." },
      { t: "Deployment pipeline", d: "CI/CD, environments and monitoring configured." },
    ],
    why: [
      { t: "Performance discipline", d: "Virtualisation, caching and query design applied from the start." },
      { t: "Design-engineering fluency", d: "One team for interface and infrastructure — no blame gaps." },
      { t: "Reliable delivery", d: "Two-week increments with demoable software each time." },
    ],
    faq: [
      { q: "Can you integrate our existing API?", a: "Yes — we adapt to your contracts or help refactor them." },
      { q: "Do you support real-time features?", a: "Websockets, live sync and collaborative editing are all in scope." },
      { q: "What about legacy migration?", a: "We migrate incrementally, keeping the old system live until cutover." },
    ],
  },
  "social-media-management": {
    tagline: "An always-on channel your audience actually follows.",
    intro:
      "Strategy, calendar, creative and community handled end to end — a consistent presence that compounds instead of stopping when everyone gets busy.",
    deliverables: [
      { t: "Channel strategy", d: "Platform mix, content pillars and posting cadence." },
      { t: "Monthly content calendar", d: "Planned, written and designed ahead of time for approval." },
      { t: "Publishing and community", d: "Scheduling plus comment and DM management." },
      { t: "Monthly reporting", d: "Growth, engagement and the actions that drove them." },
    ],
    why: [
      { t: "Consistency guaranteed", d: "A dedicated pod means output never depends on one busy person." },
      { t: "Native creative", d: "Content designed for each platform, not one asset reposted everywhere." },
      { t: "Measured, not vanity", d: "We report on saves, shares, clicks and pipeline — not follower counts alone." },
    ],
    faq: [
      { q: "Which platforms do you cover?", a: "Instagram, LinkedIn, TikTok, Facebook, X and YouTube Shorts." },
      { q: "Do you shoot content?", a: "We direct and edit; we can arrange production or work from your footage." },
      { q: "How much do we need to approve?", a: "One calendar approval per month is typically enough." },
    ],
  },
  "social-media-marketing": {
    tagline: "Paid social that buys customers, not impressions.",
    intro:
      "Full-funnel paid social across Meta, TikTok and LinkedIn — creative testing, audience structure and measurement built to lower cost per acquisition month over month.",
    deliverables: [
      { t: "Account structure", d: "Campaign architecture built for clean learning and scale." },
      { t: "Creative testing engine", d: "A steady pipeline of hooks, angles and formats tested weekly." },
      { t: "Tracking setup", d: "Pixels, conversions API and attribution you can trust." },
      { t: "Weekly optimisation", d: "Budget shifts, audience pruning and scaling decisions with a written rationale." },
    ],
    why: [
      { t: "Creative is the targeting", d: "We treat ad creative as the main performance lever, and staff accordingly." },
      { t: "Transparent reporting", d: "You see spend, CAC and ROAS in a live dashboard, always." },
      { t: "No lock-in", d: "You own every ad account, pixel and asset." },
    ],
    faq: [
      { q: "What's the minimum ad spend?", a: "We recommend at least $3,000/month in media for meaningful testing." },
      { q: "How fast do results come?", a: "Early signal in two to three weeks; stable performance usually by week six." },
      { q: "Do you produce the creative?", a: "Yes — static, motion and UGC-style video are all in house." },
    ],
  },
  seo: {
    tagline: "Compounding organic growth, not keyword theatre.",
    intro:
      "Technical fixes, content depth and authority building combined into one roadmap prioritised by revenue potential rather than search volume alone.",
    deliverables: [
      { t: "Technical audit and fixes", d: "Crawlability, indexation, speed, schema and internal linking." },
      { t: "Keyword and intent map", d: "Clusters mapped to pages and buying stages." },
      { t: "Content production", d: "Briefs and publish-ready articles or landing pages each month." },
      { t: "Authority building", d: "Digital PR and quality link acquisition, no spam networks." },
    ],
    why: [
      { t: "Revenue-weighted priorities", d: "We chase the terms that convert, not the ones that look impressive." },
      { t: "Engineering muscle", d: "Our developers implement the fixes instead of emailing you a list." },
      { t: "AI-search ready", d: "Content structured to be cited by AI answers as well as ranked by Google." },
    ],
    faq: [
      { q: "When will we see results?", a: "Technical wins can move within weeks; content-led growth typically compounds from month three." },
      { q: "Do you guarantee rankings?", a: "No credible agency does. We commit to a roadmap, transparent reporting and measurable trend lines." },
      { q: "Can you work with our writers?", a: "Yes — we brief and edit, or produce everything ourselves." },
    ],
  },
  "google-ads": {
    tagline: "Capture demand the moment it appears.",
    intro:
      "Search, Shopping, Performance Max and YouTube campaigns structured for profitable intent capture — with wasted spend cut out weekly.",
    deliverables: [
      { t: "Account build or rebuild", d: "Clean campaign structure, match types and negatives." },
      { t: "Conversion tracking", d: "Accurate values, offline conversions and consent-safe measurement." },
      { t: "Ad and landing page testing", d: "Copy, extensions and page variants tested continuously." },
      { t: "Weekly optimisation and reporting", d: "Search term pruning, bidding and budget reallocation." },
    ],
    why: [
      { t: "Profit over volume", d: "We optimise to margin and lead quality, not raw conversion counts." },
      { t: "Waste elimination", d: "Aggressive negative keyword and placement hygiene every week." },
      { t: "Landing page leverage", d: "Our designers and engineers can fix the page, not just the bid." },
    ],
    faq: [
      { q: "Do you manage Performance Max?", a: "Yes, with asset-group discipline and proper exclusions." },
      { q: "Who owns the ad account?", a: "You do, always — we work inside your account." },
      { q: "What's your fee model?", a: "Flat monthly management or a percentage of spend at higher budgets." },
    ],
  },
  "meta-ads": {
    tagline: "Facebook and Instagram ads built around creative volume.",
    intro:
      "A testing system that produces enough quality creative to keep Meta's algorithm fed, paired with measurement that survives privacy changes.",
    deliverables: [
      { t: "Campaign architecture", d: "Consolidated structure for stable learning and scaling." },
      { t: "Creative pipeline", d: "New concepts, hooks and iterations shipped every week." },
      { t: "Conversions API setup", d: "Server-side tracking for durable attribution." },
      { t: "Scaling playbook", d: "Documented rules for when to increase, duplicate or kill." },
    ],
    why: [
      { t: "In-house creative", d: "Design, motion and copy under the same roof as the media buying." },
      { t: "Incrementality-minded", d: "We look at blended CAC and holdouts, not just platform ROAS." },
      { t: "Weekly cadence", d: "A standing call, a written summary and clear next actions." },
    ],
    faq: [
      { q: "How many creatives per month?", a: "Typically 12–20 new assets plus iterations, scaled to budget." },
      { q: "Can you fix a stalled account?", a: "We start with an audit and usually restructure before spending more." },
      { q: "Do you handle UGC?", a: "Yes, including creator sourcing and editing." },
    ],
  },
  "email-marketing": {
    tagline: "The channel you own, finally working properly.",
    intro:
      "Lifecycle flows and campaigns that turn your list into predictable revenue — segmented, automated and continuously tested.",
    deliverables: [
      { t: "Lifecycle flow build", d: "Welcome, abandoned cart, post-purchase, winback and re-engagement." },
      { t: "Campaign calendar", d: "Planned sends with segmentation and offers mapped." },
      { t: "Template system", d: "On-brand, responsive modules your team can reuse." },
      { t: "Deliverability and testing", d: "Authentication, list hygiene and ongoing subject-line tests." },
    ],
    why: [
      { t: "Revenue attribution", d: "Every flow reported by revenue contribution, not open rate." },
      { t: "Segmentation depth", d: "Behaviour-based cohorts instead of one blast to everyone." },
      { t: "Platform-agnostic", d: "Klaviyo, HubSpot, Braze, Mailchimp or Customer.io — all fine." },
    ],
    faq: [
      { q: "Will you migrate our platform?", a: "Yes, including flows, templates and list hygiene." },
      { q: "How many emails per month?", a: "Usually four to eight campaigns plus always-on automated flows." },
      { q: "Can you fix deliverability issues?", a: "We audit authentication, reputation and list quality first." },
    ],
  },
  "content-writing": {
    tagline: "Content with a point of view and a job to do.",
    intro:
      "Articles, guides and landing page content researched properly, written by specialists and structured to rank, get cited and move readers toward a decision.",
    deliverables: [
      { t: "Content strategy", d: "Themes, formats and a calendar tied to funnel stages." },
      { t: "Research-backed drafts", d: "Original angles, real data and expert input — not rewritten competitors." },
      { t: "On-page optimisation", d: "Structure, internal links and metadata built in." },
      { t: "Editing and refresh", d: "Ongoing updates so existing pages keep performing." },
    ],
    why: [
      { t: "Subject-matter interviews", d: "We talk to your experts so the content says something new." },
      { t: "Search and AI aware", d: "Structured for both classic rankings and AI answer citations." },
      { t: "Consistent voice", d: "One editorial standard across every writer we assign." },
    ],
    faq: [
      { q: "How much can you publish?", a: "Four to twelve pieces per month depending on depth." },
      { q: "Do you use AI?", a: "As a research and drafting aid only — every piece is expert-edited and fact-checked." },
      { q: "Can you match our tone?", a: "Yes, we build a style guide from your best-performing material." },
    ],
  },
  copywriting: {
    tagline: "Words that make the sale easier.",
    intro:
      "Conversion copy for websites, ads, emails and sales assets — grounded in customer research so the message lands with the person actually buying.",
    deliverables: [
      { t: "Message research", d: "Customer interviews, review mining and competitor positioning." },
      { t: "Core messaging framework", d: "Value proposition, proof points and objection handling." },
      { t: "Page and asset copy", d: "Wireframe-ready copy for site, ads, emails and decks." },
      { t: "Variants for testing", d: "Alternate headlines and hooks ready to A/B test." },
    ],
    why: [
      { t: "Research-led", d: "We use your customers' language, not clever agency phrasing." },
      { t: "Copy plus layout", d: "Written into wireframes so hierarchy and words work together." },
      { t: "Testable by design", d: "Every key message ships with alternatives to test." },
    ],
    faq: [
      { q: "Do you write in other languages?", a: "We deliver English natively and coordinate expert localisation." },
      { q: "Can you work from our brand voice?", a: "Yes, or we can define one as part of the engagement." },
      { q: "How fast is a landing page?", a: "Typically five to seven working days including research." },
    ],
  },
  "motion-graphics": {
    tagline: "Movement that makes your brand feel expensive.",
    intro:
      "Animated brand assets, explainers and social motion designed to hold attention in the first two seconds and stay on-brand for the rest.",
    deliverables: [
      { t: "Concept and storyboard", d: "Narrative, frames and pacing agreed before animation starts." },
      { t: "Animated master", d: "Fully produced piece with sound design and licensed music." },
      { t: "Channel cutdowns", d: "Vertical, square and horizontal versions with captions." },
      { t: "Motion toolkit", d: "Reusable lower thirds, transitions and logo stings." },
    ],
    why: [
      { t: "Brand-consistent motion", d: "Easing, timing and style codified as part of your identity." },
      { t: "Built for silent viewing", d: "Captioned and legible without sound by default." },
      { t: "Reusable assets", d: "Project files and templates handed over for future edits." },
    ],
    faq: [
      { q: "How long is a typical piece?", a: "Fifteen to ninety seconds, depending on channel and message." },
      { q: "Do you handle voiceover?", a: "Yes, including casting, direction and licensing." },
      { q: "What's the turnaround?", a: "Two to four weeks from approved storyboard." },
    ],
  },
  "2d-animation": {
    tagline: "Story-driven 2D that explains and delights.",
    intro:
      "Character and illustrative animation for explainers, campaigns and product education — crafted frame by frame with a distinct visual identity.",
    deliverables: [
      { t: "Script and storyboard", d: "Message structure and shot-by-shot frames." },
      { t: "Illustration style frames", d: "Art direction approved before full production." },
      { t: "Full 2D animation", d: "Animated sequence with sound design and music." },
      { t: "Export package", d: "Formats and aspect ratios for every channel." },
    ],
    why: [
      { t: "Original artwork", d: "Custom illustration, never generic template libraries." },
      { t: "Clarity first", d: "Complex ideas broken into sequences people remember." },
      { t: "Structured approvals", d: "Sign-off gates at script, style and animatic stages keep costs predictable." },
    ],
    faq: [
      { q: "Can you match our illustration style?", a: "Yes, or we can develop one that becomes part of your brand." },
      { q: "Do you provide the script?", a: "We write it, or refine one you supply." },
      { q: "How many revisions?", a: "Two rounds per stage, which is typically more than enough." },
    ],
  },
  "3d-animation": {
    tagline: "Cinematic 3D that shows the product at its best.",
    intro:
      "Product films, mechanism reveals and abstract brand visuals rendered in 3D — full control over camera, light and material without a physical shoot.",
    deliverables: [
      { t: "3D modelling", d: "Accurate geometry built from your CAD or reference material." },
      { t: "Look development", d: "Materials, lighting and camera language approved on stills." },
      { t: "Final render", d: "High-resolution animation with compositing and grade." },
      { t: "Still frames", d: "Hero images pulled from the same scene for web and ads." },
    ],
    why: [
      { t: "Physically based rendering", d: "Materials that read as real, not plastic." },
      { t: "Reusable scenes", d: "Future variants and updates cost a fraction of the first render." },
      { t: "Web-ready outputs", d: "We can also deliver real-time WebGL versions of the same asset." },
    ],
    faq: [
      { q: "Do you need CAD files?", a: "Helpful but not essential — we can model from drawings and photos." },
      { q: "How long does it take?", a: "Three to six weeks depending on complexity and render length." },
      { q: "Can you animate internals?", a: "Yes, exploded views and cutaways are a common request." },
    ],
  },
  "video-editing": {
    tagline: "Raw footage turned into something worth watching.",
    intro:
      "Editing, colour, sound and graphics for brand films, ads, podcasts and social — a repeatable pipeline that keeps quality high at volume.",
    deliverables: [
      { t: "Story edit", d: "Structure, pacing and selects assembled for review." },
      { t: "Colour and sound", d: "Grading, mixing, noise cleanup and music licensing." },
      { t: "Graphics and captions", d: "On-brand titles, lower thirds and burned-in subtitles." },
      { t: "Multi-format delivery", d: "Every aspect ratio and platform spec you need." },
    ],
    why: [
      { t: "Fast turnaround", d: "First cut typically within three to five working days." },
      { t: "Volume without drift", d: "Documented style so episode fifty matches episode one." },
      { t: "Clear revision process", d: "Timestamped comments, versioned cuts, no email chaos." },
    ],
    faq: [
      { q: "How do we send footage?", a: "Any cloud drive — we'll set up an organised ingest structure." },
      { q: "Do you offer a monthly retainer?", a: "Yes, most content teams book a fixed number of edits per month." },
      { q: "Can you repurpose long-form?", a: "Yes, one recording becomes a library of short-form clips." },
    ],
  },
  "product-advertisement": {
    tagline: "Ad films that sell in the first three seconds.",
    intro:
      "Concept-to-delivery advertising creative for paid channels — hooks, demos and offers structured around what actually performs in-feed.",
    deliverables: [
      { t: "Creative concepts", d: "Hooks and angles grounded in performance data." },
      { t: "Production or 3D build", d: "Shot, animated or rendered depending on the concept." },
      { t: "Performance variants", d: "Multiple hooks and endings per concept for testing." },
      { t: "Platform delivery", d: "Specs and captions for Meta, TikTok, YouTube and retail media." },
    ],
    why: [
      { t: "Built by media buyers", d: "Creative shaped by people who see the account performance daily." },
      { t: "Variant-first", d: "Every concept ships in several versions so testing starts immediately." },
      { t: "Iterated on results", d: "Winners get scaled and re-cut, not archived." },
    ],
    faq: [
      { q: "Do you handle filming?", a: "Yes, plus 3D and UGC-style options where they perform better." },
      { q: "How many ads per batch?", a: "Usually three concepts with three to five variants each." },
      { q: "Can you run the media too?", a: "Yes, our paid teams can buy against the creative they produce." },
    ],
  },
  "ai-agents": {
    tagline: "Digital teammates that handle the repetitive work.",
    intro:
      "Custom AI agents connected to your real tools and data, with guardrails, human approval steps and logging — built to be trusted with actual workflows.",
    deliverables: [
      { t: "Use-case assessment", d: "The workflows worth automating, ranked by hours and risk." },
      { t: "Agent build", d: "Tool access, memory, prompts and evaluation harness." },
      { t: "Guardrails and approvals", d: "Human-in-the-loop checkpoints and permission boundaries." },
      { t: "Monitoring dashboard", d: "Runs, costs, failures and hours saved, visible to your team." },
    ],
    why: [
      { t: "Measurable outcomes", d: "We baseline hours before build and report savings after." },
      { t: "Model-agnostic", d: "We select models per task and swap as the market moves." },
      { t: "Safe by design", d: "Least-privilege access, audit logs and clear escalation paths." },
    ],
    faq: [
      { q: "Will our data train public models?", a: "No. We use enterprise endpoints with training disabled." },
      { q: "What can an agent realistically do?", a: "Triage, research, drafting, data entry and multi-step tool workflows with oversight." },
      { q: "How is it priced?", a: "Fixed build fee plus optional support; you pay model usage directly." },
    ],
  },
  "workflow-automation": {
    tagline: "Remove the manual steps between your tools.",
    intro:
      "End-to-end automation of operational workflows — sales handoffs, onboarding, reporting, billing — designed for reliability, with alerts when something needs a human.",
    deliverables: [
      { t: "Process mapping", d: "Current-state workflow documented with time and error costs." },
      { t: "Automation build", d: "Reliable pipelines across your CRM, finance and support tools." },
      { t: "Error handling", d: "Retries, fallbacks and alerting so nothing fails silently." },
      { t: "Team enablement", d: "Documentation and training so your team can adjust it later." },
    ],
    why: [
      { t: "Reliability first", d: "Idempotent, monitored automations — not brittle no-code chains." },
      { t: "Hours quantified", d: "Every automation reported in time and cost recovered." },
      { t: "Tool-agnostic", d: "Native APIs, n8n, Make or custom code, chosen for the job." },
    ],
    faq: [
      { q: "Which tools can you connect?", a: "Anything with an API, plus the major no-code platforms." },
      { q: "What if a process changes?", a: "Automations are documented and modular; changes are quick and cheap." },
      { q: "How quickly do we see value?", a: "First automations usually go live within two to three weeks." },
    ],
  },
  "custom-llm-integrations": {
    tagline: "Your own data, answered accurately.",
    intro:
      "Retrieval-augmented AI features embedded into your product or internal tools — grounded in your content, evaluated for accuracy, and cost-controlled.",
    deliverables: [
      { t: "Data pipeline", d: "Ingestion, chunking, embedding and refresh strategy." },
      { t: "Retrieval and grounding", d: "Search plus citations so answers can be verified." },
      { t: "Evaluation suite", d: "Test sets and scoring to catch regressions before users do." },
      { t: "Cost and latency tuning", d: "Caching, routing and model selection to keep bills sane." },
    ],
    why: [
      { t: "Accuracy is measured", d: "We ship with an eval harness, not vibes." },
      { t: "Private by default", d: "Your data stays in your infrastructure and isn't used for training." },
      { t: "Product-grade UX", d: "Streaming, citations and graceful failure states designed in." },
    ],
    faq: [
      { q: "Which models do you use?", a: "Whichever fits accuracy, latency and cost — we design for swappability." },
      { q: "Can it run on our infrastructure?", a: "Yes, including private cloud and self-hosted model options." },
      { q: "How do you handle hallucinations?", a: "Grounded retrieval, citation requirements and refusal behaviour, verified by evals." },
    ],
  },
  "chatbots-assistants": {
    tagline: "Support and sales conversations, handled instantly.",
    intro:
      "Assistants that resolve real questions using your documentation and systems, escalate cleanly to humans, and get measurably better every month.",
    deliverables: [
      { t: "Knowledge grounding", d: "Docs, policies and product data indexed and kept current." },
      { t: "Conversation design", d: "Flows, tone, escalation rules and fallback handling." },
      { t: "Channel deployment", d: "Website widget, WhatsApp, in-app or helpdesk integration." },
      { t: "Analytics and tuning", d: "Deflection rate, satisfaction and gap reports each month." },
    ],
    why: [
      { t: "Honest escalation", d: "The assistant hands off rather than inventing an answer." },
      { t: "Measured deflection", d: "Reported as tickets resolved and response time saved." },
      { t: "On-brand personality", d: "Voice tuned to your brand, in every language you support." },
    ],
    faq: [
      { q: "Can it speak multiple languages?", a: "Yes, including Arabic, German, Italian and French out of the box." },
      { q: "Does it connect to our helpdesk?", a: "Yes — Zendesk, Intercom, HubSpot and custom systems." },
      { q: "How long to launch?", a: "Typically three to five weeks including tuning." },
    ],
  },
  "ai-powered-analytics": {
    tagline: "Answers from your data, without the SQL queue.",
    intro:
      "Analytics layers that let your team ask questions in plain language and get trustworthy, governed answers — plus automated insight digests for the metrics that matter.",
    deliverables: [
      { t: "Data model and semantics", d: "Governed metric definitions everyone agrees on." },
      { t: "Natural-language querying", d: "Ask in plain language, get charts with the underlying query shown." },
      { t: "Automated insights", d: "Anomaly detection and scheduled digests to Slack or email." },
      { t: "Dashboards", d: "Executive and team views built on the same trusted definitions." },
    ],
    why: [
      { t: "One version of the truth", d: "A semantic layer prevents duplicate, conflicting metrics." },
      { t: "Transparent answers", d: "Every AI answer exposes the query behind it for verification." },
      { t: "Warehouse-native", d: "Works with BigQuery, Snowflake, Postgres and your existing BI." },
    ],
    faq: [
      { q: "Do we need a data warehouse?", a: "Ideally yes — we can set one up as part of the engagement." },
      { q: "Is our data sent to model providers?", a: "Only schema and question context; we can run fully private if required." },
      { q: "Who maintains it?", a: "Your team, with our documentation — or us on a support retainer." },
    ],
  },
};

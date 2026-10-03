# Kinetic 
This project focuses on practical frontend engineering: reusable React components, typed content models, responsive UI behavior, form validation, localized business logic, and a clear conversion flow.

<!-- Add your deployed URL here after deployment. -->
<!-- Live Demo: https://your-domain.com -->

## Project Overview

Kinetic was designed around a straightforward business problem: service websites often make visitors work too hard to understand what is offered, how much it costs, or how to make contact.

The interface keeps that journey simple:

1. Understand the offer from the hero section.
2. Compare three clearly priced service packages.
3. See how the service process works.
4. Review representative project scenarios.
5. Select a package and submit a project inquiry.

The content is tailored to an Iranian market context, including prices in toman and validation for Iranian mobile-number formats.

## Key Features

- **Responsive landing-page layout** designed for desktop and mobile screens.
- **Service and pricing cards** generated from structured data rather than duplicated markup.
- **Package selection flow** that carries the selected service into the inquiry form.
- **Smooth section navigation** between services, examples, and contact sections.
- **Responsive mobile navigation** with local component state.
- **Lead-capture form** with client-side validation and clear error messages.
- **Iranian mobile validation** supporting local and international number formats.
- **Persian and Arabic digit normalization** before phone-number validation.
- **Email inquiry generation** using a pre-filled `mailto:` message after successful validation.
- **Copy-to-clipboard interaction** for submitted inquiry details.
- **FAQ accordion** with controlled open/close state.
- **Localized price formatting** for toman-based service packages.
- **Reusable typed data models** for services, process steps, FAQs, projects, and form data.

## Engineering Highlights

### Data-driven UI

Service packages, process steps, example projects, and FAQ content are kept in `src/data/content.ts`. Components render those data structures instead of hard-coding repeated sections.

This keeps the presentation layer smaller and makes content changes easier to maintain.

### Typed component contracts

The project uses TypeScript interfaces for the main domain models, including:

- `ServicePackage`
- `ExampleProject`
- `ProcessStep`
- `FaqItem`
- `LocalizedLeadFormData`

The selected service is also passed through typed React props from the pricing section to the lead form.

### Localized form handling

The phone utilities in `src/utils/phone.ts` handle a small but important localization problem. Users may enter Persian, Arabic, or English digits, so the input is normalized before validation.

Accepted Iranian mobile formats include:

```text
0912XXXXXXX
+98912XXXXXXX
0098912XXXXXXX
98912XXXXXXX
```

Valid numbers are then formatted into a consistent local display format.

### Conversion-focused state flow

When a visitor selects a service package, the application:

1. Stores the selected package in the parent `App` component.
2. Scrolls the visitor to the contact section.
3. Preselects the same package in the inquiry form.
4. Includes the selected service in the generated inquiry email.

This creates a continuous interaction between separate sections without adding unnecessary global state management.

## Tech Stack

- **React 19** — component-based user interface
- **TypeScript** — typed application data and component contracts
- **Vite** — development and production build tooling
- **Tailwind CSS 4** — responsive styling and layout
- **Lucide React** — interface icons

The application currently runs entirely on the client and does not require a backend service.

## Project Structure

```text
src/
├── components/
│   ├── ExampleProjects.tsx
│   ├── FaqSection.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── LeadCaptureSection.tsx
│   ├── Navbar.tsx
│   ├── ProcessSection.tsx
│   └── ServicesPricing.tsx
├── data/
│   └── content.ts
├── types/
│   └── index.ts
├── utils/
│   └── phone.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Getting Started

### Prerequisites

Install a recent version of Node.js and npm.

### Installation

```bash
git clone <your-repository-url>
cd <your-project-folder>
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown by Vite in your browser.

### Production Build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Type Check

```bash
npm run lint
```

In this project, the `lint` script currently runs TypeScript with `--noEmit` to catch type errors without generating build files.

## Design Approach

The visual direction uses a restrained editorial style rather than a typical dashboard or SaaS layout. The interface combines:

- warm neutral backgrounds,
- navy interaction accents,
- serif display typography,
- compact sans-serif body text,
- clear pricing hierarchy,
- rounded content cards,
- and intentionally limited animation.

The goal is to keep attention on the offer and inquiry path rather than decorative UI.

## Current Limitations

This is a frontend portfolio project, so several production features are intentionally outside the current scope:

- Inquiry submission uses the visitor's email client instead of a server-side form endpoint.
- Example project cards are representative demo scenarios, not claims of completed client engagements.
- There is no CMS or admin dashboard for editing service content.
- Automated tests have not yet been added.

Documenting these limits is intentional: future iterations can improve the project without misrepresenting its current implementation.

## Possible Next Improvements

- Connect the inquiry form to a real API or serverless form handler.
- Add automated tests for phone utilities and form validation.
- Improve form accessibility with explicit input/label associations and error relationships.
- Add analytics for package selection and inquiry conversion events.
- Add a lightweight CMS or structured content source.
- Add project screenshots and a deployed production URL to this README.

## What I Practiced

Building Kinetic gave me practical experience with:

- breaking a landing page into reusable React components,
- designing TypeScript models before rendering repeated content,
- passing state between related sections,
- implementing client-side validation,
- handling localized user input,
- building responsive navigation and layouts,
- separating application data from presentation components,
- and thinking about a website as a user journey rather than a collection of sections.

## License

This project is intended for portfolio and educational use.
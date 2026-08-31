# Barefoot Shoes Storefront Monorepo (`BUUDY.`)

A high-performance multi-country barefoot footwear e-commerce monorepo built with Next.js 16 (App Router), React 19, Tailwind CSS 4, and Turborepo.

## Architecture
- `apps/uk`: United Kingdom storefront (GBP £49 / £99, UK 3-13 sizing, Royal Mail 48)
- `apps/us`: United States storefront (USD $59 / $119, US 4-14 sizing, USPS/FedEx)
- `apps/au`: Australia storefront (AUD A$89 / A$179, AU sizing, Australia Post)
- `packages/shared`: Shared types, integer money formatters, sizing tables, utility functions
- `packages/ui`: Shared ETQ-styled UI components, preloaded FastImage, modal/drawer engines

## Development
```bash
# Install dependencies
pnpm install

# Run all stores in development
pnpm dev

# Run individual country store
pnpm dev:uk   # UK store on localhost:3000
pnpm dev:us   # US store on localhost:3001
pnpm dev:au   # AU store on localhost:3002

# Production build
pnpm build
```

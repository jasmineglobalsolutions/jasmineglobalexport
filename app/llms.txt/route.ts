export async function GET() {
  const content = `# Jasmine Global HI-Lux Export

## Overview
Jasmine Global HI-Lux Export is a Toyota Hilux export specialist focused on Philippines-spec vehicle sourcing, export coordination, verified supply, and international shipping support.

## Primary public pages
- https://jasmineglobalexport.com/
- https://jasmineglobalexport.com/about
- https://jasmineglobalexport.com/procedure
- https://jasmineglobalexport.com/specs
- https://jasmineglobalexport.com/price-list
- https://jasmineglobalexport.com/shipping
- https://jasmineglobalexport.com/faq
- https://jasmineglobalexport.com/quote
- https://jasmineglobalexport.com/contact
- https://jasmineglobalexport.com/blog

## Buyer journey and policy pages
- https://jasmineglobalexport.com/price-list#purchase-journey
- https://jasmineglobalexport.com/price-list#payment-journey
- https://jasmineglobalexport.com/trust
- https://jasmineglobalexport.com/terms
- https://jasmineglobalexport.com/privacy

## Scope
Jasmine Global HI-Lux Export arranges export supply and shipping coordination for Toyota Hilux vehicles from the Philippines. Destination customs clearance, taxes, registration, and local compliance remain the buyer's responsibility.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

# API Structure

## Current

- `GET /api/performance`
  - Returns performance summary, monthly growth, pair performance, and trade history.
- `POST /api/register`
  - Creates a user with hashed password.
- `GET|POST /api/auth/[...nextauth]`
  - NextAuth handler.
- `POST /api/stripe/checkout`
  - Disabled while VIP pricing and payment processing are being updated.
- `POST /api/stripe/webhook`
  - Disabled while payment processing is inactive.

## Planned

- `GET /api/signals`
- `POST /api/admin/signals`
- `GET /api/articles`
- `POST /api/admin/articles`
- `POST /api/telegram/post-signal`
- `POST /api/performance/sync`
- `POST /api/ai/assistant`

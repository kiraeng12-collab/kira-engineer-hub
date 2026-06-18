# KIRAENGINEER Architecture

## Application Layers

- Frontend: Next.js 15 App Router, React, Tailwind CSS, Framer Motion-ready components.
- Backend: Next.js route handlers for app APIs plus an Express service skeleton in `backend/server.ts` for Telegram bot workloads and long-running sync jobs.
- Database: PostgreSQL with Prisma models for users, memberships, signals, articles, payments, notifications, and trade performance.
- Authentication: NextAuth with credentials provider and Prisma adapter.
- Payments: disabled while VIP plans and pricing are being updated.
- Email: Resend-ready transactional email layer.
- Charts: TradingView widget placeholder components.
- AI: environment-ready OpenAI key for future assistant features.

## Data Flow

1. Visitor enters through `kiraengineer.com`.
2. Free users join Telegram or register.
3. VIP visitors contact @KIRAENGINEER for the latest membership information.
4. Admin publishes analysis, education content, and service updates.
5. Performance API will publish verified KIRA ENGINEER HUB performance records after the tracking system is complete.

## Future Services

- Telegram Bot service for signal posting and community automation.
- Performance tracking worker for verified KIRA ENGINEER HUB analytics.
- AI trading assistant using OpenAI.
- CRM and affiliate modules.

# Deployment Guide

1. Push the project to GitHub.
2. Create a PostgreSQL database with Neon, Supabase, Railway, or Vercel Postgres.
3. Add environment variables from `.env.example`.
4. Create Stripe products and prices for Monthly, Quarterly, and Semi-Annual plans.
5. Add Stripe webhook endpoint:
   `https://www.kiraengineer.com/api/stripe/webhook`
6. Deploy to Vercel.
7. In your domain registrar, point `kiraengineer.com` and `www.kiraengineer.com` to Vercel.
8. Run Prisma migrations.
9. Test registration, login, checkout, webhook, Telegram links, and performance API.

## Domain

Use Vercel project settings:

- Add `kiraengineer.com`
- Add `www.kiraengineer.com`
- Follow Vercel DNS records exactly.

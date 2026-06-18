# Production Checklist

## Security

- Strong `AUTH_SECRET`.
- Real PostgreSQL database with SSL.
- Stripe webhook validation enabled.
- Rate limiting active.
- Admin routes protected by role checks.
- Content sanitization for CMS fields.
- Validate all API input with Zod.
- Avoid exposing VIP content to free users.

## SEO

- Metadata configured.
- Open Graph configured.
- Twitter cards configured.
- Sitemap enabled.
- Robots enabled.
- Add real OG images before launch.
- Add organization schema and article schema for CMS pages.

## Product

- Replace mock performance data with database records.
- Confirm legal disclaimers.
- Add refund and terms pages.
- Add privacy policy.
- Add risk warning to checkout.
- Connect Telegram bot.
- Connect email notifications through Resend.

## QA

- Test mobile layout.
- Test sign up and login.
- Test Stripe checkout.
- Test webhook processing.
- Test Telegram links.
- Test 404 page.
- Run Lighthouse before launch.

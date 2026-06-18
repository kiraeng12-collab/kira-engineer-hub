import { NextResponse, type NextRequest } from "next/server";

const rateLimit = new Map<string, { count: number; resetAt: number }>();

export function middleware(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "anonymous";
  const now = Date.now();
  const windowMs = 60_000;
  const limit = request.nextUrl.pathname.startsWith("/api") ? 120 : 300;
  const current = rateLimit.get(ip);

  if (!current || current.resetAt < now) {
    rateLimit.set(ip, { count: 1, resetAt: now + windowMs });
  } else {
    current.count += 1;
    if (current.count > limit) return new NextResponse("Too many requests", { status: 429 });
  }

  const response = NextResponse.next();
  response.headers.set("X-XSS-Protection", "0");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};

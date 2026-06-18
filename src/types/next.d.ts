// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Pulling the country code directly from Vercel headers since request.geo is dead 🪦
  const country = request.headers.get('x-vercel-ip-country') || 'US'; 
  const pathname = request.nextUrl.pathname;

  // Don't trap them in a redirect loop, and ignore images/static files
  if (
    pathname.startsWith('/in') || 
    pathname.startsWith('/us') || 
    pathname.startsWith('/ca') || 
    pathname.startsWith('/sa') || 
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Geo-route them to the bag 💰
  const routeMap: Record<string, string> = {
    IN: '/in',
    US: '/us',
    CA: '/ca',
    SA: '/sa',
  };

  const targetPath = routeMap[country] || '/us'; // Default to US bags if unknown
  return NextResponse.redirect(new URL(targetPath, request.url));
}

export const config = {
  matcher: ['/'], // Only trigger on the root domain
};
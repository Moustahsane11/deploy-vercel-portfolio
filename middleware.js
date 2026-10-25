import { NextResponse } from 'next/server'
import { PORTFOLIO_PROFILES } from './util/portfolioProfiles'

const GUIDS = new Set(Object.values(PORTFOLIO_PROFILES).map((profile) => profile.guid))

export function middleware(request) {
    const { pathname } = request.nextUrl

    if (pathname === '/404' || pathname.startsWith('/_next/')) {
        return NextResponse.next()
    }

    const segments = pathname.split('/').filter(Boolean)
    if (segments.some((segment) => GUIDS.has(segment))) {
        return NextResponse.next()
    }

    const url = request.nextUrl.clone()
    url.pathname = '/404'
    return NextResponse.rewrite(url, { status: 404 })
}

export const config = {
    matcher: [
        '/',
        '/((?!_next/static|_next/image|_next/data|assets/|favicon.ico|api/).*)',
    ],
}

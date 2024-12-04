import { NextResponse } from 'next/server';

export function middleware() {
    const res = NextResponse.next();

    res.headers.set('Access-Control-Allow-Credentials', 'true');
    res.headers.set('Access-Control-Allow-Methods', '*');
    res.headers.set(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
    res.headers.set('Access-Control-Allow-Origin', "*")
    return res;
}

export const config = {
    matcher: '/api/:path*',
};
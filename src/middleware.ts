import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    if (
        request.nextUrl.pathname.startsWith('/_next') ||
        request.nextUrl.pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    let locale = request.cookies.get('NEXT_LOCALE')?.value;
    if (!locale) {
        const acceptLang = request.headers.get('accept-language');
        if (acceptLang?.toLowerCase().includes('ru')) {
            locale = 'ru';
        } else {
            locale = 'en'; // default to english for non-russian users
        }
        const response = NextResponse.next();
        response.cookies.set('NEXT_LOCALE', locale);
        return response;
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

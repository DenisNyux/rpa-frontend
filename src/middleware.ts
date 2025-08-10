import { NextRequest, NextResponse } from 'next/server';

// Простое хранилище для rate limiting (в продакшене лучше использовать Redis)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Очистка старых записей каждые 5 минут
setInterval(() => {
  const now = Date.now();
  rateLimitStore.forEach((value, key) => {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
    }
  });
}, 5 * 60 * 1000);

export function middleware(request: NextRequest) {
  // Применяем только к API endpoints
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    const userAgent = request.headers.get('user-agent') || '';
    
    // Проверяем подозрительные User-Agent
    const suspiciousUserAgents = [
      'bot', 'crawler', 'spider', 'scraper', 'curl', 'wget', 'python', 'java'
    ];
    
    const isSuspiciousUA = suspiciousUserAgents.some(agent => 
      userAgent.toLowerCase().includes(agent)
    );
    
    if (isSuspiciousUA) {
      return NextResponse.json(
        { error: 'Доступ запрещен' },
        { status: 403 }
      );
    }
    
    // Rate limiting для API endpoints
    if (request.nextUrl.pathname === '/api/conference-registration') {
      const now = Date.now();
      const windowMs = 15 * 60 * 1000; // 15 минут
      const maxRequests = 3; // максимум 5 запросов за 15 минут
      
      const key = `rate_limit:${ip}`;
      const current = rateLimitStore.get(key);
      
      if (!current || now > current.resetTime) {
        rateLimitStore.set(key, {
          count: 1,
          resetTime: now + windowMs
        });
      } else if (current.count >= maxRequests) {
        return NextResponse.json(
          { error: 'Слишком много запросов. Попробуйте позже.' },
          { status: 429 }
        );
      } else {
        current.count++;
      }
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
}; 
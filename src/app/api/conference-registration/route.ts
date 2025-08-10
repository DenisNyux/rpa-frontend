import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Проверяем reCAPTCHA токен и honeypot
    const { recaptchaToken, data, honeypot } = body;
    
    // Проверяем honeypot поле
    if (honeypot) {
      console.log('Honeypot triggered:', honeypot);
      return NextResponse.json(
        { error: 'Форма заблокирована' },
        { status: 400 }
      );
    }
    
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'Отсутствует reCAPTCHA токен' },
        { status: 400 }
      );
    }

    // Верифицируем reCAPTCHA токен
    const recaptchaResponse = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY || '',
          response: recaptchaToken,
        }),
      }
    );

    const recaptchaResult = await recaptchaResponse.json();
    
    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      console.error('reCAPTCHA verification failed:', recaptchaResult);
      return NextResponse.json(
        { error: 'Проверка reCAPTCHA не пройдена' },
        { status: 400 }
      );
    }
    
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `bearer ${process.env.API_TOKEN}`);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({ data }),
    };

    const response = await fetch(
      `${process.env.API_URL}/api/conference-registrations`,
      requestOptions
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error('API Error:', response.status, errorData);
      return NextResponse.json(
        { error: 'Ошибка при отправке регистрации' },
        { status: response.status }
      );
    }

    const responseData = await response.json();
    return NextResponse.json(responseData, { status: 200 });

  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
} 
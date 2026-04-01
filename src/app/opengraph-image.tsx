import { ImageResponse } from 'next/og';
import { seoConfig } from '@/data';

// Image generation for Open Graph
export const runtime = 'edge';
export const alt = seoConfig.title;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

/**
 * Generate Open Graph image dynamically
 * This creates a social media preview image for the portfolio
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0ea5e9 0%, #a855f7 50%, #0ea5e9 100%)',
          padding: '80px',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          {/* Avatar placeholder */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '30px',
              border: '4px solid rgba(255,255,255,0.3)',
            }}
          >
            <span style={{ fontSize: '48px', color: 'white', fontWeight: 'bold' }}>
              {seoConfig.author.split(' ').map(n => n[0]).join('')}
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '20px',
              textShadow: '0 4px 20px rgba(0,0,0,0.2)',
            }}
          >
            {seoConfig.author}
          </h1>

          {/* Title */}
          <p
            style={{
              fontSize: '28px',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '30px',
            }}
          >
            Full Stack Developer & UI/UX Designer
          </p>

          {/* URL */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 24px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '50px',
            }}
          >
            <span style={{ fontSize: '18px', color: 'white' }}>
              {seoConfig.siteUrl.replace('https://', '')}
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
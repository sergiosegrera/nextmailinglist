"use client";
import Script from "next/script";

export default function GoogleAnalytics({ key }: { key: string | undefined }) {
  if (!key) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${key}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${key}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

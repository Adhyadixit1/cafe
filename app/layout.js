import './globals.css'

export const metadata = {
  title: 'Lux Kavarnica - ¡Hamburguesas súper deliciosas en la ciudad!',
  description: 'La comida es cualquier sustancia consumida para proporcionar soporte nutricional a un organismo.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Rubik:wght@400;500;600;700&family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" as="image" href="/assets/images/hero-banner.png" media="(min-width:768px)" />
        <link rel="preload" as="image" href="/assets/images/hero-banner-bg.png" media="(min-width:768px)" />
        <link rel="preload" as="image" href="/assets/images/hero-bg.jpg" />
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </head>
      <body id="top">{children}</body>
    </html>
  )
}

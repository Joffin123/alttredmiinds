import './globals.css';

export const metadata = {
  title: 'Alttred Miinds — Growth Marketing Partner',
  description:
    'We help ambitious businesses generate more qualified leads, improve conversions, and drive sustainable growth.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

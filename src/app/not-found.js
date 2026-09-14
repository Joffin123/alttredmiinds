import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[80vh] flex-col items-center justify-center pt-24 text-center">
      <p className="font-mono text-[13px] text-muted">404</p>
      <h1 className="heading-xl mt-4 text-[48px] sm:text-[66px]">This page didn&apos;t convert.</h1>
      <p className="mt-4 max-w-[420px] text-muted">The page you&apos;re looking for has moved or never existed.</p>
      <Link
        href="/"
        className="mt-10 rounded-full bg-brand px-8 py-4 text-[14px] font-medium uppercase tracking-[0.06em] text-white transition hover:bg-brand-hover"
      >
        Back to home
      </Link>
    </section>
  );
}

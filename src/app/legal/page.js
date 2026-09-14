import LegalPage from '@/components/LegalPage';

export const metadata = { title: 'Legal & Disclaimer' };

// PLACEHOLDER copy — have this reviewed by your legal counsel before launch.
const sections = [
  {
    heading: 'About this website',
    body: 'This website is operated by Alttred Miinds. The information on it is provided for general information about our services and does not constitute professional, financial or legal advice.',
  },
  {
    heading: 'Results and figures',
    body: 'Case studies, statistics and testimonials describe outcomes achieved for specific clients under specific conditions. Past performance does not guarantee future results, and outcomes vary by business, market and budget.',
  },
  {
    heading: 'Intellectual property',
    body: 'All content, design, graphics and logos on this site are the property of Alttred Miinds or its clients and are used with permission. Third-party brand names and logos belong to their respective owners.',
  },
  {
    heading: 'Limitation of liability',
    body: 'We work to keep the information on this site accurate and current, but we make no warranties about its completeness or reliability. We are not liable for any loss arising from the use of this website.',
  },
  {
    heading: 'Contact',
    body: 'Questions about this disclaimer can be sent through our contact page.',
  },
];

export default function Page() {
  return <LegalPage title="Legal & Disclaimer" updated="September 2026" sections={sections} />;
}

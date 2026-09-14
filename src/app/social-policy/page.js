import LegalPage from '@/components/LegalPage';

export const metadata = { title: 'Social Policy' };

// PLACEHOLDER copy — replace with your approved policy before launch.
const sections = [
  {
    heading: 'Our channels',
    body: 'Alttred Miinds shares insights, case studies and team updates on Instagram, LinkedIn and YouTube. These channels exist to start useful conversations about growth.',
  },
  {
    heading: 'Community guidelines',
    body: 'We welcome debate and differing views. We remove comments that are abusive, discriminatory, spam, or that share private information about others.',
  },
  {
    heading: 'Client confidentiality',
    body: 'We never publish client data, results or creative without written approval. Figures we share publicly are either approved or anonymised.',
  },
  {
    heading: 'Enquiries',
    body: 'Messages sent to us on social platforms are not monitored around the clock. For project enquiries, please use our contact page.',
  },
];

export default function Page() {
  return <LegalPage title="Social Policy" updated="September 2026" sections={sections} />;
}

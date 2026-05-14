export const metadata = {
  title: 'Social Media Management',
}

const paragraphs = [
  'Holistic Social Media Strategy\nEmpower your company with complete Social Media Setup.',
  'The best form of advertisement is by word of mouth and social media is the new word of mouth.',
  'Focus on Free will brand your business on the appropriate social media networks for your business.',
  'Facebook/Instagram Support\nThe largest and best social media sites for local businesses and particularly good for local events. A must use for any business.',
  'We help with content strategy, content creation, content posting and engagement analytics.',
  'Twitter Support\nLove it or hate it, this social network is used by presidents and grandmothers across the US.',
  'It is likely necessary for your small business strategy as well.',
  'LinkedIn Support\nAre you trying to reach a specific market?',
  'Are you doing Business to Business?',
  'LinkedIn is your best targeted social network to find and engage critical decision makers',
]

export default function HistoricalPage() {
  return (
    <main className="wp-migration legacy-page">
      <section className="section">
        <p className="eyebrow">Historical WordPress content</p>
        <h1>Social Media Management</h1>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </main>
  )
}

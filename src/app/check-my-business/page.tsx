export const metadata = {
  title: 'Check My Business',
}

const paragraphs = [
  'You never know till you check.',
  'Enter your information at the link below and get a free report about how your business looks online today.',
  'Then let our team improve it for you or help you improve it yourself.',
  'Scan My Businesses Online Reputation',
]

export default function HistoricalPage() {
  return (
    <main className="wp-migration legacy-page">
      <section className="section">
        <p className="eyebrow">Historical WordPress content</p>
        <h1>Check My Business</h1>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </main>
  )
}

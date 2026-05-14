export const metadata = {
  title: 'Reputation Management',
}

const paragraphs = [
  'Online Reputation Management\nCustomers view your online ratings and rankings both actively and passively anytime they search for a product or service.',
  'Bad reviews and glitches in your systems send the wrong message about your business.',
  'Let Focus On Free help you keep track of your online reputation.',
  'We provide you with review alerts, review generation, and brand analytics so you always stay ahead.',
  'Review Alerts\nMake sure all the right people in your company know when a positive or negative review comes in.',
  'This allows you to quickly resolve the issues if negative and learn from the positive feedback to grow your happy customer base.',
  'Review Generation\nDon’t just sit back and hope for reviews.',
  'We can engage your current and former customers by your website, email, text, and social media to review your products and services.',
  'Brand Analytics \nIts not enough to have a good reputation you also have to keep it while keeping pace with your competition.',
  'Let Focus On Free employer your company with the data on how you rank compared to your peers and ensure your always setting the pace.',
]

export default function HistoricalPage() {
  return (
    <main className="wp-migration legacy-page">
      <section className="section">
        <p className="eyebrow">Historical WordPress content</p>
        <h1>Reputation Management</h1>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </main>
  )
}

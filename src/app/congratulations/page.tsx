export const metadata = {
  title: 'Congratulations!!!',
}

const paragraphs = [
  'You have successfully completed the business scan.',
  'If you are ready for our team to take over and start fixing your listings please contact us by phone (520-222-8104) or email clarkemoyer@focus-on-free.com anytime.',
  'Have not run an scan?',
  'If you found this page and have not run a scan of your business yet please run one now and get your free report',
]

export default function HistoricalPage() {
  return (
    <main className="wp-migration legacy-page">
      <section className="section">
        <p className="eyebrow">Historical WordPress content</p>
        <h1>Congratulations!!!</h1>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </main>
  )
}

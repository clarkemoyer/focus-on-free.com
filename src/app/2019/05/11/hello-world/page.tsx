export const metadata = {
  title: 'Hello world!',
}

const paragraphs = [
  'Welcome to WordPress. This is your first post. Edit or delete it, then start writing!',
]

export default function HistoricalPage() {
  return (
    <main className="wp-migration legacy-page">
      <section className="section">
        <p className="eyebrow">Historical WordPress content</p>
        <h1>Hello world!</h1>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </main>
  )
}

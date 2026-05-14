export const metadata = {
  title: 'Technology Consulting',
}

const paragraphs = [
  'Your Company’s Independent IT Advocate\nProviding unbiased advice about the current and planned systems your company uses.',
  'We provide you with honest feedback, both good and bad.',
  'Purchase and Procurement Support\nFocus on Free helps you buy the right products at the right price for your company.',
  'Let us help you negotiate with the tech companies and get you the best deals.',
  'Services and Contract Review\nFocus on Free helps you with what you already have.',
  'Whether by helping you utilize your current IT systems to their fullest potential, or getting you out of a bad service contract that is not supporting you business needs.',
  'Buy or Build Decision Support\nDon’t buy custom!',
  'Focus on Free helps you determine if you need to pay extra for a provider to build you a customized solution, or whether you can use a current market solution at a fraction of the cost\nCall  Focus On Free  today to get started 520-222-8104 .',
]

export default function HistoricalPage() {
  return (
    <main className="wp-migration legacy-page">
      <section className="section">
        <p className="eyebrow">Historical WordPress content</p>
        <h1>Technology Consulting</h1>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </main>
  )
}

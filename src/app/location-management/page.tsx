export const metadata = {
  title: 'Location Management',
}

const paragraphs = [
  'Local Listings\nHelp your customers find your business by managing your pins on services like Google Maps, Bing Maps, Yelp, and over 35 other business directory sites.',
  'Focus on Free will help you setup and manage listing software which will take the hassle out of keeping all of your information up to date across a wide range of platforms to ensure maximum business exposure.',
  'Local Marketing Research\nLet us research and price the costs of every type of local marketing available to your company so that you can choose the service that make sense for your business.',
  'This includes Digital and non-digital marketing.',
  'Campaign and Promotion Management\nLet us be your independent advocate for all of your marketing campaigns, including Google ads, Facebook ads, and any other local marketing services\nAppointment Booking and Contact Management Support\nLet us help you set up your systems to put you in front of customers without the administrative hurdles and technology challenges',
]

export default function HistoricalPage() {
  return (
    <main className="wp-migration legacy-page">
      <section className="section">
        <p className="eyebrow">Historical WordPress content</p>
        <h1>Location Management</h1>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </main>
  )
}

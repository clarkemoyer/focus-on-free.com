import { assetPath } from '@/lib/assetPath'

const services = [
  {
    title: 'Technology Consulting',
    image:
      '/wp-content/uploads/2019/06/BusinessPeopleAnalyzingDataTogetherTeamworkPlanningStartUpNewProject-800x400.jpg',
    description:
      'Independent reviews of your current systems, software choices, and practical technology roadmap.',
    href: '/technology-consulting/',
    cta: 'Review Technology Stack',
  },
  {
    title: 'Location Management',
    image: '/wp-content/uploads/2019/06/LaptopTabletAnalysis-800x400.jpg',
    description:
      'Improve local listings, map visibility, and business profile consistency across common platforms.',
    href: '/location-management/',
    cta: 'Improve Local Presence',
  },
  {
    title: 'Reputation Management',
    image: '/wp-content/uploads/2019/06/BusinessManHolographicGraphs-800x400.jpg',
    description:
      'Build reputation monitoring habits and respond to customer feedback with a steady, professional voice.',
    href: '/reputation-management/',
    cta: 'Protect Your Reputation',
  },
  {
    title: 'Social Media Management',
    image:
      '/wp-content/uploads/2019/06/IconInternetworldhandsbusinessmannetworktechnologyCommunications-800x400.jpg',
    description:
      'Plan social outreach that supports your real business goals without adding unnecessary complexity.',
    href: '/social-media/',
    cta: 'Plan Social Outreach',
  },
]

export default function Home() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
(function () {
  var params = new URLSearchParams(window.location.search);
  var pMap = new Map([['1','/hello-world/']]);
  var pageMap = new Map([['20','/social-media/'],['22','/technology-consulting/'],['140','/location-management/'],['159','/reputation-management/'],['173','/check-my-business/'],['176','/congratulations/']]);
  var target = pMap.get(params.get('p')) || pageMap.get(params.get('page_id'));
  if (target && window.location.pathname === '/') {
    window.location.replace(target);
  }
})();
          `,
        }}
      />
      <main className="wp-migration consulting">
        <a className="skip-link" href="#services">
          Skip to main content
        </a>
        <header className="site-header">
          <a className="logo text" href="#top">
            Focus on Free
          </a>
          <p>Your Company&apos;s Independent IT Advocate</p>
          <nav>
            <a href="#top">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
          </nav>
          <button aria-label="Open menu">☰</button>
        </header>
        <section id="top" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Independent IT advocacy</p>
            <h1>Focus on Free</h1>
            <h2>Your Company&apos;s Independent IT Advocate</h2>
            <p>
              Practical, unbiased guidance for the systems your company uses today and the low-cost
              improvements worth planning next.
            </p>
            <div className="button-row">
              <a className="button primary" href="#contact">
                Schedule a Call
              </a>
              <a className="button ghost" href="#about">
                Learn About Us
              </a>
            </div>
          </div>
        </section>
        <section id="services" className="section services-section">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h3>Independent IT Advisory Services</h3>
            <p>
              Four practical ways to improve visibility, operations, and customer trust without
              buying more technology than you need.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} aria-label={service.title}>
                <img src={assetPath(service.image)} alt={service.title} />
                <div className="service-card-body">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <a className="card-link" href={service.href}>
                    {service.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="about" className="feature">
          <div>
            <p className="eyebrow">About Us</p>
            <h3>Cost-conscious technology guidance before you spend.</h3>
            <p>
              Focus on Free is an independent IT Consulting firm that helps your company improve its
              bottom line by aligning you with the lowest-cost, if not free, sources first. These
              include Google Business Profiles, Facebook, LinkedIn, and other common services that
              can improve outreach and engagement.
            </p>
            <ul className="trust-list">
              <li>Independent IT guidance before vendor commitments</li>
              <li>Practical recommendations for small teams and lean budgets</li>
              <li>Location, reputation, and social-media support with business outcomes in mind</li>
            </ul>
          </div>
          <img
            src={assetPath(
              '/wp-content/uploads/2019/06/BusinessPeopleAnalyzingDataTogetherTeamworkPlanningStartUpNewProject-800x400.jpg'
            )}
            alt="Consulting team reviewing business technology data"
          />
        </section>
        <section id="contact" className="contact">
          <div className="contact-card">
            <p className="eyebrow">Schedule an Appointment</p>
            <h3>Tell us what you need help with and we&apos;ll follow up.</h3>
            <p>
              Share the business area you want to improve. We&apos;ll help you sort through
              practical, low-cost options before you commit budget to tools or vendors.
            </p>
            <div className="contact-actions">
              <a className="button primary" href="mailto:info@focus-on-free.com">
                Email Focus on Free
              </a>
              <a className="button ghost dark" href="#services">
                Compare Services
              </a>
            </div>
            <p className="privacy-note">
              No embedded scheduler or blank widget here — just a clear first contact path.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

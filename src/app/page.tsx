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
            <h1>Focus on Free</h1>
            <h2>Your Company&apos;s Independent IT Advocate</h2>
            <p>
              Providing unbiased advice about the current and planned systems your company uses. We
              provide you with honest feedback, both good and bad.
            </p>
            <a className="button" href="#contact">
              Schedule a Call
            </a>
            <a className="button ghost" href="#about">
              Learn About Us
            </a>
          </div>
        </section>
        <section id="services" className="section">
          <h3>Main Content</h3>
          <div className="service-grid">
            <article>
              <img
                src="/wp-content/uploads/2019/06/BusinessPeopleAnalyzingDataTogetherTeamworkPlanningStartUpNewProject-800x400.jpg"
                alt="Technology Consulting"
              />
              <h4>Technology Consulting</h4>
            </article>
            <article>
              <img
                src="/wp-content/uploads/2019/06/LaptopTabletAnalysis-800x400.jpg"
                alt="Location Management"
              />
              <h4>Location Management</h4>
            </article>
            <article>
              <img
                src="/wp-content/uploads/2019/06/BusinessManHolographicGraphs-800x400.jpg"
                alt="Reputation Management"
              />
              <h4>Reputation Management</h4>
            </article>
            <article>
              <img
                src="/wp-content/uploads/2019/06/IconInternetworldhandsbusinessmannetworktechnologyCommunications-800x400.jpg"
                alt="Social Media Management"
              />
              <h4>Social Media Management</h4>
            </article>
          </div>
        </section>
        <section id="about" className="feature">
          <div>
            <h3>About Us</h3>
            <p>
              Focus on Free is an independent IT Consulting firm which helps your company improve
              its bottom line by aligning you with the lowest cost, if not free, sources first.
              These include services such as Google My Business Listings, Facebook/LinkedIn, and
              other common services which companies can use to improve their outreach and
              engagement.
            </p>
            <p>
              As your company&apos;s independent information technology advocate; Focus on Free
              provides you with important feedback on how your company is currently operating, both
              positvely and negatively, and helps you plan and implement systems which engage your
              customers, improve your profit, and your business run smoothly.
            </p>
          </div>
          <img
            src="/wp-content/uploads/2019/06/BusinessPeopleAnalyzingDataTogetherTeamworkPlanningStartUpNewProject-800x400.jpg"
            alt="Consulting team"
          />
        </section>
        <section id="contact" className="contact">
          <h3>Schedule an Appointment</h3>
          <a className="button" href="mailto:info@focus-on-free.com">
            Contact Us
          </a>
        </section>
      </main>
    </>
  )
}

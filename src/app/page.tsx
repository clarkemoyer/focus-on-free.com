export default function Home() {
  return (
    <main className="wp-migration consulting">
      <header className="site-header">
        <a className="logo text" href="#top">
          Focus on Free
        </a>
        <nav>
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
            Focused technology and business consulting for organizations that need an independent
            advocate.
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
              src="https://focus-on-free.com/wp-content/uploads/2019/06/BusinessPeopleAnalyzingDataTogetherTeamworkPlanningStartUpNewProject-800x400.jpg"
              alt="Technology Consulting"
            />
            <h4>Technology Consulting</h4>
            <p>
              Independent IT guidance for organizations that need practical advice without vendor
              pressure.
            </p>
          </article>
          <article>
            <img
              src="https://focus-on-free.com/wp-content/uploads/2019/06/LaptopTabletAnalysis-800x400.jpg"
              alt="Location Management"
            />
            <h4>Location Management</h4>
            <p>
              Help keeping location listings accurate, consistent, and easier for customers to find.
            </p>
          </article>
          <article>
            <img
              src="https://focus-on-free.com/wp-content/uploads/2019/06/BusinessManHolographicGraphs-800x400.jpg"
              alt="Reputation Management"
            />
            <h4>Reputation Management</h4>
            <p>
              Support monitoring and improving the way your organization appears across the web.
            </p>
          </article>
          <article>
            <img
              src="https://focus-on-free.com/wp-content/uploads/2019/06/IconInternetworldhandsbusinessmannetworktechnologyCommunications-800x400.jpg"
              alt="Social Media Management"
            />
            <h4>Social Media Management</h4>
            <p>
              Practical planning and management for social channels that support your business
              goals.
            </p>
          </article>
        </div>
      </section>
      <section id="about" className="feature">
        <div>
          <h3>About Us</h3>
          <p>
            Focus on Free provides practical guidance around technology consulting, location
            management, reputation management, and social media management.
          </p>
        </div>
        <img
          src="https://focus-on-free.com/wp-content/uploads/2019/06/BusinessPeopleAnalyzingDataTogetherTeamworkPlanningStartUpNewProject-800x400.jpg"
          alt="Consulting team"
        />
      </section>
      <section id="contact" className="contact">
        <h3>Schedule an Appointment</h3>
        <p>Start with a focused call about your organization and your goals.</p>
        <a className="button" href="mailto:info@focus-on-free.com">
          Contact Us
        </a>
      </section>
    </main>
  )
}

import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const experience = [
  {
    role: 'Community Manager',
    company: 'Experiment 9',
    period: 'Nov 2025 - Jul 2026',
    summary:
      'Led daily community communication, translated project updates into clear member-facing content, and kept feedback flowing back to the team.',
    points: [
      'Maintained an active, welcoming environment across community channels.',
      'Strengthened engagement through consistent updates, interactive activities, and direct support.',
    ],
  },
  {
    role: 'Core Collaboration Manager & Project Advisor',
    company: 'Web3 Delivery',
    period: 'Nov 2022 - Nov 2025',
    summary:
      'Connected Web3 teams and communities, advised projects on outreach, and coordinated cross-functional collaboration from first contact through execution.',
    points: [
      'Managed collaboration across 30+ communities and developed outreach to 50+ organizations.',
      'Monitored contributor activity, reviewed feedback, and recommended process improvements.',
    ],
  },
  {
    role: 'Community Moderator',
    company: 'The New Resistance',
    period: 'Mar 2021 - Mar 2023',
    link: 'https://x.com/TNR_NFT_GAME',
    summary:
      'Supported a play-to-earn gaming and NFT community through events, member care, referrals, and cross-team community programs.',
    points: [
      'Planned and delivered 5+ community events.',
      'Helped build a referral program that brought 500+ new members into the community.',
    ],
  },
  {
    role: 'Chemistry Teacher',
    company: 'Cahaya Cendikia Tuition Center',
    period: 'Apr 2019 - Oct 2022',
    summary:
      'Created interactive lessons and individualized feedback for senior high school students while collaborating with colleagues on learning plans.',
    points: [],
  },
  {
    role: 'Mathematics Teacher',
    company: 'Toyota Indonesia Community Academy (AKTI)',
    period: 'Jul 2019 - Jun 2022',
    summary:
      'Mentored college students, researched learning behavior, and integrated technology to improve engagement and critical thinking.',
    points: [],
  },
];

const engagements = [
  {
    role: 'Collaboration Manager',
    project: '3D FrankenPunks',
    link: 'https://x.com/3dFrankenPunks',
    description:
      'Identified aligned communities, opened partnership conversations, and coordinated collaboration details between teams.',
  },
  {
    role: 'Community Manager',
    project: 'Glyph Tales',
    link: 'https://x.com/GlyphTales',
    description:
      'Supported day-to-day community communication, member engagement, feedback collection, and project announcements.',
  },
  {
    role: 'Moderator',
    project: 'Kizuna',
    link: 'https://x.com/kizunamoe',
    description:
      'Helped maintain a safe, welcoming community, answered member questions, and escalated feedback to the project team.',
  },
  {
    role: 'Collaboration Manager',
    project: 'Saplings NFT',
    link: 'https://x.com/saplingsNFT',
    description:
      'Built relationships with potential partners and supported mutually valuable community activations.',
  },
  {
    role: 'Collaboration Manager',
    project: '8bit Arcade',
    link: 'https://x.com/8bit_arcade1',
    description:
      'Managed outreach, partner communication, and the handoff of collaboration plans into community activities.',
  },
  {
    role: 'Moderator',
    project: 'Chain Scouts',
    link: 'https://x.com/ChainScouts',
    description:
      'Moderated conversations, reinforced community guidelines, and helped members access timely project information.',
  },
  {
    role: 'Moderator',
    project: 'XYON Network',
    link: 'https://x.com/XYONnetwork',
    description:
      'Supported community operations through responsive member assistance, healthy discussion, and feedback reporting.',
  },
];

const publications = [
  {
    year: '2023',
    title:
      'Acceptance Analysis of Customer Info Application PDAM Indramayu Using the Technology Acceptance Model',
    link: 'https://drive.google.com/file/d/1WuDzHleulBei9VCZJswROGkbS17L4xlC/view?usp=sharing',
  },
  {
    year: '2019',
    title:
      'HMI Touchscreen and Droid Programming on a SCADA and IoT-Based Analog PLC Training Module',
    link: 'https://drive.google.com/file/d/17awuzVfcXTaTUsGC8aeYb83nE2QRKjgD/view?usp=sharing',
  },
  {
    year: '2019',
    title: 'Server Maintenance of the Java and Bali Master Station Systems',
  },
];

const skills = [
  'Community strategy',
  'Collaboration outreach',
  'Partnership management',
  'Event planning',
  'Member support',
  'Feedback analysis',
  'Conflict resolution',
  'Project advising',
  'SQL & database design',
  'Python',
  'Figma',
  'Microsoft Excel',
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Mirza Upa Orvala, home">
          MUO<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-contact" href="mailto:kakhamirza@gmail.com">
          Let&apos;s talk <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="availability">
            <span /> Community & collaboration professional
          </p>
          <h1>
            I turn audiences into
            <span> active communities.</span>
          </h1>
          <p className="hero-intro">
            I&apos;m Mirza Upa Orvala, a Web3 community manager, collaboration
            specialist, and project advisor who connects people, partnerships,
            and ideas that move communities forward.
          </p>
          <div className="hero-actions">
            <a
              className={cn(buttonVariants({ size: 'lg' }), 'primary-action')}
              href="mailto:kakhamirza@gmail.com"
            >
              Start a conversation <ArrowUpRight aria-hidden="true" />
            </a>
            <a
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'secondary-action')}
              href="/Mirza-Upa-Orvala-CV.pdf"
              download
            >
              <Download aria-hidden="true" /> Download CV
            </a>
          </div>
        </div>

        <aside className="hero-proof" aria-label="Career highlights">
          <div className="proof-topline">
            <Sparkles aria-hidden="true" /> Career highlights
          </div>
          <div className="metric-grid">
            <div><strong>50+</strong><span>community organizations reached</span></div>
            <div><strong>30+</strong><span>communities coordinated</span></div>
            <div><strong>500+</strong><span>members driven by referrals</span></div>
            <div><strong>5+</strong><span>community events delivered</span></div>
          </div>
          <a href="#experience" className="proof-link">
            Explore my experience <ArrowDown aria-hidden="true" />
          </a>
        </aside>
      </section>

      <section className="trust-strip" aria-label="Core strengths">
        {['Community operations', 'Web3 partnerships', 'Project advising', 'Education'].map((item) => (
          <div key={item}><CheckCircle2 aria-hidden="true" /> {item}</div>
        ))}
      </section>

      <section className="section shell" id="experience">
        <SectionHeading
          eyebrow="Experience"
          title="Connecting people to progress."
          description="A career spanning Web3 communities, collaboration strategy, project support, and education."
        />
        <div className="experience-list">
          {experience.map((item, index) => (
            <article className="experience-item" key={`${item.company}-${item.role}`}>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-main">
                <div className="experience-title-row">
                  <div>
                    <h3>{item.role}</h3>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.company} <ArrowUpRight aria-hidden="true" />
                      </a>
                    ) : (
                      <p className="company">{item.company}</p>
                    )}
                  </div>
                  <time>{item.period}</time>
                </div>
                <p className="experience-summary">{item.summary}</p>
                {item.points.length ? (
                  <ul>
                    {item.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section engagements-section" id="work">
        <div className="shell">
          <SectionHeading
            eyebrow="Selected Web3 engagements"
            title="Trusted across different communities."
            description="Additional moderator, community, and collaboration roles. Dates are intentionally omitted where records are unavailable."
          />
          <div className="engagement-grid">
            {engagements.map((item) => (
              <a className="engagement-card" href={item.link} target="_blank" rel="noreferrer" key={item.project}>
                <div>
                  <span>{item.role}</span>
                  <ArrowUpRight aria-hidden="true" />
                </div>
                <h3>{item.project}</h3>
                <p>{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell project-section">
        <SectionHeading eyebrow="Featured project" title="Building beyond community." />
        <article className="project-card">
          <div className="project-number">01</div>
          <div className="project-content">
            <p className="eyebrow">Creator & web developer</p>
            <h3>Crayon Rush</h3>
            <p>
              A responsive Web3 art and browser-game platform with daily
              leaderboards, Rush Points, and on-chain achievement tracking.
            </p>
            <a href="https://crayonrush.fun" target="_blank" rel="noreferrer">
              Visit crayonrush.fun <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="project-tags" aria-label="Project capabilities">
            <span>Web development</span><span>Web3</span><span>Community product</span>
          </div>
        </article>
      </section>

      <section className="section shell about-grid" id="about">
        <div>
          <SectionHeading eyebrow="About" title="Technical foundation. Human focus." />
          <p className="about-copy">
            My background combines Information Systems, electrical engineering,
            teaching, and Web3. That range helps me translate technical ideas,
            understand different audiences, and create clear paths from community
            feedback to practical action.
          </p>
          <div className="language-row">
            <span>Indonesian <b>Native</b></span>
            <span>English <b>Upper-intermediate · TOEFL ITP 557</b></span>
          </div>
        </div>
        <div className="skill-panel">
          <p className="eyebrow">Capabilities</p>
          <div className="skill-list">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="section shell credentials-grid">
        <div className="credentials-block">
          <div className="mini-heading"><GraduationCap aria-hidden="true" /><span>Education</span></div>
          <article>
            <time>2020 - 2023</time>
            <h3>Bachelor&apos;s in Information Systems</h3>
            <p>Bina Nusantara University · GPA 3.62/4</p>
          </article>
          <article>
            <time>2016 - 2019</time>
            <h3>Associate Degree in Electrical Engineering</h3>
            <p>State Polytechnic of Jakarta · GPA 3.32/4</p>
          </article>
        </div>
        <div className="credentials-block">
          <div className="mini-heading"><BookOpen aria-hidden="true" /><span>Publications</span></div>
          {publications.map((publication) => (
            <article key={publication.title}>
              <time>{publication.year}</time>
              {publication.link ? (
                <h3><a href={publication.link} target="_blank" rel="noreferrer">{publication.title}<ArrowUpRight aria-hidden="true" /></a></h3>
              ) : <h3>{publication.title}</h3>}
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <div className="shell contact-inner">
          <div>
            <p className="eyebrow">Let&apos;s work together</p>
            <h2>Have a community to grow?</h2>
            <p>I&apos;d like to hear what you&apos;re building and where your community needs to go next.</p>
          </div>
          <a className="contact-circle" href="mailto:kakhamirza@gmail.com" aria-label="Email Mirza">
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-identity">
          <strong>Mirza Upa Orvala</strong>
          <span><MapPin aria-hidden="true" /> Indonesia</span>
        </div>
        <div className="footer-links">
          <a href="mailto:kakhamirza@gmail.com"><Mail aria-hidden="true" /> Email</a>
          <a href="tel:+6285959331998"><Phone aria-hidden="true" /> +62 859 5933 1998</a>
          <a href="https://www.linkedin.com/in/mirza-upa-orvala-898593272/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/kakhamirza-cloud/" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <p className="footer-note"><BriefcaseBusiness aria-hidden="true" /> Community · Collaboration · Web3</p>
      </footer>
    </main>
  );
}

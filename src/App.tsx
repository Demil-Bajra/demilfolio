import { useEffect, useState, type ComponentType, type FormEvent, type ReactNode } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CircleAlert,
  Code2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MoveUpRight,
  Send,
  Sparkles,
  Terminal,
  Wrench,
  X,
} from 'lucide-react';
import { personalLinks } from './personal';

type IconType = ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormState = { name: '', email: '', subject: '', message: '' };

function GithubMark({ size = 17 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" /></svg>;
}

function LinkedinMark({ size = 17 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M5.12 3.5A2.62 2.62 0 1 1 5.1 8.74a2.62 2.62 0 0 1 .02-5.24ZM2.75 9.8h4.73V21H2.75V9.8Zm7.7 0h4.54v1.53h.06c.63-1.2 2.17-2.47 4.47-2.47 4.78 0 5.66 3.15 5.66 7.25V21h-4.73v-4.34c0-1.04-.02-2.38-1.45-2.38-1.45 0-1.67 1.13-1.67 2.3V21h-4.73V9.8Z" /></svg>;
}

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'journey', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'notes', label: 'Notes' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' },
];

const techGroups: { title: string; eyebrow: string; items: string[]; icon: IconType }[] = [
  {
    eyebrow: '01 / language',
    title: 'Languages',
    items: ['Python', 'C'],
    icon: Code2,
  },
  {
    eyebrow: '02 / workflow',
    title: 'Development tools',
    items: ['Visual Studio Code', 'Git', 'GitHub'],
    icon: Wrench,
  },
  {
    eyebrow: '03 / in progress',
    title: 'Currently exploring',
    items: ['Web development', 'AI-assisted development', 'Software engineering fundamentals'],
    icon: Sparkles,
  },
];

const journey = [
  {
    label: 'current',
    title: 'BCA Student',
    org: 'Tribhuvan University',
    description: 'Studying computer applications while developing programming fundamentals and exploring practical software development.',
    tags: ['BCA', 'Fundamentals'],
  },
  {
    label: 'learning',
    title: 'Python Programming',
    description: 'Practicing variables, data types, operators, conditional statements, loops, strings, lists, functions, and other programming fundamentals.',
    tags: ['Python', 'Practice'],
  },
  {
    label: 'learning',
    title: 'C Programming',
    description: 'Studying foundational programming concepts as part of my BCA coursework.',
    tags: ['C', 'Coursework'],
  },
  {
    label: 'exploration',
    title: 'AI-Assisted Development',
    description: 'Experimenting with AI coding tools to understand how ideas can be transformed into functional prototypes.',
    tags: ['AI tools', 'Prototyping'],
  },
  {
    label: 'future direction',
    title: 'Software Development Projects',
    description: 'Working toward building increasingly useful applications, improving problem-solving ability, and developing a public portfolio of my work.',
    tags: ['Building', 'Next steps'],
  },
];

const projects = [
  {
    number: '01',
    title: 'FocusFlow',
    category: 'Productivity dashboard',
    description: 'A productivity dashboard concept designed to help users organize their work and maintain focus.',
    tech: ['Web app', 'Productivity'],
    href: 'https://focus-flow-productivity-dashboard--bajracharyademi.replit.app/',
    status: 'live project',
    variant: 'focus',
  },
  {
    number: '02',
    title: 'Python Practice Collection',
    category: 'Programming',
    description: 'A growing collection of small Python programs developed while learning programming fundamentals.',
    tech: ['Python', 'Practice'],
    status: 'learning archive',
    variant: 'python',
  },
  {
    number: '03',
    title: 'Personal Portfolio',
    category: 'Web development',
    description: 'A personal website designed to document my learning journey, present my projects, and connect with other developers.',
    tech: ['React', 'Design'],
    status: 'under development',
    variant: 'portfolio',
  },
];

function SectionIntro({ index, eyebrow, title, children }: { index: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <div className="section-intro">
      <div className="section-index">{index}</div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div className="section-intro-copy">{children}</div>
    </div>
  );
}

function ProjectPreview({ variant }: { variant: string }) {
  if (variant === 'focus') {
    return (
      <div className="project-preview preview-focus" aria-label="Abstract preview of a productivity dashboard">
        <div className="preview-window-bar"><span /><span /><span /><b>focusflow / today</b></div>
        <div className="focus-layout">
          <div className="focus-sidebar"><i /><i /><i /><i /></div>
          <div className="focus-content">
            <div className="focus-heading"><span>Good morning, Demil</span><small>Tuesday · 09:41</small></div>
            <div className="focus-stats"><b>04</b><b>02</b><b>78%</b></div>
            <div className="focus-lines"><i /><i /><i /><i /></div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'python') {
    return (
      <div className="project-preview preview-code" aria-label="Abstract preview of Python practice code">
        <div className="code-line"><span>01</span><i>def</i> calculate_total(items):</div>
        <div className="code-line"><span>02</span> &nbsp; &nbsp;total = <em>sum</em>(items)</div>
        <div className="code-line"><span>03</span> &nbsp; &nbsp;<i>return</i> total</div>
        <div className="code-line faded"><span>04</span></div>
        <div className="code-line"><span>05</span>print(calculate_total(items))</div>
        <div className="code-cursor" />
      </div>
    );
  }

  return (
    <div className="project-preview preview-portfolio" aria-label="Abstract preview of a portfolio layout">
      <div className="portfolio-mark">DB<span> / portfolio</span></div>
      <div className="portfolio-rule" />
      <div className="portfolio-title">Learning<br /><strong>continuously.</strong></div>
      <div className="portfolio-footer"><span>about</span><span>projects</span><span>contact</span></div>
    </div>
  );
}

function ProjectCard({ project, featured = false }: { project: (typeof projects)[number]; featured?: boolean }) {
  return (
    <article className={`project-card ${featured ? 'project-featured' : ''}`}>
      <ProjectPreview variant={project.variant} />
      <div className="project-card-body">
        <div className="project-card-topline"><span>{project.number}</span><span>{project.category}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-card-bottom">
          <div className="tag-list">{project.tech.map((tag) => <span key={tag}>{tag}</span>)}</div>
          {project.href ? (
            <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
              View live project <ArrowUpRight size={15} strokeWidth={1.8} />
            </a>
          ) : (
            <span className="project-status"><span className="status-dot" />{project.status}</span>
          )}
        </div>
      </div>
    </article>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [formNotice, setFormNotice] = useState('');

  useEffect(() => {
    const ids = ['home', ...navItems.map((item) => item.id)];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-22% 0px -68% 0px', threshold: [0.05, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const scrollTo = (id: string) => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(id)?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  const updateForm = (key: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: '' }));
    setFormNotice('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = 'Please add your name.';
    if (!form.email.trim()) nextErrors.email = 'Please add your email address.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Please use a valid email address.';
    if (!form.subject.trim()) nextErrors.subject = 'Please add a subject.';
    if (!form.message.trim()) nextErrors.message = 'Please add a short message.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setFormNotice('Your details are valid, but this form is not connected to a backend yet. Please use the email link below to send your message.');
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-inner">
          <button className="brand" onClick={() => scrollTo('home')} aria-label="Go to home">
            <span className="brand-mark">DB</span>
            <span className="brand-name">Demil Bajra</span>
          </button>
          <nav id="primary-navigation" className={`main-nav ${mobileOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
            {navItems.map((item) => (
              <button key={item.id} className={activeSection === item.id ? 'active' : ''} onClick={() => scrollTo(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>
          <button className="menu-toggle" onClick={() => setMobileOpen((current) => !current)} aria-expanded={mobileOpen} aria-controls="primary-navigation" aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section container section-anchor">
          <div className="hero-topline"><span>01 — introduction</span><span>Based in Kathmandu / Nepal</span></div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow accent-eyebrow"><span className="pulse-dot" />BCA student · aspiring software developer · technology enthusiast</p>
              <h1>Building a<br /><em>foundation</em><br />for what&apos;s next.</h1>
              <p className="hero-description">I&apos;m a BCA student from Nepal passionate about programming, problem-solving, and building useful software. I&apos;m currently strengthening my programming fundamentals, learning Python and C, and exploring how technology can turn ideas into practical digital products.</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => scrollTo('projects')}>View my work <ArrowRight size={17} /></button>
                <button className="button button-quiet" onClick={() => scrollTo('contact')}>Contact me <ArrowUpRight size={16} /></button>
              </div>
            </div>
            <div className="hero-aside">
              <div className="hero-aside-number">/ 01</div>
              <div className="hero-aside-line" />
              <p>Learning continuously.<br /><strong>Building thoughtfully.</strong></p>
              <div className="hero-aside-links">
                <span>Find me online</span>
                <a className="social-inline" href={personalLinks.github} target="_blank" rel="noopener noreferrer"><GithubMark size={13} /> GitHub</a>
                <a className="social-inline" href={personalLinks.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinMark size={13} /> LinkedIn</a>
              </div>
            </div>
          </div>
          <button className="scroll-cue" onClick={() => scrollTo('about')} aria-label="Scroll to about section"><span>Scroll to explore</span><ArrowDown size={16} /></button>
        </section>

        <section id="about" className="content-section section-anchor">
          <div className="container">
            <SectionIntro index="02" eyebrow="A little about me" title="About Me">
              <p>I&apos;m currently pursuing a Bachelor of Computer Applications from Tribhuvan University. My journey into technology is driven by curiosity about how software works and how digital products are built.</p>
              <p>I&apos;m developing my programming skills through coursework, personal experiments, and beginner-friendly projects. I&apos;m particularly interested in software development, artificial intelligence, and solving practical problems with technology.</p>
            </SectionIntro>
            <div className="about-lower">
              <p className="large-statement">Strong fundamentals first.<br /><span>Then, better things.</span></p>
              <div className="principles-grid">
                <div className="principle-card"><span>01</span><h3>Problem solving</h3><p>Learning to approach programming challenges logically.</p></div>
                <div className="principle-card"><span>02</span><h3>Building</h3><p>Applying concepts through small, practical projects.</p></div>
                <div className="principle-card"><span>03</span><h3>Continuous learning</h3><p>Exploring technologies and improving my skills over time.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="technologies" className="content-section section-anchor section-surface">
          <div className="container">
            <SectionIntro index="03" eyebrow="The tools in progress" title="Technologies I Work With">
              <p>These are the technologies and tools I&apos;m learning and exploring as I develop my programming skills.</p>
            </SectionIntro>
            <div className="tech-grid">
              {techGroups.map((group) => {
                const Icon = group.icon;
                return <article className="tech-card" key={group.title}>
                  <div className="tech-card-top"><Icon size={20} strokeWidth={1.5} /><span>{group.eyebrow}</span></div>
                  <h3>{group.title}</h3>
                  <ul>{group.items.map((item) => <li key={item}><span className="list-marker" />{item}</li>)}</ul>
                </article>;
              })}
            </div>
            <div className="tech-footnote"><Terminal size={16} /><span>Learning interests, not proficiency claims — this list will grow with the work.</span></div>
          </div>
        </section>

        <section id="journey" className="content-section section-anchor">
          <div className="container">
            <SectionIntro index="04" eyebrow="The process so far" title="My Journey So Far">
              <p>Every project and every new concept is part of the process of becoming a better developer.</p>
            </SectionIntro>
            <div className="timeline">
              {journey.map((item, index) => <article className="timeline-item" key={item.title}>
                <div className="timeline-rail"><span className="timeline-node">{String(index + 1).padStart(2, '0')}</span>{index < journey.length - 1 && <span className="timeline-line" />}</div>
                <div className="timeline-content">
                  <div className="timeline-meta"><span>{item.label}</span><span>in progress</span></div>
                  <h3>{item.title}</h3>
                  {item.org && <p className="timeline-org">{item.org}</p>}
                  <p className="timeline-description">{item.description}</p>
                  <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>)}
            </div>
          </div>
        </section>

        <section id="projects" className="content-section section-anchor section-surface">
          <div className="container">
            <SectionIntro index="05" eyebrow="Selected experiments" title="Selected Projects">
              <p>A collection of projects, experiments, and applications developed while learning and exploring technology.</p>
            </SectionIntro>
            <div className="projects-grid">
              <ProjectCard project={projects[0]} featured />
              <ProjectCard project={projects[1]} />
              <ProjectCard project={projects[2]} />
            </div>
          </div>
        </section>

        <section id="notes" className="content-section section-anchor">
          <div className="container">
            <SectionIntro index="06" eyebrow="Thinking in public" title="Articles & Learning Notes">
              <p>Notes and ideas from my journey through programming and technology.</p>
            </SectionIntro>
            <div className="empty-state">
              <div className="empty-state-icon"><BookOpen size={22} strokeWidth={1.4} /></div>
              <div><p className="eyebrow">No published notes yet</p><h3>A blank page is a good place to start.</h3><p>I&apos;m keeping space here for future notes on Python concepts, first projects, learning C, and experiments with AI coding tools.</p></div>
              <span className="empty-state-mark">/ soon</span>
            </div>
          </div>
        </section>

        <section id="github" className="content-section section-anchor section-surface">
          <div className="container">
            <SectionIntro index="07" eyebrow="Open source, later" title="GitHub Activity">
              <p>My coding activity and projects as I continue learning and building.</p>
            </SectionIntro>
            <div className="github-placeholder">
              <a className="github-placeholder-top github-profile-link" href={personalLinks.github} target="_blank" rel="noopener noreferrer" aria-label="Open Demil Bajra's GitHub profile"><GithubMark size={26} /><span>github.com / Demil-Bajra</span><span className="availability-tag">view profile</span></a>
              <div className="github-placeholder-note"><GithubMark size={22} /><span>Contribution data will appear here once a live data source is connected.</span></div>
              <div className="github-placeholder-bottom"><span>Account-specific statistics will appear here when a live data source is connected.</span><span className="placeholder-link">Live data ready later</span></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-anchor">
          <div className="container">
            <SectionIntro index="08" eyebrow="Start a conversation" title="Let&apos;s Connect">
              <p>I&apos;m always happy to connect with people who enjoy technology, creative problem-solving, and learning new things.</p>
            </SectionIntro>
            <div className="contact-grid">
              <div className="contact-details">
                <div className="contact-lead"><span className="contact-number">08 / 08</span><h3>Have a question,<br /><em>idea, or hello?</em></h3></div>
                <div className="contact-list">
                  <a className="contact-item contact-link-row" href={`mailto:${personalLinks.email}`} aria-label={`Email ${personalLinks.email}`}><span><Mail size={17} /><small>Email</small></span><strong>{personalLinks.email}</strong><ArrowUpRight size={15} /></a>
                  <a className="contact-item contact-link-row" href={personalLinks.github} target="_blank" rel="noopener noreferrer" aria-label="Open Demil Bajra's GitHub profile"><span><GithubMark size={17} /><small>GitHub</small></span><strong>{personalLinks.github.replace('https://', '')}</strong><ArrowUpRight size={15} /></a>
                  <a className="contact-item contact-link-row" href={personalLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Open Demil Bajra's LinkedIn profile"><span><LinkedinMark size={17} /><small>LinkedIn</small></span><strong>{personalLinks.linkedin.replace('https://', '')}</strong><ArrowUpRight size={15} /></a>
                  <div className="contact-item"><span><MapPin size={17} /><small>Location</small></span><strong>{personalLinks.location}</strong><span className="muted-arrow">↗</span></div>
                </div>
                <a className="email-alternative" href={`mailto:${personalLinks.email}?subject=Hello%20Demil`}>Prefer email? Write directly <ArrowUpRight size={15} /></a>
              </div>
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-header"><span>Drop me a message</span><MessageCircle size={18} strokeWidth={1.5} /></div>
                <div className="form-row">
                  <label>Name<input id="contact-name" type="text" value={form.name} onChange={(event) => updateForm('name', event.target.value)} placeholder="Your name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />{errors.name && <span id="name-error" className="field-error">{errors.name}</span>}</label>
                  <label>Email<input id="contact-email" type="email" value={form.email} onChange={(event) => updateForm('email', event.target.value)} placeholder="you@example.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />{errors.email && <span id="email-error" className="field-error">{errors.email}</span>}</label>
                </div>
                <label>Subject<input id="contact-subject" type="text" value={form.subject} onChange={(event) => updateForm('subject', event.target.value)} placeholder="What would you like to talk about?" aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'subject-error' : undefined} />{errors.subject && <span id="subject-error" className="field-error">{errors.subject}</span>}</label>
                <label>Message<textarea id="contact-message" rows={5} value={form.message} onChange={(event) => updateForm('message', event.target.value)} placeholder="A few words are enough." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />{errors.message && <span id="message-error" className="field-error">{errors.message}</span>}</label>
                {formNotice && <div className="form-notice" role="status"><CircleAlert size={16} />{formNotice}</div>}
                <button className="button button-primary form-submit" type="submit">Validate message <Send size={16} /></button>
                <p className="form-disclaimer">This form is a front-end preview. It does not send data until a backend is connected.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top"><button className="brand footer-brand" onClick={() => scrollTo('home')}><span className="brand-mark">DB</span><span className="brand-name">Demil Bajra</span></button><p>Built with curiosity and a commitment to continuous learning.</p><button className="back-top" onClick={() => scrollTo('home')}>Back to top <MoveUpRight size={15} /></button></div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Demil Bajra</span><span>BCA Student · Aspiring Software Developer</span><div><button onClick={() => scrollTo('about')}>About</button><button onClick={() => scrollTo('projects')}>Projects</button><button onClick={() => scrollTo('contact')}>Contact</button><a href={personalLinks.github} target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile"><GithubMark size={13} /></a><a href={personalLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn profile"><LinkedinMark size={13} /></a></div></div>
      </footer>
    </div>
  );
}

export default App;

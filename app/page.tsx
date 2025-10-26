"use client";

// Genc Ventures — Modern "techy" one-page site (dark theme, glassmorphism, neon accents)
// Notes:
// - No framer-motion to avoid runtime issues; pure Tailwind/UI components
// - Pitch Us button enhanced for high-contrast visibility (all instances now match)
// - Form submits directly to hello@gencventures.com via FormSubmit and redirects to /thanks

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Check,
  Mail,
  Menu as MenuIcon,
  X,
  Calendar,
  Filter,
  ArrowUpRight,
  Building2,
  Rocket,
} from "lucide-react";

// ---- Config ----
const FORM_ACTION = "https://formsubmit.co/hello@gencventures.com"; // direct-to-inbox

// ---- Portfolio data ----
const companies = [
  {
    name: "Serve Robotics",
    sector: "Autonomous Delivery",
    stage: "Growth",
    blurb: "Autonomous sidewalk delivery robots revolutionizing last-mile logistics.",
    url: "https://www.serverobotics.com/",
    logo: "SR",
  },
  {
    name: "Koala",
    sector: "Lead Management",
    stage: "Acquired",
    blurb: "Lead management platform (acquired by Cursor).",
    url: "https://cursor.com/",
    logo: "K",
  },
  {
    name: "Sundial",
    sector: "Data Analytics",
    stage: "Seed",
    blurb: "New-gen data analytics platform.",
    url: "https://sundial.so/",
    logo: "S",
  },
  {
    name: "MetaRouter",
    sector: "Real-Time Data Integration",
    stage: "Growth",
    blurb: "Leader in real-time data integration.",
    url: "https://www.metarouter.io/",
    logo: "MR",
  },
  {
    name: "Vizit",
    sector: "AI Content Optimization",
    stage: "Growth",
    blurb: "Pioneering AI-driven content optimization.",
    url: "https://www.vizit.com/",
    logo: "V",
  },
  {
    name: "GrowthLoop",
    sector: "Marketing AI",
    stage: "Growth",
    blurb: "Leading compound marketing AI engine.",
    url: "https://www.growthloop.com/",
    logo: "GL",
  },
  {
    name: "Lytics",
    sector: "Customer Data Platform",
    stage: "Acquired",
    blurb: "Engagement CDP (acquired by ContentStack).",
    url: "https://www.lytics.com/",
    logo: "L",
  },
  {
    name: "Cloverleaf",
    sector: "People Coaching AI",
    stage: "Growth",
    blurb: "Leading AI in automated people coaching.",
    url: "https://cloverleaf.me/",
    logo: "C",
  },
  {
    name: "TVScientific",
    sector: "CTV Performance Media",
    stage: "Growth",
    blurb: "Performance media platform for CTV.",
    url: "https://www.tvscientific.com/",
    logo: "TV",
  },
  {
    name: "Anchor",
    sector: "Cybersecurity",
    stage: "Seed",
    blurb: "Transforming cybersecurity for SMBs.",
    url: "https://anchorcybersecurity.com/",
    logo: "A",
  },
  {
    name: "Groupize",
    sector: "Enterprise Events",
    stage: "Growth",
    blurb: "One stop shop for enterprise events.",
    url: "https://groupize.ai/",
    logo: "GZ",
  },
  {
    name: "Akru",
    sector: "Real Estate (Blockchain)",
    stage: "Seed",
    blurb: "Transforming real estate investing with blockchain.",
    url: "https://akru.co/",
    logo: "AK",
  },
  {
    name: "Joot",
    sector: "Fintech Compliance",
    stage: "Growth",
    blurb: "Leading fintech for compliance.",
    url: "https://joot.io/",
    logo: "J",
  },
  {
    name: "Dart",
    sector: "Retail Tech",
    stage: "Seed",
    blurb: "Digitizing retail stores and shelves.",
    url: "",
    logo: "D",
  },
] as const;

const STAGES = [
  "All",
  "Pre-seed",
  "Seed",
  "Series A",
  "Series B+",
  "Growth",
  "Acquired",
] as const;

const SECTORS = [
  "All",
  "Autonomous Delivery",
  "Lead Management",
  "Data Analytics",
  "Real-Time Data Integration",
  "AI Content Optimization",
  "Marketing AI",
  "Customer Data Platform",
  "People Coaching AI",
  "CTV Performance Media",
  "Cybersecurity",
  "Enterprise Events",
  "Real Estate (Blockchain)",
  "Fintech Compliance",
  "Retail Tech",
] as const;

export default function GencVentures() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [stage, setStage] = useState<(typeof STAGES)[number]>("All");
  const [sector, setSector] = useState<(typeof SECTORS)[number]>("All");

  const filtered = useMemo(() => {
    return companies.filter((c) => {
      const byQ =
        !q ||
        [c.name, c.blurb, c.sector, c.stage]
          .join(" ")
          .toLowerCase()
          .includes(q.toLowerCase());
      const byStage = stage === "All" || c.stage.toLowerCase() === stage.toLowerCase();
      const bySector = sector === "All" || c.sector.toLowerCase() === sector.toLowerCase();
      return byQ && byStage && bySector;
    });
  }, [q, stage, sector]);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-200">
      {/* Ambient gradient + grid background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/20 to-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-gradient-to-tr from-purple-500/20 via-cyan-500/20 to-emerald-500/20 blur-3xl" />
        <svg className="absolute inset-0 opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M32 0H0V32" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-slate-950/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-white grid place-items-center font-bold shadow-[0_0_20px_theme(colors.cyan.500/40)]">
                GV
              </div>
              <span className="font-semibold tracking-wide">Genc Ventures</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#portfolio" className="hover:text-white/90">
                Portfolio
              </a>
              <a href="#thesis" className="hover:text-white/90">
                Thesis
              </a>
              <a href="#process" className="hover:text-white/90">
                Process
              </a>
              <a href="#contact" className="hover:text-white/90">
                Contact
              </a>
            </nav>
            <div className="hidden md:flex gap-2">
              <a href="#contact">
                <Button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 border-0 text-white font-semibold shadow-[0_0_25px_theme(colors.fuchsia.400/50)] hover:text-yellow-200 hover:shadow-[0_0_35px_theme(colors.yellow.400/40)]">
                  Pitch Us
                </Button>
              </a>
            </div>
            <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden fixed inset-0 z-50 bg-slate-950/80 backdrop-blur p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="font-semibold">Menu</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="grid gap-4 text-lg">
              <a href="#portfolio" onClick={() => setOpen(false)}>
                Portfolio
              </a>
              <a href="#thesis" onClick={() => setOpen(false)}>
                Thesis
              </a>
              <a href="#process" onClick={() => setOpen(false)}>
                Process
              </a>
              <a href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>
              <a href="#contact">
                <Button className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold shadow-[0_0_25px_theme(colors.fuchsia.400/50)] hover:text-yellow-200 hover:shadow-[0_0_35px_theme(colors.yellow.400/40)]">
                  Pitch Us
                </Button>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              </span>
              
              <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                Backing exceptional founders building
                <span className="block bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                  category-defining companies
                </span>
              </h1>
              <p className="mt-4 text-lg text-slate-400 max-w-xl">
                Genc Ventures partners with teams from pre-seed to Series A. We invest in exceptional founders and products solving real problems.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#portfolio">
                  <Button className="rounded-2xl bg-white text-slate-900 hover:bg-white/90">
                    <Building2 className="w-4 h-4 mr-2" /> See Portfolio
                  </Button>
                </a>
                <a href="#contact">
                  {/* SECOND Pitch Us button now matches the top-right one */}
                  <Button className="rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 border-0 text-white font-semibold shadow-[0_0_25px_theme(colors.fuchsia.400/50)] hover:text-yellow-200 hover:shadow-[0_0_35px_theme(colors.yellow.400/40)]">
                    <Calendar className="w-4 h-4 mr-2" /> Pitch Us
                  </Button>
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" /> Typical check: $20k–$50k
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" /> Lead or co-invest
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" /> Hands-on GTM help
                </span>
              </div>
            </div>

            <div>
              <Card className="rounded-3xl border-white/10 bg-white/5 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-cyan-400" /> What we look for
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 mt-0.5 text-cyan-400" /> Painkiller problems with clear ROI
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 mt-0.5 text-cyan-400" /> Technical advantage (AI, data, infra)
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 mt-0.5 text-cyan-400" /> Founder-market fit & velocity
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 mt-0.5 text-cyan-400" /> Early revenue or convincing usage
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Portfolio</h2>
              <p className="mt-2 text-slate-400">A snapshot of teams we’re proud to back.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-3 items-center">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-400" />
                <Input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search companies…"
                  className="bg-white/5 border-white/10 text-slate-200 placeholder:text-slate-500"
                />
              </div>
              <Select value={sector} onValueChange={(v) => setSector(v as typeof SECTORS[number])}>
                <SelectTrigger className="bg-white/5 border-white/10 text-slate-200">
                  <SelectValue placeholder="Sector" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-white/10 text-slate-200">
                  {SECTORS.map((s) => (
                    <SelectItem key={s} value={s} className="focus:bg-white/10">
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={stage} onValueChange={(v) => setStage(v as typeof STAGES[number])}>
                <SelectTrigger className="bg-white/5 border-white/10 text-slate-200">
                  <SelectValue placeholder="Stage" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-white/10 text-slate-200">
                  {STAGES.map((s) => (
                    <SelectItem key={s} value={s} className="focus:bg-white/10">
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c, i) => (
              <Card
                key={i}
                className="group rounded-3xl border-white/10 bg-white/5 backdrop-blur transition hover:translate-y-[-2px] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-white grid place-items-center font-semibold shadow-[0_0_20px_theme(colors.cyan.500/40)]">
                        {c.logo}
                      </div>
                      <span className="text-slate-100">{c.name}</span>
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge className="rounded-2xl border-white/10 bg-white/5 text-slate-300">
                        {c.sector}
                      </Badge>
                      <Badge className="rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/20">
                        {c.stage}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-400">
                  <p>{c.blurb}</p>
                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-cyan-300 hover:text-cyan-200"
                    >
                      Visit site <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* THESIS */}
      <section id="thesis" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Investment Thesis</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            <Card className="rounded-3xl border-white/10 bg-white/5 backdrop-blur">
              <CardContent className="p-6 text-slate-300">
                <div className="font-semibold mb-1">AI-native products</div>
                <p className="text-slate-400">
                  We back software that is impossible without AI: copilots, agents, realtime
                  optimization, and data moats.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-white/10 bg-white/5 backdrop-blur">
              <CardContent className="p-6 text-slate-300">
                <div className="font-semibold mb-1">Go-to-market edge</div>
                <p className="text-slate-400">
                  Founders with clear ICP, fast learning loops, and efficient growth beats
                  brute-force spend.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-white/10 bg-white/5 backdrop-blur">
              <CardContent className="p-6 text-slate-300">
                <div className="font-semibold mb-1">Operator help</div>
                <p className="text-slate-400">
                  We bring hands-on data, infra, and enterprise intro support from day one.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">How We Invest</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { t: "Intro call", d: "30-minute fit and stage overview." },
              { t: "Deep dive", d: "Product, traction, GTM, and data moats." },
              { t: "Partner review", d: "Fast decision, typical 1–2 weeks." },
            ].map((s, i) => (
              <Card key={i} className="rounded-3xl border-white/10 bg-white/5 backdrop-blur">
                <CardContent className="p-6 text-slate-300">
                  <div className="font-semibold mb-1">{s.t}</div>
                  <p className="text-slate-400">{s.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / PITCH */}
      <section id="contact" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Pitch Genc Ventures</h2>
            <p className="mt-3 text-slate-400">
              Ready to chat? Send your deck and details—if it’s a fit, we’ll follow up to schedule
              time.
            </p>
          </div>
          <Card className="rounded-3xl border-white/10 bg-white/5 backdrop-blur">
            <CardContent className="p-6">
              <form className="grid gap-4" action={FORM_ACTION} method="POST">
                {/* FormSubmit enhancements */}
                <input type="hidden" name="_subject" value="New pitch via gencventures.com" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="/thanks" />
                <input
                  type="text"
                  name="_honey"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-white/5 border-white/10 text-slate-200 placeholder:text-slate-500"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="bg-white/5 border-white/10 text-slate-200 placeholder:text-slate-500"
                  />
                </div>
                <Input
                  name="company"
                  placeholder="Company"
                  className="bg-white/5 border-white/10 text-slate-200 placeholder:text-slate-500"
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    name="website"
                    type="url"
                    placeholder="Website or deck link (Notion, Google Drive, etc.)"
                    className="bg-white/5 border-white/10 text-slate-200 placeholder:text-slate-500"
                  />
                  <Input
                    name="stage"
                    placeholder="Stage (e.g. Seed)"
                    className="bg-white/5 border-white/10 text-slate-200 placeholder:text-slate-500"
                  />
                </div>
                <Textarea
                  name="summary"
                  placeholder="What are you building?"
                  rows={5}
                  className="bg-white/5 border-white/10 text-slate-200 placeholder:text-slate-500"
                />
                <Button
                  type="submit"
                  className="rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold border-0 shadow-[0_0_25px_theme(colors.fuchsia.400/50)] hover:text-yellow-200 hover:shadow-[0_0_35px_theme(colors.yellow.400/40)]"
                >
                  <Mail className="w-4 h-4 mr-2" /> Send
                </Button>
              </form>
              <p className="text-xs text-slate-500 mt-3">
                By submitting, you agree we may contact you regarding your pitch.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Genc Ventures. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-300">
              Terms
            </a>
            <a href="#contact" className="hover:text-slate-300">
              Pitch
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

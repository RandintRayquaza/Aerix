import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CircleUserRound,
  FileText,
  Globe,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  Upload,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import logo from "@/public/logo.png";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AuthMode = "login" | "signup" | "onboarding";

const copy = {
  login: {
    eyebrow: "Authentication",
    title: "Welcome back",
    description: "Sign in to continue building your profile and manage your creator page.",
    bullets: [
      { title: "Secure access", copy: "Keep your account and profile protected." },
      { title: "Fast setup", copy: "Jump back into the builder without friction." },
      { title: "Always synced", copy: "Your latest edits stay ready to publish." },
    ],
  },
  signup: {
    eyebrow: "Authentication",
    title: "Create your digital identity",
    description: "Build your Aerix profile, add your links, and publish a page that feels like you.",
    bullets: [
      { title: "All in one place", copy: "Share links, media, and contact options together." },
      { title: "Built for creators", copy: "Start clean and customize the look later." },
      { title: "Fast and secure", copy: "Your page stays private until you share it." },
    ],
  },
  onboarding: {
    eyebrow: "Onboarding",
    title: "Let’s set up your profile",
    description: "Pick a username, add a photo, and make the first version feel complete.",
    bullets: [
      { title: "Choose a handle", copy: "Create the public link people will remember." },
      { title: "Add a profile image", copy: "Upload a clear photo or brand mark." },
      { title: "Write the intro", copy: "A short bio gives your page some warmth." },
    ],
  },
} satisfies Record<
  AuthMode,
  {
    eyebrow: string;
    title: string;
    description: string;
    bullets: Array<{ title: string; copy: string }>;
  }
>;

function Header({ mode }: { mode: AuthMode }) {
  return (
    <div className="flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2.5 text-ink">
        <Image src={logo} alt="" className="size-10 object-contain" priority />
        <span className="text-[22px] font-extrabold tracking-tight">Aerix</span>
      </Link>
      <span className="hidden rounded-pill border border-border bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted sm:inline-flex">
        {copy[mode].eyebrow}
      </span>
    </div>
  );
}

function Field({
  label,
  icon: Icon,
  placeholder,
  type = "text",
}: {
  label: string;
  icon: LucideIcon;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="space-y-2">
      <span className="text-[13px] font-semibold text-ink">{label}</span>
      <div className="flex h-12 items-center gap-2 rounded-card border border-border bg-white px-3.5 shadow-whisper focus-within:border-[#d8c8ff] focus-within:shadow-[0_0_0_3px_rgba(139,92,246,0.12)]">
        <Icon className="size-4 shrink-0 text-muted" aria-hidden="true" />
        <input
          type={type}
          placeholder={placeholder}
          className="h-full w-full border-0 bg-transparent text-sm text-ink outline-none placeholder:text-muted"
        />
      </div>
    </label>
  );
}

function BulletCard({
  title,
  copy,
  icon: Icon = Check,
}: {
  title: string;
  copy: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="rounded-[22px] border border-border bg-white/85 p-4 shadow-whisper backdrop-blur-sm">
      <div className="flex size-10 items-center justify-center rounded-card bg-accent-soft text-accent">
        <Icon className="size-4" />
      </div>
      <h2 className="mt-4 text-sm font-bold text-ink">{title}</h2>
      <p className="mt-1 text-sm leading-6 text-body">{copy}</p>
    </div>
  );
}

function AuthForm({ mode }: { mode: AuthMode }) {
  if (mode === "onboarding") {
    return (
      <div className="rounded-[28px] border border-border bg-white p-4 shadow-floating sm:p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">Step 1 of 3</p>
            <h2 className="mt-2 text-[20px] font-bold tracking-tight text-ink sm:text-[22px]">
              Choose your username
            </h2>
            <p className="mt-1 text-sm leading-6 text-body">
              This becomes the public link people use to find your page.
            </p>
          </div>
          <span className="flex size-10 items-center justify-center rounded-full bg-accent-soft text-accent">
            <Sparkles className="size-5" />
          </span>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4 rounded-[22px] border border-border bg-[#fcfbff] p-4">
            <Field label="Username" icon={UserRound} placeholder="aerixlive" />
            <Field label="Full name" icon={CircleUserRound} placeholder="Avery Carter" />
            <label className="space-y-2">
              <span className="text-[13px] font-semibold text-ink">Bio</span>
              <div className="rounded-card border border-border bg-white p-3.5 shadow-whisper">
                <textarea
                  rows={5}
                  placeholder="Tell people what you make, ship, or share."
                  className="w-full resize-none border-0 bg-transparent text-sm leading-6 text-ink outline-none placeholder:text-muted"
                />
                <div className="mt-3 flex items-center justify-between text-[11px] text-muted">
                  <span>Keep it short and memorable.</span>
                  <span>0 / 160</span>
                </div>
              </div>
            </label>
          </div>

          <div className="space-y-4 rounded-[22px] border border-border bg-[#fdfcff] p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">Preview</p>
                <h3 className="mt-1 text-[17px] font-bold tracking-tight text-ink">Profile setup</h3>
              </div>
              <span className="rounded-pill border border-[#e8dfff] bg-[#f5f0ff] px-2.5 py-1 text-[11px] font-semibold text-accent">
                Optional
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-card border border-dashed border-[#d9ccfb] bg-white p-4 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Upload className="size-5" />
                </div>
                <p className="mt-3 text-sm font-semibold text-ink">Upload profile image</p>
                <p className="mt-1 text-xs leading-5 text-body">Square crop, high contrast, easy to recognize.</p>
              </div>
              <div className="rounded-card border border-border bg-white p-4 shadow-whisper">
                <p className="text-sm font-semibold text-ink">Banner image</p>
                <div className="mt-3 h-24 rounded-card border border-dashed border-[#dccfff] bg-[#faf7ff]" />
                <p className="mt-2 text-xs text-body">Use a wide image for the top of the page.</p>
              </div>
            </div>

            <div className="rounded-card border border-border bg-white p-4 shadow-whisper">
              <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                <FileText className="size-4 text-accent" />
                About you
              </div>
              <p className="mt-2 text-sm leading-6 text-body">
                Share what you do, what you are building, or where people should click next.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-1 text-center text-[11px] font-semibold text-muted">
              <div className="rounded-card border border-accent-soft bg-accent-soft px-2 py-3 text-accent">1</div>
              <div className="rounded-card border border-border bg-white px-2 py-3">2</div>
              <div className="rounded-card border border-border bg-white px-2 py-3">3</div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/signup"
            className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full sm:flex-1")}
          >
            Continue
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-full sm:flex-1")}
          >
            Skip for now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[28px] border border-border bg-white p-4 shadow-floating sm:p-6">
      <div className="mb-5 text-center">
        <h2 className="text-[20px] font-bold tracking-tight text-ink sm:text-[22px]">
          {mode === "login" ? "Sign in to your account" : "Create your account"}
        </h2>
        <p className="mt-1 text-sm leading-6 text-body">
          {mode === "login"
            ? "Enter your details to continue to your dashboard."
            : "Start building your identity in just a few seconds."}
        </p>
      </div>

      <div className="space-y-4">
        <Field label="Email address" icon={Mail} placeholder="you@example.com" type="email" />
        <Field label="Password" icon={Lock} placeholder="Enter your password" type="password" />

        {mode === "signup" ? (
          <Field
            label="Confirm password"
            icon={Lock}
            placeholder="Repeat your password"
            type="password"
          />
        ) : null}

        {mode === "login" ? (
          <div className="flex items-center justify-between text-xs text-body">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="size-4 rounded border-border text-accent focus:ring-accent" />
              Remember me
            </label>
            <Link href="/signup" className="font-semibold text-accent hover:underline">
              Forgot password?
            </Link>
          </div>
        ) : (
          <label className="flex items-start gap-2 rounded-card border border-border bg-[#fcfbff] px-3 py-3 text-xs leading-5 text-body">
            <input type="checkbox" className="mt-0.5 size-4 rounded border-border text-accent focus:ring-accent" />
            <span>I agree to the terms and understand this is a preview-only UI.</span>
          </label>
        )}

        <button
          type="button"
          className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full")}
        >
          {mode === "login" ? "Sign in" : "Create account"}
          <ArrowRight className="size-4" />
        </button>

        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-border" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">or</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <button
          type="button"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full bg-white")}
        >
          <Globe className="size-4" />
          Continue with Google
        </button>

        <div className="text-center text-sm text-body">
          {mode === "login" ? (
            <>
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-semibold text-accent hover:underline">
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-accent hover:underline">
                Sign in
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 text-[11px] font-medium text-muted">
        <ShieldCheck className="size-3.5 text-accent" />
        Secure. Private. Always yours.
      </div>
    </div>
  );
}

export function AuthScreen({ mode }: { mode: AuthMode }) {
  const panel = copy[mode];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#faf7ff_0%,#ffffff_42%,#f6f1ff_100%)] text-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1400px] flex-col px-5 py-5 sm:px-8 sm:py-8">
        <Header mode={mode} />

        <section className="mt-6 grid flex-1 items-stretch gap-6 lg:mt-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <div className="flex items-center">
            <div className="w-full max-w-[600px] space-y-8">
              <div className="space-y-5">
                <span className="inline-flex items-center gap-2 rounded-pill border border-[#e8dfff] bg-[#f5f0ff] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.08em] text-accent">
                  {panel.eyebrow}
                </span>
                <h1 className="max-w-[540px] text-[3rem] font-bold leading-[1.03] tracking-tight text-ink sm:text-[4.25rem]">
                  {mode === "signup" ? (
                    <>
                      Create your
                      <span className="text-accent"> digital </span>
                      identity
                      <span className="text-accent">.</span>
                    </>
                  ) : mode === "login" ? (
                    <>
                      Welcome
                      <span className="text-accent"> back</span>.
                    </>
                  ) : (
                    <>
                      Let&apos;s set up
                      <span className="text-accent"> your profile</span>.
                    </>
                  )}
                </h1>
                <p className="max-w-[480px] text-[15px] leading-[1.75] text-body sm:text-base">
                  {panel.description}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {panel.bullets.map((item) => (
                  <BulletCard key={item.title} title={item.title} copy={item.copy} />
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted">
                <span className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-3 py-1.5">
                  <ShieldCheck className="size-3.5 text-accent" />
                  Light mode first
                </span>
                <span className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-3 py-1.5">
                  <Sparkles className="size-3.5 text-accent" />
                  Creator-focused UI
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-[620px]">
              <AuthForm mode={mode} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

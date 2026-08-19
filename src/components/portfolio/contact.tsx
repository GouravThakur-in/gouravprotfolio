import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Github, Instagram, Linkedin, Mail, Phone, Send, Loader2, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { emailjsConfig, profile } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./motion-primitives";
import { MagneticButton } from "./magnetic-button";

const channels = [
  { Icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { Icon: Linkedin, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
  { Icon: Github, label: "GitHub", value: profile.githubLabel, href: profile.github },
  {
    Icon: Instagram,
    label: "Instagram",
    value: profile.instagramLabel,
    href: profile.instagram,
    instagram: true,
  },
];


export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const { serviceId, templateId, publicKey } = emailjsConfig;
    setStatus("sending");

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: name,
            name,
            user_name: name,
            reply_to: email,
            email,
            user_email: email,
            message,
            title: `Portfolio enquiry from ${name}`,
            to_email: profile.email,
          },
          { publicKey },
        );
        setStatus("sent");
        form.reset();
        return;
      } catch {
        setStatus("error");
        return;
      }
    }

    // Fallback until EmailJS credentials are configured.
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      `Portfolio enquiry from ${name}`,
    )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
    setStatus("sent");
    form.reset();
  };

  const field =
    "w-full rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-cyan focus:ring-2 focus:ring-ring";

  return (
    <section id="contact" className="relative section-shell">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-72 max-w-3xl rounded-full opacity-20 blur-[130px]"
        style={{ background: "var(--gradient-aurora)" }}
      />
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something intelligent."
        description="Open to AI/ML engineering roles, internships and collaborations. I usually reply within a day."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
        <Reveal className="grid content-start gap-3">
          {channels.map(({ Icon, label, value, href, instagram }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 6 }}
              className={`glass flex items-center gap-4 rounded-2xl p-4 ${
                instagram ? "hover-instagram" : ""
              }`}
            >
              <span
                className="glass grid size-10 shrink-0 place-items-center rounded-xl"
                style={instagram ? { background: "var(--gradient-instagram)" } : undefined}
              >
                <Icon className={instagram ? "size-4 text-primary-foreground" : "size-4 text-cyan"} />
              </span>

              <span className="min-w-0">
                <span className="block font-mono text-[0.68rem] tracking-widest text-muted-foreground uppercase">
                  {label}
                </span>
                <span className="block truncate text-sm">{value}</span>
              </span>
            </motion.a>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="glass grid gap-4 rounded-3xl p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs text-muted-foreground">
                  Name
                </label>
                <input id="name" name="name" required className={field} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={field}
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-xs text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className={`${field} resize-none`}
                placeholder="Tell me about the role or project…"
              />
            </div>

            <MagneticButton
              type="submit"
              disabled={status === "sending"}
              className="mt-2 w-full rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-70"
              style={{ background: "var(--gradient-aurora)" }}
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" /> Sending
                </>
              ) : status === "sent" ? (
                <>
                  <CheckCircle2 className="mr-2 size-4" /> Message sent
                </>
              ) : (
                <>
                  <Send className="mr-2 size-4" /> Send message
                </>
              )}
            </MagneticButton>

            {status === "error" && (
              <p className="text-center text-xs text-destructive">
                Something went wrong — email me directly at {profile.email}.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

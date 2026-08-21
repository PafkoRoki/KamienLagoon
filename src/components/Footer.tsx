"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

type Language = "pl" | "en" | "de";

const languages: Language[] = ["pl", "en", "de"];

const content = {
  pl: {
    linksTitle: "Nawigacja",
    contactTitle: "Kontakt",
    links: [
      ["O NAS", "#about"],
      ["MODEL", "#model"],
      ["GALERIA", "#gallery"],
      ["LOKALIZACJA", "#location"],
    ],
    brand: ["Żółcino", "Lagoon", "Twoje", "miejsce."],
    description: "NATURA, CISZA I PRZESTRZEŃ.",
    email: "E-MAIL",
    placeholder: "Twój adres e-mail",
    send: "WYŚLIJ",
    rights: "WSZELKIE PRAWA ZASTRZEŻONE",
    back: "WRÓĆ NA GÓRĘ ↑",
  },
  en: {
    linksTitle: "Navigation",
    contactTitle: "Contact",
    links: [
      ["ABOUT", "#about"],
      ["MODEL", "#model"],
      ["GALLERY", "#gallery"],
      ["LOCATION", "#location"],
    ],
    brand: ["Żółcino", "Lagoon", "Your", "place."],
    description: "NATURE, SILENCE AND SPACE.",
    email: "E-MAIL",
    placeholder: "Your e-mail address",
    send: "SEND",
    rights: "ALL RIGHTS RESERVED",
    back: "BACK TO TOP ↑",
  },
  de: {
    linksTitle: "Navigation",
    contactTitle: "Kontakt",
    links: [
      ["ÜBER UNS", "#about"],
      ["MODELL", "#model"],
      ["GALERIE", "#gallery"],
      ["LAGE", "#location"],
    ],
    brand: ["Żółcino", "Lagoon", "Dein", "Ort."],
    description: "NATUR, RUHE UND FREIRAUM.",
    email: "E-MAIL",
    placeholder: "Deine E-Mail-Adresse",
    send: "SENDEN",
    rights: "ALLE RECHTE VORBEHALTEN",
    back: "NACH OBEN ↑",
  },
} satisfies Record<Language, Record<string, unknown>>;

const socials = [
  { label: "LINKEDIN", href: "#" },
  { label: "FACEBOOK", href: "#" },
  { label: "INSTAGRAM", href: "#" },
];

export default function Footer() {
  const [language, setLanguage] = useState<Language>("pl");
  const copy = content[language] as {
    linksTitle: string;
    contactTitle: string;
    links: string[][];
    brand: string[];
    description: string;
    email: string;
    placeholder: string;
    send: string;
    rights: string;
    back: string;
  };

  const footerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const title = titleRef.current;
    const linksContainer = linksRef.current;

    if (!footer || !title || !linksContainer) return;

    const ctx = gsap.context(() => {
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      gsap.fromTo(
        title,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        linksContainer.querySelectorAll(".footer__link"),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: linksContainer,
            start: "top 90%",
            once: true,
          },
        }
      );
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer__frame">
        <div className="footer__top">
          <div className="footer__brand">
            <h2>
              {copy.brand.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>

            <p>{copy.description}</p>
          </div>

          <div className="footer__column" ref={linksRef}>
            <h3>{copy.linksTitle}</h3>

            <nav className="footer__nav" aria-label={copy.linksTitle}>
              {copy.links.map(([label, href]) => (
                <a key={label} href={href} className="footer__link">
                  {label}
                </a>
              ))}
            </nav>

            <div className="footer__language">
              <div className="footer__languages" aria-label="Language selection">
                {languages.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={language === item ? "is-active" : ""}
                    onClick={() => setLanguage(item)}
                    aria-pressed={language === item}
                  >
                    {item.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="footer__column footer__contact">
            <h3>{copy.contactTitle}</h3>

            <nav className="footer__nav" aria-label="Social media">
              {socials.map((social) => (
                <a key={social.label} href={social.href} className="footer__link">
                  {social.label}
                </a>
              ))}
            </nav>

            <form
              className="footer__email"
              onSubmit={(event) => event.preventDefault()}
            >
              <label htmlFor="footer-email">{copy.email}</label>

              <div className="footer__email-row">
                <input
                  id="footer-email"
                  type="email"
                  placeholder={copy.placeholder}
                  required
                />
                <button type="submit">{copy.send} ↗</button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer__hero">
          <h1 ref={titleRef}>LAGOON</h1>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()}</span>
          <span>{copy.rights}</span>
          <a href="#top">{copy.back}</a>
        </div>
      </div>
    </footer>
  );
}
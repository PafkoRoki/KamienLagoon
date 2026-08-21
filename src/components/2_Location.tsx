"use client";

import { useState } from "react";
import "./2_Location.css";

type Language = "pl" | "en" | "de";

const content = {
  pl: {
    language: "Polski",
    eyebrow: "02 — Lokalizacja",
    title: "ŻÓŁCINO PENINSULA",
    description:
      "Ponad 27 hektarów terenów inwestycyjnych nad wodą. Panorama historycznego miasta. Bezpośrednie sąsiedztwo mariny. Zaledwie 230 kilometrów od Berlina. Miejsce, w którym można stworzyć nowy punkt odniesienia dla inwestycji mieszkaniowych, turystycznych i rekreacyjnych na Pomorzu Zachodnim.",
    details: [
      ["LOKALIZACJA", "Kamień Pomorski, Polska"],
      ["OTOCZENIE", "Woda · las · otwarta przestrzeń"],
      ["ATMOSFERA", "Spokój · prywatność · natura"],
    ],
  },
  en: {
    language: "English",
    eyebrow: "02 — Location",
    title: "ŻÓŁCINO PENINSULA",
    description:
      "Over 27 hectares of waterfront investment land. Panoramic views of the historic city. Direct proximity to a marina. Just 230 kilometres from Berlin. A place where a new benchmark for residential, tourism and leisure developments in Western Pomerania can be created.",
    details: [
      ["LOCATION", "Kamień Pomorski, Poland"],
      ["SURROUNDINGS", "Water · forest · open space"],
      ["ATMOSPHERE", "Peace · privacy · nature"],
    ],
  },
  de: {
    language: "Deutsch",
    eyebrow: "02 — Lage",
    title: "ŻÓŁCINO PENINSULA",
    description:
      "Über 27 Hektar attraktive Investitionsflächen direkt am Wasser. Ein beeindruckender Panoramablick auf die historische Stadt. Unmittelbare Nähe zu einer Marina. Nur 230 Kilometer von Berlin entfernt. Ein Ort, an dem ein neuer Maßstab für Wohn-, Tourismus- und Freizeitimmobilien in Westpommern gesetzt werden kann.",
    details: [
      ["ORT", "Kamień Pomorski, Polen"],
      ["UMGEBUNG", "Wasser · Wald · Weite"],
      ["ATMOSPHÄRE", "Ruhe · Privatsphäre · Natur"],
    ],
  },
} satisfies Record<
  Language,
  {
    language: string;
    eyebrow: string;
    title: string;
    description: string;
    details: string[][];
  }
>;

const languages: Language[] = ["pl", "en", "de"];

function Location() {
  const [language, setLanguage] = useState<Language>("pl");
  const copy = content[language];

  return (
    <section id="location" className="location section">
      <div className="location__container container">
        <div className="location__header">
          <p className="location__eyebrow">{copy.eyebrow}</p>

          <div className="location__languages" aria-label="Language selection">
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

        <div className="location__content">
          <h2>{copy.title}</h2>
          <p className="location__description">{copy.description}</p>

          <div className="location__details">
            {copy.details.map(([label, value]) => (
              <div className="location__detail" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
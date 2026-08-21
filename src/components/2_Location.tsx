"use client";

import { useState } from "react";
import MetallicPaint from "./MetallicPaint";
import CountUp from './CountUp'
import logo from '../assets/logofill.svg'
import "./2_Location.css";

type Language = "pl" | "en" | "de";


type Distance = {
  value: number;
  label: string;
  separator?: string;
};

const distances: Record<Language, Distance[]> = {
  pl: [
    { value: 4, label: "Centrum Kamienia Pomorskiego" },
    { value: 4, label: "Centrum Dziwnowa" },
    { value: 38, label: "Centrum Międzyzdrojów" },
    { value: 230, label: "Centrum Berlina" },
    { value: 1, label: "Droga wojewódzka DW107" },
    { value: 19, label: "Droga ekspresowa S3" },
  ],
  en: [
    { value: 4, label: "Kamień Pomorski city centre" },
    { value: 4, label: "Dziwnów city centre" },
    { value: 38, label: "Międzyzdroje city centre" },
    { value: 230, label: "Berlin city centre" },
    { value: 1, label: "DW107 regional road" },
    { value: 19, label: "S3 expressway" },
  ],
  de: [
    { value: 4, label: "Stadtzentrum Kamień Pomorski" },
    { value: 4, label: "Stadtzentrum Dziwnów" },
    { value: 38, label: "Stadtzentrum Międzyzdroje" },
    { value: 230, label: "Stadtzentrum Berlin" },
    { value: 1, label: "Regionalstraße DW107" },
    { value: 19, label: "Schnellstraße S3" },
  ],
};


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

        <div className="location__distances">

          <div className="location__distances-grid">
            {distances[language].map((distance) => (
              <div
                className="location__distance"
                key={distance.label}
              >
                <strong>
                  <CountUp
                    from={0}
                    to={distance.value}
                    separator={distance.separator ?? ","}
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    delay={0}
                  />
                  <small> km</small>
                </strong>

                <span>{distance.label}</span>
              </div>
            ))}
          </div>
        </div>

    <div style={{ width: '100%', height: '300px', marginTop: 'var(--section-pad)' }}>
    <MetallicPaint
      imageSrc={logo}
      seed={168}
      scale={3}
      patternSharpness={0.8}
      noiseScale={0.35}
      speed={0.04}
      liquid={0.4}
      mouseAnimation={true}
      brightness={1.25}
      contrast={0.75}
      refraction={0.005}
      blur={0.01}
      chromaticSpread={0}
      fresnel={0.7}
      angle={0}
      waveAmplitude={0.35}
      distortion={0.35}
      contour={0.08}
      lightColor="#F1EBDD"
      darkColor="#102A32"
      tintColor="#D8CDBB"
    />
    </div>

      </div>
    </section>
  );
}

export default Location;
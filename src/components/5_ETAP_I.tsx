"use client";

import { useState } from "react";
import "./5_ETAP.css";

import KDW from "../data/KDW";
import KS7 from "../data/KS7";
import MN5 from "../data/MN5";
import MR6 from "../data/MR6";
import MW2 from "../data/MW2";
import UMW4 from "../data/UMW4";
import ZL8 from "../data/ZL8";

type Language = "pl" | "en" | "de";

type ParcelProperties = {
  id?: string;
  numer?: string;
  area?: string | number;
  status?: string;
  price?: string | number;
};

type Feature = {
  properties?: ParcelProperties;
};

type Category = {
  name: string;
  color: string;
  data: {
    features: Feature[];
  };
};

const categoryIcons: Record<string, string> = {
  KDW: "https://raw.githubusercontent.com/PafkoRoki/KamienLagoon/main/public/icons/KDW.png",
  KS7: "/icons/KS7.png",
  MN5: "/icons/MN5.png",
  MR6: "/icons/MR6.png",
  MW2: "/icons/MW2.png",
  UMW4: "/icons/UMW4.png",
  ZL8: "/icons/ZL8.png",
};


const languages: Language[] = ["pl", "en", "de"];

const categories: Category[] = [
  { name: "KDW", color: "#2d2d2d", data: KDW as Category["data"] },
  { name: "KS7", color: "#2f6670", data: KS7 as Category["data"] },
  { name: "MN5", color: "#4e848f", data: MN5 as Category["data"] },
  { name: "MR6", color: "#6ea4ae", data: MR6 as Category["data"] },
  { name: "MW2", color: "#8ec4cf", data: MW2 as Category["data"] },
  { name: "UMW4", color: "#afe6f1", data: UMW4 as Category["data"] },
  { name: "ZL8", color: "#708f70", data: ZL8 as Category["data"] },
];

const translations = {
  pl: {
    eyebrow: "05 — Etapy inwestycji",
    title: "ETAP I",
    description:
      "Sprawdź dostępne działki, ich powierzchnię, status oraz cenę.",
    number: "Numer",
    area: "Powierzchnia",
    status: "Status",
    price: "Cena",
    available: "Dostępna",
    unavailable: "Niedostępna",
    stage2: "DRUGI ETAP",
    soon: "Wkrótce więcej działek",
  },
  en: {
    eyebrow: "05 — Investment Stages",
    title: "STAGE I",
    description:
      "Check the available plots, their area, status and price.",
    number: "Number",
    area: "Area",
    status: "Status",
    price: "Price",
    available: "Available",
    unavailable: "Unavailable",
    stage2: "SECOND PHASE",
    soon: "More plots coming soon",
  },
  de: {
    eyebrow: "05 — Investitionsphasen",
    title: "PHASE I",
    description:
      "Prüfe verfügbare Grundstücke, ihre Fläche, den Status und den Preis.",
    number: "Nummer",
    area: "Fläche",
    status: "Status",
    price: "Preis",
    available: "Verfügbar",
    unavailable: "Nicht verfügbar",
    stage2: "ZWEITE PHASE",
    soon: "Weitere Grundstücke folgen bald",
  },
} satisfies Record<Language, Record<string, string>>;

export default function Spis() {
  const [language, setLanguage] = useState<Language>("pl");
  const [selectedFeature, setSelectedFeature] =
    useState<Feature | null>(null);

  const t = translations[language];

  return (
    <section id="spis" className="spis section">
      <div className="spis__container container">
        <header className="spis__header">
          <p className="spis__eyebrow">{t.eyebrow}</p>

          <div className="spis__languages" aria-label="Wybór języka">
            {languages.map((item) => (
              <button
                key={item}
                type="button"
                className={language === item ? "is-active" : ""}
                aria-pressed={language === item}
                onClick={() => setLanguage(item)}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </header>

        <div className="spis__content">
          <div className="spis__intro">
            <h2>{t.title}</h2>
            <p className="spis__description">{t.description}</p>
          </div>

           <img
              src="https://raw.githubusercontent.com/PafkoRoki/KamienLagoon/main/public/icons/Etap_1.png"
              alt="Opis zdjęcia"
              className="spis__image"
            />

          <div className="spis__tables">
            {categories.map((category) => (
              <div className="spis__category" key={category.name}>
                <div className="spis__category-header">
                  <div className="spis__category-title">
                    <img
                      src={categoryIcons[category.name]}
                      alt={`Zakres ${category.name}`}
                      className="spis__category-icon"
                    />

                    <h3>{category.name}</h3>
                  </div>

                  <span>{category.data.features.length} działek</span>
                </div>

                <div className="spis__table-wrapper">
                  <table className="parcel-table">
                    <thead>
                      <tr>
                        <th>{t.number}</th>
                        <th>{t.area}</th>
                        <th>{t.status}</th>
                        <th>{t.price}</th>
                      </tr>
                    </thead>

                    <tbody>
                      {category.data.features.map((feature, index) => {
                        const properties = feature.properties ?? {};
                        const key = properties.id ?? `${category.name}-${index}`;

                        return (
                          <tr
                            key={key}
                            className={
                              selectedFeature === feature ? "is-selected" : ""
                            }
                            onClick={() => setSelectedFeature(feature)}
                          >
                            <td>{properties.numer ?? "-"}</td>
                            <td>
                              {properties.area
                                ? `${properties.area} m²`
                                : "-"}
                            </td>
                            <td>
                              <span className="parcel-status">
                                {properties.status ??
                                  (language === "pl"
                                    ? t.available
                                    : language === "en"
                                      ? t.available
                                      : t.available)}
                              </span>
                            </td>
                            <td>
                              {properties.price
                                ? `${properties.price} PLN`
                                : "-"}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="spis__ending">
            <h3>{t.stage2}</h3>
            <p>{t.soon}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
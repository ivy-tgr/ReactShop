import React from "react";

export default function AboutUs() {
  return (
    <div className="surface-0 text-center">
      <div className="mb-3 font-bold text-3xl">
        <span className="text-900">Ein Stil, </span>
        <span className="text-blue-600">unzählige Möglichkeiten</span>
      </div>
      <div className="text-700 mb-6">
        Entdecken Sie Mode, die nicht nur gut aussieht, sondern sich auch gut anfühlt.
      </div>
      <div className="grid">
        <div className="col-12 md:col-4 mb-4 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-tag text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">
            Zeitlose Designs
          </div>
          <span className="text-700 line-height-3">
            Unsere Kollektionen kombinieren aktuelle Trends mit klassischer Eleganz.
          </span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-star text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">
            Qualität, die überzeugt
          </div>
          <span className="text-700 line-height-3">
            Hochwertige Materialien und präzise Verarbeitung – für Kleidung, die bleibt.
          </span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-users text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Für jeden Anlass</div>
          <span className="text-700 line-height-3">
            Ob casual, business oder elegant – wir haben die perfekte Auswahl für Sie.
          </span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-truck text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">
            Weltweiter Versand
          </div>
          <span className="text-700 line-height-3">
            Wir liefern Ihre Lieblingsoutfits direkt zu Ihnen – überall auf der Welt.
          </span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-face-smile text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Nachhaltige Mode</div>
          <span className="text-700 line-height-3">
            Unsere Stücke werden verantwortungsvoll produziert – für einen positiven Beitrag zur Umwelt.
          </span>
        </div>
        <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-heart text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">
            Zufriedenheit garantiert
          </div>
          <span className="text-700 line-height-3">
            Einfacher Rückgabeprozess und ein Team, das Ihnen jederzeit zur Seite steht.
          </span>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Faq() {
  return (
    <div className="card">
      <Navbar />
      <h1 className="text-center">FAQ</h1>
      <Accordion activeIndex={0}>
        <AccordionTab header="Warum ist der Himmel blau?">
          <p className="m-0">
            Weil die Wolken ihn mit blauer Farbe angemalt haben, aber es regnet immer zu viel, um es zu sehen!
          </p>
        </AccordionTab>
        <AccordionTab header="Warum fliegen Vögel?">
          <p className="m-0">
            Weil sie vergessen haben, wie man läuft und nun einfach durch die Luft rennen!
          </p>
        </AccordionTab>
        <AccordionTab header="Wie funktioniert ein Computer?">
          <p className="m-0">
            Der Computer wird von kleinen, unsichtbaren Geistern betrieben, die auf den Tasten tanzen und Befehle ausführen.
          </p>
        </AccordionTab>
        <AccordionTab header="Warum leuchtet die Sonne?">
          <p className="m-0">
            Weil sie eine Lampe angeschaltet hat und nicht mehr aufhören kann zu leuchten!
          </p>
        </AccordionTab>
        <AccordionTab header="Warum ist Wasser nass?">
          <p className="m-0">
            Weil es sich nicht anders entschieden hat und nass zu sein die einzige Option war!
          </p>
        </AccordionTab>
        <AccordionTab header="Was passiert, wenn man zu viel Pizza isst?">
          <p className="m-0">
            Dann verwandelt man sich in eine Pizza und muss endlich selbst gegessen werden!
          </p>
        </AccordionTab>
        <AccordionTab header="Warum ist der Winter so kalt?">
          <p className="m-0">
            Der Winter ist einfach eiskalt, weil er sich immer so schlecht gelaunt fühlt!
          </p>
        </AccordionTab>
        <AccordionTab header="Wo gehen alle Socken hin, die verschwinden?">
          <p className="m-0">
            Sie gehen in ein geheimes Sockendorf, um ihre Freiheit zu genießen, weit weg von ihren Partnern.
          </p>
        </AccordionTab>
        <AccordionTab header="Warum ist der Mond so rund?">
          <p className="m-0">
            Der Mond wurde von einem riesigen, runden Keks geformt, und er wollte einfach so bleiben!
          </p>
        </AccordionTab>
        <AccordionTab header="Was passiert, wenn man die Erde dreht?">
          <p className="m-0">
            Dann wird es entweder Tag oder Nacht, je nachdem, ob man sich gerade von der Sonne weg oder ihr zuwendet!
          </p>
        </AccordionTab>
      </Accordion>
      <Footer />
    </div>
  );
}

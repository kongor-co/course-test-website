import type { Locale } from '@/lib/site-content';
import { PageShell } from './page-shell';

type LegalKind = 'privacy' | 'imprint' | 'cookies';

export function LegalPage({ locale, kind }: { locale: Locale; kind: LegalKind }) {
  const content = legalCopy[locale][kind];
  return (
    <PageShell locale={locale} path={kind}>
      <main id="main-content">
        <section className="page-hero legal-hero"><div className="section-inner"><p className="eyebrow">Legal</p><h1>{content.title}</h1><p>{content.intro}</p></div></section>
        <section className="content-section white"><article className="section-inner content-prose">{content.sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</article></section>
      </main>
    </PageShell>
  );
}

const legalCopy = {
  en: {
    privacy: { title: 'Privacy notice', intro: 'A plain-language MVP notice. Final legal text must be reviewed before production launch.', sections: [
      { title: 'Data controller', paragraphs: ['The legal entity, registered address, and admissions email are not yet confirmed. These details must be supplied before production launch.'] },
      { title: 'Application data', paragraphs: ['The application asks only for an email address, a reason for taking the course, an optional cohort choice, and consent. Application and newsletter consent are separate.', 'Submissions must be handled by a reviewed hosted form provider or later CRM. Applicant data is never stored in the public website repository.'] },
      { title: 'Newsletter', paragraphs: ['Newsletter signup requires a separate, optional choice and double opt-in confirmation. It must not be treated as confirmed until the user follows the confirmation email.'] },
      { title: 'Storage and analytics', paragraphs: ['The site stores the cookie preference locally. Optional analytics are disabled in the MVP and must not load before the applicable consent choice.'] },
      { title: 'Your rights', paragraphs: ['Contact details for access, correction, deletion, restriction, objection, and data portability requests will be added when the legal entity and mailbox are confirmed.'] },
    ] },
    imprint: { title: 'Imprint', intro: 'Staging placeholder. This page is incomplete until the operator supplies verified legal details.', sections: [
      { title: 'Operator', paragraphs: ['Legal entity: To be confirmed.', 'Registered address: To be confirmed.', 'Authorized representative: To be confirmed.'] },
      { title: 'Contact', paragraphs: ['Admissions email: To be configured after the domain is selected.', 'Telephone and WhatsApp: Not available.'] },
      { title: 'Important', paragraphs: ['Do not treat this staging placeholder as a complete German legal notice. Verified operator details and appropriate legal review are required before launch.'] },
    ] },
    cookies: { title: 'Cookie information', intro: 'The MVP uses only required local storage unless optional services are added later.', sections: [
      { title: 'Required storage', paragraphs: ['A local preference records whether you chose required storage only or allowed optional analytics. This keeps the consent panel from reopening on every page.'] },
      { title: 'Optional services', paragraphs: ['No optional analytics, advertising pixels, or embedded media are active in the MVP. If added later, non-essential services must remain disabled until the applicable consent choice.'] },
      { title: 'Change your choice', paragraphs: ['Use Manage cookies in the footer at any time to reopen the preference panel.'] },
    ] },
  },
  de: {
    privacy: { title: 'Datenschutzhinweis', intro: 'Ein verständlicher MVP-Hinweis. Der finale Rechtstext muss vor dem Produktionsstart geprüft werden.', sections: [
      { title: 'Verantwortliche Stelle', paragraphs: ['Rechtliche Einheit, registrierte Adresse und Admissions E-Mail sind noch nicht bestätigt. Diese Angaben müssen vor dem Produktionsstart ergänzt werden.'] },
      { title: 'Bewerbungsdaten', paragraphs: ['Die Bewerbung fragt nur nach E-Mail-Adresse, Begründung, optionalem Kursstart und Einwilligung. Bewerbung und Newsletter haben getrennte Einwilligungen.', 'Einsendungen müssen über einen geprüften Hosted-Form-Anbieter oder ein späteres CRM verarbeitet werden. Bewerbungsdaten werden nie im öffentlichen Website-Repository gespeichert.'] },
      { title: 'Newsletter', paragraphs: ['Die Newsletter-Anmeldung ist getrennt und optional und benötigt eine Double-Opt-in-Bestätigung. Sie gilt erst nach Bestätigung der E-Mail als abgeschlossen.'] },
      { title: 'Speicher und Analytics', paragraphs: ['Die Website speichert die Cookie-Auswahl lokal. Optionale Analytics sind im MVP deaktiviert und dürfen nicht vor der passenden Einwilligung laden.'] },
      { title: 'Deine Rechte', paragraphs: ['Kontaktdaten für Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit werden ergänzt, sobald rechtliche Einheit und Mailbox bestätigt sind.'] },
    ] },
    imprint: { title: 'Impressum', intro: 'Staging-Platzhalter. Diese Seite ist unvollständig, bis der Betreiber verifizierte rechtliche Angaben liefert.', sections: [
      { title: 'Betreiber', paragraphs: ['Rechtliche Einheit: Noch zu bestätigen.', 'Registrierte Adresse: Noch zu bestätigen.', 'Vertretungsberechtigte Person: Noch zu bestätigen.'] },
      { title: 'Kontakt', paragraphs: ['Admissions E-Mail: Wird nach Auswahl der Domain eingerichtet.', 'Telefon und WhatsApp: Nicht verfügbar.'] },
      { title: 'Wichtig', paragraphs: ['Dieser Staging-Platzhalter ist kein vollständiges deutsches Impressum. Vor dem Launch sind verifizierte Betreiberangaben und eine angemessene rechtliche Prüfung erforderlich.'] },
    ] },
    cookies: { title: 'Cookie-Informationen', intro: 'Der MVP nutzt nur erforderlichen lokalen Speicher, solange keine optionalen Dienste ergänzt werden.', sections: [
      { title: 'Erforderlicher Speicher', paragraphs: ['Eine lokale Einstellung speichert, ob du nur erforderlichen Speicher oder optionale Analytics gewählt hast. Dadurch öffnet sich das Panel nicht auf jeder Seite erneut.'] },
      { title: 'Optionale Dienste', paragraphs: ['Im MVP sind keine optionalen Analytics, Werbepixel oder eingebetteten Medien aktiv. Werden sie später ergänzt, bleiben nicht-erforderliche Dienste bis zur passenden Einwilligung deaktiviert.'] },
      { title: 'Auswahl ändern', paragraphs: ['Über Cookies verwalten im Footer kannst du das Einstellungsfenster jederzeit erneut öffnen.'] },
    ] },
  },
};

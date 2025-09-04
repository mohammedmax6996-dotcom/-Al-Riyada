import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Globe, Phone, Mail, ShieldAlert, BookOpen, CalendarClock, FileText, HelpCircle, Languages, MapPin, Scale, Accessibility, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Simple i18n content
const TEXT = {
  ar: {
    langName: "العربية",
    dir: "rtl" as const,
    brand: "الريادة",
    tagline: "معلومات واضحة، خطوات آمنة، دعم إنساني.",
    cta_book: "احجز استشارة مجانية",
    cta_contact: "تواصل معنا",
    nav: {
      services: "الخدمات",
      how: "كيف نعمل",
      eligibility: "الأهلية",
      faq: "الأسئلة الشائعة",
      contact: "اتصال",
    },
    heroNote: "لسنا محامين. نقدم معلومات عامة وإحالة إلى مختصين معتمدين.",
    contact: {
      title: "اتصل بنا",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف (اختياري)",
      message: "رسالتك",
      send: "إرسال الرسالة"
    },
    phone: "+9415510403001",
    address: "برلين، ألمانيا",
  },
  de: {
    langName: "Deutsch",
    dir: "ltr" as const,
    brand: "Al-Riyada",
    tagline: "Klare Infos, sichere Schritte, menschliche Unterstützung.",
    cta_book: "Kostenloses Erstgespräch buchen",
    cta_contact: "Kontakt aufnehmen",
    nav: { services: "Leistungen", how: "Ablauf", eligibility: "Wer?", faq: "FAQ", contact: "Kontakt" },
    heroNote: "Wir sind keine Anwaltskanzlei. Wir bieten allgemeine Informationen und Vermittlung.",
    contact: { title: "Kontakt", name: "Vollständiger Name", email: "E-Mail", phone: "Telefon (optional)", message: "Ihre Nachricht", send: "Nachricht senden" },
    phone: "+9415510403001",
    address: "Berlin, Deutschland",
  },
  en: {
    langName: "English",
    dir: "ltr" as const,
    brand: "Al-Riyada",
    tagline: "Clear info, safe steps, human support.",
    cta_book: "Book a free intake",
    cta_contact: "Contact us",
    nav: { services: "Services", how: "How it works", eligibility: "Eligibility", faq: "FAQ", contact: "Contact" },
    heroNote: "We are not a law firm. We provide general info and referrals.",
    contact: { title: "Contact us", name: "Full name", email: "Email", phone: "Phone (optional)", message: "Your message", send: "Send message" },
    phone: "+9415510403001",
    address: "Berlin, Germany",
  }
};

function Section({ id, title, children }: { id?: string; title?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {title && (
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">{title}</h2>
      )}
      {children}
    </section>
  );
}

export default function RefugeeAdvisorySite() {
  const [lang, setLang] = useState<keyof typeof TEXT>("ar");
  const t = useMemo(() => TEXT[lang], [lang]);

  return (
    <div dir={t.dir} className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6"/>
            <span className="font-semibold">{t.brand}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:underline">{t.nav.services}</a>
            <a href="#how" className="hover:underline">{t.nav.how}</a>
            <a href="#eligibility" className="hover:underline">{t.nav.eligibility}</a>
            <a href="#faq" className="hover:underline">{t.nav.faq}</a>
            <a href="#contact" className="hover:underline">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <Select value={lang} onValueChange={(v) => setLang(v as any)}>
              <SelectTrigger className="w-36"><SelectValue placeholder="Language"/></SelectTrigger>
              <SelectContent>
                <SelectItem value="ar">العربية</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main id="main">
        <Section>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">{t.tagline}</h1>
              <p className="mb-6 text-slate-600">{t.heroNote}</p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-lg px-6">
                  <CalendarClock className="w-5 h-5 mr-2"/>{t.cta_book}
                </Button>
                <Button size="lg" variant="outline" className="rounded-2xl px-6">
                  <Phone className="w-5 h-5 mr-2"/>{t.cta_contact}
                </Button>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title={t.contact.title}>
          <Card>
            <CardContent className="space-y-4">
              <p className="text-slate-700 flex items-center gap-2"><Phone className="w-5 h-5"/>{t.phone}</p>
              <p className="text-slate-700 flex items-center gap-2"><MapPin className="w-5 h-5"/>{t.address}</p>
            </CardContent>
          </Card>
        </Section>
      </main>
    </div>
  );
}

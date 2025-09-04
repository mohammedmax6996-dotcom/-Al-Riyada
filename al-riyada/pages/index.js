import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, CalendarClock, MapPin, Globe } from "lucide-react";

export default function Home() {
  const phone = "+9415510403001";
  const address = "برلين، ألمانيا";
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">الريادة</h1>
      <p className="text-slate-700 mb-6">معلومات واضحة، خطوات آمنة، دعم إنساني.</p>
      <div className="flex gap-4 mb-6">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-6 flex items-center">
          <CalendarClock className="w-5 h-5 mr-2"/> احجز استشارة مجانية
        </Button>
        <Button size="lg" variant="outline" className="rounded-2xl px-6 flex items-center">
          <Phone className="w-5 h-5 mr-2"/> تواصل معنا
        </Button>
      </div>
      <div className="text-slate-700 space-y-2">
        <p className="flex items-center gap-2"><Phone className="w-5 h-5"/>{phone}</p>
        <p className="flex items-center gap-2"><MapPin className="w-5 h-5"/>{address}</p>
      </div>
    </main>
  );
}
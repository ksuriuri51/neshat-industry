import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Lightbulb, Zap, Settings } from "lucide-react";

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#2C2C2C] to-[#1A1A1A] py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">خدمات ما</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            راه‌حل‌های جامع نورپردازی برای تمام نیازهای صنعتی و تجاری
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="w-16 h-16 text-[#B07A10]" />,
                title: "نورپردازی صنعتی",
                desc: "راه‌حل‌های روشنایی برای کارخانه‌ها، انبارها و فضاهای صنعتی با کارایی بالا",
              },
              {
                icon: <Zap className="w-16 h-16 text-[#B07A10]" />,
                title: "نورپردازی تجاری",
                desc: "طراحی و نصب سیستم‌های روشنایی برای مغازه‌ها، دفاتر و مراکز تجاری",
              },
              {
                icon: <Settings className="w-16 h-16 text-[#B07A10]" />,
                title: "مشاوره و طراحی",
                desc: "خدمات مشاوره تخصصی برای انتخاب بهترین راه‌حل نورپردازی",
              },
            ].map((service, i) => (
              <div key={i} className="bg-card rounded-lg p-8 text-center hover:shadow-lg transition">
                <div className="flex justify-center mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">{service.title}</h3>
                <p className="text-card-foreground/80">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#2C2C2C]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">فرآیند کار ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "۱", title: "مشاوره", desc: "بررسی نیازهای شما" },
              { step: "۲", title: "طراحی", desc: "ایجاد طرح بهینه" },
              { step: "۳", title: "نصب", desc: "نصب و راه‌اندازی" },
              { step: "۴", title: "پشتیبانی", desc: "خدمات پس‌فروش" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-[#B07A10] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">سوالات متداول</h2>
          <div className="space-y-6">
            {[
              {
                q: "چه مدت طول می‌کشد تا پروژه تکمیل شود؟",
                a: "مدت زمان بستگی به اندازه و پیچیدگی پروژه دارد. معمولاً بین 2 تا 8 هفته طول می‌کشد.",
              },
              {
                q: "آیا شما نصب و راه‌اندازی انجام می‌دهید؟",
                a: "بله، ما خدمات نصب، راه‌اندازی و آموزش را برای تمام پروژه‌ها ارائه می‌دهیم.",
              },
              {
                q: "چه نوع گارانتی برای محصولات ارائه می‌دهید؟",
                a: "تمام محصولات ما با گارانتی 2 سال و خدمات پشتیبانی 24/7 ارائه می‌شوند.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-card rounded-lg p-6">
                <h3 className="text-lg font-bold text-card-foreground mb-3">{faq.q}</h3>
                <p className="text-card-foreground/80">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#B07A10] to-[#8A5E00]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">آماده‌اید شروع کنید؟</h2>
          <Link href="/contact">
            <a>
              <Button className="bg-white text-[#B07A10] hover:bg-gray-100 px-8 py-6 text-lg">
                درخواست مشاوره
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}

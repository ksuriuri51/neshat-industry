import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Star, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-gradient-to-b from-[#2C2C2C] to-[#1A1A1A] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(28,28,28,0.8) 0%, rgba(28,28,28,0.6) 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#B07A10] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#B07A10] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in-up mb-6">
            <p className="text-[#B07A10] text-sm font-semibold tracking-widest mb-4">
              صنعت نور — NESHAT INDUSTRY
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              روشنایی حرفه‌ای برای فضاهای صنعتی و تجاری
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              تأمین‌کننده انواع لامپ‌های LED، نورپردازی صنعتی، تزئینی و سقفی با کیفیت برتر
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <a>
                <Button className="bg-[#B07A10] hover:bg-[#8A5E00] text-white px-8 py-6 text-lg">
                  مشاهده محصولات
                </Button>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                >
                  تماس با ما
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">دسته‌های محصول</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: "لامپ LED", icon: "💡" },
              { name: "نورپردازی صنعتی", icon: "🏭" },
              { name: "چراغ‌های تزئینی", icon: "✨" },
              { name: "چراغ‌های سقفی", icon: "🔆" },
              { name: "نورپردازی خطی", icon: "📏" },
            ].map((cat) => (
              <Link key={cat.name} href="/shop">
                <a className="group">
                  <div className="bg-card rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
                    <div className="text-5xl mb-4">{cat.icon}</div>
                    <h3 className="font-bold text-lg text-card-foreground">{cat.name}</h3>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#2C2C2C]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">چرا نشاط صنعت؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-[#B07A10]" />,
                title: "کیفیت برتر",
                desc: "محصولات با استانداردهای بین‌المللی و تضمین طولانی‌مدت",
              },
              {
                icon: <Star className="w-12 h-12 text-[#B07A10]" />,
                title: "تجربه طولانی",
                desc: "بیش از یک دهه تجربه در صنعت روشنایی و نورپردازی",
              },
              {
                icon: <ArrowLeft className="w-12 h-12 text-[#B07A10]" />,
                title: "پشتیبانی فوری",
                desc: "تیم متخصص برای پاسخگویی سریع و حل مسائل",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-[#1A1A1A] rounded-lg p-8 text-right">
                <div className="flex justify-end mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#B07A10] to-[#8A5E00]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">آماده‌اید برای روشنایی بهتر؟</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            با تیم متخصص ما تماس بگیرید و راه‌حل نورپردازی مناسب برای فضای خود را پیدا کنید.
          </p>
          <Link href="/contact">
            <a>
              <Button className="bg-white text-[#B07A10] hover:bg-gray-100 px-8 py-6 text-lg font-bold">
                درخواست مشاوره رایگان
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}

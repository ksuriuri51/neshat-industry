import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#2C2C2C] to-[#1A1A1A] py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">درباره نشاط صنعت</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            تأمین‌کننده پیشرو در صنعت روشنایی و نورپردازی ایران
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-right">داستان ما</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6 text-right">
            نشاط صنعت با تعهد به ارائه بهترین محصولات روشنایی، در سال‌های گذشته به یکی از تأمین‌کنندگان معتبر در صنعت تبدیل شده است.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6 text-right">
            تیم ما متشکل از متخصصین با تجربه در زمینه نورپردازی صنعتی، تزئینی و تجاری است که همیشه به دنبال ارائه راه‌حل‌های نوآورانه است.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed text-right">
            ما بر کیفیت، پایایی و خدمات پس‌فروش عالی تمرکز داریم تا مشتریان ما بتوانند به محصولات ما اعتماد کنند.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#2C2C2C]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "سال تجربه" },
              { number: "500+", label: "مشتری راضی" },
              { number: "1000+", label: "محصول" },
              { number: "24/7", label: "پشتیبانی" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-bold text-[#B07A10] mb-2">{stat.number}</div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">ارزش‌های ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "کیفیت", desc: "محصولات با بالاترین استانداردها" },
              { title: "اعتماد", desc: "شفافیت و صداقت در تمام تعاملات" },
              { title: "نوآوری", desc: "تکنولوژی‌های جدید و راه‌حل‌های خلاقانه" },
            ].map((value, i) => (
              <div key={i} className="bg-card rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-[#B07A10] mb-4">{value.title}</h3>
                <p className="text-card-foreground/80">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#B07A10] to-[#8A5E00]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">می‌خواهید با ما کار کنید؟</h2>
          <Link href="/contact">
            <a>
              <Button className="bg-white text-[#B07A10] hover:bg-gray-100 px-8 py-6 text-lg">
                تماس با ما
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}

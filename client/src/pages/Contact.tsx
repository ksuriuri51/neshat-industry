import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#2C2C2C] to-[#1A1A1A] py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">تماس با ما</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ما اینجا هستیم تا به شما کمک کنیم. با ما تماس بگیرید.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">اطلاعات تماس</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-[#B07A10] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">آدرس</h3>
                    <p className="text-foreground/80">تهران، ایران</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-[#B07A10] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">تلفن</h3>
                    <a
                      href="tel:021XXXXXXXX"
                      className="text-[#B07A10] hover:underline"
                    >
                      ۰۲۱-XXXXXXXX
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-[#B07A10] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">ایمیل</h3>
                    <a
                      href="mailto:info@neshat-industry.com"
                      className="text-[#B07A10] hover:underline"
                    >
                      info@neshat-industry.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mt-12 bg-card rounded-lg p-6">
                <h3 className="font-bold text-card-foreground mb-4">ساعات کاری</h3>
                <div className="space-y-2 text-card-foreground/80 text-sm">
                  <p>شنبه تا چهارشنبه: ۸:۰۰ - ۱۷:۰۰</p>
                  <p>پنجشنبه: ۸:۰۰ - ۱۲:۰۰</p>
                  <p>جمعه: تعطیل</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">فرم تماس</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    نام
                  </label>
                  <Input
                    type="text"
                    placeholder="نام خود را وارد کنید"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    ایمیل
                  </label>
                  <Input
                    type="email"
                    placeholder="ایمیل خود را وارد کنید"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    تلفن
                  </label>
                  <Input
                    type="tel"
                    placeholder="شماره تلفن خود را وارد کنید"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    پیام
                  </label>
                  <Textarea
                    placeholder="پیام خود را وارد کنید"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#B07A10] hover:bg-[#8A5E00] text-white py-6 text-lg"
                >
                  <Send size={18} className="mr-2" />
                  ارسال پیام
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-[#2C2C2C]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">موقعیت ما</h2>
          <div className="bg-gray-700 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-300 text-lg">نقشه تهران - نشاط صنعت</p>
          </div>
        </div>
      </section>
    </div>
  );
}

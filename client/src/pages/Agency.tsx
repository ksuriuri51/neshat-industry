import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function Agency() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    city: "",
    experience: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Agency form submitted:", formData);
    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      city: "",
      experience: "",
      message: "",
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#2C2C2C] to-[#1A1A1A] py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            درخواست نمایندگی فروش
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            به تیم نشاط صنعت بپیوندید و نمایندگی فروش محصولات ما را برعهده بگیرید
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            مزایای همکاری با نشاط صنعت
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "محصولات با کیفیت",
                desc: "دسترسی به محصولات LED و نورپردازی با بالاترین کیفیت",
              },
              {
                title: "پشتیبانی کامل",
                desc: "آموزش، مشاوره و پشتیبانی فروش برای موفقیت شما",
              },
              {
                title: "قیمت رقابتی",
                desc: "قیمت‌های عمده‌فروشی مناسب برای حاشیه سود بالا",
              },
              {
                title: "مواد تبلیغاتی",
                desc: "کاتالوگ، پوسترها و مواد تبلیغاتی برای فروش",
              },
              {
                title: "آپدیت محصولات",
                desc: "دسترسی به آخرین محصولات و تکنولوژی‌های نوین",
              },
              {
                title: "درآمد مکرر",
                desc: "کمیسیون‌های جذاب و درآمد پایدار",
              },
            ].map((benefit, i) => (
              <div key={i} className="bg-card rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-card-foreground/80">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-[#2C2C2C]">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            فرم درخواست نمایندگی
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 bg-[#1A1A1A] p-8 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                نام شرکت
              </label>
              <Input
                type="text"
                placeholder="نام شرکت خود را وارد کنید"
                value={formData.companyName}
                onChange={(e) =>
                  setFormData({ ...formData, companyName: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                نام تماس‌گیرنده
              </label>
              <Input
                type="text"
                placeholder="نام خود را وارد کنید"
                value={formData.contactName}
                onChange={(e) =>
                  setFormData({ ...formData, contactName: e.target.value })
                }
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
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
                <label className="block text-sm font-medium text-white mb-2">
                  تلفن
                </label>
                <Input
                  type="tel"
                  placeholder="شماره تلفن خود را وارد کنید"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  شهر
                </label>
                <Input
                  type="text"
                  placeholder="شهر خود را وارد کنید"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  تجربه در صنعت
                </label>
                <Select
                  value={formData.experience}
                  onValueChange={(value) =>
                    setFormData({ ...formData, experience: value })
                  }
                >
                  <SelectTrigger className="bg-card text-card-foreground">
                    <SelectValue placeholder="انتخاب کنید" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">کمتر از 1 سال</SelectItem>
                    <SelectItem value="1-3">1 تا 3 سال</SelectItem>
                    <SelectItem value="3-5">3 تا 5 سال</SelectItem>
                    <SelectItem value="5+">بیش از 5 سال</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                توضیحات و انگیزه
              </label>
              <Textarea
                placeholder="چرا می‌خواهید نمایندگی نشاط صنعت باشید؟"
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
              ارسال درخواست
            </Button>
          </form>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            مراحل بعدی
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "۱",
                title: "ارسال درخواست",
                desc: "فرم درخواست خود را تکمیل و ارسال کنید",
              },
              {
                step: "۲",
                title: "بررسی",
                desc: "تیم ما درخواست شما را بررسی می‌کند",
              },
              {
                step: "۳",
                title: "مصاحبه",
                desc: "تماس برای بحث درباره شرایط و فرصت‌ها",
              },
              {
                step: "۴",
                title: "قرارداد",
                desc: "امضای قرارداد و شروع همکاری",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-12 h-12 bg-[#B07A10] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

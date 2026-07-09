import { Link } from "wouter";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 mt-20">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="text-right">
          <div className="w-12 h-12 bg-gradient-to-br from-[#B07A10] to-[#8A5E00] rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
            ن
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            نشاط صنعت، تأمین‌کننده انواع لامپ و چراغ LED با بیش از یک دهه تجربه در صنعت روشنایی ایران.
          </p>
          <a
            href="https://instagram.com/NESHAT_ACCOUNT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#B07A10] hover:text-white transition"
          >
            <Instagram size={20} />
            <span className="text-sm">اینستاگرام</span>
          </a>
        </div>

        {/* Quick Links */}
        <div className="text-right">
          <h5 className="text-white font-bold mb-4">دسترسی سریع</h5>
          <ul className="space-y-3">
            {[
              { label: "صفحه اصلی", href: "/" },
              { label: "درباره ما", href: "/about" },
              { label: "خدمات", href: "/services" },
              { label: "فروشگاه", href: "/shop" },
              { label: "تماس با ما", href: "/contact" },
              { label: "درخواست نمایندگی فروش", href: "/agency" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <a className="text-sm text-gray-400 hover:text-[#B07A10] transition flex items-center justify-end gap-2">
                    <span>›</span>
                    <span>{link.label}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Categories */}
        <div className="text-right">
          <h5 className="text-white font-bold mb-4">محصولات</h5>
          <ul className="space-y-3">
            {[
              { label: "لامپ LED", href: "/shop" },
              { label: "نورپردازی صنعتی", href: "/shop" },
              { label: "چراغ‌های تزئینی", href: "/shop" },
              { label: "چراغ‌های سقفی", href: "/shop" },
              { label: "نورپردازی خطی", href: "/shop" },
            ].map((link) => (
              <li key={link.label}>
                <Link href={link.href}>
                  <a className="text-sm text-gray-400 hover:text-[#B07A10] transition flex items-center justify-end gap-2">
                    <span>›</span>
                    <span>{link.label}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-right">
          <h5 className="text-white font-bold mb-4">تماس با ما</h5>
          <ul className="space-y-3">
            <li className="flex items-center justify-end gap-3">
              <span className="text-sm text-gray-400">تهران — آدرس شرکت</span>
              <MapPin size={16} className="text-[#B07A10]" />
            </li>
            <li>
              <a
                href="tel:021XXXXXXXX"
                className="flex items-center justify-end gap-3 text-sm text-gray-400 hover:text-[#B07A10] transition"
              >
                <span>۰۲۱-XXXXXXXX</span>
                <Phone size={16} className="text-[#B07A10]" />
              </a>
            </li>
            <li>
              <a
                href="mailto:info@neshat-industry.com"
                className="flex items-center justify-end gap-3 text-sm text-gray-400 hover:text-[#B07A10] transition"
              >
                <span>info@neshat-industry.com</span>
                <Mail size={16} className="text-[#B07A10]" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#111] border-t border-[#333]">
        <div className="container mx-auto px-4 py-6 text-center text-xs text-gray-500">
          <p>© ۱۴۰۴ نشاط صنعت — تمام حقوق محفوظ است | طراحی و توسعه: تیم نشاط</p>
        </div>
      </div>
    </footer>
  );
}

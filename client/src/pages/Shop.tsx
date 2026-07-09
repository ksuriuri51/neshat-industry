import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShoppingCart, Star } from "lucide-react";

export default function Shop() {
  const products = [
    { id: 1, name: "لامپ LED 10W", price: "۱۵۰,۰۰۰ تومان", rating: 4.5 },
    { id: 2, name: "لامپ LED 20W", price: "۲۵۰,۰۰۰ تومان", rating: 4.8 },
    { id: 3, name: "چراغ صنعتی LED", price: "۵۰۰,۰۰۰ تومان", rating: 4.6 },
    { id: 4, name: "چراغ سقفی LED", price: "۳۵۰,۰۰۰ تومان", rating: 4.7 },
    { id: 5, name: "نورپردازی خطی", price: "۶۰۰,۰۰۰ تومان", rating: 4.9 },
    { id: 6, name: "چراغ تزئینی LED", price: "۲۰۰,۰۰۰ تومان", rating: 4.4 },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#2C2C2C] to-[#1A1A1A] py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">فروشگاه</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            انتخاب گسترده‌ای از محصولات روشنایی LED با کیفیت برتر
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "همه",
              "لامپ LED",
              "نورپردازی صنعتی",
              "چراغ‌های تزئینی",
              "چراغ‌های سقفی",
              "نورپردازی خطی",
            ].map((cat) => (
              <button
                key={cat}
                className="px-6 py-2 rounded-lg bg-card text-card-foreground hover:bg-[#B07A10] hover:text-white transition"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div className="bg-gradient-to-br from-[#B07A10] to-[#8A5E00] h-48 flex items-center justify-center">
                  <div className="text-6xl">💡</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < Math.floor(product.rating)
                            ? "fill-[#B07A10] text-[#B07A10]"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="text-sm text-card-foreground/60">({product.rating})</span>
                  </div>
                  <p className="text-2xl font-bold text-[#B07A10] mb-4">{product.price}</p>
                  <Link href={`/product/${product.id}`}>
                    <a>
                      <Button className="w-full bg-[#B07A10] hover:bg-[#8A5E00] text-white">
                        <ShoppingCart size={18} className="mr-2" />
                        مشاهده و خرید
                      </Button>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#B07A10] to-[#8A5E00]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">نمی‌توانید محصول مناسب را پیدا کنید؟</h2>
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

import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { ShoppingCart, Star, ChevronRight } from "lucide-react";

export default function ProductDetail() {
  const params = useParams();
  const productId = params.id;

  const product = {
    name: "لامپ LED 20W",
    price: "۲۵۰,۰۰۰ تومان",
    rating: 4.8,
    reviews: 124,
    description: "لامپ LED 20W با کیفیت برتر و مصرف انرژی کم. مناسب برای استفاده صنعتی و تجاری.",
    specs: [
      { label: "توان", value: "20W" },
      { label: "ولتاژ", value: "220V" },
      { label: "رنگ نور", value: "سفید سرد (6500K)" },
      { label: "عمر مفید", value: "50,000 ساعت" },
      { label: "گارانتی", value: "2 سال" },
    ],
  };

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-2 text-sm">
          <Link href="/">
            <a className="text-[#B07A10] hover:underline">صفحه اصلی</a>
          </Link>
          <ChevronRight size={16} className="text-gray-400" />
          <Link href="/shop">
            <a className="text-[#B07A10] hover:underline">فروشگاه</a>
          </Link>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-gradient-to-br from-[#B07A10] to-[#8A5E00] rounded-lg h-96 flex items-center justify-center">
              <div className="text-9xl">💡</div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={
                        i < Math.floor(product.rating)
                          ? "fill-[#B07A10] text-[#B07A10]"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-foreground/60">
                  {product.rating} از 5 ({product.reviews} نظر)
                </span>
              </div>

              {/* Price */}
              <p className="text-4xl font-bold text-[#B07A10] mb-6">{product.price}</p>

              {/* Description */}
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">{product.description}</p>

              {/* Quantity & Add to Cart */}
              <div className="flex gap-4 mb-8">
                <input
                  type="number"
                  defaultValue="1"
                  min="1"
                  className="w-20 px-4 py-3 border border-border rounded-lg bg-card text-card-foreground"
                />
                <Button className="flex-1 bg-[#B07A10] hover:bg-[#8A5E00] text-white py-6 text-lg">
                  <ShoppingCart size={20} className="mr-2" />
                  افزودن به سبد خرید
                </Button>
              </div>

              {/* Specs */}
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-4">مشخصات فنی</h3>
                <div className="space-y-3">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="text-card-foreground/80">{spec.label}</span>
                      <span className="font-semibold text-card-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-[#2C2C2C]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">محصولات مرتبط</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "لامپ LED 10W", price: "۱۵۰,۰۰۰ تومان" },
              { name: "چراغ صنعتی LED", price: "۵۰۰,۰۰۰ تومان" },
              { name: "چراغ سقفی LED", price: "۳۵۰,۰۰۰ تومان" },
            ].map((prod, i) => (
              <Link key={i} href="/shop">
                <a className="bg-[#1A1A1A] rounded-lg p-6 hover:shadow-lg transition">
                  <div className="bg-gradient-to-br from-[#B07A10] to-[#8A5E00] h-40 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-5xl">💡</div>
                  </div>
                  <h3 className="font-bold text-white mb-2">{prod.name}</h3>
                  <p className="text-[#B07A10] font-bold">{prod.price}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#B07A10] to-[#8A5E00]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">سوالی دارید؟</h2>
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

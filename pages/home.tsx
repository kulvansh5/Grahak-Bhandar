import { Hero } from '@/components/ui/hero';
import { FeaturedProducts } from '@/components/ui/featured-products';
import { CategorySection } from '@/components/ui/category-section';
import { PromotionalBanner } from '@/components/ui/promotional-banner';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <PromotionalBanner />
      <FeaturedProducts />
      <CategorySection />
    </main>
  );
}
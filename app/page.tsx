// import Header from "@/components/block/Header";
import FAQBlock from "@/components/block/FAQBlock";
import FeaturesBlock from "@/components/block/FeaturesBlock";
import FooterBlock from "@/components/block/FooterBlock";
import Header from "@/components/block/Header";
import HeroBlock from "@/components/block/HeroBlock";
// import PriceBlock from "@/components/block/PriceBlock";

export default function Home() {
  return (
    <div className="p-2">
      <Header />
      <HeroBlock />
      <FeaturesBlock />
      {/* <PriceBlock /> */}
      <FAQBlock />
      <FooterBlock />
    </div>
  );
}

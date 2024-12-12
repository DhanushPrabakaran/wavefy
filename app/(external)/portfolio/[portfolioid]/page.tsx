import { fetchProfileAction } from "@/actions/portfolioActions";

import SolarBlackPortfolioPage from "@/components/block/portfolio/SolarBlackPortfolioPage";
import SolarRedPortfolioPage from "@/components/block/portfolio/SolarRedPortfolioPage";
import SolarWhitePortfolioPage from "@/components/block/portfolio/SolarWhitePortfolioPage";
const themeMap = [
  SolarBlackPortfolioPage,
  SolarRedPortfolioPage,
  SolarWhitePortfolioPage,
];
export default async function Page({
  params,
}: {
  params: Promise<{ portfolioid: string }>;
}) {
  const portfolioid = (await params).portfolioid;
  const user = await fetchProfileAction(portfolioid);
  const ThemeComponent = themeMap[user.ThemeNo] || themeMap[0];

  return (
    <>
      <ThemeComponent User={user} />
    </>
  );
}

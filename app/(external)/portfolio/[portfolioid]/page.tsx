import { fetchProfileAction } from "@/actions/portfolioActions";

import PortfolioPage from "@/components/block/portfolio/portfolioPage";
import Cursor from "@/components/ui/Cursor";

const themeMap = [PortfolioPage, PortfolioPage, PortfolioPage, PortfolioPage];
export default async function Page({
  params,
}: {
  params: Promise<{ portfolioid: string }>;
}) {
  const portfolioid = (await params).portfolioid;
  const user = await fetchProfileAction(portfolioid);

  const ThemeComponent = themeMap[user.ThemeNo] || themeMap[1];

  return (
    <>
      <ThemeComponent User={user} />
      <Cursor />
    </>
  );
}

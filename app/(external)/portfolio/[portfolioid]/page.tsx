import { fetchProfileAction } from "@/actions/portfolioActions";

import SolarBlackPortfolioPage from "@/components/block/portfolio/SolarBlackPortfolioPage";

const themeMap = [
  SolarBlackPortfolioPage,
  SolarBlackPortfolioPage,
  SolarBlackPortfolioPage,
  SolarBlackPortfolioPage,
];
export default async function Page({
  params,
}: {
  params: Promise<{ portfolioid: string }>;
}) {
  const portfolioid = (await params).portfolioid;
  const user = await fetchProfileAction(portfolioid);
  console.log(user);
  const ThemeComponent = themeMap[user.ThemeNo] || themeMap[1];

  return (
    <>
      <ThemeComponent User={user} />
    </>
  );
}

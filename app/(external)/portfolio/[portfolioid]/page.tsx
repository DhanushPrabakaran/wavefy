import { fetchProfileAction } from "@/actions/portfolioActions";
// import { fetchProject } from "@/actions/projectAction";
import PortfolioPage from "@/components/block/portfolio/portfolioPage";

export default async function Page({
  params,
}: {
  params: Promise<{ portfolioid: string }>;
}) {
  const portfolioid = (await params).portfolioid;
  const user = await fetchProfileAction(portfolioid);
  // [portfolioid];
  return <PortfolioPage User={user} />;
}

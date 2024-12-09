import { fetchProfileAction } from "@/actions/portfolioActions";
// import { fetchProject } from "@/actions/projectAction";
import PortfolioPage from "@/components/block/portfolio/portfolioPage";
import Cursor from "@/components/ui/Cursor";

export default async function Page({
  params,
}: {
  params: Promise<{ portfolioid: string }>;
}) {
  const portfolioid = (await params).portfolioid;
  const user = await fetchProfileAction(portfolioid);

  return (
    <>
      <PortfolioPage User={user} />
      <Cursor />
    </>
  );
}

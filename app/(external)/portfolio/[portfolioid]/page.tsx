import PortfolioPage from "@/components/block/portfolio/portfolioPage";

export default async function Page({
  params,
}: {
  params: Promise<{ portfolioid: string }>;
}) {
  const portfolioid = (await params).portfolioid;
  // const data = await fetchProject(experienceid);
  // [portfolioid];
  return (
    <div>
      page{portfolioid}
      <PortfolioPage />
    </div>
  );
}

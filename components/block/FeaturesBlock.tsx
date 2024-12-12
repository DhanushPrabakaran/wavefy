import {
  DollarSign,
  MessagesSquare,
  PersonStanding,
  Timer,
  Zap,
  ZoomIn,
} from "lucide-react";

const features = [
  {
    title: "Performance",
    description:
      "Experience lightning-fast performance with optimized pages that ensure your portfolio loads quickly on any device.",
    icon: <Timer className="size-4 md:size-6" />,
  },
  {
    title: "Innovation",
    description:
      "Enjoy cutting-edge features and modern designs that make your portfolio stand out from the crowd.",
    icon: <Zap className="size-4 md:size-6" />,
  },
  {
    title: "Quality",
    description:
      "Create a polished and professional portfolio with high-quality templates and tools.",
    icon: <ZoomIn className="size-4 md:size-6" />,
  },
  {
    title: "Accessibility",
    description:
      "Ensure your portfolio is accessible to everyone, including users with disabilities, with our inclusive design practices",
    icon: <PersonStanding className="size-4 md:size-6" />,
  },
  {
    title: "Affordability",
    description:
      "Choose from flexible pricing plans that cater to all budgets without compromising on quality",
    icon: <DollarSign className="size-4 md:size-6" />,
  },
  {
    title: "Customer Support",
    description:
      "Get dedicated support to assist you with building and managing your portfolio.",
    icon: <MessagesSquare className="size-4 md:size-6" />,
  },
];

const FeaturesBlock = () => {
  return (
    <section className=" ">
      <div className="container mx-auto max-w-screen-xl">
        <p className="mb-4 text-xs text-muted-foreground md:pl-5">Features</p>
        <h2 className="text-3xl font-antonsc font-medium md:pl-5 lg:text-4xl">
          Our Core Features
        </h2>
        <div className="mx-auto mt-14 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:mt-20">
          {features.map((feature, idx) => (
            <div className="flex gap-6 rounded-lg md:block md:p-5 " key={idx}>
              <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                {feature.icon}
              </span>
              <div>
                <h3 className="font-medium md:mb-2 md:text-xl">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBlock;

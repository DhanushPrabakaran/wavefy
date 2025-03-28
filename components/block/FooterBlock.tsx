const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Pricing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { name: "Twitter", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "LinkedIn", href: "#" },
    ],
  },
];

const FooterBlock = () => {
  return (
    <footer>
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
        <div className="col-span-2 mb-8 lg:mb-0">
          <h1 className=" font-antonsc text-4xl">
            portfolio<span className="text-orange-700">forge</span>
          </h1>
          <p className="font-bold">Components made easy.</p>
        </div>
        {sections.map((section, sectionIdx) => (
          <div key={sectionIdx}>
            <h3 className="mb-4 font-bold">{section.title}</h3>
            <ul className="space-y-4 text-muted-foreground">
              {section.links.map((link, linkIdx) => (
                <li key={linkIdx} className="font-medium hover:text-primary">
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
        <p>© 2024 Shadcn. All rights reserved.</p>
        <ul className="flex gap-4">
          <li className="underline hover:text-primary">
            <a href="#"> Terms and Conditions</a>
          </li>
          <li className="underline hover:text-primary">
            <a href="#"> Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterBlock;

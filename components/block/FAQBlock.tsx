import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQBlock = () => {
  const faqs = [
    {
      question: "What is Portfolio Forge?",
      answer:
        "Portfolio Forge is a platform designed to help individuals and professionals build and manage their online portfolios with ease.",
    },
    {
      question: "Who can use Portfolio Forge?",
      answer:
        "Anyone looking to showcase their skills, projects, or experiences can use Portfolio Forge, from students and freelancers to working professionals.",
    },
    {
      question: "Is there a free plan available?",
      answer:
        "Yes, we offer a free plan with basic features, perfect for personal use and simple portfolios.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply sign up on our platform, choose a template, and start adding your details. It's that easy!",
    },
  ];

  return (
    <section className=" flex  items-center align-middle justify-center min-h-screen">
      <div className=" max-w-4xl">
        <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-5xl">
          Frequently asked questions
        </h1>
        {faqs.map((faq, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="hover:text-foreground/60 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default FAQBlock;

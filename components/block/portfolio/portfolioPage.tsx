"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
// import { cn } from "@/lib/utils";

const PortfolioPage = () => {
  // State for the message form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending the message (you can replace with actual form submission logic)
    setTimeout(() => {
      alert("Message sent!");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <section className="w-full p-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Dhanush Prabakaran</h1>
          <p className="mt-4 text-xl">
            Web Developer | Enthusiast | Problem Solver
          </p>
        </div>
      </section>

      {/* User Data Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">About Me</h2>
          <p className="text-lg text-center">
            I{"'"}m a passionate web developer currently in my final year of
            BTech, focused on building innovative solutions. I specialize in the
            MEAN stack, AWS, and Next.js, and Im always learning new
            technologies to stay ahead.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 bg-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Project */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">ShopTracker</h3>
              <p className="text-gray-700 mt-4">
                A platform for real-time crowd-sourced product and price data.
              </p>
            </div>
            {/* Add more projects here */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Project 2</h3>
              <p className="text-gray-700 mt-4">Description of project 2...</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Project 3</h3>
              <p className="text-gray-700 mt-4">Description of project 3...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Experience
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">rtCamp - Web Developer</h3>
              <p className="text-gray-700 mt-4">Jan 2024 - Present</p>
              <p className="text-gray-700 mt-2">
                Building scalable web applications with cutting-edge
                technologies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">
                Juspay - Frontend Developer
              </h3>
              <p className="text-gray-700 mt-4">June 2023 - Dec 2023</p>
              <p className="text-gray-700 mt-2">
                Worked on enhancing user interfaces and optimizing frontend
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Contact Me
          </h2>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Dhanush Prabakaran. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PortfolioPage;

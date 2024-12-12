"use client";

import { ArrowRight, CircleCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const PriceBlock = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h2 className="text-pretty text-4xl font-bold lg:text-6xl">
            Pricing
          </h2>
          <p className="text-muted-foreground lg:text-xl">
            Check out our affordable pricing plans
          </p>
          <div className="flex flex-col items-stretch gap-6 md:flex-row">
            <Card className="flex w-80 flex-col justify-between text-left">
              <CardHeader>
                <CardTitle>
                  <p>Free</p>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  For personal use
                </p>
                <span className="text-4xl font-bold">$0</span>
              </CardHeader>
              <CardContent>
                <Separator className="mb-6" />
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Create a basic portfolio</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Access to core templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Basic theme customization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Responsive design support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full">
                  Get Started
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex w-80 flex-col justify-between text-left">
              <CardHeader>
                <CardTitle>
                  <p>Pro</p>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  For professionals
                </p>
                <span className="text-4xl font-bold">$49</span>
              </CardHeader>
              <CardContent>
                <Separator className="mb-6" />
                <p className="mb-3 text-lg font-semibold">
                  Everything in Free+
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Everything in Free+</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Advanced customization options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Access to premium themes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Enhanced analytics and insights</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full">
                  Get Started
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceBlock;

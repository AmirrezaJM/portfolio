// components/ConnectCard.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CardHeader } from "../CardHeader";

export function Contact() {
  return (
    <section id="connect" className="pb-16 lg:py-8">
      <div className="container mx-auto px-2 [container-type:inline-size]">
      <CardHeader title="Let's Connect" />
        <Card className="bg-gradient-to-b relative from-black/70 to-black/40 backdrop-blur border border-white/10 rounded-2xl p-6 text-white w-full">
          <CardContent className="space-y-6">
            <h2 className="text-xl font-semibold text-center md:text-left">Connect with me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="First name"
                className="bg-[#111] border-white/10"
              />
              <Input
                placeholder="Last name"
                className="bg-[#111] border-white/10"
              />
              <Input
                placeholder="Email"
                className="bg-[#111] border-white/10"
              />
              <Input
                placeholder="Phone"
                className="bg-[#111] border-white/10"
              />
            </div>

            <div className="space-y-2">
              <label className="inline-block text-sm text-white/60 mb-3">Your Requirement</label>
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {["Frontend", "Backend", "Software", "fullStack"].map((tag) => (
                  <Button
                    key={tag}
                    variant="outline"
                    className="border-white/10 text-white/50 hover:bg-white/10 hover:text-white/90"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm text-white/60 mb-3 block">
                How can I help?
              </label>
              <Textarea
                placeholder="Feel free to outline your ideas or needs..."
                className="bg-[#111] border-white/10 min-h-[120px]"
              />
            </div>

            <Button className="w-full bg-white text-black hover:bg-white/80">
              Submit
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <main className="pt-smallNavbarOffset md:pt-navbarOffset">
      {/* Hero Section with Map */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] rounded-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.156478631798!2d85.3085936751713!3d27.71245452526669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191412b0f06d%3A0x4d7c12aedab6bf6e!2sHard%20Rock%20Treks%20%26%20Expedition%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1732029486799!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          className="absolute inset-0"
        ></iframe>
      </div>

      {/* Contact Information and Form */}
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Hard Rock Treks & Expedition Pvt. Ltd.
              </CardTitle>
              <CardDescription>Get in touch with us</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="text-gray-500" />
                <span>Thamel Marg, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-gray-500" />
                <span>+977 1 5363375 or +977 1 5359067</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-gray-500" />
                <span>+977 9841117524 (Om)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-gray-500" />
                <span>hardrocktreks@yahoo.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-gray-500" />
                <span>hardrockom@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-gray-500" />
                <span>info@hardrocktreks.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="text-gray-500" />
                <a
                  href="http://www.hardrocktreks.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  www.hardrocktreks.com
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Send us a message
              </CardTitle>
              <CardDescription>
                We'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="mt-1"
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

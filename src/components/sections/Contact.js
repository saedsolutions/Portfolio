// src/components/sections/Contact.js
import { Button } from '../ui/button';

export function Contact() {
  return (
    <section className="py-20 text-center container mx-auto px-4">
      <h2 className="text-3xl font-semibold">Get in Touch</h2>
      <p className="text-gray-600 mt-4">Interested in working together? Let's chat!</p>
      <Button className="mt-6 bg-blue-600 text-white hover:bg-blue-700">
        Contact Me
      </Button>
    </section>
  );
}
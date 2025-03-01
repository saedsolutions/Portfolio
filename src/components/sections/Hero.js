// src/components/sections/Hero.js
import { Button } from '../ui/button';

export function Hero() {
  return (
    <header className="text-center py-20 bg-blue-600 text-white">
      <h1 className="text-4xl font-bold">Hi, I'm Saed - A Freelance Developer</h1>
      <p className="mt-4 text-lg">Building modern and responsive web applications.</p>
      <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-100">
        Hire Me
      </Button>
    </header>
  );
}
// src/components/sections/Hero.js
import { Button } from '../ui/button.js';
import MatrixBackground from "../ui/matrix.jsx";

export function Hero() {
  return (
    <header className="relative w-full min-h-[400px] flex items-center justify-center text-center text-white">
      <MatrixBackground className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 px-4 py-20">
        <h1 className="text-4xl font-bold">Hi, I'm Saed - A Freelance Developer</h1>
        <p className="mt-4 text-lg">Building modern and responsive web applications.</p>
        <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-100">
          Hire Me
        </Button>
      </div>
    </header>
  );
}
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-6 px-8">
      <div className="text-2xl font-bold">Mumair</div>
      <nav className="space-x-6">
        <a href="#about">About Me</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <Button className="bg-orange-500 text-white">Download CV</Button>
    </header>
  );
};

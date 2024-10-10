import { Card } from '@/components/ui/card';
import Image from 'next/image';

const projects = [
  { title: 'AI Landing Page Design', image: '/project1.jpg', category: 'Web Design' },
  { title: 'Business Landing Page', image: '/project2.jpg', category: 'App Design' },
  { title: 'Ecom Web Page Design', image: '/project3.jpg', category: 'Graphic Design' },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-16 px-8">
      <h2 className="text-4xl font-bold text-center">My Projects</h2>
      <div className="flex justify-center mt-6">
        <div className="space-x-4">
          <button className="text-gray-500">All</button>
          <button className="text-gray-500">Web Design</button>
          <button className="text-gray-500">App Design</button>
          <button className="text-gray-500">Graphic Design</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {projects.map((project, index) => (
          <Card key={index} className="p-6">
            <Image src={project.image} alt={project.title} width={350} height={200} />
            <h3 className="text-xl font-bold mt-4">{project.title}</h3>
            <p className="text-gray-500 mt-2">{project.category}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

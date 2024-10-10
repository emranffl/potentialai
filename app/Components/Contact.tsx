import { Button } from '@/components/ui/button';

export const Contact = () => {
  return (
    <section id="contact" className="py-16 px-8 bg-gray-50">
      <h2 className="text-4xl font-bold text-center">Let@apos;s Design Together</h2>
      <form className="mt-10 flex justify-center">
        <input type="email" placeholder="Enter your email" className="p-2 border border-gray-300" />
        <Button className="ml-2 bg-orange-500 text-white">Contact Me</Button>
      </form>
    </section>
  );
};

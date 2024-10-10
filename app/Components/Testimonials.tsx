import { Card } from '@/components/ui/card';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 px-8">
      <h2 className="text-4xl font-bold text-center">Testimonials</h2>
      <div className="mt-10 flex justify-center">
        <Card className="p-6">
          <p className="text-center text-xl">&quot;Excellent work, very professional and timely!&quot;</p>
          <div className="text-center mt-6">
            <p className="font-bold">John Doe</p>
            <p className="text-gray-500">CEO, Company Name</p>
          </div>
        </Card>
      </div>
    </section>
  );
};

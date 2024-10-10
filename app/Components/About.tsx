import Image from 'next/image';

export const About = () => {
  return (
    <section id="about" className="py-16 px-8">
      <div className="text-center">
        <Image src="/profile.jpg" alt="Profile Image" width={150} height={150} className="rounded-full mx-auto" />
        <h2 className="text-4xl font-bold mt-6">Hi, I am Muhammad Umair</h2>
        <p className="mt-4">UI & UX Designer</p>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold">About Me</h3>
        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

        <div className="mt-6">
          {/* <Slider label="Website Design" value={80} />
          <Slider label="App Design" value={90} />
          <Slider label="Graphic Design" value={85} /> */}
        </div>
      </div>
    </section>
  );
};

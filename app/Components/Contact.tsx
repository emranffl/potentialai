import { Button } from "@/components/ui/button"

export const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 px-8 py-16">
      <h2 className="text-center text-4xl font-bold">Let@apos;s Design Together</h2>
      <form className="mt-10 flex justify-center">
        <input type="email" placeholder="Enter your email" className="border border-gray-300 p-2" />
        <Button className="ml-2 bg-orange-500 text-white">Contact Me</Button>
      </form>
    </section>
  )
}

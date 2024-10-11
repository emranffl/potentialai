import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-center">Lets Design Together</h2>
      <p className="mx-auto max-w-4xl text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem aut nesciunt
        dignissimos, soluta rerum enim non unde esse ducimus exercitationem.
      </p>
      <form className="mx-auto mt-10 flex max-w-xl justify-center gap-2 lg:mt-14">
        <Input
          type="email"
          placeholder="Enter Your Email"
          className="h-auto bg-gray-50 dark:text-black"
        />
        <Button size={"lg"}>Contact Me</Button>
      </form>
    </section>
  )
}

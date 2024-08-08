import React, { useEffect, useRef } from "react";
import BoxReveal from "./magicui/box-reveal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import gsap from "gsap";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ReviewSchema } from "@/lib/validation";
import { createReview } from "@/lib/review.action";
import { useToast } from "./ui/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "./ui/textarea";

type ReviewFormValues = z.infer<typeof ReviewSchema>;

const Contact: React.FC = () => {
  const { toast } = useToast();

  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(ReviewSchema),
  });

  const onSubmit: SubmitHandler<ReviewFormValues> = async (values) => {
    try {
      await createReview({
        name: values.name,
        email: values.email,
        message: values.message,
      });
      toast({
        title: "Successfully uploaded message",
      });
      form.reset(); // Reset the form after successful submission
    } catch (error) {
      toast({
        title: "Failed to upload message",
        variant: "destructive",
      });
    }
  };
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const buttons = formRef.current?.querySelectorAll("button");
    buttons?.forEach((button) => {
      gsap.fromTo(
        button,
        { backgroundColor: "#00CCCC" },
        {
          backgroundColor: "#008B8B",
          duration: 0.3,
          repeat: -1,
          yoyo: true,
        }
      );

      button.addEventListener("mouseenter", () => {
        gsap.to(button, { scale: 1.1, duration: 0.5 });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, { scale: 1, duration: 0.5 });
      });
    });
  }, []);

  return (
    <div className="aboutpage flex flex-col h-[100vh] w-full bg-blue-950 text-white py-10 px-20 max-sm:p-10">
      <div className="pageTitle">
        <BoxReveal boxColor={"#00CCCC"} duration={0.5}>
          <p className="text-8xl font-semibold bg-clip-text max-sm:text-6xl font-oxo text-transparent bg-gradient-to-r from-white to-teal-500">
            Contact<span className="text-teal-400">.</span>
          </p>
        </BoxReveal>
      </div>

      <div className="flex flex-row-reverse max-sm:flex-col-reverse h-full w-full">
        <div className="font-oxo text-white flex flex-col  justify-center items-center w-[50%] h-full max-sm:w-full max-sm:h-1/2">
          <h2 className="text-5xl font-semibold  w-full max-sm:text-3xl">
            Engage With Me About:
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full mt-4 text-3xl font-mont"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-2xl max-sm:text-xl flex-start">
                Project collaborations
              </AccordionTrigger>
              <AccordionContent className="text-xl max-sm:text-lg">
                Reach out if you have an interesting project idea and are
                looking for a collaborator.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-2xl max-sm:text-xl  flex-start">
                Freelance Opportunities
              </AccordionTrigger>
              <AccordionContent className="text-xl max-sm:text-lg">
                I&apos;m open to freelance opportunities. Let&apos;s discuss how
                I can help you with your project.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-2xl max-sm:text-xl flex-start">
                Tools and Technologies
              </AccordionTrigger>
              <AccordionContent className="text-xl max-sm:text-lg">
                If you have questions about the tools and technologies I use, or
                want recommendations on the best stack for your project, feel
                free to ask.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-2xl max-sm:text-xl flex-start">
                Feedback and suggestions
              </AccordionTrigger>
              <AccordionContent className="text-xl max-sm:text-lg">
                I appreciate feedback and suggestions to improve my work. Let me
                know your thoughts!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="font-oxo text-white flex justify-center items-center w-[50%] h-full max-sm:w-full max-sm:h-1/2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-[90%] max-sm:w-full text-mont text-2xl max-sm:text-lg gap-3 flex flex-col"
              ref={formRef}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Name"
                        {...field}
                        className="text-2xl h-[7vh] max-sm:text-lg text-teal-500 placeholder-teal-500 bg-transparent hover:bg-white border-teal-500 border-2 focus:text-white focus:bg-teal-500 focus:ring-2 focus:ring-white focus:border-white focus:outline-none transition-all duration-300 ease-in-out hover:scale-105 h hover:h-[10vh] max-sm:hover:h-[7vh] font-semibold "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        type="email"
                        className="h-[7vh] text-2xl max-sm:text-lg text-teal-500 placeholder-teal-500 bg-transparent hover:bg-white border-teal-500 border-2 focus:text-white focus:bg-teal-500 focus:ring-2 focus:ring-white focus:border-white focus:outline-none transition-all duration-300 ease-in-out hover:scale-105 hover:h-[10vh] max-sm:hover:h-[7vh] font-semibold"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Your Message"
                        {...field}
                        className="text-2xl max-sm:text-lg h-[10vh] text-teal-500 placeholder-teal-500 bg-transparent hover:bg-white border-teal-500 border-2  focus:text-white focus:bg-teal-500 focus:ring-2 focus:ring-white focus:border-white focus:outline-none transition-all duration-300 ease-in-out hover:scale-105 hover:h-[20vh] max-sm:hover:h-[15vh] font-semibold p-4 resize-none leading-relaxed scrollbar-hide"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-teal-500 font-oxo text-2xl w-[30%] py-3 text-white hover:bg-teal-600 focus:ring-2 focus:ring-white focus:ring-opacity-50 hover:h-[7vh] max-sm:hover:h-[5vh]"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

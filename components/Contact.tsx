import React from "react";
import BoxReveal from "./magicui/box-reveal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const Contact = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof ReviewSchema>>({
    resolver: zodResolver(ReviewSchema),
  });

  async function onSubmit(values: z.infer<typeof ReviewSchema>) {
    try {
      await createReview({
        name: values.name,
        email: values.email,
        message: values.message,
      });
      toast({
        title: "Successfully uploaded message",
      });
    } catch (error) {
      toast({
        title: "Failed to upload message",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="aboutpage flex flex-col h-[100vh] w-full bg-blue-950 text-white py-10 px-20 max-sm:p-10">
      <div className="pageTitle">
        <BoxReveal boxColor={"#00CCCC"} duration={0.5}>
          <p className="text-8xl font-semibold bg-clip-text max-sm:text-6xl font-oxo text-transparent bg-gradient-to-r from-white to-teal-500">
            Contact<span className="text-teal-400">.</span>
          </p>
        </BoxReveal>
      </div>

      <div className="flex flex-row h-full w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>email</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} type="email" />
                  </FormControl>
                  <FormDescription>
                    This is your public display email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>message</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display message.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;

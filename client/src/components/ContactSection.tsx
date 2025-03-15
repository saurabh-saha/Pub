import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Star } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(1, { message: 'Please select a subject' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="mb-8 text-gray-300">
              Have questions about our menu, events, or want to book a private event? Reach out to us using the contact form or directly via phone or email.
            </p>
            
            <div className="mb-8">
              <div className="flex items-start mb-6">
                <div className="text-secondary mr-4 mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 font-semibold">Address</h3>
                  <p className="text-gray-300">123 Cocktail Lane<br/>Downtown District<br/>New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="text-secondary mr-4 mt-1">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 font-semibold">Phone</h3>
                  <p className="text-gray-300">(212) 555-1234</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-secondary mr-4 mt-1">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 font-semibold">Email</h3>
                  <p className="text-gray-300">info@craftandcork.com</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl mb-4 font-semibold">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-secondary transition duration-300">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-secondary transition duration-300">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-secondary transition duration-300">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-secondary transition duration-300">
                  <Star className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white text-neutral-dark p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">Send a Message</h3>
                
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel className="text-neutral-dark">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} className="focus:border-secondary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel className="text-neutral-dark">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} className="focus:border-secondary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel className="text-neutral-dark">Subject</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="reservation">Reservation</SelectItem>
                          <SelectItem value="event">Private Event</SelectItem>
                          <SelectItem value="inquiry">General Inquiry</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-neutral-dark">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          className="h-32 focus:border-secondary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-secondary hover:bg-opacity-90 accent-font tracking-wide text-xl py-6"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? 'SENDING...' : 'SEND MESSAGE'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

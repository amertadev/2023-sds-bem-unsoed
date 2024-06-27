"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../shadcnui/form"
import { Input } from "../shadcnui/input"
import { Button } from "../shadcnui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../shadcnui/select"
import { Textarea } from "../shadcnui/textarea"
import { useState, useEffect } from "react"
import { Turnstile } from "./turnstile"
import Snackbar from '@mui/joy/Snackbar';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AutoTurnstile from "./turnstileauto"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  jobTitle: z.string().min(2, { message: "Job title must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  partnershipType: z.enum(["sponsorship", "media partner", "in kind"], {
    required_error: "Please select a partnership type.",
  }),
  notes: z.string().optional(),
  turnstileResponse: z.string().min(1, { message: "Please complete the Cloudflare check." }),
});

export function PartnerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });
  const [turnstileResponse, setTurnstileResponse] = useState<string | null>(null);
  const [sitekey, setSitekey] = useState("1x00000000000000000000AA");

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      setSitekey("0x4AAAAAAAdZ0q7tbHhk1Byx");
    }
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      jobTitle: "",
      email: "",
      company: "",
      partnershipType: undefined,
      notes: "",
      turnstileResponse: "",
    },
  });

  function generateWhatsAppUrl(data: z.infer<typeof formSchema>) {
    const phoneNumber = "6285155433460";
    const message = encodeURIComponent(`
  New Partnership Application:
  
  Name: ${data.name}
  Job Title: ${data.jobTitle}
  Email: ${data.email}
  Company: ${data.company}
  Partnership Type: ${data.partnershipType}
  Notes: ${data.notes}
    `);

    return `https://wa.me/${phoneNumber}?text=${message}`;
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const whatsappUrl = generateWhatsAppUrl(values);
      window.open(whatsappUrl, '_blank');

      setSnackbar({
        open: true,
        message: 'Your submission has been processed successfully!',
        severity: 'success'
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSnackbar({
        open: true,
        message: 'An error occurred while processing your submission.',
        severity: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jobTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input placeholder="Marketing Manager" {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="Acme Inc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="partnershipType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type of Partnership</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a partnership type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="sponsorship">Sponsorship</SelectItem>
                    <SelectItem value="media partner">Media Partner</SelectItem>
                    <SelectItem value="in kind">In Kind</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes</FormLabel>
                <FormControl>
                  <Textarea placeholder="Any additional information..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="turnstileResponse"
            render={({ field }) => (
              <FormItem>
                {process.env.NODE_ENV === 'production' ? (
                  <AutoTurnstile
                    sitekey={sitekey}
                    onVerify={(token) => {
                      field.onChange(token);
                      setTurnstileResponse(token);
                    }}
                  />
                ) : (
                  <Turnstile
                    sitekey={sitekey}
                    onVerify={(token) => {
                      field.onChange(token);
                      setTurnstileResponse(token);
                    }}
                  />
                )}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitting || !turnstileResponse} className="w-full">
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
      <Snackbar
        variant="soft"
        color={snackbar.severity === 'success' ? 'success' : 'danger'}
        open={snackbar.open}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        startDecorator={
          snackbar.severity === 'success'
            ? <PlaylistAddCheckCircleRoundedIcon />
            : <ErrorOutlineIcon />
        }
        endDecorator={
          <Button
            onClick={() => setSnackbar(prev => ({ ...prev, open: false }))}
            size="sm"
            variant="outline"
            color={snackbar.severity === 'success' ? 'success' : 'danger'}
          >
            Dismiss
          </Button>
        }
      >
        {snackbar.message}
      </Snackbar>
    </>
  )
}
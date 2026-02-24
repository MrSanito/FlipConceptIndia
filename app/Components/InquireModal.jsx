"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { sendEmail } from "../actions/sendEmail";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

export default function InquireModal({ product, isOpen, onClose }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailStatus, setEmailStatus] = useState({ success: false, message: "" });
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    // 1. Send Email via Server Action
    const result = await sendEmail({
      ...data,
      productName: product?.name,
    });

    if (result.success) {
      setIsSuccess(true);
      setEmailStatus(result);
      reset();
      
      // Optional: Wait a bit and then close, or let user close
      // For now, we show the success screen
    } else {
      alert("Failed to send email. Please try again or use WhatsApp.");
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = "918866002566";
     // Construct the message
    const text = `*New Inquiry for: ${product?.name || "General Query"}*%0A%0A` +
                 `*Name:* (Sent via Email)%0A` + 
                 `*Message:* I just sent an email inquiry via the website.`; // Simplified since data is reset
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleOpenChange = (open) => {
    if (!open) {
      onClose();
      // Reset state after closing animation
      setTimeout(() => {
        setIsSuccess(false);
        setEmailStatus({ success: false, message: "" });
      }, 300);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white">
            {isSuccess ? "Inquiry Sent!" : "Inquire Now"}
          </DialogTitle>
          <DialogDescription className="text-gray-500 dark:text-gray-400">
            {isSuccess 
              ? "We'll get back to you shortly via WhatsApp." 
              : product ? `For: ${product.name}` : "Get a quick quote or ask a question."}
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Inquiry Sent via Email!</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We have received your details. Our team will contact you shortly.
            </p>
            
            <Button 
               variant="outline" 
               onClick={openWhatsApp}
               className="w-full border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20"
            >
               Follow up on WhatsApp
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="Your Name"
                className="text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
            </div>

            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="john@example.com"
                 className="text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
            </div>

            <div className="space-y-1">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                placeholder="+91 98765 43210"
                 className="text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              />
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
            </div>

            <div className="space-y-1">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                {...register("message")}
                rows={3}
                placeholder="Tell us about your requirements..."
                className="resize-none text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              />
              {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold"
            >
              {isSubmitting ? "Sending..." : "Send Inquiry"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

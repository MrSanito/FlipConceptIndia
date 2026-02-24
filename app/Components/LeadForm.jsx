"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const LeadForm = ({ open, onOpenChange }) => {
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form, // spread existing form values
      [e.target.id]: e.target.value, // update the field by its id
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ Prevent page refresh

    const payload = {
      name: form.name,
      number: form.number,
      email: form.email,
    };
    const res = await fetch("/api/send-whatsapp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "918866002566", // Your verified WhatsApp number
        ...payload,
     
      }),
    });

    const json = await res.json();
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-l max-h-screen p-6">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <form className="grid gap-4 mt-6 h-full" onSubmit={handleSubmit}>
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              defaultValue="Name"
              className="text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="number">Number</Label>
            <Input
              id="number"
              name="Number"
              placeholder="Enter Your Mobile Number"
              className="text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="Email"
              placeholder="Enter Your Email here"
              className="text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-600 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

          <DialogFooter className="mt-auto">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadForm;

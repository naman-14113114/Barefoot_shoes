"use client";

import React, { useState } from "react";
import Link from "next/link";
import { contactPageData } from "@/data/contact";

export function ContactView() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    orderNumber: "",
    subject: "Sizing & Fit Advice",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          access_key: "a7d01fde-38a9-408f-a6f2-184458c2ccc3",
          subject: `BUUDY UK Support Request: ${formData.subject} - Order: ${formData.orderNumber || "N/A"}`,
          from_name: `${formData.firstName} ${formData.lastName}`.trim(),
          reply_to: formData.email,
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="w-full bg-white text-[#000000] pt-28 md:pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] text-[#767676] mb-8">
          <Link href="/" className="hover:text-black transition-colors link-etq">
            Home
          </Link>
          <span>/</span>
          <span className="text-black font-medium">Contact Us</span>
        </nav>

        {/* Hero Header */}
        <div className="border-b border-[#eaeaea] pb-10 mb-12">
          <span className="inline-block text-[11px] uppercase tracking-wider text-[#767676] bg-[#f5f5f5] px-2.5 py-1 rounded-sm mb-3">
            {contactPageData.eyebrow}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4">
            {contactPageData.title}
          </h1>
          <p className="text-[16px] text-[#767676] leading-relaxed max-w-3xl">
            {contactPageData.description}
          </p>
        </div>

        {/* 2-Column Layout: Contact Form & Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Form Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#fafafa] border border-[#eaeaea] p-6 md:p-8">
              <h2 className="text-xl font-semibold text-black mb-2">Send a Message</h2>
              <p className="text-[13px] text-[#767676] mb-6">
                Fill in the details below and our London support team will respond within 12–24 hours.
              </p>

              {status === "success" ? (
                <div className="bg-[#f0fdf4] border border-[#bbf7d0] p-6 text-center space-y-3">
                  <span className="inline-block w-10 h-10 rounded-full bg-[#0e855b] text-white font-bold leading-10 text-lg">
                    ✓
                  </span>
                  <h3 className="text-base font-semibold text-black">Message Sent Successfully</h3>
                  <p className="text-[13px] text-[#767676]">
                    Thank you for reaching out. A confirmation has been sent to your email.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        orderNumber: "",
                        subject: "Sizing & Fit Advice",
                        message: "",
                      });
                    }}
                    className="mt-2 text-[12px] text-black font-medium underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-[13px]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-black font-medium mb-1">First Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="e.g. James"
                        className="w-full bg-white border border-[#eaeaea] px-3.5 py-2.5 text-black placeholder:text-[#929292] focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block text-black font-medium mb-1">Last Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="e.g. Harrison"
                        className="w-full bg-white border border-[#eaeaea] px-3.5 py-2.5 text-black placeholder:text-[#929292] focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-black font-medium mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.co.uk"
                        className="w-full bg-white border border-[#eaeaea] px-3.5 py-2.5 text-black placeholder:text-[#929292] focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block text-black font-medium mb-1">Order Number (Optional)</label>
                      <input
                        type="text"
                        value={formData.orderNumber}
                        onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                        placeholder="e.g. BD-98421"
                        className="w-full bg-white border border-[#eaeaea] px-3.5 py-2.5 text-black placeholder:text-[#929292] focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-black font-medium mb-1">Subject *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white border border-[#eaeaea] px-3.5 py-2.5 text-black focus:outline-none focus:border-black"
                    >
                      <option value="Sizing & Fit Advice">Sizing & Fit Advice</option>
                      <option value="Order Tracking & Delivery">Order Tracking & Delivery</option>
                      <option value="14-Day Return / Exchange Request">14-Day Return / Exchange Request</option>
                      <option value="Leather & Suede Care">Leather & Suede Care</option>
                      <option value="General Inquiries">General Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-black font-medium mb-1">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe how we can assist you..."
                      className="w-full bg-white border border-[#eaeaea] px-3.5 py-2.5 text-black placeholder:text-[#929292] focus:outline-none focus:border-black resize-y"
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-[12px]">
                      Unable to send form directly. You can email us directly at{" "}
                      <a href={`mailto:${contactPageData.supportEmail}`} className="underline font-semibold">
                        {contactPageData.supportEmail}
                      </a>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-black text-white py-3 font-medium hover:bg-neutral-800 transition-colors uppercase tracking-wider text-[12px] disabled:opacity-50"
                  >
                    {status === "submitting" ? "Submitting Request..." : "Send Customer Care Message"}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Info Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Support Card */}
            <div className="border border-[#eaeaea] p-6 space-y-4">
              <h3 className="text-base font-semibold text-black">Direct Contact Details</h3>
              <div className="space-y-3 text-[13px] text-[#767676]">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-black font-semibold">Email Desk</p>
                  <a
                    href={`mailto:${contactPageData.supportEmail}`}
                    className="text-black font-medium hover:underline text-[14px]"
                  >
                    {contactPageData.supportEmail}
                  </a>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-black font-semibold">Operating Hours</p>
                  <p>{contactPageData.operatingHours}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-black font-semibold">Headquarters</p>
                  <p>{contactPageData.headquarters}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-black font-semibold">Average Response SLA</p>
                  <p className="text-[#0e855b] font-medium">{contactPageData.responseSLA}</p>
                </div>
              </div>
            </div>

            {/* Quick Links Cards */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-black uppercase tracking-wider">Quick Help Topics</h3>
              {contactPageData.helpCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="block p-4 border border-[#eaeaea] hover:border-black transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-[13px] font-medium text-black group-hover:underline">
                      {card.title}
                    </h4>
                    <span className="text-[12px] text-[#767676] group-hover:text-black transition-colors">
                      →
                    </span>
                  </div>
                  <p className="text-[12px] text-[#767676] mt-1">{card.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client"

import { faqs } from "@/lib/data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function FaqPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-emerald-50 py-16 md:py-24">
        <div className="container text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Find answers to common questions about our Integrative Oncology Webinar Series.
          </motion.p>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-gray-800">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className="text-lg text-gray-600 mb-6">Don't see your question answered here? Contact us directly.</p>
          <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            <Link href="mailto:info@newrootsherbal.com">Contact Us</Link>
          </Button>
        </motion.div>
      </section>

      <section className="container py-16">
        <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-800">Ready to Join Our Webinar Series?</h2>
          <p className="text-lg text-emerald-700 mb-8 max-w-3xl mx-auto">
            Register now to secure your spot in our upcoming integrative oncology webinars. Learn from experts and
            enhance your knowledge of complementary cancer care approaches.
          </p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            Register Free
          </Button>
        </div>
      </section>
    </main>
  )
}

"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Bonjour, je suis <span className="text-primary">Patrick DJOUMBISSIE</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">Développeur Web Full Stack</h2>
        <p className="text-lg md:text-xl mb-10 text-muted-foreground">
          Je crée des expériences web modernes et intuitives avec les dernières technologies
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="#projects">Voir mes projets</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">Me contacter</Link>
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10"
      >
        <Link
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="mb-2">En savoir plus</span>
          <ArrowDown className="animate-bounce" />
        </Link>
      </motion.div>
    </section>
  )
}

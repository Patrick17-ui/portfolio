"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
              <Image src="/images/avatar1.jpg" alt="Patrick DJOUMBISSIE" fill className="object-cover" priority />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg mb-4">
                  Titulaire d'un master 1 en informatique option intelligence artificielle Je suis un développeur web passionné avec plus de 03 années d'expérience dans la création
                  d'applications web modernes et performantes.
                </p>
                <p className="text-lg mb-4">
                  Spécialisé dans les technologies JavaScript modernes comme React, Next.js et ASP.NET Core, je m'efforce de
                  créer des expériences utilisateur exceptionnelles.
                </p>
                <p className="text-lg">
                  En dehors du code, j'aime les voyages, ecouter de la musique, de la lecture et je suis toujours à la recherche de nouveaux défis
                  techniques.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Send, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Me contacter</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête ou une opportunité à discuter ? N'hésitez pas à me contacter !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom</Label>
                    <Input id="name" placeholder="Votre nom" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="votre@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Votre message" rows={5} />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <Card>
              <CardContent className="pt-6 flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">djoumbissiepatrick0@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Téléphone</h3>
                  <p className="text-muted-foreground">+237 696-728-362</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Localisation</h3>
                  <p className="text-muted-foreground">Douala, Cameroun</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

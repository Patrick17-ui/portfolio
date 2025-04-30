"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProjectsSection() {
  const projects = [
    {
      title: "Transport Express",
      description:
        "Une application de gestion de transport permettant de suivre les livraisons et d'optimiser les itinéraires et la gestion des depenses liées aux trajets de ses vehicules.",
      image: "/images/connexion.png",
      tags: ["React", "Next.js", "PostgreSQL",],
      githubUrl: "https://github.com/Patrick17-ui/Truck_Expenss",
    },
    {
      title: "Gestion d'Auto-École",
      description:
        "Application de gestion pour auto-écoles permettant de suivre les élèves, planifier les leçons de conduite et gérer les examens. Interface intuitive pour instructeurs et élèves.",
      image: "/images/AutoEcole.png",
      tags: ["HTML5","CSS3","Bootstrap", "Java EE", "MySQL",],
      githubUrl: "https://github.com/Patrick17-ui/Gestion-Auto-Ecole-Java-EE",
    
    },
    {
      title: "Prediction de temperature",
      description:
        "Ce projet est un projet d'intelligence artificielle sur lequel a partir d'un jeu de données, j'ai traité les données et utilisé une technique du Machine Learning.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "data_Humid.csv",],
      githubUrl: "https://github.com/Patrick17-ui/IA-prediction-Temperature",
  
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Mes projets</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Voici une sélection de mes projets récents. Chaque projet représente un défi unique que j'ai relevé.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full bg-white flex items-center justify-center">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill={project.image.includes("placeholder")}
                    width={project.image.includes("placeholder") ? undefined : 250}
                    height={project.image.includes("placeholder") ? undefined : 150}
                    className={project.image.includes("placeholder") ? "object-cover" : "object-contain"}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  const frontendSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Angular",

  ]

  const backendSkills = ["Next.Js", "ASP.NET Core", "Django","Flask", "Laravel","Node.js","Express.js",]

  const bdSkills = ["PostgreSQL", "MySQL", "SQLite",]
  const apiSkills = ["REST API", "JWT",]

  const toolsSkills = ["Git", "GitHub", "VS Code", "Figma", "Webpack", "Vercel", "Netlify"]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Mes compétences</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Outils</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {toolsSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Bases de données</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {bdSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

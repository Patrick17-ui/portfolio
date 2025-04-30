import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Patrick DJOUMBISSIE. Tous droits réservés.
            </p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/Patrick17-ui"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/patrick-raoul-djoumbissie-10ba6a267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://x.com/Trikepa_17?t=Hbxt8yo6yrTu0JQ3L1iYZw&s=35"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

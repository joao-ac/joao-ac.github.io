"use client"; // This is a client component
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Code2, Github, Linkedin, Mail, MenuIcon, Moon, Sun, X } from 'lucide-react'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Code2 className="h-6 w-6" />
              <span className="font-bold sm:inline-block">DevPortfolio</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="hidden transition-colors hover:text-foreground/80 text-foreground/60 sm:inline-block" href="#about">
                Sobre
              </a>
              <a className="hidden transition-colors hover:text-foreground/80 text-foreground/60 sm:inline-block" href="#projects">
                Projetos
              </a>
              <a className="hidden transition-colors hover:text-foreground/80 text-foreground/60 sm:inline-block" href="#contact">
                Contato
              </a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
            <Button className="sm:hidden" variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background sm:hidden">
          <nav className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
            <a href="#about" onClick={toggleMenu}>Sobre</a>
            <a href="#projects" onClick={toggleMenu}>Projetos</a>
            <a href="#contact" onClick={toggleMenu}>Contato</a>
          </nav>
        </div>
      )}

      <main className="container mx-auto px-4 py-8">
        <section id="about" className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Olá, eu sou [Seu Nome]</h1>
          <p className="text-xl mb-6">Desenvolvedor Full Stack apaixonado por criar soluções inovadoras</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Meus Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <Card key={project}>
                <CardHeader>
                  <CardTitle>Projeto {project}</CardTitle>
                  <CardDescription>Breve descrição do projeto</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted"></div>
                </CardContent>
                <CardFooter>
                  <Button>Ver Projeto</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
          <Card>
            <CardHeader>
              <CardTitle>Envie uma mensagem</CardTitle>
              <CardDescription>Ficarei feliz em responder suas perguntas.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Seu nome" />
                <Input type="email" placeholder="Seu email" />
                <Textarea placeholder="Sua mensagem" />
                <Button type="submit" className="w-full">Enviar</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 DevPortfolio. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon">
              <Mail className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

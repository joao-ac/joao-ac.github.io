"use client";

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Code2, Github, Linkedin, Mail, MenuIcon, Moon, Sun, X, ExternalLink } from 'lucide-react'
import Image from 'next/image'

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

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (!section) {
      console.error(`Element with id ${id} not found.`);
      return;
    }
    const offset = -80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = section.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (mounted) {
      console.log("Current theme:", theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme, mounted]);

  if (!mounted) return null

    const skills = [
      { name: 'Python', logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: 'Java', logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: 'JavaScript', logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: 'MySQL', logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: 'Git', logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: 'GitHub', logo: theme === 'dark' ? "/logos/github-mark-white.svg" : "/logos/github-mark.svg" },
      ]

  const projects = [
  {
    title: "Portfolio",
    description: "Um portfolio de apresentação, mostrando meus projetos e habilidades",
    image: "/previews/portfolio.png?height=200&width=300",
    technologies: ["Next.js", "JavaScript", "HTML", "CSS"],
    liveUrl: "https://joao-ac.github.io/",
    githubUrl: "https://github.com/joao-ac/joao-ac.github.io"
  },
  {
    title: "Task List - Prototype",
    description: "A task list application in development",
    image: "/previews/tarefas.png?height=200&width=300",
    technologies: ["Python", "Flask", "SQLite", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/joao-ac/app_lista_de_tarefas"
  },
  {
    title: "Sumarização de vídeos Shorts do Youtube",
    description: "Uma aplicação que retorna o resumo de um vídeo Shorts do Youtube, utilizando um modelo de inteligência artificial.",
    image: "/previews/nlw.png?height=200&width=300",
    technologies: ["React", "Vite","Node.js", "Express", "ytdl-core", "@xenova/transformers", "CORS", "Axios"],
    githubUrl: "https://github.com/joao-ac/NLW-ai"
  }
  ]

  return (
    <>
    <div className="min-h-screen bg-background text-foreground">
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-14 items-center">
    <div className="mr-4 flex">
    <a className="mr-6 flex items-center space-x-2" href="/">
    <Code2 className="h-6 w-6" />
    <span className="font-bold sm:inline-block">Dev Portfolio</span>
    </a>
    <nav className="flex items-center space-x-6 text-sm font-medium">
    <a className="hidden transition-colors hover:text-foreground/80 text-foreground/60 sm:inline-block" href="#about" onClick={() => scrollToSection('#about')}>
    About me
    </a>
    <a className="hidden transition-colors hover:text-foreground/80 text-foreground/60 sm:inline-block" href="#education" onClick={() => scrollToSection('#education')}>
    Education
    </a>
    <a className="hidden transition-colors hover:text-foreground/80 text-foreground/60 sm:inline-block" href="#skills" onClick={() => scrollToSection('#skills')}>
    Skills
    </a>
    <a className="hidden transition-colors hover:text-foreground/80 text-foreground/60 sm:inline-block" href="#projects" onClick={() => scrollToSection('#projects')}>
    Projects
    </a>
    <a className="hidden transition-colors hover:text-foreground/80 text-foreground/60 sm:inline-block" href="#contact" onClick={() => scrollToSection('#contact')}>
    Contact
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
      <a href="#about" onClick={() => { scrollToSection('#about'); toggleMenu(); }}>About me</a>
      <a href="#education" onClick={() => { scrollToSection('#skills'); toggleMenu(); }}>Education</a>
      <a href="#skills" onClick={() => { scrollToSection('#skills'); toggleMenu(); }}>Skills</a>
      <a href="#projects" onClick={() => { scrollToSection('#projects'); toggleMenu(); }}>Projects</a>
      <a href="#contact" onClick={() => { scrollToSection('#contact'); toggleMenu(); }}>Contact</a>
      </nav>
      </div>
      )}

    <main className="container mx-auto px-4 py-8">
    <section id="about" className="mb-16 text-center">
    <h1 className="text-4xl font-bold mb-4">About Me</h1>
    <p className="text-xl mb-6">Hello! My name is João Antonio, and I am a Systems Analysis and Development student. Through my studies, I have gained experience working with Python, Java, JavaScript, MySQL, Git, and GitHub, and I am continuously expanding my knowledge through various courses in web development and software development. I am currently looking for new opportunities to apply my skills and grow as a developer.</p>
    <div className="flex justify-center space-x-4">
    <Button variant="outline" size="icon" as="a" href="https://github.com/joao-ac" target="_blank" rel="noopener noreferrer">
    <Github className="h-4 w-4" />
    <span className="sr-only">GitHub</span>
    </Button>
    <Button variant="outline" size="icon" as="a" href="https://www.linkedin.com/in/jo%C3%A3o-antonio-409082292/" target="_blank" rel="noopener noreferrer">
    <Linkedin className="h-4 w-4" />
    <span className="sr-only">LinkedIn</span>
    </Button>
    </div>
    </section>

    <section id="education" className="mb-16">
    <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
    <div className="space-y-4">
    <Card>
    <CardHeader>
    <CardTitle>Analysis and Systems Development</CardTitle>
    <CardDescription>Centro Universitário Internacional Uninter</CardDescription>
    <CardDescription>Expected Graduation: 2025</CardDescription>
    </CardHeader>
    <CardContent>
    <p className="text-lg">Pursuing a degree in Systems Analysis and Development, focusing on software development, data structures, and modern web technologies. Expanding my skills in programming and system design.</p>
    </CardContent>
    </Card>
    </div>
    </section>

    <section id="skills" className="mb-16">
  <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
  <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {skills.map((skill) => (
      <Card key={skill.name} className="flex flex-col items-center">
        <CardHeader className="flex flex-col items-center">
          <div className="w-16 h-16 mb-2">
            <Image
              src={skill.logo}
              alt={`${skill.name} logo`}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <CardTitle className="text-center">{skill.name}</CardTitle>
        </CardHeader>
      </Card>
    ))}
  </div>
</section>


    {/*<section id="skills" className="mb-16">
    <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
    {skills.map((skill) => (
      <div key={skill.name} className="flex flex-col items-center">
      <div className="w-16 h-16 mb-2">
      <Image
      src={skill.logo}
      alt={`${skill.name} logo`}
      width={64}
      height={64}
      className="object-contain"
      />
      </div>
      <span className="text-sm font-medium">{skill.name}</span>
      </div>
      ))}
    </div>
    </section>*/}

    <section id="projects" className="mb-16">
    <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    {projects.map((project, index) => (
      <Card key={index}>
      <CardHeader>
      <CardTitle>{project.title}</CardTitle>
      <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
      <div className="aspect-video bg-muted mb-4">
      <Image
      src={project.image}
      alt={project.title}
      width={900}
      height={600}
      className="object-cover w-full h-full"
      />
      </div>
      <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech, techIndex) => (
        <Badge key={techIndex} variant="secondary">{tech}</Badge>
        ))}
      </div>
      </CardContent>
      <CardFooter className="flex justify-between">
      {project.liveUrl && (
        <Button as="a" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
        <ExternalLink className="mr-2 h-4 w-4" />
        Live Demo
        </Button>
        )}
      <Button variant="outline" as="a" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
      <Github className="mr-2 h-4 w-4" />
      View Code
      </Button>
      </CardFooter>
      </Card>
      ))}
    </div>
    </section>
    <section id="contact" className="mb-16">
    <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
    <Card>
    <CardHeader>
    <CardTitle>Feel free to reach out through any of the platforms below:</CardTitle>
    </CardHeader>
    <CardContent>
    <div className="space-y-4">
    <div className="flex items-center space-x-2">
    <Mail className="h-5 w-5 text-primary" />
          <span className="text-lg">joao.ac1406@gmail.com</span> {/* Replace with your actual email */}
    </div>
    <div className="flex items-center space-x-2">
    <Linkedin className="h-5 w-5 text-primary" />
    <a
    href="https://www.linkedin.com/in/jo%C3%A3o-antonio-409082292/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-lg hover:underline"
    >
    LinkedIn
    </a>
    </div>
    <div className="flex items-center space-x-2">
    <Github className="h-5 w-5 text-primary" />
    <a
    href="https://github.com/joao-ac"
    target="_blank"
    rel="noopener noreferrer"
    className="text-lg hover:underline"
    >
    GitHub
    </a>
    </div>
    <div className="flex items-center space-x-2">
    <Phone className="h-5 w-5 text-primary" />
          <span className="text-lg">+55 (45) 99985-1704</span> {/* Replace with your actual phone number */}
    </div>
    </div>
    </CardContent>
    </Card>
    </section>
    </main>

    <footer className="border-t py-6 md:py-0">
    <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
    © 2024 João Antonio Correia. All rights reserved.
    </p>
    <div className="flex items-center space-x-1">
    <Button variant="ghost" size="icon" as="a" href="mailto:joao.ac1406@gmail.com">
    <Mail className="h-4 w-4" />
    <span className="sr-only">Email</span>
    </Button>
    <Button variant="ghost" size="icon" as="a" href="https://github.com/joao-ac" target="_blank" rel="noopener noreferrer">
    <Github className="h-4 w-4" />
    <span className="sr-only">GitHub</span>
    </Button>
    <Button variant="ghost" size="icon" as="a" href="https://www.linkedin.com/in/jo%C3%A3o-antonio-409082292/" target="_blank" rel="noopener noreferrer">
    <Linkedin className="h-4 w-4" />
    <span className="sr-only">LinkedIn</span>
    </Button>
    </div>
    </div>
    </footer>
    </div>
    </>
    )
}

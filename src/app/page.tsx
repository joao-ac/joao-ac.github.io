"use client";

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Code2, Github, Linkedin, Mail, MenuIcon, Moon, Sun, X } from 'lucide-react'
import Image from 'next/image'
import Head from 'next/head';

<Head>
<title>João Antonio - Portfolio</title>
<meta name="description" content="Portfolio of João Antonio, a Systems Analysis and Development student." />
</Head>

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

return (
  <div className="min-h-screen bg-background text-foreground">
  <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div className="container flex h-14 items-center">
  <div className="mr-4 flex">
  <a className="mr-6 flex items-center space-x-2" href="/">
  <Code2 className="h-6 w-6" />
  <span className="font-bold sm:inline-block">Dev Portfolio</span>
  </a>
  <nav className="flex items-center space-x-6 text-sm font-medium">
  <a className="hidden transition-colors hover:text-foreground/80 text-foreground/60 sm:inline-block" href="#about">
  About me
  </a>
  <a className="hidden transition-colors hover:text-foreground/80 text-foreground/60 sm:inline-block" href="#skills">
  Skills
  </a>
  <a className="hidden transition-colors hover:text-foreground/80 text-foreground/60 sm:inline-block" href="#projects">
  Projects
  </a>
  <a className="hidden transition-colors hover:text-foreground/80 text-foreground/60 sm:inline-block" href="#contact">
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
    <a href="#about" onClick={() => scrollToSection('#about')}>About me</a>
<a href="#skills" onClick={() => scrollToSection('#skills')}>Skills</a>
<a href="#projects" onClick={() => scrollToSection('#projects')}>Projects</a>
<a href="#contact" onClick={() => scrollToSection('#contact')}>Contact</a>
    </nav>
    </div>
    )}

  <main className="container mx-auto px-4 py-8">
  <section id="about" className="mb-16 text-center">
  <h1 className="text-4xl font-bold mb-4">About Me</h1>
  <p className="text-xl mb-6">Hello! My name is João Antonio, and I am a Systems Analysis and Development student. Through my studies, I have gained experience working with Python, Java, JavaScript, MySQL, Git, and GitHub, and I am continuously expanding my knowledge through various courses in web development and software development. I am currently looking for new opportunities to apply my skills and grow as a developer.</p>
  <div className="flex justify-center space-x-4">
  <Button variant="outline" size="icon">
  <Github className="h-4 w-4" />
  </Button>
  <Button variant="outline" size="icon">
  <Linkedin className="h-4 w-4" />
  </Button>
  </div>
  </section>

  <section id="skills" className="mb-16">
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
  </section>

  <section id="projects" className="mb-16">
  <h2 className="text-3xl font-bold mb-8 text-center">My projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {[1, 2, 3].map((project) => (
    <Card key={project}>
    <CardHeader>
    <CardTitle>Project {project}</CardTitle>
    <CardDescription>Brief project description</CardDescription>
    </CardHeader>
    <CardContent>
    <div className="aspect-video bg-muted"></div>
    </CardContent>
    <CardFooter>
    <Button>See project</Button>
    </CardFooter>
    </Card>
    ))}
  </div>
  </section>

  <section id="contact" className="mb-16">
  <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
  <Card>
  <CardHeader>
  <CardTitle>Send a message</CardTitle>
  <CardDescription>I&apos;ll be happy to answer your questions.</CardDescription>
  </CardHeader>
  <CardContent>
  <form className="space-y-4">
  <Input placeholder="Your name" />
  <Input type="email" placeholder="Your email" />
  <Textarea placeholder="Your message" />
  <Button type="submit" className="w-full">Send</Button>
  </form>
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

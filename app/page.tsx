"use client"

import type React from "react"

import { Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("sobre-mi")

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = ["sobre-mi", "habilidades", "experiencia", "formacion"]
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const animatedElements = document.querySelectorAll(".fade-in-section")
    animatedElements.forEach((el) => animationObserver.observe(el))

    return () => {
      observer.disconnect()
      animationObserver.disconnect()
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, sectionId: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      scrollToSection(sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Saltar al contenido principal
      </a>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:flex lg:gap-16 lg:px-12 lg:py-24">
        <aside
          className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:max-w-md lg:flex-col lg:justify-between lg:py-24"
          aria-label="Información personal y navegación"
        >
          <div>
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Jose Maria Lopez Villena
            </h1>
            <h2 className="mb-4 text-lg font-medium text-foreground/90">Desarollador Junior</h2>
            <p className="mb-8 max-w-xs text-base leading-relaxed text-muted-foreground">
              Desarrollador Junior especializado en Backend con base sólida Full-Stack. Comprometido con soluciones
              robustas y escalables.
            </p>

            <Link
              href="/cv"
              className="mb-16 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              aria-label="Ver curriculum vitae"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Ver CV
            </Link>

            <nav className="hidden lg:block" aria-label="Navegación principal">
              <ul className="space-y-4" role="list">
                <li>
                  <button
                    onClick={() => scrollToSection("sobre-mi")}
                    onKeyDown={(e) => handleKeyDown(e, "sobre-mi")}
                    className={`group flex items-center gap-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded ${activeSection === "sobre-mi" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    aria-current={activeSection === "sobre-mi" ? "page" : undefined}
                  >
                    <span
                      className={`h-px transition-all ${activeSection === "sobre-mi"
                        ? "w-16 bg-foreground"
                        : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                        }`}
                      aria-hidden="true"
                    />
                    SOBRE MÍ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("habilidades")}
                    onKeyDown={(e) => handleKeyDown(e, "habilidades")}
                    className={`group flex items-center gap-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded ${activeSection === "habilidades"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                    aria-current={activeSection === "habilidades" ? "page" : undefined}
                  >
                    <span
                      className={`h-px transition-all ${activeSection === "habilidades"
                        ? "w-16 bg-foreground"
                        : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                        }`}
                      aria-hidden="true"
                    />
                    HABILIDADES
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("experiencia")}
                    onKeyDown={(e) => handleKeyDown(e, "experiencia")}
                    className={`group flex items-center gap-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded ${activeSection === "experiencia"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                    aria-current={activeSection === "experiencia" ? "page" : undefined}
                  >
                    <span
                      className={`h-px transition-all ${activeSection === "experiencia"
                        ? "w-16 bg-foreground"
                        : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                        }`}
                      aria-hidden="true"
                    />
                    EXPERIENCIA
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("formacion")}
                    onKeyDown={(e) => handleKeyDown(e, "formacion")}
                    className={`group flex items-center gap-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded ${activeSection === "formacion" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    aria-current={activeSection === "formacion" ? "page" : undefined}
                  >
                    <span
                      className={`h-px transition-all ${activeSection === "formacion"
                        ? "w-16 bg-foreground"
                        : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                        }`}
                      aria-hidden="true"
                    />
                    FORMACIÓN
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-8 flex items-center gap-5 lg:mt-0" role="list" aria-label="Redes sociales">
            <a
              href="https://github.com/josejd2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded"
              aria-label="Visitar perfil de GitHub (se abre en nueva pestaña)"
            >
              <Github className="h-6 w-6" aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/jose-mar%C3%ADa-l%C3%B3pez-villena/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded"
              aria-label="Visitar perfil de LinkedIn (se abre en nueva pestaña)"
            >
              <Linkedin className="h-6 w-6" aria-hidden="true" />
            </a>

            <a
              href="mailto:josejd2.jlv@gmail.com"
              className="text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded"
              aria-label="Enviar correo electrónico a josejd2.jlv@gmail.com"
            >
              <Mail className="h-6 w-6" aria-hidden="true" />
            </a>

          </div>
        </aside>

        <main id="main-content" className="lg:w-1/2 lg:py-24" aria-label="Contenido principal">
          {/* About Section */}
          <section
            id="sobre-mi"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 fade-in-section"
            aria-labelledby="sobre-mi-heading"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
              <h2 id="sobre-mi-heading" className="text-sm font-bold uppercase tracking-widest text-foreground">
                Sobre mí
              </h2>
            </div>
            <h2
              id="sobre-mi-heading"
              className="sr-only lg:not-sr-only lg:mb-6 lg:text-sm lg:font-bold lg:uppercase lg:tracking-widest lg:text-foreground"
            >
              Sobre mí
            </h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                Desarrollador Junior con especialización en Backend (Java, Laravel/PHP, Node.js) y una base sólida de
                Full-Stack. Busco activamente mi primera oportunidad laboral para aplicar mi formación en un entorno
                profesional.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Comprometido con el aprendizaje continuo y la entrega de soluciones robustas y escalables. Mi
                experiencia incluye trabajo con tecnologías modernas tanto en el frontend como en el backend, con un
                enfoque especial en crear aplicaciones eficientes y mantenibles.
              </p>
            </div>
          </section>

          {/* Habilidades Section */}
          <section
            id="habilidades"
            className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24 fade-in-section"
            aria-labelledby="habilidades-heading"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
              <h2 id="habilidades-heading" className="text-sm font-bold uppercase tracking-widest text-foreground">
                Habilidades
              </h2>
            </div>
            <h2 className="sr-only lg:not-sr-only lg:mb-4 lg:text-sm lg:font-bold lg:uppercase lg:tracking-widest lg:text-foreground">
              Habilidades
            </h2>
            <div className="space-y-8">
              <div className="stagger-item">
                <h3 className="mb-3 text-base font-semibold text-foreground">Backend</h3>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Tecnologías backend">
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20"
                    role="listitem"
                  >
                    Java
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20"
                    role="listitem"
                  >
                    PHP
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20"
                    role="listitem"
                  >
                    Node.js
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20"
                    role="listitem"
                  >
                    Laravel
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20"
                    role="listitem"
                  >
                    Python
                  </span>
                </div>
              </div>

              <div className="stagger-item">
                <h3 className="mb-3 text-base font-semibold text-foreground">Frontend</h3>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Tecnologías frontend">
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20"
                    role="listitem"
                  >
                    React
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20"
                    role="listitem"
                  >
                    HTML
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20"
                    role="listitem"
                  >
                    CSS
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20"
                    role="listitem"
                  >
                    JavaScript
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20"
                    role="listitem"
                  >
                    Bootstrap
                  </span>
                </div>
              </div>

              <div className="stagger-item">
                <h3 className="mb-3 text-base font-semibold text-foreground">BBDD y Herramientas</h3>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Bases de datos y herramientas">
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20"
                    role="listitem"
                  >
                    MongoDB
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20"
                    role="listitem"
                  >
                    MySQL
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20"
                    role="listitem"
                  >
                    Git/GitHub
                  </span>
                  <span
                    className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20"
                    role="listitem"
                  >
                    Android
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section
            id="experiencia"
            className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24 fade-in-section"
            aria-labelledby="experiencia-heading"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
              <h2 id="experiencia-heading" className="text-sm font-bold uppercase tracking-widest text-foreground">
                Experiencia
              </h2>
            </div>
            <h2 className="sr-only lg:not-sr-only lg:mb-4 lg:text-sm lg:font-bold lg:uppercase lg:tracking-widest lg:text-foreground">
              Experiencia
            </h2>
            <div className="space-y-12 group/list" role="list">
              {/* Experience Item 0 -  Cooperadores Parroquiales(Art Marketing)*/}
              <article
                className="group relative grid gap-4 pb-1 transition-all duration-300 sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                role="listitem"
              >
                <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                  Ene 2026 — Feb 2026
                </div>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <span>Cooperadores Parroquiales(Art Marketing) · Prácticas</span>
                  </h3>
                  <ul className="mt-2 text-sm leading-relaxed text-muted-foreground list-disc list-inside space-y-1">
                    <li>
                      Modificaciones en la web y seguridad de la página.
                    </li>
                    <li>Implementación de una pasarela de pagos.</li>
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-2" role="list" aria-label="Tecnologías utilizadas">
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      WordPress
                    </span>
                  </div>
                </div>
              </article>

              {/* Experience Item 1 - Mercanza */}
              <article
                className="group relative grid gap-4 pb-1 transition-all duration-300 sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                role="listitem"
              >
                <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                  Sep 2019 — Nov 2019
                </div>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <span>Mercanza · Prácticas</span>
                  </h3>
                  <ul className="mt-2 text-sm leading-relaxed text-muted-foreground list-disc list-inside space-y-1">
                    <li>
                      Participación en la depuración y mejora de código (uso de try-catch para manejo de errores).
                    </li>
                    <li>Implementación de secciones en la barra de navegación (navbar) para mejorar la usabilidad.</li>
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-2" role="list" aria-label="Tecnologías utilizadas">
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      Java
                    </span>
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      HTML
                    </span>
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      CSS
                    </span>
                  </div>
                </div>
              </article>

              {/* Experience Item 2 - Hospital Gómez Ulla */}
              <article
                className="group relative grid gap-4 pb-1 transition-all duration-300 sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                role="listitem"
              >
                <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                  Mar 2015 — Jun 2015
                </div>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <span>Hospital Gómez Ulla · Prácticas</span>
                  </h3>
                  <ul className="mt-2 text-sm leading-relaxed text-muted-foreground list-disc list-inside space-y-1">
                    <li>Instalación y configuración de Sistemas Operativos en ordenadores nuevos.</li>
                    <li>
                      Mantenimiento y reparación de equipos informáticos (hardware y software) en todo el hospital.
                    </li>
                    <li>Soporte de red, incluyendo el crimpado de cables de red.</li>
                    <li>Reparación y mantenimiento de impresoras.</li>
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-2" role="list" aria-label="Tecnologías utilizadas">
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      Windows
                    </span>
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      Hardware
                    </span>
                    <span
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      role="listitem"
                    >
                      Redes
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Formación Section */}
          <section
            id="formacion"
            className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24 fade-in-section"
            aria-labelledby="formacion-heading"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
              <h2 id="formacion-heading" className="text-sm font-bold uppercase tracking-widest text-foreground">
                Formación
              </h2>
            </div>
            <h2 className="sr-only lg:not-sr-only lg:mb-4 lg:text-sm lg:font-bold lg:uppercase lg:tracking-widest lg:text-foreground">
              Formación
            </h2>
            <div className="space-y-12 group/list" role="list">
              {/* Education Item 1 */}
              <article
                className="group relative grid gap-4 pb-1 transition-all duration-300 sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                role="listitem"
              >
                <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                  2025
                </div>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <span>Desarrollo de Aplicaciones con Tecnología Web</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">CRN de Getafe</p>
                </div>
              </article>

              {/* Education Item 2 */}
              <article
                className="group relative grid gap-4 pb-1 transition-all duration-300 sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                role="listitem"
              >
                <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                  2023
                </div>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <span>Desarrollo de Aplicaciones Móviles con Android</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Academia Colón</p>
                </div>
              </article>

              {/* Education Item 3 */}
              <article
                className="group relative grid gap-4 pb-1 transition-all duration-300 sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                role="listitem"
              >
                <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                  2012 — 2015
                </div>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <span>Sistemas Microinformáticos y Redes (FP Grado Medio)</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">IES Villaverde</p>
                </div>
              </article>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-24">
            <p className="text-sm text-muted-foreground">
              Diseñado y construido con accesibilidad en mente por
              Jose Maria Lopez Villena. Inspirado en el trabajo de Brittany Chiang.
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}
export type Lang = "en" | "es";

export const CONTACT = {
  email: "hacyberhub@mail.com",
  calendly: "https://calendly.com/hacybertech",
  address: "9540 Gemini Drive, Beaverton, OR 97008",
  fadv: "https://www.fadv.com/",
  x: "https://x.com/hacyberglobaltech",
  phone: "+1 (213) 305-4168",
  phoneE164: "12133054168",
  lead: "https://lead.hacyberglobal.dpdns.org/",
  site: "https://hacyberglobaltech-web.vercel.app/",
  legal: {
    privacy:
      "https://hacybersupport.github.io/hacyber-legal-pages/privacy-policy.html",
    terms:
      "https://hacybersupport.github.io/hacyber-legal-pages/terms-of-service.html",
    portal: "https://hacybersupport.github.io/hacyber-legal-pages/",
  },
  socials: {
    whatsapp:
      "https://wa.me/12133054168?text=Hello%20HACYBERGLOBALTECH%20%E2%80%94%20I%20need%20digital%20support.",
    telegram: "https://t.me/hacyberglobaltech",
    tiktok: "https://www.tiktok.com/@hacyberglobaltech",
    facebook: "https://www.facebook.com/hacyberglobaltech/",
    instagram: "https://www.instagram.com/hacybertech",
    youtube: "https://www.youtube.com/@hacybertech",
  },
} as const;

export const copy = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About Us",
      support: "Support",
      contact: "Contact",
      getSupport: "Get Support",
    },
    servicesMenu: [
      { id: "gig", label: "Gig platform support" },
      { id: "fleet", label: "Driver & fleet assistance" },
      { id: "verify", label: "Verification guidance" },
      { id: "background", label: "Background-check guidance" },
      { id: "tech", label: "Technical support" },
      { id: "setup", label: "Digital setup assistance" },
      { id: "trouble", label: "Platform troubleshooting" },
      { id: "business", label: "Business technology support" },
      { id: "consult", label: "Consultation" },
      { id: "secure", label: "Secure digital solutions" },
    ],
    services: {
      kicker: "ASSISTANCE",
      title: "Choose the help you need",
      body: "A digital support and verification assistance center. We guide the next official step. We do not guarantee platform approval, earnings, or account outcomes. Never send passwords, one-time codes, 2FA codes, recovery codes, or PINs.",
      items: [
        {
          title: "Gig platform support",
          desc: "Day-to-day help for driver, shopper, and delivery apps.",
        },
        {
          title: "Driver & fleet assistance",
          desc: "Workflow and operations guidance for drivers and small fleets.",
        },
        {
          title: "Verification guidance",
          desc: "A clear walkthrough of official verification steps.",
        },
        {
          title: "Background-check guidance",
          desc: "Orientation on screening through authorized providers. We do not run the check.",
        },
        {
          title: "Technical support",
          desc: "App errors, device setup, and access issues — without your password.",
        },
        {
          title: "Digital setup assistance",
          desc: "Help getting an app or account ready the official way.",
        },
        {
          title: "Platform troubleshooting",
          desc: "Next steps when a workflow or app is stuck.",
        },
        {
          title: "Business technology support",
          desc: "Practical help for the tools your operation already uses.",
        },
        {
          title: "Consultation",
          desc: "A scoped conversation about what you need and what we can assist with.",
        },
        {
          title: "Secure digital solutions",
          desc: "Guidance that keeps credentials with you.",
        },
      ],
    },
    hero: {
      badge: "HACYBERGLOBALTECH",
      h1a: "Digital Support &",
      h1b: "Verification",
      h1c: "Assistance",
      body: "HACYBERGLOBALTECH provides digital support, gig platform assistance, verification guidance, technical support, and secure digital solutions. This is guidance — not a promise of platform approval, earnings, or account outcomes.",
      features: [
        { title: "Gig", sub: "Support" },
        { title: "Driver", sub: "Assistance" },
        { title: "Verification", sub: "Guidance" },
        { title: "Live", sub: "Support" },
      ],
      verified: "GLOBAL",
      verifiedSub: "DRIVER SUPPORT",
      checks: [
        "Gig platform support",
        "Verification guidance",
        "Technical support",
        "Secure assistance",
      ],
    },
    provider: {
      badge: "DIGITAL PLATFORM",
      name: "HACYBERGLOBALTECH",
      tag: "Technology · Support · Your Success",
      powered: "Driver Support · Account Assistance · App Setup Help",
      body: "Professional delivery and digital support services, including account reactivation assistance, technical support, driver and delivery operations, workflow optimization, and secure account guidance.",
      learn: "Verification screening partner",
      disclaimer:
        "HACYBERGLOBALTECH provides technology and support. Background screening is completed through authorized providers such as First Advantage — we do not run checks ourselves. Account reactivation assistance is case guidance, not a guarantee of platform approval.",
    },
    why: {
      title: "Why It Matters",
      items: [
        "Get driver and delivery operations support",
        "Receive account assistance with a clear next step",
        "Get app setup help with live support",
        "Keep delivery operations and accounts guided securely",
      ],
      footer: "Your operations. Our support. Officially.",
    },
    process: {
      title: "How the Process Works",
      subtitle: "Simple steps. Clear scope. Live support.",
      steps: [
        {
          title: "Choose Your Service",
          desc: "Driver support, account assistance, app setup help, or delivery operations.",
        },
        {
          title: "Share Requirements",
          desc: "Tell us the app, platform, or account issue so we can map the right path.",
        },
        {
          title: "Get a Clear Plan",
          desc: "You receive scope, documents needed, and the next official steps.",
        },
        {
          title: "We Assist",
          desc: "We guide account assistance, app setup, and official next steps through the proper channels.",
        },
        {
          title: "Track Progress",
          desc: "Stay informed with status updates and what happens next.",
        },
        {
          title: "Ongoing Support",
          desc: "We're here if you need follow-up, billing help, or another service.",
        },
      ],
    },
    platforms: {
      kicker: "GIG & DELIVERY APPS",
      title: "The apps we specifically support",
      body: "Driver support, account assistance, and app setup help across major gig and delivery platforms.",
      note: "Independent support. Not affiliated with, endorsed by, or part of these platforms.",
    },
    guide: {
      kicker: "VIDEO GUIDE",
      title: "How we help, in 15 seconds",
      body: "Watch the walkthrough, then tap Get Support for live help on the app you drive.",
      watch: "Play guide",
    },
    cta: {
      kicker: "READY TO GET STARTED?",
      title: "Let's Get You Supported.",
      body: "Driver support, account assistance, or app setup help — one team for delivery operations, technical support, and secure account guidance.",
      button: "Get Support Now",
      trust: "Trusted. Global. Compliant.",
    },
    footer: {
      values: "Secure  ·  Reliable  ·  Global",
      tagline: "Technology | Support | Your Success",
      connect: "Connect With Us",
      help: "Need Help?",
      contact: "Contact Support",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      legal: "Legal",
      request: "Start a request",
    },
    support: {
      title: "Get Support",
      subtitle:
        "Tell us what you need — driver support, account assistance, app setup help, or technical support. We'll reply with a clear next step.",
      name: "Full name",
      email: "Email",
      phone: "Phone (optional)",
      service: "Service needed",
      message: "How can we help?",
      submit: "Send request",
      sending: "Sending…",
      successTitle: "Request received",
      successBody:
        "Your message is ready in your email client. You can also book a live session with our team.",
      book: "Book a support session",
      emailUs: "Email support",
      whatsapp: "Chat on WhatsApp",
      request: "Open request form",
      close: "Close",
      required: "This field is required",
      invalidEmail: "Enter a valid email",
      placeholderName: "Your name",
      placeholderEmail: "you@email.com",
      placeholderPhone: "+1 …",
      placeholderMessage:
        "Share the app, platform, or issue. Do not include passwords or codes.",
      security:
        "Never send passwords, one-time codes, 2FA codes, recovery codes, or PINs. HACYBERGLOBALTECH will not ask for them.",
    },
    a11y: {
      skip: "Skip to main content",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language",
      english: "English",
      spanish: "Spanish",
      opensNewWindow: "opens in a new tab",
      home: "HACYBERGLOBALTECH home",
      primaryNav: "Primary",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      support: "Soporte",
      contact: "Contacto",
      getSupport: "Obtener soporte",
    },
    servicesMenu: [
      { id: "gig", label: "Soporte de plataformas gig" },
      { id: "fleet", label: "Asistencia para conductores y flotas" },
      { id: "verify", label: "Orientación de verificación" },
      { id: "background", label: "Orientación de antecedentes" },
      { id: "tech", label: "Soporte técnico" },
      { id: "setup", label: "Asistencia de configuración digital" },
      { id: "trouble", label: "Resolución de plataformas" },
      { id: "business", label: "Soporte tecnológico de negocio" },
      { id: "consult", label: "Consulta" },
      { id: "secure", label: "Soluciones digitales seguras" },
    ],
    services: {
      kicker: "ASISTENCIA",
      title: "Elija la ayuda que necesita",
      body: "Un centro de soporte digital y asistencia de verificación. Guiamos el siguiente paso oficial. No garantizamos aprobaciones, ingresos ni resultados de cuentas. Nunca envíe contraseñas, códigos de un solo uso, códigos 2FA, códigos de recuperación ni PIN.",
      items: [
        {
          title: "Soporte de plataformas gig",
          desc: "Ayuda diaria para apps de conductores, compradores y delivery.",
        },
        {
          title: "Asistencia para conductores y flotas",
          desc: "Orientación de operaciones y flujos para conductores y flotas pequeñas.",
        },
        {
          title: "Orientación de verificación",
          desc: "Un recorrido claro de los pasos oficiales de verificación.",
        },
        {
          title: "Orientación de antecedentes",
          desc: "Orientación sobre screening con proveedores autorizados. No realizamos el chequeo.",
        },
        {
          title: "Soporte técnico",
          desc: "Errores de apps, configuración del dispositivo y acceso — sin su contraseña.",
        },
        {
          title: "Asistencia de configuración digital",
          desc: "Ayuda para preparar una app o cuenta por la vía oficial.",
        },
        {
          title: "Resolución de plataformas",
          desc: "Siguientes pasos cuando un flujo o una app se detiene.",
        },
        {
          title: "Soporte tecnológico de negocio",
          desc: "Ayuda práctica para las herramientas que ya usa su operación.",
        },
        {
          title: "Consulta",
          desc: "Una conversación con alcance sobre lo que necesita y lo que podemos asistir.",
        },
        {
          title: "Soluciones digitales seguras",
          desc: "Orientación que deja las credenciales con usted.",
        },
      ],
    },
    hero: {
      badge: "HACYBERGLOBALTECH",
      h1a: "Soporte digital y",
      h1b: "verificación",
      h1c: "Asistencia",
      body: "HACYBERGLOBALTECH ofrece soporte digital, asistencia en plataformas gig, orientación de verificación, soporte técnico y soluciones digitales seguras. Es orientación — no una promesa de aprobación, ingresos o resultados de cuenta.",
      features: [
        { title: "Gig", sub: "Soporte" },
        { title: "Conductores", sub: "Asistencia" },
        { title: "Verificación", sub: "Orientación" },
        { title: "Soporte", sub: "en vivo" },
      ],
      verified: "GLOBAL",
      verifiedSub: "SOPORTE DRIVER",
      checks: [
        "Soporte de plataformas gig",
        "Orientación de verificación",
        "Soporte técnico",
        "Asistencia segura",
      ],
    },
    provider: {
      badge: "PLATAFORMA DIGITAL",
      name: "HACYBERGLOBALTECH",
      tag: "Tecnología · Soporte · Su éxito",
      powered: "Soporte para conductores · Asistencia de cuentas · Configuración de apps",
      body: "Servicios profesionales de delivery y soporte digital, incluyendo asistencia para reactivación de cuentas, soporte técnico, operaciones de conductores y delivery, optimización de flujos de trabajo y orientación segura de cuentas.",
      learn: "Socio de screening de verificación",
      disclaimer:
        "HACYBERGLOBALTECH ofrece tecnología y soporte. El screening de antecedentes se completa con proveedores autorizados como First Advantage — no realizamos chequeos de forma directa. La asistencia de reactivación es orientación de caso, no una garantía de aprobación de la plataforma.",
    },
    why: {
      title: "Por qué importa",
      items: [
        "Obtener soporte para operaciones de conductores y delivery",
        "Recibir asistencia de cuentas con un siguiente paso claro",
        "Obtener ayuda de configuración de apps con soporte en vivo",
        "Mantener operaciones de delivery y cuentas guiadas de forma segura",
      ],
      footer: "Sus operaciones. Nuestro soporte. De forma oficial.",
    },
    process: {
      title: "Cómo funciona el proceso",
      subtitle: "Pasos simples. Alcance claro. Soporte en vivo.",
      steps: [
        {
          title: "Elija su servicio",
          desc: "Soporte para conductores, asistencia de cuentas, configuración de apps u operaciones de delivery.",
        },
        {
          title: "Comparta requisitos",
          desc: "Indique la app, plataforma o problema de cuenta para trazar la ruta correcta.",
        },
        {
          title: "Reciba un plan claro",
          desc: "Obtiene alcance, documentos necesarios y los siguientes pasos oficiales.",
        },
        {
          title: "Asistimos",
          desc: "Guiamos asistencia de cuentas, configuración de apps y los siguientes pasos oficiales por los canales correctos.",
        },
        {
          title: "Siga el progreso",
          desc: "Manténgase informado con actualizaciones y lo que sigue.",
        },
        {
          title: "Soporte continuo",
          desc: "Estamos si necesita seguimiento, facturación u otro servicio.",
        },
      ],
    },
    platforms: {
      kicker: "APPS GIG Y DELIVERY",
      title: "Las apps que apoyamos",
      body: "Soporte para conductores, asistencia de cuentas y configuración de apps en las principales plataformas gig y de delivery.",
      note: "Soporte independiente. No estamos afiliados, respaldados ni formamos parte de estas plataformas.",
    },
    guide: {
      kicker: "GUÍA EN VIDEO",
      title: "Cómo ayudamos, en 15 segundos",
      body: "Vea la guía y pulse Obtener soporte para ayuda en vivo en la app que conduce.",
      watch: "Reproducir guía",
    },
    cta: {
      kicker: "¿LISTO PARA EMPEZAR?",
      title: "Pongámosle soporte.",
      body: "Soporte para conductores, asistencia de cuentas o ayuda de configuración — un solo equipo para operaciones de delivery, soporte técnico y orientación segura de cuentas.",
      button: "Obtener soporte ahora",
      trust: "Confiable. Global. Cumplimiento.",
    },
    footer: {
      values: "Seguro  ·  Confiable  ·  Global",
      tagline: "Tecnología | Soporte | Su éxito",
      connect: "Conéctese con nosotros",
      help: "¿Necesita ayuda?",
      contact: "Contactar soporte",
      privacy: "Política de privacidad",
      terms: "Términos de servicio",
      legal: "Legal",
      request: "Iniciar una solicitud",
    },
    support: {
      title: "Obtener soporte",
      subtitle:
        "Cuéntenos qué necesita — soporte para conductores, asistencia de cuentas, configuración de apps o soporte técnico. Responderemos con el siguiente paso claro.",
      name: "Nombre completo",
      email: "Correo",
      phone: "Teléfono (opcional)",
      service: "Servicio necesario",
      message: "¿Cómo podemos ayudar?",
      submit: "Enviar solicitud",
      sending: "Enviando…",
      successTitle: "Solicitud recibida",
      successBody:
        "Su mensaje está listo en su cliente de correo. También puede agendar una sesión en vivo con nuestro equipo.",
      book: "Agendar una sesión de soporte",
      emailUs: "Escribir a soporte",
      whatsapp: "Chatear por WhatsApp",
      request: "Abrir formulario de solicitud",
      close: "Cerrar",
      required: "Este campo es obligatorio",
      invalidEmail: "Ingrese un correo válido",
      placeholderName: "Su nombre",
      placeholderEmail: "usted@email.com",
      placeholderPhone: "+1 …",
      placeholderMessage:
        "Indique la app, la plataforma o el problema. No incluya contraseñas ni códigos.",
      security:
        "Nunca envíe contraseñas, códigos de un solo uso, códigos 2FA, códigos de recuperación ni PIN. HACYBERGLOBALTECH no los pedirá.",
    },
    a11y: {
      skip: "Saltar al contenido principal",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      language: "Idioma",
      english: "Inglés",
      spanish: "Español",
      opensNewWindow: "se abre en una pestaña nueva",
      home: "Inicio de HACYBERGLOBALTECH",
      primaryNav: "Principal",
    },
  },
} as const;

export type Copy = (typeof copy)[Lang];

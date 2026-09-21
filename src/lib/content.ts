export type Lang = "en" | "es";

export const CONTACT = {
  email: "hacybertech@gmail.com",
  calendly: "https://calendly.com/hacybertech",
  address: "9540 Gemini Drive, Beaverton, OR 97008",
  fadv: "https://www.fadv.com/",
  x: "https://x.com/hacybertech",
  phone: "+1 (213) 305-4168",
  phoneE164: "12133054168",
  socials: {
    whatsapp:
      "https://wa.me/12133054168?text=Hello%20HACYBERGLOBALTECH%20%E2%80%94%20I%20need%20deployment%2C%20reactivation%2C%20or%20verification%20support.",
    telegram: "https://t.me/hacybertech",
    tiktok: "https://www.tiktok.com/@hacybertech",
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
      { id: "deploy", label: "Web Deployment" },
      { id: "setup", label: "Application Setup" },
      { id: "workflow", label: "Digital Workflow" },
      { id: "reactivate", label: "Driver Reactivation" },
      { id: "verify", label: "Verification Support" },
    ],
    hero: {
      badge: "HACYBERGLOBALTECH SERVICES",
      h1a: "Automated Deployment &",
      h1b: "Reactivation Services",
      body: "HACYBERGLOBALTECH is a digital technology and automation platform. We deploy web software, configure applications, support digital workflows, and guide official verification and account reactivation — securely, globally, with live support.",
      features: [
        { title: "Web & App", sub: "Deployment" },
        { title: "Driver", sub: "Reactivation" },
        { title: "Cloud &", sub: "Security" },
        { title: "Live", sub: "Support" },
      ],
      verified: "GLOBAL",
      verifiedSub: "TECH PLATFORM",
      checks: [
        "Web Deployment",
        "Application Setup",
        "Driver Reactivation",
        "Verification Support",
      ],
    },
    provider: {
      badge: "DIGITAL PLATFORM",
      name: "HACYBERGLOBALTECH",
      tag: "Technology · Support · Your Success",
      powered: "Automated Deployment & Reactivation Services",
      body: "Professional software deployment, application setup, cloud infrastructure, and digital workflow support for modern businesses — plus official verification guidance and driver reactivation support for eligible programs.",
      learn: "Verification screening partner",
      disclaimer:
        "HACYBERGLOBALTECH provides technology, deployment, and support. Background screening is completed through authorized providers such as First Advantage — we do not run checks ourselves. Reactivation support is case guidance, not a guarantee of platform approval.",
    },
    why: {
      title: "Why It Matters",
      items: [
        "Ship production-ready web and app deployments",
        "Harden cloud, security, and compliance posture",
        "Restore eligible gig and driver accounts with a clear plan",
        "Complete official verification with step-by-step guidance",
      ],
      footer: "Your systems. Our support. Officially.",
    },
    process: {
      title: "How the Process Works",
      subtitle: "Simple steps. Clear scope. Live support.",
      steps: [
        {
          title: "Choose Your Service",
          desc: "Deployment, setup, workflow, reactivation, or official verification support.",
        },
        {
          title: "Share Requirements",
          desc: "Tell us the product, platform, or case so we can map the right path.",
        },
        {
          title: "Get a Clear Plan",
          desc: "You receive scope, documents needed, and the next official steps.",
        },
        {
          title: "We Deliver",
          desc: "We deploy, configure, or guide restoration through the proper channels.",
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
    cta: {
      kicker: "READY TO GET STARTED?",
      title: "Let's Get Your Systems Live.",
      body: "Deploy a product, restore an eligible account, or complete official verification — one team from setup to support.",
      button: "Get Support Now",
      trust: "Trusted. Global. Compliant.",
    },
    footer: {
      values: "Secure  ·  Reliable  ·  Global",
      tagline: "Technology | Support | Your Success",
      connect: "Connect With Us",
      help: "Need Help?",
      contact: "Contact Support",
    },
    support: {
      title: "Get Support",
      subtitle:
        "Tell us what you need — deployment, reactivation, verification, or technical support. We'll reply with a clear next step.",
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
      close: "Close",
      required: "This field is required",
      invalidEmail: "Enter a valid email",
      placeholderName: "Your name",
      placeholderEmail: "you@email.com",
      placeholderPhone: "+1 …",
      placeholderMessage:
        "Share the product, platform, or case and where you need help.",
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
      { id: "deploy", label: "Despliegue web" },
      { id: "setup", label: "Configuración de apps" },
      { id: "workflow", label: "Flujo digital" },
      { id: "reactivate", label: "Reactivación de conductores" },
      { id: "verify", label: "Soporte de verificación" },
    ],
    hero: {
      badge: "SERVICIOS HACYBERGLOBALTECH",
      h1a: "Despliegue automatizado y",
      h1b: "servicios de reactivación",
      body: "HACYBERGLOBALTECH es una plataforma de tecnología digital y automatización. Desplegamos software web, configuramos aplicaciones, apoyamos flujos digitales y guiamos verificación oficial y reactivación de cuentas — de forma segura, global y con soporte en vivo.",
      features: [
        { title: "Web y apps", sub: "Despliegue" },
        { title: "Conductores", sub: "Reactivación" },
        { title: "Nube y", sub: "seguridad" },
        { title: "Soporte", sub: "en vivo" },
      ],
      verified: "GLOBAL",
      verifiedSub: "PLATAFORMA TECH",
      checks: [
        "Despliegue web",
        "Configuración de apps",
        "Reactivación de conductores",
        "Soporte de verificación",
      ],
    },
    provider: {
      badge: "PLATAFORMA DIGITAL",
      name: "HACYBERGLOBALTECH",
      tag: "Tecnología · Soporte · Su éxito",
      powered: "Despliegue automatizado y servicios de reactivación",
      body: "Despliegue profesional de software, configuración de aplicaciones, infraestructura en la nube y soporte de flujos digitales para empresas modernas — más orientación de verificación oficial y apoyo de reactivación para programas elegibles.",
      learn: "Socio de screening de verificación",
      disclaimer:
        "HACYBERGLOBALTECH ofrece tecnología, despliegue y soporte. El screening de antecedentes se completa con proveedores autorizados como First Advantage — no realizamos chequeos de forma directa. El apoyo de reactivación es orientación de caso, no una garantía de aprobación de la plataforma.",
    },
    why: {
      title: "Por qué importa",
      items: [
        "Lanzar despliegues web y de apps listos para producción",
        "Fortalecer nube, seguridad y cumplimiento",
        "Restaurar cuentas elegibles de conductores con un plan claro",
        "Completar verificación oficial con guía paso a paso",
      ],
      footer: "Sus sistemas. Nuestro soporte. De forma oficial.",
    },
    process: {
      title: "Cómo funciona el proceso",
      subtitle: "Pasos simples. Alcance claro. Soporte en vivo.",
      steps: [
        {
          title: "Elija su servicio",
          desc: "Despliegue, configuración, flujo, reactivación o soporte de verificación oficial.",
        },
        {
          title: "Comparta requisitos",
          desc: "Indique el producto, plataforma o caso para trazar la ruta correcta.",
        },
        {
          title: "Reciba un plan claro",
          desc: "Obtiene alcance, documentos necesarios y los siguientes pasos oficiales.",
        },
        {
          title: "Entregamos",
          desc: "Desplegamos, configuramos o guiamos la restauración por los canales correctos.",
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
    cta: {
      kicker: "¿LISTO PARA EMPEZAR?",
      title: "Pongamos sus sistemas en vivo.",
      body: "Despliegue un producto, restaure una cuenta elegible o complete la verificación oficial — un solo equipo de la configuración al soporte.",
      button: "Obtener soporte ahora",
      trust: "Confiable. Global. Cumplimiento.",
    },
    footer: {
      values: "Seguro  ·  Confiable  ·  Global",
      tagline: "Tecnología | Soporte | Su éxito",
      connect: "Conéctese con nosotros",
      help: "¿Necesita ayuda?",
      contact: "Contactar soporte",
    },
    support: {
      title: "Obtener soporte",
      subtitle:
        "Cuéntenos qué necesita — despliegue, reactivación, verificación o soporte técnico. Responderemos con el siguiente paso claro.",
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
      close: "Cerrar",
      required: "Este campo es obligatorio",
      invalidEmail: "Ingrese un correo válido",
      placeholderName: "Su nombre",
      placeholderEmail: "usted@email.com",
      placeholderPhone: "+1 …",
      placeholderMessage:
        "Indique el producto, la plataforma o el caso y en qué necesita ayuda.",
    },
  },
} as const;

export type Copy = (typeof copy)[Lang];

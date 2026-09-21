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
      "https://wa.me/12133054168?text=Hello%20HACYBERGLOBALTECH%20%E2%80%94%20I%20need%20background%20check%20and%20verification%20support.",
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
      { id: "identity", label: "Identity Verification" },
      { id: "criminal", label: "Criminal History" },
      { id: "employment", label: "Employment History" },
      { id: "driving", label: "Driving Record" },
      { id: "guidance", label: "Step-by-Step Guidance" },
    ],
    hero: {
      badge: "HACYBERGLOBALTECH SERVICES",
      h1a: "Background Check &",
      h1b: "Verification Support",
      body: "Get the guidance and support you need for official background checks and verification processes — from document prep to authorized portal access — with trusted, official provider partners.",
      features: [
        { title: "Official", sub: "Screening Providers" },
        { title: "Step-by-Step", sub: "Guidance" },
        { title: "Secure &", sub: "Confidential" },
        { title: "Ongoing", sub: "Support" },
      ],
      verified: "VERIFIED",
      verifiedSub: "BACKGROUND CHECK",
      checks: [
        "Identity Verification",
        "Criminal History",
        "Employment History",
        "Driving Record",
      ],
    },
    provider: {
      badge: "OFFICIAL PROVIDER",
      name: "First Advantage",
      tag: "A Symphony Technology Group Company",
      powered: "Powered by First Advantage",
      body: "We work with First Advantage, a leading global background screening provider covering 200+ countries, to help you meet verification requirements for eligible programs.",
      learn: "Learn more about First Advantage",
      disclaimer:
        "HACYBERGLOBALTECH does not conduct background checks directly. We provide guidance and help you access the official provider's portal.",
    },
    why: {
      title: "Why It Matters",
      items: [
        "Meet program requirements",
        "Build trust and credibility",
        "Improve your chances of approval",
        "Get step-by-step support from our team",
      ],
      footer: "Your goals. Our support. Officially.",
    },
    process: {
      title: "How the Process Works",
      subtitle: "Simple steps. Clear guidance. Official verification.",
      steps: [
        {
          title: "Choose Your Service",
          desc: "Select the background check and verification support you need.",
        },
        {
          title: "Get Guidance",
          desc: "Our team explains the requirements and helps you prepare the right documents.",
        },
        {
          title: "Access the Official Portal",
          desc: "We provide the correct link to the First Advantage self-registration portal (or other authorized provider).",
        },
        {
          title: "Complete Verification",
          desc: "Submit your information and complete the official screening process.",
        },
        {
          title: "Track Your Status",
          desc: "Stay informed with updates and next steps from the provider.",
        },
        {
          title: "Get Support",
          desc: "We're here to help if you have questions or need further assistance.",
        },
      ],
    },
    cta: {
      kicker: "READY TO GET STARTED?",
      title: "Let's Get You Verified.",
      body: "Click below to learn more, get guidance, or access the official registration portal for background checks and verification support.",
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
        "Tell us what you need. We'll reply with guidance and, when you're ready, the correct official provider portal.",
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
        "Share the program, documents you have, and where you're stuck.",
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
      { id: "identity", label: "Verificación de identidad" },
      { id: "criminal", label: "Antecedentes penales" },
      { id: "employment", label: "Historial laboral" },
      { id: "driving", label: "Registro de conducir" },
      { id: "guidance", label: "Guía paso a paso" },
    ],
    hero: {
      badge: "SERVICIOS HACYBERGLOBALTECH",
      h1a: "Verificación y",
      h1b: "chequeo de antecedentes",
      body: "Reciba la orientación y el apoyo que necesita para procesos oficiales de verificación y antecedentes — desde la preparación de documentos hasta el acceso al portal autorizado — con socios proveedores oficiales de confianza.",
      features: [
        { title: "Proveedores", sub: "oficiales de screening" },
        { title: "Guía", sub: "paso a paso" },
        { title: "Seguro y", sub: "confidencial" },
        { title: "Soporte", sub: "continuo" },
      ],
      verified: "VERIFICADO",
      verifiedSub: "CHEQUEO DE ANTECEDENTES",
      checks: [
        "Verificación de identidad",
        "Antecedentes penales",
        "Historial laboral",
        "Registro de conducir",
      ],
    },
    provider: {
      badge: "PROVEEDOR OFICIAL",
      name: "First Advantage",
      tag: "A Symphony Technology Group Company",
      powered: "Con tecnología de First Advantage",
      body: "Trabajamos con First Advantage, un proveedor global líder de screening de antecedentes con cobertura en más de 200 países, para ayudarle a cumplir los requisitos de verificación de programas elegibles.",
      learn: "Más información sobre First Advantage",
      disclaimer:
        "HACYBERGLOBALTECH no realiza chequeos de antecedentes de forma directa. Brindamos orientación y le ayudamos a acceder al portal oficial del proveedor.",
    },
    why: {
      title: "Por qué importa",
      items: [
        "Cumplir requisitos del programa",
        "Construir confianza y credibilidad",
        "Mejorar sus posibilidades de aprobación",
        "Recibir apoyo paso a paso de nuestro equipo",
      ],
      footer: "Sus metas. Nuestro apoyo. De forma oficial.",
    },
    process: {
      title: "Cómo funciona el proceso",
      subtitle: "Pasos simples. Guía clara. Verificación oficial.",
      steps: [
        {
          title: "Elija su servicio",
          desc: "Seleccione el apoyo de verificación y chequeo de antecedentes que necesita.",
        },
        {
          title: "Reciba orientación",
          desc: "Nuestro equipo explica los requisitos y le ayuda a preparar los documentos correctos.",
        },
        {
          title: "Acceda al portal oficial",
          desc: "Le entregamos el enlace correcto al portal de autorregistro de First Advantage (u otro proveedor autorizado).",
        },
        {
          title: "Complete la verificación",
          desc: "Envíe su información y complete el proceso oficial de screening.",
        },
        {
          title: "Siga su estado",
          desc: "Manténgase informado con actualizaciones y siguientes pasos del proveedor.",
        },
        {
          title: "Obtenga soporte",
          desc: "Estamos aquí si tiene preguntas o necesita más asistencia.",
        },
      ],
    },
    cta: {
      kicker: "¿LISTO PARA EMPEZAR?",
      title: "Vamos a verificarle.",
      body: "Haga clic abajo para saber más, recibir orientación o acceder al portal oficial de registro para chequeos de antecedentes y verificación.",
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
        "Cuéntenos qué necesita. Responderemos con orientación y, cuando esté listo, el portal oficial correcto del proveedor.",
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
        "Indique el programa, los documentos que tiene y en qué está atascado.",
    },
  },
} as const;

export type Copy = (typeof copy)[Lang];

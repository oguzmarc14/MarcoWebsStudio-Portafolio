const whatsappNumber = '523348153699';

export const createWhatsappUrl = (message: string) =>
	`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const whatsappUrl = createWhatsappUrl('Hola Marco Webs Studio, quiero cotizar una página web para mi negocio.');

export const navLinks = [
	{ label: 'Beneficios', href: '#beneficios' },
	{ label: 'Servicios', href: '#servicios' },
	{ label: 'Proyectos', href: '#proyectos' },
	{ label: 'Paquetes', href: '#paquetes' },
	{ label: 'FAQ', href: '#faq' },
];

export const benefitItems = [
	{ title: '01 — Diseño estratégico', description: 'No solo se ve moderna. Tu página transmite confianza y profesionalismo desde el primer segundo.', icon: 'fa-compass-drafting' },
	{ title: '02 — Perfecta en cualquier dispositivo', description: 'Experiencia fluida y rápida en celular, tablet y computadora.', icon: 'fa-mobile-screen-button' },
	{ title: '03 — Conversión directa por WhatsApp', description: 'Botones y llamadas a la acción pensadas para generar más mensajes y clientes.', icon: 'fa-whatsapp' },
	{ title: '04 — Optimizada para búsquedas locales', description: 'Preparada para negocios que quieren aparecer mejor en Google y destacar en su zona.', icon: 'fa-location-dot' },
	{ title: '05 — Rápida, ligera y moderna', description: 'Carga veloz, animaciones suaves y una estructura preparada para crecer.', icon: 'fa-bolt' },
];

export const serviceItems = [
	'Presencia digital premium',
	'Sitios enfocados en conversión',
	'Desarrollo web personalizado',
	'Automatización e integración',
	'Optimización y escalabilidad',
];

export const projectItems = [
	{
		title: 'Agencia de terrenos',
		description: 'Un sitio enfocado en venta de propiedades, lotes y oportunidades de venta.',
		image: '/Noe.webp',
		alt: 'Proyecto de agencia de terrenos',
		href: 'https://noeaguilera.com',
		badges: ['Inmobiliaria', 'Ventas', 'Responsive'],
	},
	{
		title: 'Venta de baterías',
		description: 'Catálogo claro para mostrar productos, resolver dudas y llevar al cliente directo a WhatsApp.',
		image: '/Gibs.webp',
		alt: 'Proyecto de venta de baterías',
		href: 'https://gibs1.vercel.app/',
		badges: ['Catálogo', 'WhatsApp', 'Conversión'],
	},
	{
		title: 'Nutrióloga Alondra',
		description: 'Marca personal limpia y profesional para agendar consultas y transmitir confianza.',
		image: '/Alondra.webp',
		alt: 'Proyecto de nutrióloga Alondra',
		href: 'https://alondraaldananutricion.vercel.app/',
		badges: ['Salud', 'Branding', 'Citas'],
	},
];

export const processSteps = [
	{ title: 'Analizo tu negocio', description: 'Analizamos tu negocio, objetivos y clientes para crear una solución alineada a lo que realmente necesitas.' },
	{ title: 'Diseñamos la estrategia visual', description: 'Definimos estructura, diseño y experiencia para transmitir profesionalismo y generar confianza.' },
	{ title: 'Desarrollamos la experiencia', description: 'Construimos una página rápida, moderna y optimizada para dispositivos móviles y conversión.' },
	{ title: 'Lanzamos y optimizamos', description: 'Publicamos tu proyecto y dejamos todo listo para captar clientes y escalar tu presencia digital.' },
];

export const packageItems = [
	{
		title: 'Básico',
		price: 'desde $4,500 MXN',
		description: 'Ideal para negocios que buscan una presencia profesional rápida y efectiva.',
		includes: [
			'Landing page profesional',
			'Diseño responsive',
			'Botón directo a WhatsApp',
			'Hasta 4 secciones',
			'Optimización básica SEO',
			'Publicación online',
			'1 revisión incluida',
		],
		featured: false,
	},
	{
		title: 'Profesional',
		price: 'desde $8,500 MXN',
		description: 'La opción más recomendada para negocios que quieren destacar y generar más clientes.',
		includes: [
			'Todo lo del básico',
			'Hasta 7 secciones',
			'Diseño premium personalizado',
			'Copy orientado a conversión',
			'Galería o proyectos',
			'Formularios de contacto',
			'Optimización visual avanzada',
			'SEO básico',
			'Animaciones y efectos modernos',
			'Mayor enfoque en conversión',
			'2 revisiones incluidas',
		],
		featured: true,
	},
	{
		title: 'Avanzado',
		price: 'desde $15,000+ MXN',
		description: 'Para negocios que necesitan un sistema más potente, escalable y personalizado.',
		includes: [
			'Todo lo del profesional',
			'Sistema administrable',
			'Integraciones personalizadas',
			'Base de datos',
			'Panel administrativo',
			'Automatizaciones',
			'Catálogo dinámico',
			'Escalabilidad',
			'Desarrollo personalizado',
			'Funciones avanzadas',
			'Mayor optimización y rendimiento',
		],
		featured: false,
	},
];

export const faqItems = [
	{ question: '¿Cuánto tarda?', answer: 'La mayoría de proyectos se entregan entre 7 y 15 días hábiles, según contenido, alcance y rondas de ajuste.' },
	{ question: '¿Incluye dominio?', answer: 'Puedo ayudarte a configurarlo y recomendarte la opción más conveniente, aunque el costo del dominio depende del proveedor.' },
	{ question: '¿Puedo pedir cambios?', answer: 'Sí, trabajamos con ajustes definidos para afinar textos, bloques y detalles visuales antes de publicar.' },
	{ question: '¿La página funciona en celular?', answer: 'Sí, cada entrega está pensada para verse y funcionar bien en celular, tablet y escritorio.' },
];

export const socialLinks = [
	{ label: 'Instagram', href: 'https://www.instagram.com/marco.olivares.guzman/' },
	{ label: 'Facebook', href: 'https://www.facebook.com/marco.olivaresguzman?locale=es_LA' },
	{ label: 'TikTok', href: 'https://www.tiktok.com/@marcowebstudio?_r=1&_t=ZS-96Wv3wDXamS' },
];
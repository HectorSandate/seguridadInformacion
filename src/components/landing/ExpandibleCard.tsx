"use client";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { useNavigate } from "react-router-dom";

export default function ExpandableCardDemo() {
  const navigate = useNavigate();

  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 w-full h-full bg-black/20"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full top-2 right-2 lg:hidden"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  src={active.src}
                  alt={active.title}
                  className="object-cover object-top w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg"
                />
              </motion.div>

              <div>
                <div className="flex items-start justify-between p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    className="px-4 py-3 text-sm font-bold text-white bg-yellow-400 rounded-full"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="relative px-4 pt-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="flex flex-col justify-between p-8 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-200 rounded-xl"
          >
            <div className="flex flex-col gap-4 md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  src={card.src}
                  alt={card.title}
                  className="object-cover object-top w-40 h-40 rounded-lg md:h-14 md:w-14"
                />
              </motion.div>
              <div className="flex-1">
                {" "}
                {/* Add this flex-1 class to take up remaining space */}
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-left text-neutral-800 dark:text-neutral-200 md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-left text-neutral-600 dark:text-neutral-400 md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <div className="flex justify-end mt-4 md:mt-0">
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="w-20 px-4 py-2 text-sm font-bold text-black bg-gray-100 rounded-full hover:bg-primary hover:text-white"
              >
                {card.ctaText}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Ley de propiedad industrial",
    src: "https://www.cofide.mx/hs-fs/hubfs/Imagenes%20MS/Propiedad%20industrial/que-es-la-propiedad-industrial.png?width=900&name=que-es-la-propiedad-industrial.png",
    ctaText: "Ver",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
      La Ley de Propiedad Industrial de México regula los derechos y obligaciones relacionados con la propiedad industrial, incluyendo patentes, marcas, nombres comerciales y derechos de autor, con el objetivo de proteger y fomentar la innovación y la creatividad industrial. Establece procedimientos para el registro y protección de estos derechos, promoviendo un entorno de competencia leal y evitando el uso no autorizado de invenciones y signos distintivos, mientras otorga a los titulares el derecho exclusivo sobre su uso y explotación
        </p>
      );
    },
  },
  {
    description: "Jurídico",
    title: "Ley General de protección de datos Personales de México",
    src: "https://enfoque-estrategico.com/wp-content/uploads/2022/12/marco-juridico-mexico.jpeg",
    ctaText: "Ver",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          La Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados (LGPDPPSO), promulgada en enero de 2017, establece los principios y procedimientos para garantizar el derecho a la protección de datos personales en posesión de entidades gubernamentales mexicanas, abarcando todas las autoridades, organismos y partidos políticos a nivel federal, estatal y municipal. Esta ley asegura el uso adecuado de datos personales al requerir el consentimiento del titular para su tratamiento, promoviendo principios de licitud, calidad, lealtad y seguridad, entre otros, y estableciendo mecanismos para ejercer los derechos ARCO
        </p>
      );
    },
  },

  {

    title: "Ley Federal de Derechos de Autor",
    src: "https://www.debate.com.mx/__export/1688703310616/sites/debate/img/2023/07/06/derechos.jpg_423682103.jpg",
    ctaText: "Ver",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
         Esta ley protege los derechos de autores y creadores sobre sus obras en México, abarcando obras literarias, musicales, artísticas y científicas. Proporciona tanto derechos morales, que preservan la relación del autor con su obra, como derechos patrimoniales, que permiten la explotación económica. La ley también incluye disposiciones sobre infracciones y sanciones para proteger el uso adecuado de las obras.
        </p>
      );
    },
  },
  {

    title: "Ley Federal de Protección de Datos Personales en Posesión de los Particulares",
    src: "https://prodata.mx/wp-content/uploads/2021/08/Privacidad1-768x741.webp",
    ctaText: "ver",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Esta ley regula cómo las entidades privadas en México deben recolectar, usar, y proteger los datos personales. Establece principios de responsabilidad, consentimiento, información, y control sobre el manejo de datos, permitiendo a los individuos ejercer sus derechos ARCO (Acceso, Rectificación, Cancelación, y Oposición) para manejar su información personal.
        </p>
      );
    },
  },
  {
    title: "Código Penal Federal",
    src: "https://cdn.kobo.com/book-images/a0ff83f4-6bbc-423c-8a01-3ff8ee54b579/1200/1200/False/codigo-penal-federal-1.jpg",
    ctaText: "Ver",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Es la legislación que define las conductas consideradas delitos en México y establece las penas correspondientes. Cubre una amplia gama de conductas delictivas, desde crímenes contra las personas y la salud hasta delitos financieros y contra la administración pública. Incluye disposiciones sobre tentativa, participación delictiva y agravantes.
        </p>
      );
    },
  },
  {
    title: "Ley General de Transparencia y Acceso a la Información Pública",
    src: "https://cdn-3.expansion.mx/dims4/default/3246cec/2147483647/strip/true/crop/640x336+1+0/resize/1200x630!/format/jpg/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F0c%2F55%2F657dac584e67b8a890fb3267547d%2Frendicion-de-cuentas.jpeg",
    ctaText: "Ver",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
      Proporciona el marco legal para garantizar el acceso a la información que poseen las autoridades públicas en México. Promueve la transparencia en la gestión pública y facilita que los ciudadanos accedan a información para participar más activamente en la vida democrática del país, estableciendo procedimientos claros para la solicitud y entrega de información.
        </p>
      );
    },
  },
  {
    title: "Criptografía Simétrica",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHRnHZIYEzrT1vmtjyKLJzjx6xFwPGIcinMQ&s",
    ctaText: "Ver",
    ctaLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    content: () => {
      return (
        <p>
         En criptografía simétrica, tanto el emisor como el receptor utilizan la misma clave secreta para cifrar y descifrar la información. Esto implica que la clave debe ser compartida entre las partes de manera segura. Es eficiente y rápido, ideal para cifrar grandes cantidades de datos, pero presenta desafíos de seguridad relacionados con la gestión de claves.
        </p>
      );
    },
  },
  {
    title: "Criptografía Asimétrica",
    src: "https://protecciondatos-lopd.com/empresas/wp-content/uploads/2020/05/encriptacion-asimetrica.jpg",
    ctaText: "Ver",
    ctaLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    content: () => {
      return (
        <p>
         Utiliza un par de claves relacionadas matemáticamente: una clave pública, que puede ser compartida abiertamente, y una clave privada, que se mantiene en secreto. La clave pública cifra los datos, y solo la clave privada correspondiente puede descifrarlos. Esta técnica facilita el intercambio seguro de información y la autenticación digital sin necesidad de compartir una clave secreta.
        </p>
      );
    },
  },
  {
    title: "Cifrado por Bloques",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cifrado_por_bloques.png/250px-Cifrado_por_bloques.png",
    ctaText: "Ver",
    ctaLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    content: () => {
      return (
        <p>
          Esta técnica divide el texto en bloques de un tamaño fijo y cifra cada bloque por separado utilizando un algoritmo matemático específico. Es adecuado para situaciones donde se sabe de antemano la longitud del mensaje, como en el almacenamiento de datos.
        </p>
      );
    },
  },
  {
    title: "Cifrado por Flujo",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Nonlinear-combo-generator.png/220px-Nonlinear-combo-generator.png",
    ctaText: "Ver",
    ctaLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    content: () => {
      return (
        <p>
        Procesa los datos como un flujo continuo, cifra el texto bit a bit o byte a byte, permitiendo una transmisión segura de datos en tiempo real. Se utiliza en aplicaciones donde los datos se transmiten de forma continua, como en servicios de streaming de audio y video.
        </p>
      );
    },
  },
  {
    title: "Criptoanálisis",
    src: "https://elordenmundial.com/wp-content/uploads/2023/02/que-es-criptoanalisis.jpg",
    ctaText: "Ver",
    ctaLink: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    content: () => {
      return (
        <p>
           Es el estudio de técnicas para encontrar vulnerabilidades y romper sistemas criptográficos, sin conocer necesariamente las claves involucradas. Los criptoanalistas buscan debilidades en los algoritmos de cifrado o en la implementación del sistema para comprometer su seguridad e integridad.
        </p>
      );
    },
  },
];

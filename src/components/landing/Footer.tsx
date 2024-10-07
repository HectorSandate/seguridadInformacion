const Footer = () => {
  return (
    <div className="w-full bg-[#0F0E17] py-20 mt-20 grid md:grid-cols-4 px-20">
      <div className="flex justify-between col-span-1 md:flex-col md:h-72">
        <p className="text-white text-lg font-semibold">
          Hector Jose Diaz Sandate
        </p>
        <p className="mt-4 text-white md:mt-0">
          © {new Date().getFullYear()} Todos los derechos reservados
        </p>
      </div>
      <div className="flex flex-col col-span-1 gap-1 mt-10 md:mt-0">
        <h3 className="text-lg font-semibold text-white">Plataforma</h3>
        <a href="" className="text-base text-white">
          Inicio
        </a>
        <a href="" className="text-base text-white">
          Novedades
        </a>
        <a href="" className="text-base text-white">
          Sobre mí
        </a>
      </div>
      <div className="flex flex-col col-span-1 gap-1 mt-10 md:mt-0">
        <h3 className="text-lg font-semibold text-white">Seguridad</h3>
        <a href="" className="text-base text-white">
          Blog
        </a>
        <a href="" className="text-base text-white">
          Herramientas y Recursos
        </a>
      </div>
      <div className="flex flex-col col-span-1 gap-1 mt-10 md:mt-0">
        <h3 className="text-lg font-semibold text-white">Contacto</h3>
        <a href="tel:+6183008913" className="text-base text-white">
          Tel. (618)-300-8913
        </a>
        <a href="" className="w-48 text-base text-white">
          Calle Hilario Moreno #404 Col. Azteca
        </a>
        <a href="mailto:security@mail.com" className="text-base text-white">
          security@mail.com
        </a>
      </div>
    </div>
  );
};

export default Footer;

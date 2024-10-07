import Header from "@/components/landing/Header";
import img1 from "@/assets/images/img1landing-removebg-preview-transformed.png";
import teamsits from "@/assets/images/teamsits.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Footer from "@/components/landing/Footer.tsx";
import { beneficios } from "../const/benefits.ts";
import ExpandableCardDemo from "@/components/landing/ExpandibleCard.tsx";

function Landing() {
  return (
    <>
      {/* nav bar */}
      <Header />
      {/* Section 1 */}
      <div
        id="home"
        className=" bg-gradient-to-br from-blue-600 to-white-300 max-w-screen-2xl w-full h-[650px] mx-auto md:mt-32 md:rounded-t-[50px] md:rounded-bl-[50px] md:rounded-br-[320px] flex-row flex"
      >
        <div className="mx-auto my-auto xl:w-1/3 pl-14">
          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Seguridad Informatica
          </h2>
          <p className="mt-9 text-2xl" style={{ color: "#ffff" }}>
            Cuida tu información!
          </p>
        </div>
        <div className="flex w-2/3">
          <img
            src={img1}
            alt=""
            className="mx-auto my-auto h-[550px] hidden xl:block"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div
        id="news"
        className="#news max-w-screen-xl mx-auto mt-20 lg:flex lg:flex-row mb-20"
      >
        {/* Titulo */}
        <div className="px-10 mb-10 lg:w-1/3">
          <h3 className="text-5xl font-bold">
            <span className="text-blue-500">Ataques</span> Ciberneticos
          </h3>
          <p className="text-lg mt-3 text-[#626479]">
            Los ataques cibernéticos, como DDoS y ransomware, interrumpen
            servicios y extorsionan usuarios. Botnets y malware como Stuxnet
            demuestran la vulnerabilidad de sistemas críticos, resaltando la
            necesidad de una protección constante.
          </p>
        </div>
        {/* Carrusel de Beneficios */}
        <div className="p-16 mx-auto my-auto md:p-20 lg:p-0">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-6xl"
          >
            <CarouselContent>
              {beneficios.map((beneficio, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-[200px]">
                      <CardHeader>
                        <CardTitle
                          className={`truncate ${
                            index >= beneficios.length - 4
                              ? ""
                              : "text-blue-500"
                          }`}
                        >
                          {beneficio.titulo}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex items-center justify-center h-full -mt-5 overflow-hidden">
                        <p className="overflow-y-auto text-lg">
                          {beneficio.descripcion}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {/* section 4 */}
      <div className="mx-10 mt-20 md:mx-20">
        <h3 className="my-10 text-3xl font-bold text-center md:text-5xl">
          Confidencialidad{" "}
          <span className="text-blue-500">de la Informacion</span>
        </h3>
        <ExpandableCardDemo />
      </div>

      {/* Section 3 */}
      <div id="us" className="#us w-full py-20 bg-[#FFF7EE]">
        <div className="grid h-full max-w-screen-xl mx-auto lg:grid-cols-3">
          <div className="flex items-center justify-center w-full col-span-1 mx-20 lg:mx-0">
            <img src={teamsits} alt="img" className="" />
          </div>
          <div className="flex flex-col items-center justify-center col-span-2 mx-20">
            <h3 className="text-3xl font-bold md:text-5xl">
              Principios de <span className="text-blue-500">seguridad</span> de
              la
              <span className="text-[#faca15]"> información</span>
            </h3>
            <p className="text-base md:text-lg text-[#626479] mt-7">
              La seguridad de la información se basa en principios clave:{" "}
              <span className="text-[#3b82f6]"> Accesibilidad</span>, que
              garantiza el acceso autorizado a la información cuando se
              necesite;{" "}
              <span className="text-[#f59f0b]"> Confidencialidad</span>, que
              protege los datos contra accesos no autorizados;{" "}
              <span className="text-[#3b82f6]"> Disponibilidad</span>,
              asegurando que los sistemas y datos estén operativos cuando se
              requiera; <span className="text-[#f59f0b]"> Autenticacion</span>,
              para verificar la identidad de los usuarios;{" "}
              <span className="text-[#3b82f6]"> Integridad</span>, que asegura
              que la información no sea alterada de manera indebida; y{" "}
              <span className="text-[#f59f0b]"> Control de acceso</span>, que
              gestiona quién puede ver o utilizar los recursos de un sistema.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Landing;

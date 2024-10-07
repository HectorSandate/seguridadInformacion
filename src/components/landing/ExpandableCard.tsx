import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

function ExpandableCard({ beneficio }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card
      className={`transition-all duration-300 ${
        isExpanded ? "h-[300px]" : "h-[200px]"
      } cursor-pointer`}
      onClick={toggleExpand}
    >
      <CardHeader>
        <CardTitle className={`truncate ${isExpanded ? "" : "text-yellow-400"}`}>
          {beneficio.titulo}
        </CardTitle>
      </CardHeader>
      <CardContent
        className={`flex items-center justify-center
        ${isExpanded ? "h-full" : "h-[150px] overflow-hidden"}`}
      >
        <p className="overflow-y-auto text-lg">{beneficio.descripcion}</p>
      </CardContent>
    </Card>
  );
}

function ExpandableCardCarousel({ beneficios }) {
  return (
    <div className="carousel-content">
      {beneficios.map((beneficio, index) => (
        <div key={index} className="md:basis-1/2 lg:basis-1/3 p-1">
          <ExpandableCard beneficio={beneficio} />
        </div>
      ))}
    </div>
  );
}

export default ExpandableCardCarousel;

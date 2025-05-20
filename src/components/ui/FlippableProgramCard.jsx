import React, { useState } from 'react';

const FlippableProgramCard = ({ program }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  // Determine which content to show based on the flipped state
  const content = isFlipped ? (
    <div className="text-foreground text-right h-full overflow-y-auto">
      {/* Ensure content is an array or handle accordingly */}
      {Array.isArray(program.content) ? (
        <ul className="list-disc list-inside space-y-2">
          {program.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{program.content}</p>
      )}
    </div>
  ) : (
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${program.image})` }}></div>
  );

  return (
    <div className="relative w-full h-80 cursor-pointer rounded-lg shadow-md overflow-hidden transition-all duration-500 ease-in-out" onClick={handleCardClick}>
      <div className={`absolute inset-0 transition-opacity duration-500 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${program.image})` }}></div>
      </div>
      <div className={`absolute inset-0 bg-card p-6 transition-opacity duration-500 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}>
        {content}
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-primary bg-opacity-50 text-white p-4 text-center">
        <h3 className="text-lg font-bold">{program.title}</h3>
      </div>
    </div>
  );
};

export default FlippableProgramCard;
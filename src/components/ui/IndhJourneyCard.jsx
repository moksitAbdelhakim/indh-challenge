const IndhJourneyCard = ({ id, title, years, description, buttonText, openCardId, handleCardClick }) => {
  const isOpen = openCardId === id;

  const handleButtonClick = () => {
    console.log('id:', id);
    handleCardClick(id);
  };

  return (
    <div className="bg-card p-6 rounded-xl shadow-lg border border-border flex flex-col text-center h-full">
      <h3 className="text-xl font-bold text-foreground mb-2 text-center">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 text-center">{years}</p>
      <p className="text-foreground text-right mb-6 flex-grow">{description}</p>
      <button
        className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2 mt-auto mx-auto"
        onClick={handleButtonClick}
      >
        {buttonText}
        {/* Arrow icon - rotate based on open state */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  );
};

export default IndhJourneyCard;
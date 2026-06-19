const ExperienceCard = ({ card }) => {
  const { title, date, responsibilities, logoPath, image } = card;

  return (
    <div className="exp-card-wrapper">
      <div className="flex xl:flex-row flex-col items-center justify-between gap-10 xl:gap-10">
        <div className="xl:w-4/6 w-full xl:pr-50 pr-0">
          <div className="flex items-start">
            <div className="timeline-wrapper">
              <div className="timeline" />
              <div className="gradient-line w-1 h-full" />
            </div>
            <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20 min-w-0">
              <div className="timeline-logo flex-shrink-0">
                <img src={logoPath} alt={`${title} logo`} className="object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="font-semibold text-3xl break-words">{title}</h1>
                <p className="my-5 text-white-50">📅{date}</p>
                <p className="text-[#839cb5] italic">Highlights</p>
                <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                  {responsibilities.map((responsibility) => (
                    <li key={responsibility} className="text-lg">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="expText w-full xl:w-2/6 flex items-center justify-center md:ml-0 ml-20 md:pr-0 pr-5">
          <img src={image} alt={title} className="w-full sm:max-w-xs max-w-[90vw] object-contain rounded-xl shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

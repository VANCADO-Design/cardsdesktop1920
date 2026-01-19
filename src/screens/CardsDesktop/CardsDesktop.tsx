import { useWindowWidth } from "../../breakpoints";

interface CardData {
  id: number;
  overlineSmall: string;
  overlineLarge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSmall: string;
  imageMedium: string;
  imageLarge: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    overlineSmall: "Overline z. B. für Kategorien",
    overlineLarge: "Overline z. B. für Kategorien, Datum",
    title: "Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich.",
    description:
      "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    buttonText: "Button",
    imageSmall:
      "https://c.animaapp.com/3s0pbpFo/img/-vancado-template-bildplatzhalter-quer-3-2-7@2x.png",
    imageMedium:
      "https://c.animaapp.com/3s0pbpFo/img/-vancado-template-bildplatzhalter-quer-3-2-6@2x.png",
    imageLarge:
      "https://c.animaapp.com/3s0pbpFo/img/-vancado-template-bildplatzhalter-quer-3-2-12@2x.png",
  },
  {
    id: 2,
    overlineSmall: "Overline z. B. für Kategorien",
    overlineLarge: "Overline z. B. für Kategorien, Datum",
    title: "Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich.",
    description:
      "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    buttonText: "Button",
    imageSmall:
      "https://c.animaapp.com/3s0pbpFo/img/-vancado-template-bildplatzhalter-quer-3-2-8@2x.png",
    imageMedium:
      "https://c.animaapp.com/3s0pbpFo/img/-vancado-template-bildplatzhalter-quer-3-2-6@2x.png",
    imageLarge:
      "https://c.animaapp.com/3s0pbpFo/img/-vancado-template-bildplatzhalter-quer-3-2-12@2x.png",
  },
  {
    id: 3,
    overlineSmall: "Overline z. B. für Kategorien",
    overlineLarge: "Overline z. B. für Kategorien, Datum",
    title: "Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich.",
    description:
      "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    buttonText: "Button",
    imageSmall:
      "https://c.animaapp.com/3s0pbpFo/img/-vancado-template-bildplatzhalter-quer-3-2-7@2x.png",
    imageMedium:
      "https://c.animaapp.com/3s0pbpFo/img/-vancado-template-bildplatzhalter-quer-3-2-6@2x.png",
    imageLarge:
      "https://c.animaapp.com/3s0pbpFo/img/-vancado-template-bildplatzhalter-quer-3-2-12@2x.png",
  },
  {
    id: 4,
    overlineSmall: "Overline z. B. für Kategorien",
    overlineLarge: "Overline z. B. für Kategorien, Datum",
    title: "Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich.",
    description:
      "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    buttonText: "Button",
    imageSmall:
      "https://c.animaapp.com/3s0pbpFo/img/-vancado-template-bildplatzhalter-quer-3-2-8@2x.png",
    imageMedium:
      "https://c.animaapp.com/3s0pbpFo/img/-vancado-template-bildplatzhalter-quer-3-2-6@2x.png",
    imageLarge:
      "https://c.animaapp.com/3s0pbpFo/img/-vancado-template-bildplatzhalter-quer-3-2-12@2x.png",
  },
];

export const CardsDesktop = (): JSX.Element => {
  const screenWidth = useWindowWidth();

  const getCardImage = (card: CardData) => {
    if (screenWidth < 768) return card.imageSmall;
    if (screenWidth >= 768 && screenWidth < 1280) return card.imageMedium;
    return card.imageLarge;
  };

  const getOverlineText = (card: CardData) => {
    if (screenWidth >= 1280) return card.overlineLarge;
    return card.overlineSmall;
  };

  return (
    <section
      className="w-full flex flex-col gap-4 sm:gap-5 lg:gap-6 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-[13.75rem] py-6 sm:py-8 lg:py-10 items-center"
      data-model-id="9116:82332"
      aria-label="Cards section"
    >
      <div className="w-full max-w-[120rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 auto-rows-fr">
        {cardData.map((card) => (
          <article
            key={card.id}
            className="flex flex-col items-start w-full min-w-0"
          >
            <div className="w-full aspect-[3/2] flex flex-col items-start gap-2 relative overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Vancado template"
                src={getCardImage(card)}
                loading="lazy"
              />
            </div>

            <div className="w-full flex flex-col items-start gap-4 sm:gap-5 lg:gap-6 px-3 sm:px-4 lg:px-6 py-3 sm:py-3.5 lg:py-4 bg-[#e6e6e6]">
              <div className="w-full flex flex-col items-start gap-3 sm:gap-3.5 lg:gap-4">
                <header className="w-full flex flex-col items-start gap-1.5 sm:gap-2">
                  <div className="w-full flex items-center gap-1">
                    <div
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 flex-shrink-0 relative"
                      aria-hidden="true"
                    >
                      <div className="w-[72.50%] h-[72.81%] top-[12.50%] left-[12.50%] relative">
                        <img
                          className="absolute w-full h-[47.64%] top-0 left-0"
                          alt=""
                          src="https://c.animaapp.com/3s0pbpFo/img/path-12.svg"
                        />
                        <img
                          className="absolute w-[77.59%] h-[51.50%] top-[48.50%] left-[11.21%]"
                          alt=""
                          src="https://c.animaapp.com/3s0pbpFo/img/shape-12.svg"
                        />
                      </div>
                    </div>

                    <p className="flex-1 min-w-0 text-black text-xs sm:text-sm lg:text-[0.875rem] leading-tight sm:leading-snug font-project-paragraphs-small-p6-XXS lg:font-project-paragraphs-large-p6-XXS font-[number:var(--project-paragraphs-small-p6-XXS-font-weight)] lg:font-[number:var(--project-paragraphs-large-p6-XXS-font-weight)] tracking-[var(--project-paragraphs-small-p6-XXS-letter-spacing)] lg:tracking-[var(--project-paragraphs-large-p6-XXS-letter-spacing)] [font-style:var(--project-paragraphs-small-p6-XXS-font-style)] lg:[font-style:var(--project-paragraphs-large-p6-XXS-font-style)] break-words">
                      {getOverlineText(card)}
                    </p>
                  </div>

                  <h3 className="w-full text-black text-base sm:text-lg lg:text-[1.125rem] leading-snug sm:leading-normal font-project-headlines-small-h5-XS lg:font-project-headlines-large-h5-XS font-[number:var(--project-headlines-small-h5-XS-font-weight)] lg:font-[number:var(--project-headlines-large-h5-XS-font-weight)] tracking-[var(--project-headlines-small-h5-XS-letter-spacing)] lg:tracking-[var(--project-headlines-large-h5-XS-letter-spacing)] [font-style:var(--project-headlines-small-h5-XS-font-style)] lg:[font-style:var(--project-headlines-large-h5-XS-font-style)] break-words">
                    {card.title}
                  </h3>
                </header>

                <p className="w-full text-black text-sm sm:text-base lg:text-[1.125rem] leading-relaxed sm:leading-normal font-project-paragraphs-small-p4-s lg:font-project-paragraphs-large-p4-s font-[number:var(--project-paragraphs-small-p4-s-font-weight)] lg:font-[number:var(--project-paragraphs-large-p4-s-font-weight)] tracking-[var(--project-paragraphs-small-p4-s-letter-spacing)] lg:tracking-[var(--project-paragraphs-large-p4-s-letter-spacing)] [font-style:var(--project-paragraphs-small-p4-s-font-style)] lg:[font-style:var(--project-paragraphs-large-p4-s-font-style)] break-words">
                  {card.description}
                </p>
              </div>

              <button
                className="all-[unset] box-border inline-flex items-center justify-center px-6 sm:px-7 lg:px-8 py-2.5 sm:py-3 lg:py-3 h-10 sm:h-11 lg:h-12 bg-[#101010] cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101010]"
                type="button"
                aria-label={`${card.buttonText} - ${card.title}`}
              >
                <span className="text-white text-sm sm:text-base lg:text-[1.125rem] font-project-headlines-large-h5-XS font-[number:var(--project-headlines-large-h5-XS-font-weight)] tracking-[var(--project-headlines-large-h5-XS-letter-spacing)] leading-[var(--project-headlines-large-h5-XS-line-height)] whitespace-nowrap [font-style:var(--project-headlines-large-h5-XS-font-style)]">
                  {card.buttonText}
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const cardData = [
  {
    id: 1,
    image:
      "https://c.animaapp.com/3s0pbpFo/img/-vancado-template-bildplatzhalter-quer-3-2-12@2x.png",
    overline: "Overline z. B. für Kategorien, Datum",
    title: "Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich.",
    description:
      "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    buttonText: "Button",
  },
  {
    id: 2,
    image:
      "https://c.animaapp.com/3s0pbpFo/img/-vancado-template-bildplatzhalter-quer-3-2-12@2x.png",
    overline: "Overline z. B. für Kategorien, Datum",
    title: "Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich.",
    description:
      "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    buttonText: "Button",
  },
  {
    id: 3,
    image:
      "https://c.animaapp.com/3s0pbpFo/img/-vancado-template-bildplatzhalter-quer-3-2-12@2x.png",
    overline: "Overline z. B. für Kategorien, Datum",
    title: "Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich.",
    description:
      "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    buttonText: "Button",
  },
  {
    id: 4,
    image:
      "https://c.animaapp.com/3s0pbpFo/img/-vancado-template-bildplatzhalter-quer-3-2-12@2x.png",
    overline: "Overline z. B. für Kategorien, Datum",
    title: "Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich.",
    description:
      "Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    buttonText: "Button",
  },
];

export const CardsDesktopScreen = (): JSX.Element => {
  return (
    <section
      className="flex flex-col items-center gap-6 px-[264px] py-0 relative"
      data-model-id="n37xPCSabbq643QD"
      aria-label="Card grid section"
    >
      <div className="flex items-start justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
        {cardData.map((card) => (
          <article
            key={card.id}
            className="flex flex-col w-[330px] items-start relative"
          >
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full aspect-[1.5]">
              <img
                className="relative self-stretch w-full aspect-[1.5]"
                alt="Vancado template"
                src={card.image}
                loading="lazy"
              />
            </div>

            <div className="flex flex-col items-start gap-6 px-6 py-4 relative self-stretch w-full flex-[0_0_auto] bg-[#e6e6e6]">
              <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <header className="flex-col items-start gap-2 flex relative self-stretch w-full flex-[0_0_auto]">
                  <div className="items-center gap-1 flex relative self-stretch w-full flex-[0_0_auto]">
                    <div
                      className="relative w-4 h-4 aspect-[1]"
                      aria-hidden="true"
                    >
                      <div className="relative w-[72.50%] h-[72.81%] top-[12.50%] left-[12.50%]">
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

                    <p className="relative flex-1 mt-[-1.00px] font-project-paragraphs-large-p6-XXS font-[number:var(--project-paragraphs-large-p6-XXS-font-weight)] text-black text-[length:var(--project-paragraphs-large-p6-XXS-font-size)] tracking-[var(--project-paragraphs-large-p6-XXS-letter-spacing)] leading-[var(--project-paragraphs-large-p6-XXS-line-height)] [font-style:var(--project-paragraphs-large-p6-XXS-font-style)]">
                      {card.overline}
                    </p>
                  </div>

                  <h2 className="relative self-stretch font-project-headlines-large-h5-XS font-[number:var(--project-headlines-large-h5-XS-font-weight)] text-black text-[length:var(--project-headlines-large-h5-XS-font-size)] tracking-[var(--project-headlines-large-h5-XS-letter-spacing)] leading-[var(--project-headlines-large-h5-XS-line-height)] [font-style:var(--project-headlines-large-h5-XS-font-style)]">
                    {card.title}
                  </h2>
                </header>

                <p className="relative self-stretch font-project-paragraphs-large-p4-s font-[number:var(--project-paragraphs-large-p4-s-font-weight)] text-black text-[length:var(--project-paragraphs-large-p4-s-font-size)] tracking-[var(--project-paragraphs-large-p4-s-letter-spacing)] leading-[var(--project-paragraphs-large-p4-s-line-height)] [font-style:var(--project-paragraphs-large-p4-s-font-style)]">
                  {card.description}
                </p>
              </div>

              <button
                className="all-[unset] box-border inline-flex h-12 items-center justify-center px-8 py-0 relative bg-[#101010] cursor-pointer"
                type="button"
                aria-label={`Learn more about ${card.title}`}
              >
                <span className="relative w-fit font-project-headlines-large-h5-XS font-[number:var(--project-headlines-large-h5-XS-font-weight)] text-white text-[length:var(--project-headlines-large-h5-XS-font-size)] tracking-[var(--project-headlines-large-h5-XS-letter-spacing)] leading-[var(--project-headlines-large-h5-XS-line-height)] whitespace-nowrap [font-style:var(--project-headlines-large-h5-XS-font-style)]">
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

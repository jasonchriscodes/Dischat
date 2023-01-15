import React from "react";
import picture1 from "./assets/background.webp";
import picture2 from "./assets/lmfao.jpg";
import Card from "./Card";

const Featured = () => {
  const cards = [
    {
      bg: picture1,
      profile: picture2,
      title: "Fire Emblem Heroes",
      description:
        "We are a community for Fire Emblem Heroes. Enjoy lore, get game help, and FE fandom",
      size: "85,532 Online &#x2022; 232,061 Members",
    },
    {
      bg: picture1,
      profile: picture2,
      title: "Fire Emblem Heroes",
      description:
        "We are a community for Fire Emblem Heroes. Enjoy lore, get game help, and FE fandom",
      size: "85,532 Online &#x2022; 232,061 Members",
    },
    {
      bg: picture1,
      profile: picture2,
      title: "Fire Emblem Heroes",
      description:
        "We are a community for Fire Emblem Heroes. Enjoy lore, get game help, and FE fandom",
      size: "85,532 Online &#x2022; 232,061 Members",
    },
    {
      bg: picture1,
      profile: picture2,
      title: "Fire Emblem Heroes",
      description:
        "We are a community for Fire Emblem Heroes. Enjoy lore, get game help, and FE fandom",
      size: "85,532 Online &#x2022; 232,061 Members",
    },
    {
      bg: picture1,
      profile: picture2,
      title: "Fire Emblem Heroes",
      description:
        "We are a community for Fire Emblem Heroes. Enjoy lore, get game help, and FE fandom",
      size: "85,532 Online &#x2022; 232,061 Members",
    },
  ];
  return (
    <div className="pt-6">
      {/* Titles */}
      <div className="text-white">
        <p className="font-bold text-[20px]">Featured Servers</p>
        <p className="text-white/50">
          Some awesome Discords we think you'd love.
        </p>
      </div>
      {/* Cards */}
      <div className="space-y-20">
        {cards.map((card) => (
          <Card
            bg={card.bg}
            profile={card.profile}
            title={card.title}
            description={card.description}
            size={card.size}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;

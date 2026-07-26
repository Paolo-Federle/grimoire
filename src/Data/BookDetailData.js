import { BOOK_SUPPLEMENT_DETAILS_BY_CODE } from "./BookSupplementDetailData";

export const BOOK_DETAILS_BY_CODE = {
  ...BOOK_SUPPLEMENT_DETAILS_BY_CODE,
  WoD: {
    pages: 224,
    edition: "First edition",
    sourceUrl:
      "https://whitewolf.fandom.com/wiki/World_of_Darkness:_Storytelling_System_Rulebook",
    intro:
      "The foundational rulebook for mortal characters and first-edition World of Darkness chronicles. It presents the Storytelling System, character creation, investigation, conflict and the tools needed to build modern horror stories before adding a supernatural game line.",
    chapters: [
      {
        title: "Chapter One: The Secret History",
        summary:
          "Introduces the hidden World of Darkness, summarizes the core rules and walks through character creation and the main game vocabulary.",
      },
      {
        title: "Chapter Two: Attributes",
        summary:
          "Explains Mental, Physical and Social Attributes, what each trait represents and the kinds of actions commonly resolved with them.",
      },
      {
        title: "Chapter Three: Skills",
        summary:
          "Describes the Mental, Physical and Social Skills and shows how they combine with Attributes to form dice pools.",
      },
      {
        title: "Chapter Four: Advantages",
        summary:
          "Covers derived traits and personal anchors such as Health, Willpower, Morality, Virtues, Vices and derangements.",
      },
      {
        title: "Chapter Five: Merits",
        summary:
          "Collects Mental, Physical and Social Merits used to distinguish characters through resources, training, relationships and special advantages.",
      },
      {
        title: "Chapter Six: Dramatic Systems",
        summary:
          "Provides the general systems for actions, hazards, objects, equipment, vehicles and other situations encountered during play.",
      },
      {
        title: "Chapter Seven: Combat",
        summary:
          "Details initiative, attacks, damage, weapons, armor and the other rules used to resolve physical conflict.",
      },
      {
        title: "Chapter Eight: Storytelling",
        summary:
          "Guides the Storyteller through themes, plots and chronicles, then supplies sample antagonists and rules for ghosts.",
      },
    ],
  },
  VtR: {
    pages: 304,
    edition: "First edition",
    sourceUrl: "https://whitewolf.fandom.com/wiki/Vampire:_The_Requiem_Rulebook",
    intro:
      "The first-edition core book for stories about the Kindred and their Danse Macabre. It combines vampire society, clans and covenants with character options, Disciplines, the Beast and advice for chronicles of predation, politics and personal horror.",
    chapters: [
      {
        title: "Chapter One: Society of the Damned",
        summary:
          "Explores Kindred society, covenants, customs, domains and the political struggle that shapes the Danse Macabre.",
      },
      {
        title: "Chapter Two: Character",
        summary:
          "Builds vampire characters through clans, covenants, Merits, Disciplines and the traits that describe the undead condition.",
      },
      {
        title: "Chapter Three: Special Rules and Systems",
        summary:
          "Covers Vitae, frenzy, the Beast, damage, Humanity and the other systems that make vampire existence distinct from mortal play.",
      },
      {
        title: "Chapter Four: Storytelling",
        summary:
          "Offers tools for designing Requiem chronicles, portraying the Kindred and creating conflicts, mysteries and antagonists.",
      },
      {
        title: "Appendix One: Bloodlines",
        summary:
          "Introduces bloodlines as specialized vampiric lineages with their own histories, weaknesses and supernatural expressions.",
      },
      {
        title: "Appendix Two: New Orleans",
        summary:
          "Presents New Orleans as a ready-to-use domain with factions, characters, secrets and story hooks.",
      },
    ],
  },
  WtF: {
    pages: 320,
    edition: "First edition",
    sourceUrl: "https://whitewolf.fandom.com/wiki/Werewolf:_The_Forsaken_Rulebook",
    intro:
      "The first-edition core book for the Uratha, werewolves who guard the boundary between Flesh and Spirit. Its focus is the pack, the sacred hunt, territory and the tension between human identity, predatory instinct and spiritual duty.",
    chapters: [
      {
        title: "Chapter One: The World of the Forsaken",
        summary:
          "Introduces Uratha society, legends, tribes, enemies and the responsibilities inherited from Father Wolf.",
      },
      {
        title: "Chapter Two: Character",
        summary:
          "Covers character creation, auspices, tribes, Renown, Primal Urge, Gifts, rites and the traits unique to werewolves.",
      },
      {
        title: "Chapter Three: Special Rules and Systems",
        summary:
          "Explains shapeshifting, regeneration, Death Rage, spirit interaction, totems, fetishes and other Uratha-specific systems.",
      },
      {
        title: "Chapter Four: Storytelling and Antagonists",
        summary:
          "Provides chronicle advice and adversaries ranging from the Pure and Hosts to Ridden, spirits and human threats.",
      },
      {
        title: "Appendix One: The Spirit World",
        summary:
          "Describes the Shadow, its inhabitants and the rules used to create and portray spirits.",
      },
      {
        title: "Appendix Two: The Rockies",
        summary:
          "Outlines the Rocky Mountains as a signature setting with territories, packs and conflicts ready for play.",
      },
    ],
  },
  "M:tA": {
    pages: 400,
    edition: "First edition",
    sourceUrl: "https://whitewolf.fandom.com/wiki/Mage:_The_Awakening_Rulebook",
    intro:
      "The first-edition core book for the Awakened and their pursuit of the Mysteries. It presents Paths and Orders, a flexible system for the ten Arcana, the risks of Paradox and a setting built around hidden knowledge, hubris and the struggle over reality.",
    chapters: [
      {
        title: "Chapter One: Arcanus Mundus",
        summary:
          "Introduces the secret world of mages, their Orders, their shared history and the societies built around the Mysteries.",
      },
      {
        title: "Chapter Two: Character",
        summary:
          "Explains Awakened character creation, Paths, Gnosis, Wisdom, Mana, magical tools, Merits and other defining traits.",
      },
      {
        title: "Chapter Three: Magic",
        summary:
          "Presents spellcasting, the ten Arcana, rotes, improvised magic, spell factors, creative thaumaturgy and Paradox.",
      },
      {
        title: "Chapter Four: Storytelling and Antagonists",
        summary:
          "Discusses the challenges of Mage chronicles and supplies opponents such as Seers, Banishers, spirits, goetic entities and left-handed mages.",
      },
      {
        title: "Appendix One: Legacies",
        summary:
          "Introduces Legacies and Attainments as focused paths through which experienced mages reshape their souls and magic.",
      },
      {
        title: "Appendix Two: Boston",
        summary:
          "Presents Boston as a signature setting with cabals, factions, historical mysteries and conflicts among the Awakened.",
      },
    ],
  },
  PTC: {
    pages: 288,
    edition: "First edition",
    sourceUrl: "https://whitewolf.fandom.com/wiki/Promethean:_The_Created_Rulebook",
    intro:
      "The first-edition core book for the Created: corpses animated by the Divine Fire who undertake the Pilgrimage in search of humanity. It combines alchemical transformation with alienation, Disquiet, the Wasteland and the danger of Pandorans.",
    chapters: [
      {
        title: "Chapter One: Setting",
        summary:
          "Establishes the world of the Created, the Divine Fire, the Pilgrimage and the isolation caused by their unnatural existence.",
      },
      {
        title: "Chapter Two: Characters",
        summary:
          "Covers character creation, Lineages, Refinements, Azoth, Bestowments, Merits and the Transmutations wielded by Prometheans.",
      },
      {
        title: "Chapter Three: The Promethean Condition",
        summary:
          "Explains Disquiet, the Wasteland, Torment, Vitriol and the rules that define life as an unfinished being.",
      },
      {
        title: "Chapter Four: Storytelling and Antagonists",
        summary:
          "Guides stories about the Pilgrimage and presents threats including Centimani, Pandorans and other failures of creation.",
      },
      {
        title: "Appendix: Athanors and the Water of Life",
        summary:
          "Adds rules for Athanors and begins a sample chronicle designed to put the themes of transformation into play.",
      },
    ],
  },
  CtL: {
    pages: 349,
    edition: "First edition",
    sourceUrl: "https://whitewolf.fandom.com/wiki/Changeling:_The_Lost_Rulebook",
    intro:
      "The first-edition core book for people abducted and transformed by the True Fae who have escaped back through the Hedge. It centers on trauma, identity and uneasy freedom, supported by Courts, Contracts, pledges, dreams and fae wonders.",
    chapters: [
      {
        title: "Chapter One: The World Behind the Mask",
        summary:
          "Introduces Arcadia, the True Fae, the Hedge, freeholds and Courts, and the altered lives of those who return.",
      },
      {
        title: "Chapter Two: Character Creation",
        summary:
          "Builds Lost characters through Seemings, Kiths, Courts, Wyrd, Clarity, Merits and several families of Contracts.",
      },
      {
        title: "Chapter Three: Special Rules and Systems",
        summary:
          "Details pledges, dream-shaping, Tokens, the Hedge and the supernatural systems surrounding the Wyrd.",
      },
      {
        title: "Chapter Four: Storytelling",
        summary:
          "Offers advice for chronicles about escape and identity, with fetches, Goblin Markets, fae antagonists and story structures.",
      },
      {
        title: "Appendix One: Entitlements",
        summary:
          "Presents the noble orders of changeling society and the rules for joining these specialized callings.",
      },
      {
        title: "Appendix Two: The Freehold of Miami",
        summary:
          "Provides a complete sample freehold with local Courts, characters, tensions and ready-made story material.",
      },
    ],
  },
  HTV: {
    pages: 376,
    edition: "First edition",
    sourceUrl: "https://whitewolf.fandom.com/wiki/Hunter:_The_Vigil_Rulebook",
    intro:
      "The first-edition core book for ordinary people who choose to confront the supernatural. It supports street-level cells as well as larger compacts and conspiracies, emphasizing investigation, sacrifice and the practical cost of maintaining the Vigil.",
    chapters: [
      {
        title: "Chapter One: Shadows Cast by Firelight",
        summary:
          "Introduces hunters, their enemies and the three tiers of organization: cells, compacts and conspiracies.",
      },
      {
        title: "Chapter Two: Character Creation",
        summary:
          "Explains how to create mortal hunters and shape their professions, motivations, relationships and practical capabilities.",
      },
      {
        title: "Chapter Three: Hunter Organizations",
        summary:
          "Details the major compacts and conspiracies, their philosophies and Endowments, with guidance for creating new groups.",
      },
      {
        title: "Chapter Four: Special Rules and Systems",
        summary:
          "Provides tactics and systems that help fragile human characters investigate, prepare for and survive supernatural threats.",
      },
      {
        title: "Chapter Five: Storytelling",
        summary:
          "Guides the construction of Vigil chronicles, mysteries, monsters and the escalating consequences of the hunt.",
      },
      {
        title: "Appendix One: Morality and the Vigil",
        summary:
          "Examines how hunting monsters changes Morality, Virtues, Vices and the ethical pressures placed on a cell.",
      },
      {
        title: "Appendix Two: Philadelphia",
        summary:
          "Presents Philadelphia as a sample city filled with hunter groups, supernatural dangers and chronicle hooks.",
      },
    ],
  },
  GTS: {
    pages: 312,
    edition: "First edition, revision 1.1",
    sourceUrl: "https://whitewolf.fandom.com/wiki/Geist:_The_Sin-Eaters_Rulebook",
    intro:
      "The first-edition core book for Sin-Eaters, people returned from death through a Bargain with a geist. It explores second chances, grief and celebration through ghost stories, krewes, Keys, Manifestations and journeys into the Underworld.",
    chapters: [
      {
        title: "Chapter One: At the Cemetery Gate",
        summary:
          "Introduces Sin-Eaters, the Bargain, geists, krewes and the many ways the living and the dead remain connected.",
      },
      {
        title: "Chapter Two: Character Creation",
        summary:
          "Builds Bound characters through Thresholds, Archetypes, geists, Psyche, Synergy, Merits and krewe relationships.",
      },
      {
        title: "Chapter Three: Systems",
        summary:
          "Presents Keys, Manifestations, ceremonies, ghostly interaction and the rules that govern the Bound and their powers.",
      },
      {
        title: "Chapter Four: Storytelling",
        summary:
          "Offers tools for chronicles about death, memory and unfinished business, including ghosts, antagonists and krewe stories.",
      },
      {
        title: "Appendix One: Descent to the Underworld",
        summary:
          "Describes the Underworld, its strange geography and the dangers faced by Sin-Eaters who descend beyond the living world.",
      },
      {
        title: "Appendix Two: The Modern Gomorrah",
        summary:
          "Uses New York City as a signature setting for krewes, ghosts, mysteries and conflicts among the dead.",
      },
    ],
  },
  MTC: {
    pages: 286,
    edition: "First edition",
    sourceUrl: "https://whitewolf.fandom.com/wiki/Mummy:_The_Curse_Rulebook",
    intro:
      "The first-edition core book for the Arisen, immortal servants created by the Rite of Return in the Nameless Empire. It frames play around awakening, the Descent, fractured Memory, ancient cults and the commands of the Judges of Duat.",
    chapters: [
      {
        title: "Chapter One: The Arisen World",
        summary:
          "Introduces the Deathless, their lost civilization, guilds, cults, Judges and place in the modern World of Darkness.",
      },
      {
        title: "Chapter Two: The Modeler",
        summary:
          "Guides creation of an Arisen character through Decrees, Guilds, Pillars, defining relationships and mortal servants.",
      },
      {
        title: "Chapter Three: The Inhuman Condition",
        summary:
          "Explains Sekhem, the Descent, Memory, Affinities, Utterances and the systems that shape each period of awakening.",
      },
      {
        title: "Chapter Four: The Scroll of Ages",
        summary:
          "Explores chronicles across different eras and the way an immortal character experiences history out of sequence.",
      },
      {
        title: "Chapter Five: Faces of Undeath",
        summary:
          "Presents allies, rivals and supernatural enemies who complicate the Arisen's missions and struggle for identity.",
      },
      {
        title: "Chapter Six: Vessels of Power",
        summary:
          "Details relics and other objects of supernatural importance, including their creation, use and role in stories.",
      },
      {
        title: "Chapter Seven: Framing Immortality",
        summary:
          "Provides Storyteller guidance for structuring non-linear chronicles around awakenings, cults, Memory and the Judges' decrees.",
      },
      {
        title: "Appendix: Eve of Judgment",
        summary:
          "Supplies a complete introductory story set in Rio de Janeiro that can launch a one-shot or an ongoing chronicle.",
      },
    ],
  },
};

export function getBookEditorialDetail(book) {
  return BOOK_DETAILS_BY_CODE[book?.["Code Name"]] || null;
}

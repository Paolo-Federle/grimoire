import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Breadcrumbs from "./components/Breadcrumbs";
import LazyDetailRoute from "./components/LazyDetailRoute";
import "./css/App.css";
import "./css/Races-Style.css";
import theme from "./css/muiTheme";
import { PATHS } from "./pages/path";
import { slugify } from "./utils";

const HomePage = lazy(() => import("./pages/home"));
const FavoritesPage = lazy(() => import("./pages/favorites"));
const SheetPage = lazy(() => import("./pages/Generale/SheetTest"));
const BooksPage = lazy(() => import("./pages/Generale/Books"));
const SizePage = lazy(() => import("./pages/Generale/Size"));
const ItemsPage = lazy(() => import("./pages/Generale/Items"));
const SkillsPage = lazy(() => import("./pages/Generale/Skills"));
const LocationPage = lazy(() => import("./pages/Generale/Location"));
const SettingsPage = lazy(() => import("./pages/Generale/Settings"));
const UniversalMeritsPage = lazy(() => import("./pages/Generale/UniversalMerits"));
const TraitsPage = lazy(() => import("./pages/Generale/Traits"));
const ExternalResourcesPage = lazy(() => import("./pages/Generale/ExternalResources"));
const DerangementsPage = lazy(() => import("./pages/Generale/Derangements"));
const LexyconPage = lazy(() => import("./pages/Generale/Lexycon"));
const MortalPage = lazy(() => import("./pages/MortalsAndTemplates/Mortal"));
const MoralityPage = lazy(() => import("./pages/MortalsAndTemplates/Morality"));
const VirtueVicePage = lazy(() => import("./pages/MortalsAndTemplates/VirtueVice"));
const MortalMeritsPage = lazy(() => import("./pages/MortalsAndTemplates/MortalMerits"));
const ArmorPage = lazy(() => import("./pages/MortalsAndTemplates/Armor"));
const ReliquaryPage = lazy(() => import("./pages/MortalsAndTemplates/Reliquary"));
const ToolsPage = lazy(() => import("./pages/MortalsAndTemplates/Tools"));
const VehiclePage = lazy(() => import("./pages/MortalsAndTemplates/Vehicle"));
const WeaponPage = lazy(() => import("./pages/MortalsAndTemplates/Weapon"));
const FuturisticItemsPage = lazy(() => import("./pages/MortalsAndTemplates/FuturisticItems"));
const ThaumaturgyPage = lazy(
  () => import("./pages/MortalsAndTemplates/Lesser templates/Thaumaturgy")
);
const PsychicsPowersPage = lazy(
  () => import("./pages/MortalsAndTemplates/Lesser templates/Psychics")
);
const VampirePage = lazy(() => import("./pages/Vampire/Vampire"));
const DisciplinesPage = lazy(() => import("./pages/Vampire/Disciplines"));
const DevotionPage = lazy(() => import("./pages/Vampire/Devotion"));
const VampireExperiencePage = lazy(
  () => import("./pages/Vampire/VampireExperiencePoints")
);
const ClanPage = lazy(() => import("./pages/Vampire/Clan"));
const CovenantPage = lazy(() => import("./pages/Vampire/Covenant"));
const BloodlinePage = lazy(() => import("./pages/Vampire/Bloodline"));
const BloodPotencyPage = lazy(() => import("./pages/Vampire/BloodPotency"));
const GhoulFamiliesPage = lazy(() => import("./pages/Vampire/Ghoul"));
const VampireMeritsPage = lazy(() => import("./pages/Vampire/VampireMerits"));
const HumanityPage = lazy(() => import("./pages/Vampire/Humanity"));
const WerewolfPage = lazy(() => import("./pages/Werewolf/Werewolf"));
const GiftsPage = lazy(() => import("./pages/Werewolf/Gifts"));
const RitesPage = lazy(() => import("./pages/Werewolf/Rites"));
const WerewolfMeritsPage = lazy(() => import("./pages/Werewolf/WerewolfMerits"));
const FetishPage = lazy(() => import("./pages/Werewolf/Fetish"));
const TalenPage = lazy(() => import("./pages/Werewolf/Talen"));
const AuspicesPage = lazy(() => import("./pages/Werewolf/Auspices"));
const HarmonyPage = lazy(() => import("./pages/Werewolf/Harmony"));
const LodgesPage = lazy(() => import("./pages/Werewolf/Lodges"));
const PrimalUrgePage = lazy(() => import("./pages/Werewolf/PrimalUrge"));
const TribesPage = lazy(() => import("./pages/Werewolf/Tribes"));
const WerewolfExperiencePage = lazy(
  () => import("./pages/Werewolf/WerewolfExperiencePoints")
);
const MagePage = lazy(() => import("./pages/Mage/Mage"));
const PathPage = lazy(() => import("./pages/Mage/Path"));
const OrderPage = lazy(() => import("./pages/Mage/Order"));
const GnosisPage = lazy(() => import("./pages/Mage/Gnosis"));
const WisdomPage = lazy(() => import("./pages/Mage/Wisdom"));
const LegacyPage = lazy(() => import("./pages/Mage/Legacy"));
const MageMeritsPage = lazy(() => import("./pages/Mage/MageMerits"));
const GrimoirePage = lazy(() => import("./pages/Mage/Grimoire"));
const MageExperiencePage = lazy(() => import("./pages/Mage/MageExperiencePoints"));
const SpellsPage = lazy(() => import("./pages/Mage/Spells"));
const ArcanaPage = lazy(() => import("./pages/Mage/Arcana"));
const ArtifactsPage = lazy(() => import("./pages/Mage/Artifact"));
const ImbuedItemsPage = lazy(() => import("./pages/Mage/ImbuedItems"));
const PrometheanPage = lazy(() => import("./pages/Promethean/Promethean"));
const AzothPage = lazy(() => import("./pages/Promethean/Azoth"));
const TransmutationsPage = lazy(() => import("./pages/Promethean/Transmutations"));
const BestowmentsPage = lazy(() => import("./pages/Promethean/Bestowments"));
const PrometheanMeritsPage = lazy(
  () => import("./pages/Promethean/PrometheanMerits")
);
const RefinementsPage = lazy(() => import("./pages/Promethean/Refinements"));
const MockeriesPage = lazy(() => import("./pages/Promethean/Mockeries"));
const LineagesPage = lazy(() => import("./pages/Promethean/Lineages"));
const PrometheanExperiencePage = lazy(
  () => import("./pages/Promethean/PrometheanExperiencePoints")
);
const ChangelingPage = lazy(() => import("./pages/Changeling/Changeling"));
const SeemingPage = lazy(() => import("./pages/Changeling/Seeming"));
const KithPage = lazy(() => import("./pages/Changeling/Kith"));
const CourtPage = lazy(() => import("./pages/Changeling/Court"));
const EntitlementsPage = lazy(() => import("./pages/Changeling/Entitlement"));
const WyrdPage = lazy(() => import("./pages/Changeling/Wyrd"));
const ContractsPage = lazy(() => import("./pages/Changeling/Contracts"));
const ChangelingExperiencePage = lazy(
  () => import("./pages/Changeling/ChangelingExperiencePoints")
);
const PledgesPage = lazy(() => import("./pages/Changeling/Pledges"));
const ChangelingMeritsPage = lazy(
  () => import("./pages/Changeling/ChangelingMerits")
);
const ClarityPage = lazy(() => import("./pages/Changeling/Clarity"));
const GoblinFruitsPage = lazy(() => import("./pages/Changeling/GoblinFruits"));
const TokenPage = lazy(() => import("./pages/Changeling/Token"));
const TokenRulesPage = lazy(() => import("./pages/Changeling/TokenRules"));
const HunterPage = lazy(() => import("./pages/Hunter/Hunter"));
const EndowmentsPage = lazy(() => import("./pages/Hunter/Endowments"));
const TacticsPage = lazy(() => import("./pages/Hunter/Tactics"));
const HunterMeritsPage = lazy(() => import("./pages/Hunter/HunterMerits"));
const ProfessionsPage = lazy(() => import("./pages/Hunter/Professions"));
const CompactConspiraciesPage = lazy(
  () => import("./pages/Hunter/CompactConsipracies")
);
const DreadPowersPage = lazy(() => import("./pages/Hunter/DreadPowers"));
const GeistPage = lazy(() => import("./pages/Geist/Geist"));
const PsychePage = lazy(() => import("./pages/Geist/Psyche"));
const KeysAndHauntsPage = lazy(() => import("./pages/Geist/KeysAndHaunts"));
const CeremoniesPage = lazy(() => import("./pages/Geist/Ceremonies"));
const GeistMeritsPage = lazy(() => import("./pages/Geist/GeistMerits"));
const MementoPage = lazy(() => import("./pages/Geist/Memento"));
const ArchetypesPage = lazy(() => import("./pages/Geist/Archetypes"));
const SynergyPage = lazy(() => import("./pages/Geist/Synergy"));
const KreweTraitsPage = lazy(() => import("./pages/Geist/KreweTraits"));
const ThresholdsPage = lazy(() => import("./pages/Geist/Thresholds"));
const ManifestationPage = lazy(() => import("./pages/Promethean/Manifestation"));
const GeistExperiencePage = lazy(() => import("./pages/Geist/GeistExperiencePoints"));
const MummyPage = lazy(() => import("./pages/Mummy/Mummy"));
const AffinitiesPage = lazy(() => import("./pages/Mummy/Affinities"));
const UtterancesPage = lazy(() => import("./pages/Mummy/Utterances"));
const JudgesPage = lazy(() => import("./pages/Mummy/Judges"));
const SekhemPage = lazy(() => import("./pages/Mummy/Sekhem"));
const MummyMeritsPage = lazy(() => import("./pages/Mummy/MummyMerits"));
const RelicPage = lazy(() => import("./pages/Mummy/Relic"));
const DecreesPage = lazy(() => import("./pages/Mummy/Decrees"));
const GuildsPage = lazy(() => import("./pages/Mummy/Guilds"));
const MemoryPage = lazy(() => import("./pages/Mummy/Memory"));
const MummyExperiencePage = lazy(() => import("./pages/Mummy/MummyExperiencePoints"));
const NuminaPage = lazy(() => import("./pages/Spirit/Numina"));
const AspectsAndFavorsPage = lazy(() => import("./pages/Others/AspectsAndFavors"));
const AbominableTraitsPage = lazy(() => import("./pages/Others/AbominableTraits"));
const ParanormalObjectsPage = lazy(() => import("./pages/Generale/OggettiOcculti"));

const ROUTE_FALLBACK = (
  <div className="longTextContainer" style={{ padding: "1rem 0" }}>
    Loading...
  </div>
);

const GENERAL_ROUTES = [
  { path: PATHS.HOME, Page: HomePage },
  { path: PATHS.FAVORITES, Page: FavoritesPage },
  { path: PATHS.SHEET, Page: SheetPage },
  { path: PATHS.BOOKS, Page: BooksPage },
  { path: PATHS.SIZE, Page: SizePage },
  { path: PATHS.ITEMS, Page: ItemsPage },
  { path: PATHS.SKILLS, Page: SkillsPage },
  { path: PATHS.LOCATIONS_BASE, Page: LocationPage },
  { path: PATHS.SETTINGS, Page: SettingsPage },
  { path: PATHS.UNIVERSAL_MERITS, Page: UniversalMeritsPage },
  { path: PATHS.TRAITS, Page: TraitsPage },
  { path: PATHS.EXTERNAL_RESOURCES, Page: ExternalResourcesPage },
  { path: PATHS.DERANGEMENTS, Page: DerangementsPage },
  { path: PATHS.LEXYCON, Page: LexyconPage },
];

const MORTAL_ROUTES = [
  { path: PATHS.MORTAL.BASE, Page: MortalPage },
  { path: PATHS.MORTAL.MORALITY, Page: MoralityPage },
  { path: PATHS.MORTAL.VIRTUE_VICE, Page: VirtueVicePage },
  { path: PATHS.MORTAL.MERITS, Page: MortalMeritsPage },
  { path: PATHS.MORTAL.ARMOR, Page: ArmorPage },
  { path: PATHS.MORTAL.RELIQUARY, Page: ReliquaryPage },
  { path: PATHS.MORTAL.TOOLS, Page: ToolsPage },
  { path: PATHS.MORTAL.VEHICLES, Page: VehiclePage },
  { path: PATHS.MORTAL.WEAPONS, Page: WeaponPage },
  { path: PATHS.MORTAL.FUTURISTIC_ITEMS, Page: FuturisticItemsPage },
  { path: PATHS.MORTAL.THAUMATURGY, Page: ThaumaturgyPage },
  { path: PATHS.MORTAL.PSYCHIC_POWERS, Page: PsychicsPowersPage },
];

const VAMPIRE_ROUTES = [
  { path: PATHS.VAMPIRE.BASE, Page: VampirePage },
  { path: PATHS.VAMPIRE.DISCIPLINES, Page: DisciplinesPage },
  { path: PATHS.VAMPIRE.DEVOTIONS, Page: DevotionPage },
  { path: PATHS.VAMPIRE.EXPERIENCE, Page: VampireExperiencePage },
  { path: PATHS.VAMPIRE.CLANS, Page: ClanPage },
  { path: PATHS.VAMPIRE.COVENANTS, Page: CovenantPage },
  { path: PATHS.VAMPIRE.BLOODLINE, Page: BloodlinePage },
  { path: PATHS.VAMPIRE.BLOOD_POTENCY, Page: BloodPotencyPage },
  { path: PATHS.VAMPIRE.GHOUL_FAMILIES, Page: GhoulFamiliesPage },
  { path: PATHS.VAMPIRE.MERITS, Page: VampireMeritsPage },
  { path: PATHS.VAMPIRE.HUMANITY, Page: HumanityPage },
];

const WEREWOLF_ROUTES = [
  { path: PATHS.WEREWOLF.BASE, Page: WerewolfPage },
  { path: PATHS.WEREWOLF.GIFTS, Page: GiftsPage },
  { path: PATHS.WEREWOLF.RITES, Page: RitesPage },
  { path: PATHS.WEREWOLF.MERITS, Page: WerewolfMeritsPage },
  { path: PATHS.WEREWOLF.FETISHES, Page: FetishPage },
  { path: PATHS.WEREWOLF.TALENS, Page: TalenPage },
  { path: PATHS.WEREWOLF.AUSPICES, Page: AuspicesPage },
  { path: PATHS.WEREWOLF.HARMONY, Page: HarmonyPage },
  { path: PATHS.WEREWOLF.LODGES, Page: LodgesPage },
  { path: PATHS.WEREWOLF.PRIMAL_URGE, Page: PrimalUrgePage },
  { path: PATHS.WEREWOLF.TRIBES, Page: TribesPage },
  { path: PATHS.WEREWOLF.EXPERIENCE, Page: WerewolfExperiencePage },
];

const MAGE_ROUTES = [
  { path: PATHS.MAGE.BASE, Page: MagePage },
  { path: PATHS.MAGE.PATH, Page: PathPage },
  { path: PATHS.MAGE.ORDER, Page: OrderPage },
  { path: PATHS.MAGE.GNOSIS, Page: GnosisPage },
  { path: PATHS.MAGE.WISDOM, Page: WisdomPage },
  { path: PATHS.MAGE.LEGACY, Page: LegacyPage },
  { path: PATHS.MAGE.MERITS, Page: MageMeritsPage },
  { path: PATHS.MAGE.GRIMOIRES, Page: GrimoirePage },
  { path: PATHS.MAGE.EXPERIENCE, Page: MageExperiencePage },
  { path: PATHS.MAGE.SPELLS, Page: SpellsPage },
  { path: PATHS.MAGE.ARTIFACTS, Page: ArtifactsPage },
  { path: PATHS.MAGE.IMBUED_ITEMS, Page: ImbuedItemsPage },
];

const ARCANA_ROUTE_CONFIGS = [
  { path: PATHS.MAGE.DEATH, arcana: "death" },
  { path: PATHS.MAGE.FATE, arcana: "fate" },
  { path: PATHS.MAGE.FORCE, arcana: "force" },
  { path: PATHS.MAGE.LIFE, arcana: "life" },
  { path: PATHS.MAGE.MATTER, arcana: "matter" },
  { path: PATHS.MAGE.MIND, arcana: "mind" },
  { path: PATHS.MAGE.PRIME, arcana: "prime" },
  { path: PATHS.MAGE.SPACE, arcana: "space" },
  { path: PATHS.MAGE.SPIRIT, arcana: "spirit" },
  { path: PATHS.MAGE.TIME, arcana: "time" },
];

const PROMETHEAN_ROUTES = [
  { path: PATHS.PROMETHEAN.BASE, Page: PrometheanPage },
  { path: PATHS.PROMETHEAN.AZOTH, Page: AzothPage },
  { path: PATHS.PROMETHEAN.TRANSMUTATIONS, Page: TransmutationsPage },
  { path: PATHS.PROMETHEAN.BESTOWMENTS, Page: BestowmentsPage },
  { path: PATHS.PROMETHEAN.MERITS, Page: PrometheanMeritsPage },
  { path: PATHS.PROMETHEAN.REFINEMENTS, Page: RefinementsPage },
  { path: PATHS.PROMETHEAN.MOCKERIES, Page: MockeriesPage },
  { path: PATHS.PROMETHEAN.LINEAGE, Page: LineagesPage },
  { path: PATHS.PROMETHEAN.EXPERIENCE, Page: PrometheanExperiencePage },
];

const CHANGELING_ROUTES = [
  { path: PATHS.CHANGELING.BASE, Page: ChangelingPage },
  { path: PATHS.CHANGELING.SEEMINGS, Page: SeemingPage },
  { path: PATHS.CHANGELING.KITHS, Page: KithPage },
  { path: PATHS.CHANGELING.COURT, Page: CourtPage },
  { path: PATHS.CHANGELING.ENTITLEMENTS, Page: EntitlementsPage },
  { path: PATHS.CHANGELING.WYRD, Page: WyrdPage },
  { path: PATHS.CHANGELING.CONTRACTS, Page: ContractsPage },
  { path: PATHS.CHANGELING.EXPERIENCE, Page: ChangelingExperiencePage },
  { path: PATHS.CHANGELING.PLEDGES, Page: PledgesPage },
  { path: PATHS.CHANGELING.MERITS, Page: ChangelingMeritsPage },
  { path: PATHS.CHANGELING.CLARITY, Page: ClarityPage },
  { path: PATHS.CHANGELING.GOBLIN_FRUITS, Page: GoblinFruitsPage },
  { path: PATHS.CHANGELING.TOKENS, Page: TokenPage },
  { path: PATHS.CHANGELING.TOKEN_RULES, Page: TokenRulesPage },
];

const HUNTER_ROUTES = [
  { path: PATHS.HUNTER.BASE, Page: HunterPage },
  { path: PATHS.HUNTER.ENDOWMENTS, Page: EndowmentsPage },
  { path: PATHS.HUNTER.TACTICS, Page: TacticsPage },
  { path: PATHS.HUNTER.MERITS, Page: HunterMeritsPage },
  { path: PATHS.HUNTER.PROFESSION, Page: ProfessionsPage },
  { path: PATHS.HUNTER.COMPACT_CONSPIRANCY, Page: CompactConspiraciesPage },
  { path: PATHS.HUNTER.DREAD_POWERS, Page: DreadPowersPage },
];

const GEIST_ROUTES = [
  { path: PATHS.GEIST.BASE, Page: GeistPage },
  { path: PATHS.GEIST.PSYCHE, Page: PsychePage },
  { path: PATHS.GEIST.KEYS_AND_HAUNTS, Page: KeysAndHauntsPage },
  { path: PATHS.GEIST.CEREMONIES, Page: CeremoniesPage },
  { path: PATHS.GEIST.MERITS, Page: GeistMeritsPage },
  { path: PATHS.GEIST.MEMENTOS, Page: MementoPage },
  { path: PATHS.GEIST.ARCHETYPES, Page: ArchetypesPage },
  { path: PATHS.GEIST.SYNERGY, Page: SynergyPage },
  { path: PATHS.GEIST.KREWE_TRAITS, Page: KreweTraitsPage },
  { path: PATHS.GEIST.THRESHOLDS, Page: ThresholdsPage },
  { path: PATHS.GEIST.MANIFESTATION, Page: ManifestationPage },
  { path: PATHS.GEIST.EXPERIENCE, Page: GeistExperiencePage },
];

const MUMMY_ROUTES = [
  { path: PATHS.MUMMY.BASE, Page: MummyPage },
  { path: PATHS.MUMMY.AFFINITIES, Page: AffinitiesPage },
  { path: PATHS.MUMMY.UTTERANCES, Page: UtterancesPage },
  { path: PATHS.MUMMY.JUDGE, Page: JudgesPage },
  { path: PATHS.MUMMY.SEKHEM, Page: SekhemPage },
  { path: PATHS.MUMMY.MERITS, Page: MummyMeritsPage },
  { path: PATHS.MUMMY.RELICS, Page: RelicPage },
  { path: PATHS.MUMMY.DECREE, Page: DecreesPage },
  { path: PATHS.MUMMY.GUILD, Page: GuildsPage },
  { path: PATHS.MUMMY.MEMORY, Page: MemoryPage },
  { path: PATHS.MUMMY.EXPERIENCE, Page: MummyExperiencePage },
];

const SPIRIT_ROUTES = [{ path: PATHS.SPIRIT.NUMINA, Page: NuminaPage }];

const OTHER_ROUTES = [
  { path: PATHS.OTHERS.ASPECTS_FAVORRS, Page: AspectsAndFavorsPage },
  { path: PATHS.OTHERS.ABOMINABLE, Page: AbominableTraitsPage },
  { path: PATHS.OTHERS.PARANORMAL_OBJECTS, Page: ParanormalObjectsPage },
];

function getItemRouteSlug(item) {
  return item?.Name || item?.Title || item?.Nome || item?.Titolo || item?.slug || "unknown";
}

function findItemBySlug(items, slug) {
  return items.find((item) => slugify(getItemRouteSlug(item)) === slug) || null;
}

function findDisciplineBySlug(items, slug) {
  const isSlugMatch = (value) => value && slugify(value) === slug;
  const isOverview = (item) =>
    item?.Rank === "N/A" &&
    Array.isArray(item?.LongDescription || item?.longDescription);

  return (
    items.find((item) => isOverview(item) && isSlugMatch(item?.Name)) ||
    items.find((item) => isOverview(item) && isSlugMatch(item?.Discipline)) ||
    findItemBySlug(items, slug)
  );
}

const DETAIL_ROUTE_CONFIGS = [
  {
    path: `${PATHS.LOCATIONS_BASE}/:slug`,
    propKey: "location",
    loadPage: () => import("./pages/Generale/LocationDetail"),
    loadData: () => import("./Data/LocationMeritData"),
    resolveItem: ({ dataModule, slug }) => findItemBySlug(dataModule.allLocation, slug),
  },
  {
    path: `${PATHS.UNIVERSAL_MERITS}/:slug`,
    propKey: "merits",
    loadPage: () => import("./pages/Generale/UniversalMeritsDetail"),
    loadData: () => import("./Data/universalMeritsData"),
    resolveItem: ({ dataModule, slug }) => findItemBySlug(dataModule.allUniMeritsData, slug),
  },
  {
    path: `${PATHS.DERANGEMENTS}/:slug`,
    propKey: "derangement",
    loadPage: () => import("./pages/Generale/DerangementsDetail"),
    loadData: () => import("./Data/DerangementsData"),
    resolveItem: ({ dataModule, slug }) =>
      dataModule.derangementData.find(
        (item, index) => slugify(`${item?.Name || "unknown"}-${index}`) === slug
      ) || null,
  },
  {
    path: `${PATHS.VAMPIRE.DISCIPLINES}/:slug`,
    propKey: "discipline",
    loadPage: () => import("./pages/Vampire/DisciplinesDetail"),
    loadData: () => import("./Data/Vampire/DisciplineData"),
    resolveItem: ({ dataModule, slug }) => findDisciplineBySlug(dataModule.allDiscipline, slug),
  },
  {
    path: `${PATHS.VAMPIRE.DEVOTIONS}/:slug`,
    propKey: "devotion",
    loadPage: () => import("./pages/Vampire/DevotionsDetail "),
    loadData: () => import("./Data/Vampire/DevotionData"),
    resolveItem: ({ dataModule, slug }) => findItemBySlug(dataModule.DevotionData, slug),
  },
  {
    path: `${PATHS.MAGE.MERITS}/:slug`,
    propKey: "merits",
    loadPage: () => import("./pages/Mage/MageMeritsDetail"),
    loadData: () => import("./Data/Mage/mageMeritsData"),
    resolveItem: ({ dataModule, slug }) => findItemBySlug(dataModule.allMageMeritsData, slug),
  },
  {
    path: `${PATHS.MAGE.LEGACY}/:slug`,
    propKey: "legacy",
    loadPage: () => import("./pages/Mage/LegacyDetail"),
    loadData: () => import("./Data/Mage/LegacyData"),
    resolveItem: ({ dataModule, slug }) => findItemBySlug(dataModule.LegacyData, slug),
  },
  {
    path: `${PATHS.MAGE.SPELLS}/:slug`,
    propKey: "spell",
    loadPage: () => import("./pages/Mage/SpellDetail"),
    loadData: () => import("./Data/Mage/Arcana/allArcana"),
    resolveItem: ({ dataModule, slug }) => findItemBySlug(dataModule.SpellsData, slug),
  },
  {
    path: `${PATHS.MAGE.ARTIFACTS}/:slug`,
    propKey: "artifact",
    loadPage: () => import("./pages/Mage/ArtifactDetail"),
    loadData: () => import("./Data/Mage/artifactsData"),
    resolveItem: ({ dataModule, slug }) => findItemBySlug(dataModule.artifactData, slug),
  },
  {
    path: `${PATHS.MAGE.IMBUED_ITEMS}/:slug`,
    propKey: "imbuedItem",
    loadPage: () => import("./pages/Mage/ImbuedItemsDetail"),
    loadData: () => import("./Data/Mage/imbuedItemsData"),
    resolveItem: ({ dataModule, slug }) => findItemBySlug(dataModule.imbuedItemsData, slug),
  },
  {
    path: `${PATHS.CHANGELING.CONTRACTS}/:slug`,
    propKey: "contracts",
    loadPage: () => import("./pages/Changeling/ContractsDetail"),
    loadData: () => import("./Data/Changeling/ContractData"),
    resolveItem: ({ dataModule, slug }) => findItemBySlug(dataModule.allContracts, slug),
  },
  {
    path: `${PATHS.CHANGELING.MERITS}/:slug`,
    propKey: "merits",
    loadPage: () => import("./pages/Changeling/ChangelingMeritsDetail"),
    loadData: () => import("./Data/Changeling/changelingMeritsData"),
    resolveItem: ({ dataModule, slug }) =>
      findItemBySlug(dataModule.allChangelingMeritsData, slug),
  },
  {
    path: `${PATHS.CHANGELING.GOBLIN_FRUITS}/:slug`,
    propKey: "goblinFruit",
    loadPage: () => import("./pages/Changeling/GoblinFruitsDetail"),
    loadData: () => import("./Data/Changeling/GoblinFruitData"),
    resolveItem: ({ dataModule, slug }) => findItemBySlug(dataModule.goblinFruitData, slug),
  },
  {
    path: `${PATHS.CHANGELING.TOKENS}/:slug`,
    propKey: "tokens",
    loadPage: () => import("./pages/Changeling/TokensDetail"),
    loadData: () => import("./Data/Changeling/TokenData"),
    resolveItem: ({ dataModule, slug }) => findItemBySlug(dataModule.allToken, slug),
  },
  {
    path: `${PATHS.HUNTER.DREAD_POWERS}/:slug`,
    propKey: "dreadPowers",
    loadPage: () => import("./pages/Hunter/DreadPowersDetail"),
    loadData: () => import("./Data/Hunter/DreadPowerData"),
    resolveItem: ({ dataModule, slug }) => findItemBySlug(dataModule.dreadPowersData, slug),
  },
  {
    path: `${PATHS.SPIRIT.NUMINA}/:slug`,
    propKey: "numina",
    loadPage: () => import("./pages/Spirit/NuminaDetail"),
    loadData: () => import("./Data/Spirit/SpiritNuminaData"),
    resolveItem: ({ dataModule, slug }) => findItemBySlug(dataModule.spiritNuminaData, slug),
  },
];

function renderLazyPage(Page, props = {}) {
  return (
    <Suspense fallback={ROUTE_FALLBACK}>
      <Page {...props} />
    </Suspense>
  );
}

function App() {
  const routeGroups = [
    GENERAL_ROUTES,
    MORTAL_ROUTES,
    VAMPIRE_ROUTES,
    WEREWOLF_ROUTES,
    MAGE_ROUTES,
    PROMETHEAN_ROUTES,
    CHANGELING_ROUTES,
    HUNTER_ROUTES,
    GEIST_ROUTES,
    MUMMY_ROUTES,
    SPIRIT_ROUTES,
    OTHER_ROUTES,
  ];

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Breadcrumbs />
      <div className="page-container">
        <Routes>
          {routeGroups.flat().map(({ path, Page }) => (
            <Route key={path} path={path} element={renderLazyPage(Page)} />
          ))}
          {ARCANA_ROUTE_CONFIGS.map(({ path, arcana }) => (
            <Route
              key={path}
              path={path}
              element={renderLazyPage(ArcanaPage, { arcana })}
            />
          ))}
          {DETAIL_ROUTE_CONFIGS.map(({ path, ...routeConfig }) => (
            <Route
              key={path}
              path={path}
              element={<LazyDetailRoute {...routeConfig} />}
            />
          ))}
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;

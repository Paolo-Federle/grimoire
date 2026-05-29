# Detail page candidates by data size

Conteggio aggiornato delle pagine data-driven che non hanno ancora una pagina di dettaglio.

Criterio usato:
- conteggio per pagina, non per singola costante;
- se una pagina importa piu dataset, gli elementi sono sommati;
- escluse le pagine che hanno gia una detail route;
- escluse le pagine piu tecniche/meccaniche, mantenendo quelle piu enciclopediche o narrative.

Note:
- `GeistMerits`, `AbominableTraits`, `AspectsAndFavors`, `HunterMerits` e `giftData` non sono piu in lista perche ora hanno detail page.
- `Clan` somma `clanData`, `historicalClanData` e `restrictedClanData`.
- I conteggi indicano gli elementi negli array importati dalla pagina.

| Elementi | Pagina | Dataset sommati |
| ---: | --- | --- |
| 5 | `src/pages/Geist/Thresholds.jsx` | `ThresholdsData` 5 |
| 5 | `src/pages/Mummy/Decrees.jsx` | `DecreesData` 5 |
| 5 | `src/pages/Werewolf/Auspices.jsx` | `AuspiceData` 5 |
| 6 | `src/pages/Changeling/Seeming.jsx` | `SeemingsData` 6 |
| 6 | `src/pages/Mummy/Guilds.jsx` | `GuildsData` 6 |
| 8 | `src/pages/Geist/Archetypes.jsx` | `ArchetypesData` 8 |
| 8 | `src/pages/Promethean/Lineages.jsx` | `LineagesData` 8 |
| 8 | `src/pages/Promethean/Mockeries.jsx` | `MockeriesData` 8 |
| 10 | `src/pages/Vampire/Ghoul.jsx` | `GhoulFamiliesData` 10 |
| 10 | `src/pages/Werewolf/Gifts.jsx` | `milestoneGifts` 10 |
| 13 | `src/pages/Vampire/Clan.jsx` | `clanData` 5, `historicalClanData` 1, `restrictedClanData` 7 |
| 17 | `src/pages/Changeling/Court.jsx` | `auroralCourtsData` 2, `directionalCourtsData` 4, `diurnalCourtsData` 2, `farawaySeasonalCourtsData` 5, `seasonalCourtsData` 4 |
| 17 | `src/pages/Promethean/Bestowments.jsx` | `BestowmentsData` 17 |
| 18 | `src/pages/Promethean/PrometheanMerits.jsx` | `PrometheanMeritsData` 18 |
| 19 | `src/pages/Geist/KreweTraits.jsx` | `KreweTraitsData` 19 |
| 21 | `src/pages/Werewolf/Tribes.jsx` | `OtherGroupsData` 12, `TribesForsakenData` 6, `TribesPureData` 3 |
| 23 | `src/pages/Hunter/Professions.jsx` | `ProfessionsData` 23 |
| 26 | `src/pages/Werewolf/WerewolfMerits.jsx` | `WerewolfMeritsData` 26 |
| 27 | `src/pages/Vampire/Covenant.jsx` | `alternateCovenantData` 5, `antagonisticCovenantData` 4, `brokenCovenantData` 4, `mainCovenantData` 5, `uncommonCovenantData` 9 |
| 29 | `src/pages/Changeling/Pledges.jsx` | `pledgeData` 18, `pledgeCurses` 8, `MorpheanBargainsData` 3 |
| 40 | `src/pages/Changeling/Entitlement.jsx` | `entitlementData` 40 |
| 40 | `src/pages/Hunter/CompactConsipracies.jsx` | `CompactsData` 17, `ConspiraciesData` 10, `HistoricalCompactsData` 10, `HistoricalConspiraciesData` 3 |
| 41 | `src/pages/Geist/Memento.jsx` | `CharmData` 12, `VanitasData` 8, `FetterData` 9, `DeathMaskData` 6, `MemorabiliaData` 6 |
| 42 | `src/pages/Mummy/Judges.jsx` | `JudgesData` 2, `JudgesAbData` 8, `JudgesBaData` 8, `JudgesKaData` 8, `JudgesRenData` 8, `JudgesSheutData` 8 |
| 46 | `src/pages/Werewolf/Talen.jsx` | `TalensData` 46 |
| 47 | `src/pages/Geist/Ceremonies.jsx` | `CeremoniesData` 47 |
| 58 | `src/pages/Mummy/MummyMerits.jsx` | `CultAxisData` 2, `CultBenefitsData` 11, `CultMeritsData` 1, `MummiesMeritsData` 14, `MummiesStyleMeritsData` 5, `MummiesTombMeritsData` 18, `MummiesTombsDrawbackData` 7 |
| 61 | `src/pages/Mummy/Relic.jsx` | `amuletData` 8, `effigyData` 5, `RegiumData` 5, `textData` 5, `uterData` 5, `sebaData` 28, `vestigeData` 5 |
| 61 | `src/pages/Vampire/VampireMerits.jsx` | `carthianMeritsData` 11, `generalVampireMeritsData` 38, `invictusMeritsData` 6, `ordoDraculMeritsData` 6 |
| 67 | `src/pages/Hunter/Tactics.jsx` | `TactictsData` 67 |
| 92 | `src/pages/Changeling/Kith.jsx` | `kithBeastsData` 16, `kithDarklingsData` 15, `kithElementalsData` 14, `kithFairestData` 17, `kithOgresData` 13, `kithWizenedData` 17 |
| 108 | `src/pages/Werewolf/Lodges.jsx` | `LodgesData` 108 |
| 134 | `src/pages/Vampire/Bloodline.jsx` | `daevaBloodlineData` 26, `gangrelBloodlineData` 28, `genericBloodlineData` 2, `juliiBloodlineData` 1, `mekhetBloodlineData` 25, `nosferatuBloodlineData` 26, `unknownBloodlineData` 1, `ventrueBloodlineData` 25 |
| 159 | `src/pages/Mummy/Utterances.jsx` | `UtterancesData` 105, `GuildUtterancesData` 27, `SpiritUtterancesData` 9, `IronBullUtterancesData` 9, `MaatUtterancesData` 6, `WheelUtterancesData` 3 |
| 161 | `src/pages/Werewolf/Rites.jsx` | `RitesData` 161 |
| 182 | `src/pages/Werewolf/Fetish.jsx` | `fetishData` 182 |
| 192 | `src/pages/Promethean/Transmutations.jsx` | `AlchemicusTransmutationsData` 12, `BeneficeTransmutationsData` 10, `ConsortiumTransmutationsData` 5, `ContaminationTransmutationsData` 11, `CorporeumTransmutationsData` 12, `DeceptionTransmutationsData` 11, `DisquietismTransmutationsData` 12, `ElectrificationTransmutationsData` 11, `IrradiationTransmutationsData` 15, `MesmerismTransmutationsData` 11, `MetamorphosisTransmutationsData` 11, `SaturninusTransmutationsData` 11, `SensoriumTransmutationsData` 13, `SpiritusTransmutationsData` 12, `VitalityTransmutationsData` 19, `VulcanusTransmutationsData` 16 |
| 228 | `src/pages/Hunter/Endowments.jsx` | `advancedArmoryData` 22, `benedictionData` 26, `castigationData` 22, `dreamscapeData` 10, `elixirData` 25, `relicData` 34, `ritesDuChevalData` 10, `seitokukenData` 7, `thaumatechnologyData` 21, `teleinformaticsInterviewData` 5, `teleinformaticsInvestigationData` 5, `teleinformaticsResearchData` 5, `gospelOfAgaresData` 5, `gospelOfAmonData` 5, `gospelOfBelethData` 3, `ritesOfDenialData` 13, `otherEndowmentData` 10 |

## Escluse dal conteggio operativo

Queste pagine sono state considerate piu tecniche/meccaniche o non prioritarie per detail page enciclopediche:

- experience/costi: `ChangelingExperiencePoints`, `GeistExperiencePoints`, `PrometheanExperiencePoints`, `VampireExperiencePoints`, `WerewolfExperiencePoints`, `MageExperiencePoints`, `MummyExperiencePoints`;
- scale/regole generali: `Morality`, `Humanity`, `VirtueVice`, `Clarity`, `Wyrd`, `Psyche`, `Synergy`, `Azoth`, `Refinements`, `Harmony`, `PrimalUrge`, `BloodPotency`, `Gnosis`, `Sekhem`, `Memory`;
- reference/utility: `Books`, `ExternalResources`, `Settings`, `Size`, `Skills`, `Traits`;
- equipaggiamento tabellare o molto tecnico: `Armor`, `Tools`, `Vehicle`, `Weapon`, `Reliquary`, `FuturisticItems`;
- pagine gia coperte da detail route: Location, Universal Merits, Derangements, Disciplines, Devotions, Werewolf Gifts, Mage Merits, Legacy, Spells/Arcana, Artifacts, Imbued Items, Contracts, Changeling Merits, Goblin Fruits, Tokens, Dread Powers, Hunter Merits, Geist Merits, Abominable Traits, Aspects and Favors, Psychic Merits, Numina.

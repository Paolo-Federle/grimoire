const forceOneData = [
    {
        "Titolo": "Counterspell",
        "Arcana": "Any one of the attacking spell’s Arcana at •",
        "DescrizioneAlta": "The mage creates Pattern interference that can weaken or even cancel a spell.",
        "Practice": "Shielding",
        "Action": "Instant and contested; successes are compared to the target spell’s Potency",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "<p>When someone directs a vulgar spell at the mage or other targets whom the mage wishes to protect, he can cast a countering spell that creates a form of magical interference, weakening or even canceling the attacking spell, similar to how an obstacle can act as cover against a ranged attack. He must first have Mage Sight to be able to perceive the attacking spell. Like a dodge action, he can cast Counterspell against vulgar spells cast by another mage with a higher Initiative. (He cannot counter attacks with lower Initiatives if he has already performed an action in the turn. See “Dodge,” p. 156 of the <b>World of Darkness Rulebook</b>, for rules on how this circumvents the normal Initiative order for the turn.) A mage can even counter sympathetic spells cast directly at him (but not those cast at other targets), by sensing the sympathetic conduit being forged by the spell (again, he must have Mage Sight for this). </p><p>Successes are subtracted from the target spell’s Potency. If the target spell is left with no Potency, it is canceled entirely. If even a single point of Potency remains, the spell is applied against its target (at its reduced Potency). </p><p>A covert spell cannot normally be countered, since the defending mage must first identify its Arcanum components using the normal rules for doing so (see “Scrutinizing Spells,” p. 278). Such investigation is not normally possible within the same turn in which the spell is cast, although some Time magic might give a mage the extra time needed or clue him in on what spell the caster will cast before he casts it. Vulgar spells do not need this kind of scrutiny; they are obvious enough to counter within the same turn of casting. </p><p>A spell aimed at more than one target does not need to be countered for each target; a successful countering diminishes or prevents its effects against all targets. </p><p>A countering mage must have at least one dot in one of the Arcana used by the attacking spell. For example, to counter a conjunctional Mind 3 + Life 2 spell, a mage needs either Mind 1 or Life 1, but not both. If he does not have a proper Arcanum lore, he cannot counter the spell. Counterspell can be learned as a rote (use Occult Skill), but it must be learned separately for each Arcanum to which it applies.</p><p>A mage with two dots of Prime can instead use the “Counterspell Prime” spell, p. 222, to counter any spell, regardless of Arcanum. In addition, Counterspell Prime allows him to counter covert spells (assuming he has active Mage Sight) without first needing to identify them.</p>",
        "DescrizioneBreve": "counter Forces spells",
    },
    {
        "Titolo": "Influence Heat",
        "Arcana": "Forces •",
        "DescrizioneAlta": "The mage can guide the direction and/or flow of existing heat. He could, for example, keep warm in cold weather by pulling the ambient warmth shed by other human bodies to himself, or make sure that the dim heat from a radiator on the other side of a bathroom reached the shower stall. He could not increase the temperature of the heat at this level, nor create heat where there is none.",
        "Practice": "Compelling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "RoteName": "Mysterium Rote: Radiant Blessing",
        "RoteDice": "Dice Pool: Intelligence + Occult or Science + Forces",
        "RoteDescrizione": "The mages of the Mysterium like this rote because it allows them to keep their drafty old libraries from losing too much heat.",
        "DescrizioneBreve": "redirect heat",
    },
    {
        "Titolo": "Influence Light",
        "Arcana": "Forces •",
        "DescrizioneAlta": "The mage can guide the direction and/or flow of existing light. He could, for example, cause a wide-angle lantern beam to focus more tightly, like a flashlight beam, or split visible white light into its full spectrum of colors, like a prism. He could not (at this level) cause a weak light to become brighter or cause light to appear where it did not already exist.",
        "Practice": "Compelling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Successes determine the degree to which the light can be altered. For instance, with one success, a light beam can be diverted in a 90-degree direction, while two successes can turn it again by 90 degrees.",
        "RoteName": "Silver Ladder Rote: Brilliant Flow",
        "RoteDice": "Dice Pool: Intelligence + Occult or Science + Forces",
        "RoteDescrizione": "A Silver Ladder mage might use this rote to control the manner in which light falls around him, creating dramatic under-lighting or shining all the lamps in a room directly into the face of someone he interrogates.",
        "DescrizioneBreve": "redirect light",
    },
    {
        "Titolo": "Influence Sound",
        "Arcana": "Forces •",
        "DescrizioneAlta": "The mage can guide the direction and/or flow of existing sound. He could, for example, focus sound waves from across a vast chamber so he can listen in on a whispered conversation, or ensure that the sound of his own voice does not carry beyond the person to whom he is speaking. He could not amplify the volume, however, or create a noise from thin air.",
        "Practice": "Compelling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "RoteName": "Silver Ladder Rote: Fording the River",
        "RoteDice": "Dice Pool: Intelligence + Occult or Science + Forces",
        "RoteDescrizione": "A whispered word can mean the downfall of an empire, a fact well known to the willworkers of the Silver Ladder. With this rote, such words can be overheard.",
        "DescrizioneBreve": "redirect sound",
    },
    {
        "Titolo": "Nightsight",
        "Arcana": "Forces •",
        "DescrizioneAlta": "By attuning her perceptions to pick up trace amounts of ambient light, supplementing this with an intuitive feel for vibration, heat and the like, a mage can see in the dark with the same clarity as most nocturnal predators. She can essentially perceive the infrared or ultraviolet spectrum and detect electromagnetic radiation, or sonic or kinetic energy.",
        "Practice": "Unveiling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Each success lessens by one any penalties for operating under cover of darkness. Note, however, that sudden bursts of light can prove disorienting or even painful for the mage and that she will find the light of an ordinary desk lamp to be excessive, while full noonday sunlight is excruciating. (Invert lighting penalties for the character; it is easy to see in dim or no light, difficult to see in normal light and impossible to see in very bright light.) Also, because this vision is augmented by a somewhat heightened sense for sound and vibration, sudden, violent motions (like an earthquake or an explosion) may temporarily impose penalties on the mage as she readjusts her perceptions to compensate.",
        "RoteName": "Adamantine Arrow Rote: Night As Day",
        "RoteDice": "Dice Pool: Wits + Composure + Forces",
        "RoteDescrizione": "Few things are more frightening to the enemies of the heirs of Atlantis than a squad of Adamantine Arrow willworkers moving in under cover of night and supplemented by this rote. Whether used on the defensive (when a sanctum suddenly loses power, for example, and something unspeakable begins seething up from the basement) or on the attack, this rote is to its caster as a light in the darkness.",
        "DescrizioneBreve": "see in darkness or low light",
    },
    {
        "Titolo": "Outer Music",
        "Arcana": "Forces •",
        "DescrizioneAlta": "This spell enables the mage to eavesdrop on the noise of space itself, sorting out signal-to-noise frequencies without benefit of complex machinery or sensors. In theory, a mage using this spell could identify transmissions from alien lifeforms, hear the “music of the spheres” as the planets and stars emit their telltale signature noises or catch the sound of approaching spacecraft. Naturally, if no such data or noise is present, the spell produces only silence or white noise.",
        "Practice": "Knowing",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "A Wits + Science roll is made to enable the mage to pick out and identify the type of signal she is receiving. To break a code, an additional Wits + Occult or Computer may be necessary, while an Intelligence + Language roll can determine if the signal contains a message.",
        "RoteName": "Banisher Rote: Invasion Alert",
        "RoteDice": "Dice Pool: Wits + Science + Forces",
        "RoteDescrizione": "A Banisher may use this rote to determine if the signal is hostile and if it signals an imminent attack. By substituting Time for Forces in the dice pool, the Banisher may get a sense of the approximate time remaining before the attack arrives.",
        "DescrizioneBreve": "listen to the noise of outer space",
    },
    {
        "Titolo": "Read Matrices",
        "Arcana": "Forces •",
        "DescrizioneAlta": "The mage gains the Mage Sight (see “Mage Sight,” p. 110). He can perceive energy and magical resonance, detecting the presence of all of the universe’s various forms of energy: heat, gravity, electromagnetism and the like, including the presence or absence of different sorts of radiation, such as x-rays or cosmic radiation, either visually or through tactile perception. An undiscerning mage might be fairly blinded by the overwhelming variety and sheer quantity of energy that moves around her at all times, unable to process the ever-shifting tapestry of power that is all but invisible to the untrained eye. The mage is also especially aware of resonance’s energetic aspects and flow, its vibratory frequency and movement.",
        "Practice": "Unveiling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "See “Resonance,” pp. 277-280, for rules on scrutinizing magic with this spell. When scrutinizing energetic phenomena (like the electromagnetic spectrum), the more invisible that energy is to the naked eye, the more dice penalties the mage suffers.[TABLE1]",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Spectrum",
                        "Dice Penalties"
                    ],
                    [
                        "Gamma rays",
                        "-3"
                    ],
                    [
                        "X-rays",
                        "-2"
                    ],
                    [
                        "Ultraviolet rays",
                        "-1"
                    ],
                    [
                        "Visible light",
                        "0"
                    ],
                    [
                        "Radar",
                        "-2"
                    ],
                    [
                        "Radio, TV",
                        "-3"
                    ]
                ]
            }
        ],
        "RoteName": "Mysterium Rote: The Electric Invisible",
        "RoteDice": "Dice Pool: Wits + Occult or Science + Forces",
        "RoteDescrizione": "The ancients sometimes buried secrets not in crude etchings on stone and clay, but in the unseen energies of the world. This rote enables a member of the Mysterium to sense such invisible forces for whatever purpose, and to witness their interplay. Members of all orders use this rote to discern the patterns of energy that move around them, and to detect the presence of forceful or energetic resonance.",
        "DescrizioneBreve": "Mage Sight",
    },
    {
        "Titolo": "Receiver",
        "Arcana": "Forces •",
        "DescrizioneAlta": "The mage can hear sounds on subsonic or supersonic frequencies that the human ear cannot normally distinguish, but this spell does not improve her hearing ability (it adds no dice, but does extend the range of sounds she can hear).",
        "Practice": "Unveiling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "A Wits + Composure roll is made for the mage to discern high-frequency sounds (a dog whistle) or low-frequency sounds (the rumble of a distant herd of elephants). Sounds that are very high or low on the scale from the normal human range of hearing might impose dice penalties.",
        "RoteName": "Guardians of the Veil Rote: Thunderous Whispers",
        "RoteDice": "Dice Pool: Wits + Occult + Forces",
        "RoteDescrizione": "Perception is a large part of being a Guardian of the Veil. A number of Guardians make use of this rote to pick up on things ordinary humans might miss. After all, the world is full of all sorts of wondrous and terrible phenomena, and one never knows if, say, all the dogs in the neighborhood are howling because of some unnatural presence, or due to nothing more than a sound painful to their ears, one far above the register audible to humans. Mages of the Mysterium also make use of such magics, for sometimes the secret to an enigma lies not in what one can see, but in what one can hear.",
        "DescrizioneBreve": "hear sub/supersonic frequencies",
    },
    {
        "Titolo": "Tune In",
        "Arcana": "Forces •",
        "DescrizioneAlta": "This spell enables a mage to listen in on a free-floating data transmission (like that of a cellular modem) and translate the electromagnetic “noise” into intelligible information. The willworker cannot, however, understand information that was originally transmitted in another language.<p>With this sense, a mage could listen in on a radio broadcast without the need for any kind of receiver. Likewise, she could watch any television signal not transmitted directly through cables. This would enable the mage to spy on closed walkie-talkie channels, get free satellite pay-per-views, or even “listen in” on the datastream transmitted and received by a cellular modem if she really felt like it (not that she’d be able to make much sense of it without the use of Mind magic to interpret the noise). She could even access wireless communications (such as MP3s, Internet long-distance phones, or video conferencing) at a wi-fi “hot spot,” although she can only listen to, not read, such transmissions. At this point, the mage is incapable of actually sending any information along these channels and is restricted to eavesdropping on extant signals.</p>",
        "Practice": "Knowing",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "A Wits + Science roll is made for the mage to discern transmissions. Electromagnetism travels vast distances in a short period of time; signals are bounced all over the place by satellites (both natural and artificial), the Earth’s atmosphere and various other things. Encrypted signals levy a penalty on perception rolls equal to the successes initially accrued in encrypting the signal.",
        "RoteName": "Free Council Rote: Mohammed’s Radio",
        "RoteDice": "Dice Pool: Intelligence + Science + Forces",
        "RoteDescrizione": "Good for more than just free satellite radio, this rote allows a Free Council willworker to listen in on police-band radios, walkie-talkies and cellular phone transmissions. Guardians of the Veil also make regular use of this magic in the course of their work defending the Mysteries.",
        "DescrizioneBreve": "listen to radio frequencies",
    }
]

const forceTwoData = [
    {
        "Titolo": "Activate Police Band",
        "Arcana": "Forces ••",
        "DescrizioneAlta": "Banishers are often willing to die to pursue their bloody goals, so getting arrested isn’t too big a sacrifice. Other mages, though, have to expend resources and move quickly to avoid problems with the law arrives, and so some Banishers know how to quickly summon the authorities. The Banisher sends out a signal on a police frequency. Rather than sending out a specific vocal transmission (à la the “Transmission” spell, see p. 167 of <b>Mage: The Awakening</b>), the Banisher simply sends a pulse that computers read as “officers need assistance.” This spell doesn’t work well in rural areas where all field communication uses two-way radios, but in cities where every patrol car has its own onboard computer, a Banisher can look forward to flashing lights in a few short minutes.",
        "Practice": "Ruling",
        "Action": "Instant",
        "Duration": "Transitory (one turn)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Banishers who make use of this spell often take the time to learn how the police (or other emergency services) communicate in the area. This spell might be used as a last resort, summoning the police to scatter combatants if things go wrong, or it might be part of the Banisher’s plan all along.",
        "RoteName": "Banisher Rote: 10-13",
        "RoteDice": "Dice Pool: Manipulation + Streetwise + Forces",
        "RoteDescrizione": "This rote was created by an Obrimos Banisher who, pre Awakening, was a police dispatcher. Noting how quickly cops respond to a call in which fellow officers are in danger, he developed this rote to summon some quick aid (or at least a distraction) when necessary.",
        "DescrizioneBreve": "send a pulsed 'officers need assistance' signal",
    },
    {
        "Titolo": "Aether Net",
        "Arcana": "Forces ••",
        "DescrizioneAlta": "The mage can create a wireless Internet connection or cell phone connection where there is none, allowing such devices to work even in the absence of their normal network(s).",
        "Practice": "Ruling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "RoteName": "Free Council Rote: WiFi",
        "RoteDice": "Dice Pool: Manipulation + Science + Forces",
        "RoteDescrizione": "Wireless service doesn’t quite cover the world just yet, and even in places where it’s ubiquitous, it’s not always free. Free Council mages were quick to “crack” wireless Internet and cell communications in order to provide them with constant free and accessible service, making their cell phones, PDAs and laptops little more than talismans for the mystic “aether-net.”<p>Note that this spell doesn’t provide a network device with any capabilities it doesn’t normally possess other than providing a free and open connection to the existing network. Still, the usefulness of searching the web, making cell calls and sending and receiving e-mail in the depths of a ruined temple or in an isolated locale shouldn’t be underestimated.</p>",
        "DescrizioneBreve": "wireless connection from any location",
    },
    {
        "Titolo": "Alter Frequency",
        "Arcana": "Forces ••",
        "DescrizioneAlta": "The mage can increase or decrease the frequency of an existing sound, making it sound deeper or higher, as she desires.",
        "Practice": "Ruling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "This spell can be used to speak or whistle in ranges completely foreign to the human larynx. A mage can get the attention of dogs and other creatures that can hear in different pitches. Some myths suggest that a good, loud whistle pitched above the human range of sound could startle (and thus reveal) unprepared supernatural creatures who might otherwise successfully masquerade as human. Use is not limited to sounds the mage creates herself. She may alter the frequency of any sound within sensory range for the duration, for whatever purpose she desires. Using this spell on others’ voices, or on other sounds that Sleepers expect to recognize, is a good way to make it Improbable.",
        "RoteName": "Guardians of the Veil Rote: Secret Whispers",
        "RoteDice": "Dice Pool: Presence + Expression + Forces",
        "RoteDescrizione": "Some secrets are too sensitive to be spoken, but too important not to be recorded or shared with another trustworthy Guardian. When this is the case, the Guardians of the Veil may use their magic to narrow the field of who can eavesdrop. One Guardian uses this rote while another casts Forces 1 “Receiver,” enabling the first to speak in a tone no human (or unprepared mage) will understand while the second listens. Being observed talking without sound is suspicious, so some mages utilize recording devices. Some record their altered voices (in which case they must be sure that the device can capture that range) and use them as personal journals, from which others will only hear static. Used to communicate, the altered voice can be played while the mage makes filler conversation, and the second mage listens to the recording. This is more secure than the alternative, which involves recording normal sound and altering the recording as it plays back.",
        "DescrizioneBreve": "increase or decrease frequency of sound",
    },
    {
        "Titolo": "Circuit Television",
        "Arcana": "Forces •• + Space •",
        "DescrizioneAlta": "With this spell, the mage can connect a television monitor to any camera that is nearly connected to a network to which the monitor is connected. This spell is almost always used with a computer connected to the Internet, because many monitoring cameras in the Western world are connected to an intranet that is connected to the Internet. Although the camera is distant, the network is not, so this is not sympathetic magic. The spell also does not grant control of the camera, so the mage can only see what the camera is pointing at. This is not a Space portal; the mage can only look in the same way that a Sleeper who is actually connected to the camera could look.",
        "Practice": "Ruling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert (if connected to the same network as the camera) or Vulgar (if one step removed from the camera itself, but still connected through things like power a neighborhood power grid)",
        "Cost": "None",
        "DescrizioneMiddle": "Free Council Rote: Open Circuit Television",
        "RoteDice": "Dice Pool: Intelligence + Computer + Forces",
        "RoteDescrizione": "Sometimes it’s as easy as magically activating a webcam on some distant twig of a big sprawling network. Sometimes it’s as complicated as drawing the video signal from the camera that sees it to the equipment that wants to. It’s trickier, but these machines want to see and show. You just have to appeal to their natures.",
        "DescrizioneBreve": "tap into any local wired signal",
    },
    {
        "Titolo": "Control Heat",
        "Arcana": "Forces ••",
        "DescrizioneAlta": "The mage can increase or decrease the temperature of an area.",
        "Practice": "Ruling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Each success either increases or decreases the temperature in a one-yard radius of the targeted spot by up to 10 degrees Fahrenheit. For example, four successes allow the caster to reduce the average room temperature of 72 degrees down to freezing (32 degrees).",
        "RoteName": "Mysterium Rote: Subtle Ambience",
        "RoteDice": "Dice Pool: Intelligence + Occult or Science + Forces",
        "RoteDescrizione": "The Mysterium uses this rote to control the temperature in the libraries and storerooms in which they keep their valuable finds, creating toasty reading rooms or freezing lockers.",
        "DescrizioneBreve": "increase or decrease temperature",
    },
    {
        "Titolo": "Control Light",
        "Arcana": "Forces ••",
        "DescrizioneAlta": "The mage can brighten or weaken an existing light source, such that a 40-watt light bulb can be made to shine as brightly as a floodlight.",
        "Practice": "Ruling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Each success doubles the light’s candescence or diminishes it by half.",
        "RoteName": "Guardians of the Veil Rote: Dim the Lights",
        "RoteDice": "Dice Pool: Intelligence + Occult or Science + Forces",
        "RoteDescrizione": "The Guardians of the Veil use this rote to darken the places they sneak into without affecting any existing systems, which could be centrally monitored.",
        "DescrizioneBreve": "brighten or darken light source",
    },
    {
        "Titolo": "Control Sound",
        "Arcana": "Forces ••",
        "DescrizioneAlta": "The mage can amplify or turn down the volume of sound in an area, such as making the music coming out of a pair of headphones loud enough for dozens of people to hear clearly.",
        "Practice": "Ruling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Each success doubles the sound’s volume or diminishes it by half. The effect covers any sound source emanating from within a targeted spot of one-yard radius. For example, if cast upon a podium, anyone standing within that one-yard spot speaks louder than he would when standing outside it.",
        "RoteName": "Silver Ladder Rote: Thunderous Whispers",
        "RoteDice": "Dice Pool: Intelligence + Occult or Science + Forces",
        "RoteDescrizione": "It takes more than a voice that carries to make a great speaker, but this sort of thing almost never hurts, either.",
        "DescrizioneBreve": "increase or decrease volume in area",
    },
    {
        "Titolo": "Control Traffic",
        "Arcana": "Forces ••",
        "DescrizioneAlta": "Through a careful manipulation of electrical current, the mage can cause traffic lights to spontaneously change. The mage may choose to simply induce a random change in the lights or try to specify which lights will change to which color. This can be useful for more than just cutting down the length of the mage’s morning commute; at least one cabal is known to use this spell to trap their enemies in massive traffic jams, then assassinate them while they sit, vulnerable, in their car.",
        "Practice": "Ruling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "The mage can affect one traffic light (or any similar electronic signaling device) per success. If he simply wishes all targeted traffic lights to change randomly, no further roll is required. Specifying a change, however, requires an Intelligence + Science roll, with a –1 penalty per light beyond the first. The mage may continue to change all affected lights for the duration of the spell, as a simple reflexive action to cause a random change or with another Wits + Academics roll (also a reflexive action) to specify the change.",
        "RoteName": "Free Council Rote: Drag Race",
        "RoteDice": "Dice Pool: Wits + Science + Forces",
        "RoteDescrizione": "Sometimes, you just need to get the hell away. Free Council mages use this rote to clear the road ahead and make sure nothing gets in the way when sundry unpleasant folk are on their tails.",
        "DescrizioneBreve": "alter traffic control patterns",
    },
    {
        "Titolo": "Electronic Eye",
        "Arcana": "Forces ••",
        "DescrizioneAlta": "This spell allows a mage to read information from magnetic and optical storage media.",
        "Practice": "Knowing",
        "Action": "Instant",
        "Duration": "Concentration",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "By touching a storage medium (or its casing, such as a computer hard drive), the mage can “read” its stored contents as if having access to a machine capable of reading it, such as a computer. The user reads the information at normal human speeds, just as if reading it from a computer screen or listening to it through a speaker. Information in the form of programming (computer code) is recognizable as such, and the reader can disregard it to skim for text and graphics information. The mage cannot “run” software, but can generally determine what it does by reading its code and making an Intelligence + Computer roll.",
        "RoteName": "Free Council Rote: Data-Reader",
        "RoteDice": "Dice Pool: Intelligence + Computer + Forces",
        "RoteDescrizione": "Electronic storage of information is quite useful, except when the machinery breaks down. This techné is an essential “backup” for a crashed drive or a damaged disk reader. It’s also useful for accessing information the caster shouldn’t be able to access at all or for finding “hidden” files on storage disks.",
        "DescrizioneBreve": "read data from touched disk or drive",
    },
    {
        "Titolo": "Eyes of the Matrix",
        "Arcana": "Forces ••",
        "DescrizioneAlta": "As the Forces 1 “Read Matrices” spell (see p. 163), except that the mage casts this rote upon another mage, or even a supernatural being such as a ghost or werewolf. If the spell is cast upon a Sleeper, it invokes Disbelief immediately, even if its Duration is less than one scene.",
        "Practice": "Unveiling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "If the target is unwilling, a reflexive and contested Resolve + Gnosis roll is made to resist.",
        "RoteName": "Mysterium Rote: Full Spectrum",
        "RoteDice": "Dice Pool: Wits + Occult or Science + Forces",
        "RoteDescrizione": "Explorations into the Mysteries sometimes make for strange bedfellows. The mages of the Mysterium use this rote to bestow basic Forces Arcanum perceptions upon erstwhile allies, whether Awakened or of some other occult origin. Silver Ladder willworkers use a variant rote (Presence + Science + Forces) to extend such perceptions to those supernatural beings, mage or otherwise, with whom they associate.",
        "DescrizioneBreve": "grant Mage Sight",
    },
    {
        "Titolo": "Fireproofing",
        "Arcana": "Forces ••",
        "DescrizioneAlta": "Fire can be a dangerous tool to use, since it often harms its user as well. Some mages have learned how to make their bodies fireproof, by manipulating the air around their bodies in such a way that fire cannot harm them.",
        "Practice": "Shielding",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "The mage who casts this spell is proof against small fires. With the three-dot version of this spell, he can cast it on others. Like the Forces 2 “Unseen Shield” spell, Fireproofing allows the mage a degree of armor against fire damage (equal to one point of armor per dot of Forces). Even if he is not in direct contact with the flame, its heat does not bother him, unless it’s hotter (in terms of damage inflicted per turn) than his Forces dots, in which case, he suffers any excess damage due to heat prostration. In addition, his clothing and any object he holds become fireproof, no matter how flammable they might be (the fuse on a stick of dynamite can’t catch fire as long as he holds it).",
        "RoteName": "Free Council Rote: Asbestos Skin",
        "RoteDice": "Dice Pool: Stamina + Survival + Forces",
        "RoteDescrizione": "If you play with fire, you’re going to get burned. Except that some mages don’t seem to get burned all that often.",
        "DescrizioneBreve": "prevent damage from flames",
    },
    {
        "Titolo": "Friction Reduction",
        "Arcana": "Forces ••",
        "DescrizioneAlta": "The mage reduces the friction (static or kinetic) between two solid objects. A book on a table will appear to slide effortlessly across the surface with little resistance. A walker will have a hard time maintaining a foothold. Objects on an incline will move downward.",
        "Practice": "Ruling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "The mage reduces the friction in a given area according to her successes:[TABLE1]]Any person walking on that area suffers a –1 penalty to any action that might have required normal friction to be present, whether it’s a Drive roll to keep control of a car or an Athletics roll to walk across the frictionless surface (other rolls may apply per situation). This penalty can be increased by raising the spell’s Potency factors during casting.<p>Characters who fall into objects take damage accordingly (see “Falling,” p. 179 in the <b>World of Darkness Rulebook</b>). Vehicle crashes can be found on pp. 144–145 of the <b>World of Darkness Rulebook</b>.</p>",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Successes",
                        "Defined Volume"
                    ],
                    [
                        "1",
                        "5 cubic yards"
                    ],
                    [
                        "2",
                        "10 cu. yards"
                    ],
                    [
                        "3",
                        "20 cu. yards"
                    ],
                    [
                        "4",
                        "40 cu. yards"
                    ],
                    [
                        "5",
                        "80 cu. yards"
                    ]
                ]
            }
        ],
        "RoteName": "Free Council Rote: Black Ice",
        "RoteDice": "Dice Pool: Wits + Science + Forces",
        "RoteDescrizione": "Free Council mages cast this rote on a patch of ground — pursuers in a car or in other vehicles hit the patch of “black ice” (or, if not in winter, a hard-to-see “oil slick”) and likely lose control of the vehicle. Best to use this on an area of ground around a curve or near obstacles, thus requiring an already-difficult Drive roll — Black Ice only makes the maneuver tougher.",
        "DescrizioneBreve": "make surface slick",
    },
    {
        "Titolo": "Influence Electricity",
        "Arcana": "Forces ••",
        "DescrizioneAlta": "The mage can influence the direction or flow of electricity. He can, for example, cause an existing electrical current (such as that moving through appliances or in walls) to flash or arc out and strike a target. He could not amplify the current at this level.",
        "Practice": "Ruling",
        "Action": "Instant and aimed",
        "Duration": "Transitory (one turn)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "The mage does not directly attack a person or object with this spell; he instead manipulates an existing electrical current, redirecting it toward the target of his choice. The damage inflicted depends entirely on the electrical current. See “Electrocution,” pp. 177-178 of the <b>World of Darkness Rulebook</b> for guidelines. The raw power of the current is not altered in any way at this level. This spell usually causes the power source to shut down (a circuit breaker engages) or short out in following turn (although Duration factors can be increased to prevent this termination for additional turns).<p>A simple success allows the electricity to affect one target. (The mage can arc the electricity to any target within five yards of the source per dot of Forces; a mage with Forces 2 can affect a target 10 yards away.) Excess successes affect additional adjacent targets next to one another (this is an exception to the normal rule that disallows aimed spells to affect multiple targets). Targets must each be within three yards in either direction of each other.[TABLE1]</p><p>The source itself, however, limits the total number that can be affected:[TABLE2]</p>",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Successes",
                        "Targets"
                    ],
                    [
                        "2 successes",
                        "Two targets"
                    ],
                    [
                        "3 successes",
                        "Four targets"
                    ],
                    [
                        "4 successes",
                        "Eight targets"
                    ],
                    [
                        "5 successes",
                        "16 targets"
                    ]
                ]
            },
            {
                "Placeholder": "[TABLE2]",
                "Data": [
                    [
                        "Source",
                        "Total Targets"
                    ],
                    [
                        "Wall socket",
                        "Two"
                    ],
                    [
                        "Industrial socket",
                        "Four"
                    ],
                    [
                        "Junction box",
                        "Eight targets"
                    ],
                    [
                        "Main line feed",
                        "16 targets"
                    ]
                ]
            }
        ],
        "RoteName": "Adamantine Arrow Rote: Shock Therapy",
        "RoteDice": "Dice Pool: Dexterity + Athletics + Forces",
        "RoteDescrizione": "Occasionally, a spark is all that’s required. Of course, even an ordinary wall socket packs a potentially lethal punch, so Adamantine Arrow mages do not overlook the usefulness of this rote.",
        "DescrizioneBreve": "cause electricity to arc at targets",
    },
    {
        "Titolo": "Influence Fire",
        "Arcana": "Forces ••",
        "DescrizioneAlta": "The mage can influence the direction or flow of an existing flame. He can, for example, cause a campfire to leap from its place and onto a person, or direct the flame from a Zippo lighter in an arc to the pool of liquor on the countertop. He could not fan the flames to make a larger or hotter fire at this level.",
        "Practice": "Ruling",
        "Action": "Instant and aimed; subtract target’s Defense",
        "Duration": "Transitory (one turn)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "The mage does not directly attack a person or object with this spell; he instead manipulates an existing fire, moving it or directing it toward the target of his choice. The damage inflicted depends entirely on the size and heat of the fire. See “Fire,” p. 180 of the <b>World of Darkness Rulebook</b> for guidelines. This spell usually causes the fire to exhaust its fuel in the following turn, although if targets are wearing highly flammable clothing, they might catch fire and continue to burn each turn until the fire is put out.<p>A single success allows the fire to affect one target. (The mage can send the fire at any target within three yards of its origin per dot of Forces; a mage with Forces 2 can affect a target six yards away.) Excess successes affect additional adjacent targets next to one another (this is an exception to the normal rule that disallows aimed spells to affect multiple targets). Targets must each be within three yards in either direction of each other.</p>[TABLE1]<p>The size of the source itself, however, limits the total number that can be affected:</p>[TABLE2]",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Successes",
                        "Targets"
                    ],
                    [
                        "2 successes",
                        "Two targets"
                    ],
                    [
                        "3 successes",
                        "Four targets"
                    ],
                    [
                        "4 successes",
                        "Eight targets"
                    ],
                    [
                        "5 successes",
                        "16 targets"
                    ]
                ]
            },
            {
                "Placeholder": "[TABLE2]",
                "Data": [
                    [
                        "Size of Fire",
                        "Total Targets"
                    ],
                    [
                        "Torch",
                        "Two"
                    ],
                    [
                        "Bonfire",
                        "Four"
                    ],
                    [
                        "Inferno",
                        "16 targets"
                    ]
                ]
            }
        ],
        "RoteName": "Guardians of the Veil Rote: Deliberate Arson",
        "RoteDice": "Dice Pool: Strength + Athletics + Forces – Defense",
        "RoteDescrizione": "The Guardians like this rote because it gives them a plausible way to cover up evidence they don’t want getting out. There is no sign of arson with this rote, and besides, even a small arc of flame can spell disaster for an enemy weighed down with guns and ammunition.",
        "DescrizioneBreve": "force fire to burn in direction of choice",
    },
    {
        "Titolo": "Insulate",
        "Arcana": "Forces ••",
        "DescrizioneAlta": "Electricity is the hidden force animating the modern world and in its raw form the fury of creation itself. Seers that meditate on it as a metaphor for magic find the ability to protect themselves from the damaging effects of contact with electricity useful.",
        "Practice": "Shielding",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "The mage casting this spell becomes resistant to electrical shock. With Forces 3, it can be cast on others. The spell reduces the automatic damage inflicted by electricity by two points per dot of Forces of the caster. In addition, she automatically succeeds on the Strength roll to pull away.",
        "RoteName": "Seers of the Throne Rote: Protection of the Second Name",
        "RoteDice": "Dice Pool: Stamina + Survival + Forces",
        "RoteDescrizione": "Certain of the names of the General offer some protection against the fury of lightning, at least to a Seer that knows them.",
        "DescrizioneBreve": "reduce damage from electricity by 2/dot of Forces, automatically pull away",
    },
    {
        "Titolo": "Invisible Object",
        "Arcana": "Forces ••",
        "DescrizioneAlta": "The mage can render an inanimate object invisible to all forms of sight, including cameras. Cast in combination with “Influence Sound,” p. 163, the mage can redirect any sounds the object makes (such as the clicking of a camera shutter), making them seem to come from another location.",
        "Practice": "Veiling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "If the object is moved, it is not invisible (it can be seen) while it is moving.",
        "RoteName": "Guardians of the Veil Rote: Look Away",
        "RoteDice": "Dice Pool: Manipulation + Subterfuge + Forces",
        "RoteDescrizione": "This rote allows a Guardian to render some object (whether a faintly glowing obelisk, exsanguinated corpse, or something else entirely) invisible to mundane sight. Silver Ladder mages sometimes use this rote to conceal some manner of leverage (perhaps a weapon) during delicate negotiations until the time is right.",
        "DescrizioneBreve": "make stationary objects invisible",
    },
    {
        "Titolo": "Invisibility to Machines",
        "Arcana": "Forces ••",
        "DescrizioneAlta": "The mage becomes undetectable to electronic devices of all kinds.",
        "Practice": "Veiling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert (if the mage simply passes by the electronic sensor) or Vulgar (if the mage interacts with objects while within the sensor’s “vision”)",
        "Cost": "None",
        "DescrizioneMiddle": "The effects of this spell are similar to those of Personal Invisibility combined with Sound Mastery (see <b>Mage: The Awakening</b>, pp. 160 and 170, respectively), except the mage is only undetectable with regard to electronic devices, such as video cameras, microphones, electric eye beams and so forth. So far as those machines are concerned, the mage simply isn’t there, although the results of the mage’s actions remain noticeable.<p>Although inferior to true Personal Invisibility, this spell is useful in situations where the mage simply doesn’t want to leave traces behind. For example, someone under the veil of Invisibility to Machines could walk into a room monitored by a security camera, have an entire conversation with someone in that room (who would be unaware that the security camera cannot detect the mage) and depart, leaving no record behind. Someone watching the video footage (live or recorded) would be more likely to think the other person was lying or delusional than she would to believe there was an “invisible” person in the room with him, unless the mage did something else to give away his presence.</p>",
        "RoteName": "Free Council Rote: Ghost to the Machines",
        "RoteDice": "Dice Pool: Wits + Persuasion + Forces",
        "RoteDescrizione": "This Free Council rote quickly found its way into the repertoires of other orders, once they realized its usefulness. The Guardians of the Veil have a similar one called Blinding the Machine, which uses Stealth in place of Persuasion (a metaphor for the difference between the Guardians and the Free Council if ever there was one). Libertines never let the Guardians forget that the Libertines thought of it first, though.",
        "DescrizioneBreve": "elude electronic surveillance",
    },
    {
        "Titolo": "Invoke Password",
        "Arcana": "Forces ••",
        "DescrizioneAlta": "The mage learns an electronic password or code.",
        "Practice": "Knowing",
        "Action": "Instant",
        "Duration": "Instant",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "By touching a machine and successfully casting this spell, the mage immediately learns the machine’s password or passcode, if it has one. If the machine has multiple codes, the mage learns the one for the machine’s currently active function. For example, if Invoke Password is cast while touching a computer, the mage learns the passcode to the currently open program window or function. If the spell is cast on an active alarm panel, the mage learns the code to disarm it, and so forth. If there are two or more equally viable functions with passcodes, the mage learns one of them at random, along with what it accesses.<p>The caster must still have some means of inputting the code acquired with this spell. If the machine requires an input device (such as a keycard or transmitter) that the mage doesn’t have, then the code itself doesn’t do much good. The spell also doesn’t provide passcodes that can’t be entered by human hands; if the machine’s only passcode is entered via an encoded keycard, for example, then the spell tells the mage nothing.</p>",
        "RoteName": "Free Council Rote: Cracker’s Code",
        "RoteDice": "Dice Pool: Wits + Crafts + Forces",
        "RoteDescrizione": "Sometimes magic makes a more effective supplement to mundane skills; an Awakened hacker with a willingness to “cheat” can be a terror, as others discovered when the Free Council adopted the digital revolution as part of their own. The Atlantean orders have since learned to ward their computer systems, but Sleepers remain as blissfully unaware as ever.",
        "DescrizioneBreve": "gain access to active computer function",
    },
    {
        "Titolo": "Kinetic Blow",
        "Arcana": "Forces ••",
        "DescrizioneAlta": "The mage focuses the force of a physical attack, such as a punch or kick, down to a pinpoint, inflicting damage as though the person on the other end is stabbed with a knife.",
        "Practice": "Ruling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "Bashing damage is converted to lethal. Attacks that already inflict lethal damage are unaffected. The spell affects one future attack roll per success. The player can choose which of his attack rolls are affected, but he must choose before he rolls the dice for each attack. This effect lasts for one scene (unless additional Duration factors are added during casting), after which time any unused Kinetic Blows are lost.<p>With Forces 3, the mage can use this spell with ranged-weapon attacks such as thrown rocks.</p>",
        "RoteName": "Adamantine Arrow Rote: Knife Fist",
        "RoteDice": "Dice Pool: Strength + Brawl or Weaponry + Forces",
        "RoteDescrizione": "The greatest martial artists can kill with a single blow. Arrow willworkers with this rote don’t require any special training to transform fists and feet into deadly weapons. As an incredibly useful combat tool, this magic sees considerable use among mages of all orders.",
        "DescrizioneBreve": "give a Bashing weapon Lethal damage",
    },
    {
        "Titolo": "Modulate Frequency",
        "Arcana": "Forces •• + Fate •",
        "DescrizioneAlta": "While it’s virtually impossible to completely prevent enemies from intercepting transmissions between allies, a measure of security is often necessary when sharing information over the airwaves. By means of this spell, willworkers can speak more freely, comfortable in the increased safety of their communications.",
        "Practice": "Veiling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "By casting this spell on audio and/or video-transmitting devices — or without them, if all of the mages involved are capable of using magic to transmit and receive such signals — a willworker can cause all transmissions to modulate frequency randomly but consistently. In other words: all transmitters, whether devices or spells, within the desired “network” modulate frequency at precisely the same rate, making it extremely difficult for an outsider to spy on the exchange.",
        "RoteName": "Adamantine Arrow Rote: Elusive Transmission",
        "RoteDice": "Dice Pool: Wits + Science + Forces",
        "RoteDescrizione": "In 1974, an Arrow calling himself Arclight developed this rote as a better means of coordinating between strike teams. Modern Arrows have taken his work and expanded upon it, enabling secure transmissions with cell phones, video equipment, and words spoken into the wind by mages who can hijack radio waves for personal communication.",
        "DescrizioneBreve": "create secure network of devices",
    },
    {
        "Titolo": "Modulate Speech",
        "Arcana": "Fate • + Forces ••",
        "DescrizioneAlta": "A leader’s ability to communicate successfully is dependent upon many factors, not the least of which is her ability to use her voice to the greatest advantage in the pursuit of conveying intent. A mousy, timid voice does little to inspire — even when making a grand, stirring speech — while a low, rasping tone might incite a reflexive sense of trepidation, even when one wishes to offer comfort. Even a clear, resounding voice can benefit from a little careful manipulation, subtly downplaying or even phasing out all the little vocal imperfections people take for granted, leaving words too powerful and compelling to be denied. With this magic, a passable speaker can sound like a good one or even a great one, and a great speaker can move others to heights and depths of passion reserved for the most legendary of orators.",
        "Practice": "Ruling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "For each success accrued in the casting of this spell, the mage may add a bonus die to all her nonmagical rolls involving speech, whether trying to sway a crowd with her moving words, to threaten a stubborn Seer of the Throne into backing down, or to whisper at just the right pitch so as to be clearly heard by her companion and not at all by the guard standing six feet away. Forces takes all the auditory flaws out of the character’s speech, allowing her to gain precisely the vocal quality she desires, while Fate takes care of any small variables: the mage finishes (or, if it is most advantageous, starts) speaking just before the car blaring loud music drives by outside, or she happens to stop right where the acoustics in the Consilium’s meeting space are most favorable before delivering her scathing invective toward the Hierarch.",
        "RoteName": "Silver Ladder Rote: Words of Grandeur",
        "RoteDice": "Dice Pool: Manipulation + Expression + Forces",
        "RoteDescrizione": "The ability to express oneself accurately is, in many cases, requisite to strong, stable leadership. A théarch who cannot convey her points in a manner that motivates others to follow her finds her ability to guide and direct other Awakened failing when she most needs them; allies are not roused to her causes, and rivals and enemies exploit the shortcomings in her delivery. Thus this magic is used to bestow upon such willworkers — from the most shy and retiring to the most socially adept — a helpful edge.",
        "DescrizioneBreve": "control own speech patterns and volume",
    },
    {
        "Titolo": "Nullify Combustion",
        "Arcana": "Forces •• + Death ••",
        "DescrizioneAlta": "Fire has been an instrument of battle for nearly as long as people have engaged in organized conflict. It is said by some that ancient Atlantis itself made use of great mystic siege engines, churning out hellish flames and spewing them upon the forces of enemy nations. Thus, it is unsurprising that magics have been developed to quell such flames before ever they’re ignited.",
        "Practice": "Ruling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert (but potentially subject to Disbelief if witnessed by Sleepers)",
        "Cost": "None",
        "DescrizioneMiddle": "Within this spell’s area of effect, the process of combustion simply cannot be initiated. Bullets cannot be fired, cars do not start and matches will not light. Magics that create combustion subtract the Potency of this spell from their casting rolls, to a minimum of zero. Note that a magically enhanced gun or car, for instance, employs ordinary (non-magical) combustion, unless specifically noted otherwise. Any ongoing process of combustion that enters the spell’s area of effect continues as normal (so a torch wouldn’t go out and a car wouldn’t stall out) — only the initiation of the process is suppressed.<p>With Forces 3, the mage can also cause existing sources of combustion to die out. In the case of magical effects, this spell’s Potency is subtracted from the Potency of the effect in question. If the combustion effect is reduced to zero Potency, the source goes out.</p>",
        "RoteName": "Adamantine Arrow Rote: Thwarting Prometheus",
        "RoteDice": "Dice Pool: Presence + Occult or Science + Forces",
        "RoteDescrizione": "A wandering Arrow calling himself Gregory Saint — a devout adherent of the way of the sword — developed this rote in the mid-1950s, to rob gunfighters of the advantage of what he called their “coward’s toys.” The sentiment wasn’t particularly popular in many quarters of the order, but the rote definitely was and came into use for a wide variety of purposes, only one of which is denying an enemy recourse to the use of firearms.",
        "DescrizioneBreve": "prevent or kill combustion in action",
    },
    {
        "Titolo": "Spare Sleepers",
        "Arcana": "Forces ••, Space •, Prime •",
        "DescrizioneAlta": "The mage can fire (or throw or loose) ranged weapon attacks that will strike only mages and other supernatural beings. He can sweep a fully automatic weapon through a crowd without fear of hitting Sleepers, blindly loose arrows or throw knives, or use the spell to guarantee that he isn’t hitting a supernatural target’s Sleeper double, or a Sleeper that he mistakenly thinks is a supernatural being.",
        "Practice": "Ruling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Prime and Space lock on to the auras of everyone in range; Forces turns bullets and other projectiles away from targets the spell “tags” as Sleepers. The spell doesn’t directly reveal who is and isn’t a Sleeper, but an observant mage who sees projectiles tumble away from certain targets will be able to figure it out.<p>The mage must accept a penalty based on the maximum area of effect in which the spell will function. There are also a number of ways to fool the spell. A supernatural target who suppresses his aura or masks it as a Sleeper’s will not be struck by projectiles fired under the influence of the spell. Sleepers with altered auras may not be able to take advantage of the spell’s protection.</p>",
        "RoteName": "Banisher Rote: Take the Shot",
        "RoteDice": "Dice Pool: Composure + Firearms + Forces",
        "RoteDescrizione": "Rumor has it that this spell was originally developed by a former police sniper. The inventor’s name has been lost, but gun-toting Banishers have passed it around amongst themselves ever since. Thanks to this spell, a Banisher almost never needs to worry about shooting the wrong person — by Banisher standards, at least.",
        "DescrizioneBreve": "use ranged weapons without hitting Sleepers",
    },
    {
        "Titolo": "Telekinetic Push",
        "Arcana": "Forces ••",
        "DescrizioneAlta": "Sometimes a mage needs to make her point magically, but without causing any real bodily harm. In such instances, the power to gesture or nod and toss an opponent backwards is useful.",
        "Practice": "Ruling",
        "Action": "Instant",
        "Duration": "Lasting",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "If the player succeeds on the casting roll, the target suffers a Knockdown effect (see p. 168 of the <b>World of Darkness Rulebook</b>). The target still gets the reflexive Dexterity + Athletics roll to keep his feet, but subtracts the spell’s Potency from the dice pool.",
        "RoteName": "Adamantine Arrow Rote: Step Off",
        "RoteDice": "Dice Pool: Presence + Intimidation + Forces",
        "RoteDescrizione": "While mages of the Arrow are generally quite capable of knocking their foes down through conventional means, there’s something undeniably scary about doing it through sheer magical force.",
        "DescrizioneBreve": "push results in knockdown; target rolls Dex+Athletics-Potency to stay up",
    },
    {
        "Titolo": "Transmission",
        "Arcana": "Forces ••",
        "DescrizioneAlta": "The mage can hijack an extant radio signal, transmitting her own words on it and replacing the original transmission.",
        "Practice": "Ruling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "While this spell gives the caster the ability to replace one signal with another, it doesn’t convey the skill or talent needed to fake a specific transmission. That requires Skills appropriate to the transmission, which could be Expression, Subterfuge, and even Science. The Storyteller decides what roll needs to be made to devise a convincing transmission. For example, faking a radio transmission by a well-known radio shock-jock would require the ability to mimic that DJ’s voice, which might be Intelligence + Expression, assuming the speaker’s voice isn’t too unlike the person’s mimicked.",
        "RoteName": "Mysterium Rote: Voices in the Ether",
        "RoteDice": "Dice Pool: Manipulation + Expression + Forces",
        "RoteDescrizione": "Good for sending police on wild-goose chases and creating scares about Martian invasions, among many other uses, this Mysterium rote is also quite popular with Guardians of the Veil, who cherish its potential for misdirection.",
        "DescrizioneBreve": "alter radio exchanges",
    },
    {
        "Titolo": "Unseen Shield",
        "Arcana": "Forces ••",
        "DescrizioneAlta": "Through the use of this spell, the mage deflects incoming attacks with an energy shield, dispersing their force along its invisible contours and causing a punch to land harmlessly. Kinetic attacks (like fists and bullets) are as surely turned aside as energy-based ones (like a gout of flame or a laser), their momentum stolen or power leeched away.",
        "Practice": "Shielding",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "1 Mana (optional)",
        "DescrizioneMiddle": "The mage gains one point of armor per dot he possesses in the Forces Arcanum. By spending one Mana, the Duration can be made to last for one day. Most mages cast such a shielding spell at the beginning of the day as part of their morning rituals. Successes are used to combat attempts to dispel the shield.<p>Note that this magical armor does not apply against an opponent’s attempts to achieve a grappling hold on the mage (the Fate, Mind, Space and Time Arcana provide shielding spells to do that). Nor does it apply against a grappling opponent’s attempts to overpower the mage. The spell does, however, protect against attempts to inflict damage upon the caster (subtract the armor points from any overpower roll that intends to damage the mage or attack him with a drawn weapon).</p><p>In addition, the mage gains +1 die per Forces dot on rolls to resist being knocked down from applications of kinetic force, such as a hurtling wrestler or a stiff wind along a canyon edge (including attacks that cause the knockdown effect; see p. 168 of the <b>World of Darkness Rulebook</b>).</p>",
        "RoteName": "Free Council Rote: Force Field",
        "RoteDice": "Dice Pool: Stamina + Occult or Science + Forces",
        "RoteDescrizione": "This Free Council rote generates a weave of simple energies designed to blunt any incoming attack. Adamantine Arrow willworkers use a similar rote to guard against such assaults.",
        "DescrizioneBreve": "Shielding",
    }
]

const forceThreeData = [
    {
        "Titolo": "Autonomous Servant",
        "Arcana": "Forces ••• + Mind • or •••••; optional Space ••",
        "DescrizioneAlta": "The mage can have a spell perform an extended-action task for him while he goes about his own business. He might have it cook him dinner while he watches TV, or lift buckets of water while he reads a book.",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Concentration",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "Forces 3 allows for the accomplishment of one physical extended-action task through telekinesis (instant actions, such as fighting, are not possible). Successes are allocated to the telekinetic force’s Strength or Dexterity, as per the “Telekinesis” spell, p. 170. The caster must concentrate for the length of the task. If he is attacked or surprised, a Resolve + Composure roll must be made for him to maintain concentration. If concentration is lost before the extended action’s target number is reached, the spell can be recast but all accumulated successes are lost; the spell must start from scratch.</p><p>Mind allows the mage to devote part of his own brainpower to guiding the task, while he is able to perform a separate mental (not physical) action himself. He multitasks, as with the “One Mind, Two Thoughts” spell (p. 206). Since he presides over the telekinetic operation, which does all the actual work, it is considered a mental task rather than physical one.</p><p>The spell’s telekinetic force performs the extended-action task, guided by a portion of the mage’s own mind that is invested into the chore being performed. The dice pool is equal to the telekinesis’ spell’s assigned Attribute plus the mage’s own Skill. A heavy-lifting task might require Strength + Athletics, cooking dinner or writing one’s memoirs might need Dexterity + Athletics or Crafts, and picking a lock might be Dexterity + Larceny.</p><p>With Mind 5, the mage can create a separate mind for the telekinetic force that can guide itself without his further involvement. He allocates successes between Strength, Dexterity and whatever Physical Skill is needed for the task (it doesn’t use the mage’s own Skills, it has only those Skill dots that are allocated to it with spellcasting successes). If Space 2 is included, the Autonomous Servant can perform its task well away from the eyes and ears of the mage. For instance, he can get it to pick the lock to the wealthy financier’s home while he chats up that financier at a gala ball across town.</p>",
        "RoteName": "Mysterium Rote: Indispensable Aide",
        "RoteDice": "Dice Pool: Intelligence + Investigation + Forces",
        "RoteDescrizione": "Mysterium mages are stereotyped as being too buried in their books to attend to mundane matters, such as shaving, cleaning or even dressing properly. This rote’s popularity among mages of that order does little to break the stereotype, although it does allow a bookworm mage to at least dust his library before visitors arrive without losing valuable study time.",
        "DescrizioneBreve": "telekenetic assistant",
    },
    {
        "Titolo": "Bestow Unseen Shield",
        "Arcana": "Forces •••",
        "DescrizioneAlta": "The mage casts a protective ward upon others. As with the Forces 2 'Unseen Shield' spell, p. 167.",
        "Practice": "Shielding",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "1 Mana (optional; extends Duration to 24 hours)",
        "RoteName": "Free Council Rote: Force Shield",
        "RoteDice": "Dice Pool: Intelligence + Occult or Science + Forces",
        "RoteDescrizione": "This rote is usually cast upon an area, creating a barrier with which attacks and objects must contend. Free Council mages often cast this rote with strange devices, while Mysterium willworkers usually invoke its power through more traditional means (Resolve + Occult + Forces).",
        "DescrizioneBreve": "grant Shielding",
    },
    {
        "Titolo": "Call Lightning",
        "Arcana": "Forces •••",
        "DescrizioneAlta": "The mage calls down lightning from a stormy sky to strike a target of his choice. He cannot conjure lightning from nothing (at least, not at this level). He can bring down lightning only from a pre-existing storm or a storm he causes through the 'Change Weather' spell, p. 172.",
        "Practice": "Weaving",
        "Action": "Instant and aimed",
        "Duration": "Lasting",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "The mage does not directly attack a person or object with this spell; he instead calls and directs a bolt of lightning toward the target of his choice. The bolt inflicts three points of bashing damage plus one per success (two successes therefore inflict five points of bashing damage). The target must be somewhere that lightning could reasonably strike.<p>Successive uses of this spell within the same scene against the same target (or even other nearby targets) might be considered Improbable by Sleeper witnesses (see “Improbable Magic,” p. 112). A third strike (and each successive strike thereafter) in the same turn is vulgar.</p>",
        "RoteName": "Guardians of the Veil Rote: Lightning Rod",
        "RoteDice": "Dice Pool: Dexterity + Athletics + Forces",
        "RoteDescrizione": "Sometimes the best way to silence a witness to the Mysteries is to let nature take its course — with a little bit of guidance. The Guardians use this rote as a last resort, but it’s still easier to explain away to the authorities than most direct forms of magical assault.",
        "DescrizioneBreve": "pull lightning from cloudy sky",
    },
    {
        "Titolo": "Complex Transmission",
        "Arcana": "Forces •••",
        "DescrizioneAlta": "Similar to Transmission (see <b>Mage: The Awakening</b>, p. 167), except the mage can send a complex audiovisual transmission.",
        "Practice": "Ruling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "RoteName": "Free Council Rote: MTV",
        "RoteDice": "Dice Pool: Manipulation + Science + Forces",
        "RoteDescrizione": "It’s short for 'Mage Television,' and Libertines like to claim they came up with the abbreviation first. In addition to the joys of pirate video broadcasting, this rote is useful for messing with live video feeds from closed circuit TV cameras and the like.",
        "DescrizioneBreve": "alter complicated signals",
    },
    {
        "Titolo": "Control Electricity",
        "Arcana": "Forces •••",
        "DescrizioneAlta": "The mage can diminish an electrical current and/or alter its direction of flow. He could cut the power to a certain outlet, redirect all the electricity in the building to a single outlet, or send the power coursing through one outlet to multiple outlets (assuming the physical wiring exists or there is some other way to control conductivity). He cannot increase the current at this level, since that involves generating new electricity. He can work with only existing electricity at this level.",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Each success can send a single line of power in a new direction, or divert it elsewhere. If the mage attempts to diminish the power, each success brings it down by one degree. For example, one success reduces a main line to a junction box. Two successes takes a junction box down to an industrial socket. Three successes reduces an industrial socket to a regular wall socket.",
        "RoteName": "Mysterium Rote: Switchbox",
        "RoteDice": "Dice Pool: Wits + Science + Forces",
        "RoteDescrizione": "Mysterium mages are accustomed to having to disable security systems when they need to acquire something that just can’t be bought with money. This rote allows them to disable power to a system without shutting down the entire line (and possibly alerting someone to trouble when all goes dark).",
        "DescrizioneBreve": "change direction of current or diminish flow",
    },
    {
        "Titolo": "Control Fire",
        "Arcana": "Forces •••",
        "DescrizioneAlta": "The mage can fuel an existing fire, increasing its size and intensity. Likewise, he can deprive an existing fire of fuel, dampening or even extinguishing it.",
        "Practice": "Weaving or Fraying",
        "Action": "Instant",
        "Duration": "Transitory (one turn for fueling a fire) or lasting (extinguishing a fire)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "When fueling a fire, successes are allocated between size and heat, with each success either doubling the fire’s size or adding one point to its heat damage. See “Fire” on p. 180 of the <b>World of Darkness Rulebook</b>.<p>When dampening a fire, each success subtracts one from the damage it delivers. Once it has no more damage rating, it is extinguished. For example, a torch delivers two points of damage (one from size, the other from heat). One success diminishes that to one point of damage, while two successes extinguish it completely. Extinguishing a fire is lasting (the fire doesn’t re-ignite when the spell expires).</p>",
        "RoteName": "Free Council Rote: Dry Water",
        "RoteDice": "Dice Pool: Presence + Occult or Science + Forces",
        "RoteDescrizione": "It is not unknown for Free Council mages to accidentally start fires in their laboratories. This rote helps put them out before they can destroy hours of work.",
        "DescrizioneBreve": "increase or decrease intensity of fire",
    },
    {
        "Titolo": "Curse of Electrical Rebellion",
        "Arcana": "Forces •••",
        "DescrizioneAlta": "The mage creates a cursed item that will cause electrical components to short out, malfunction and otherwise stop working in the owner’s presence. Computers, automobiles, elevators, heaters, hair dryers and cell phones comprise just part of the list of rebellious devices. Malfunctions range in seriousness from merely inconvenient to life-threatening.",
        "Practice": "Weaving",
        "Action": "Extended",
        "Duration": "Prolonged (this spell uses the advanced prolongation factors)",
        "Aspect": "Covert",
        "Cost": "Variable; see below",
        "DescrizioneMiddle": "The mage must add five to the target number per point of Mana spent. Whenever the item’s owner is in proximity to a functioning electronic device, and there is some chance that its malfunction might harm him, or seriously hamper his pursuit of his current goals, the Storyteller rolls a die pool equal to the Mana spent on this spell during item creation. On a success, the device malfunctions. On an exceptional success, the device’s malfunction threatens the owner’s life. (Bystanders may suffer collateral damage.) A one-die bonus accrues if the item owner is acting against the interests of the order the creating mage belonged to at the time of the item’s enchantment.",
        "RoteName": "Free Council Rote: Fatal Error",
        "RoteDice": "Dice Pool: Intelligence + Crafts + Forces",
        "RoteDescrizione": "Free Council technophiles enjoy bringing down their opponents with items that opportunistically monkey wrench their gear.",
        "DescrizioneBreve": "item crafting, curse",
    },
    {
        "Titolo": "Cutting Scream",
        "Arcana": "Forces •••",
        "DescrizioneAlta": "The mage focuses the sound of his voice to damage and deafen a single opponent within range of touch.",
        "Practice": "Fraying",
        "Action": "Instant and aimed",
        "Duration": "Lasting",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "Each success on the casting roll inflicts one point of bashing Health damage. With force 4, damage dealt may be improved to lethal, or by spending one Mana with Forces 5, damage dealt may be improved to aggravated. This spell is treated as a ranged attack, fired at melee range, allowing the target their normal Defense. The volume of the sonic attack is loud enough to temporarily deafen opponents. For each point of damage taken, the target is deafened for one turn, but is allowed a reflexive Stamina check to reduce the number of turns deafened by one per success. Deafened mages gain no bonus to spell casting from chanting in High Speech.",
        "RoteName": "Adamantine Arrow Rote: Battle Cry",
        "RoteDice": "Dice Pool: Stamina + Expression + Forces",
        "RoteDescrizione": "Arrows who prefer to get up close and personal in combat favor this rote. The close range blast of sound is difficult to avoid and deals satisfactory damage. The secondary deafening effect is also useful in reducing the ability of multiple opponents to coordinate their attacks.",
        "DescrizioneBreve": "deal damage and cause deafness with voice",
    },
    {
        "Titolo": "Empowered Voice",
        "Arcana": "Forces •••",
        "DescrizioneAlta": "There’s a time for words, and a time for action. With this spell, a mage can move from one scenario to the other instantly, as her voice is transformed from a tool of communication into a potent weapon. A single syllable uttered by the mage is magically amplified, creating a thunderous shockwave to sweep aside any who would stand in her way.",
        "Practice": "Weaving",
        "Action": "Instant and contested",
        "Duration": "Transitory",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "The mage utters any brief word or syllable, which instantly becomes a deafening thunderclap. Anyone within the affected area, a one-yard radius centered on the mage, is subject to a Knockdown effect: they must roll Dexterity + Athletics to remain on their feet. Characters knocked to the ground lose their next action as they regain their footing. Dramatic failure indicates that the victim takes a hard fall and suffers a point of bashing damage as well. The mage may use the spell’s extra successes to contest the targets’ Knockdown rolls, or may use them to extend the area of effect, with each extra success doubling the area (a two-yard radius with two successes, a four-yard radius with three successes and so on). She must apply that choice to all targets, though: her success either makes the sound louder, or makes it travel farther.",
        "RoteName": "Adamantine Arrow Rote: Thunderword",
        "RoteDice": "Dice Pool: Presence + Athletics + Forces",
        "RoteDescrizione": "“Speak loudly and carry a big stick” is a philosophy many Arrow mages can relate to. Knowing this rote allows the voice to become the stick... or at least buy some time for the mage to bring a bigger stick to bear.",
        "DescrizioneBreve": "knockdown opponents with a shouted syllable",
    },
    {
        "Titolo": "Floating Step",
        "Arcana": "Forces •••",
        "DescrizioneAlta": "This spell manipulates wind currents and kinetic energy around the mage to improve her balance and jumping ability, all while reducing her effective weight.",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Prolonged (1 scene)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "Once cast, the spell provides the 8 again advantage to Dexterity + Athletics rolls to maintain balance, making it easy for a well-trained mage to run across tightropes or jump from one narrow post to another. The mage also adds her Forces dots in feet for every success scored whenever she succeeds at a Strength + Athletics roll. For example, if she scores 4 successes to make a standing broad jump and has Forces 3, she jumps 20 feet (2 per success as usual, + 3 per success using the spell).",
        "RoteName": "Adamantine Arrows Rote: Karumijutsu",
        "RoteDice": "Dice Pool: Resolve + Athletics + Forces",
        "RoteDescrizione": "The “body lightening art” gives practitioners the ability to leap incredible distances and balance on the most precarious surfaces.",
        "DescrizioneBreve": "maintain balance, leap prodigious distances",
    },
    {
        "Titolo": "Instill Shock",
        "Arcana": "Forces •••",
        "DescrizioneAlta": "The mage weaves a protective measure into an electronic device or other device capable of holding a significant charge of electrical energy. Unauthorized individuals touching the device receive a powerful shock.",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Prolonged (this spell uses the advanced prolongation factors)",
        "Aspect": "Covert",
        "Cost": "1 – 3 Mana, at caster’s discretion",
        "DescrizioneMiddle": "Shock victims suffer bashing damage equal to the number of Mana spent during item creation.<p>If Sleepers witness the same device delivering repeated shocks, Disbelief might come into play, unless the device is connected to a power source at the time, offering a plausible excuse for its effect.</p>",
        "RoteName": "Free Council Rote: Hands Off",
        "RoteDice": "Dice Pool: Intelligence + Crafts + Forces",
        "RoteDescrizione": "Free Council mages use this spell to protect their favorite Enchanted Items and other pieces of critical gear. For this reason, booting up a Free Councilor’s laptop without permission is unwise.",
        "DescrizioneBreve": "item crafting, defense",
    },
    {
        "Titolo": "Light Mastery",
        "Arcana": "Forces •••",
        "DescrizioneAlta": "The mage can create or extinguish light. He could cause a room to go pitch-black or light a dark cave from nothing but the tip of a glowing finger.",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "Successes determine the created light’s intensity (in a directional 30 degree arc).[TABLE1] Conversely, one success is usually enough to extinguish a light, unless it’s a light created by this spell or other magic, in which case the magic’s Potency must be exceeded by this spell.",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Successes",
                        "Intensity"
                    ],
                    [
                        "1 Success",
                        "Flashlight"
                    ],
                    [
                        "2 Successes",
                        "75-watt bulb"
                    ],
                    [
                        "3 Successes",
                        "Car headlight"
                    ],
                    [
                        "4 Successes",
                        "Floodlight"
                    ],
                    [
                        "5 Successes",
                        "Stadium light"
                    ]
                ]
            }
        ],
        "RoteName": "Mysterium Rote: Hand Torch",
        "RoteDice": "Dice Pool: Composure + Occult or Science + Forces",
        "RoteDescrizione": "This rote is a major boon to a tombcrawling Mysterium mage. Even if the batteries in his flashlight fail him, his magic can still light his way — or darken the way for his rivals.",
        "DescrizioneBreve": "create or extinguish light",
    },
    {
        "Titolo": "Optimize Kinetic Attack",
        "Arcana": "Forces •••",
        "DescrizioneAlta": "This spell channels wasted kinetic energy from a mage’s movements into the speed and force of an attack.",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Prolonged (1 scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Divide successes between the number of future attacks this spell benefits, and its primary effect, adding dice to any Brawl or Weaponry-based attack. Each success devoted to this advantage adds a die to the mage’s attack dice pool. There’s a limit: no attack can have a combined spell + weapon damage dice bonus of more than 5, or 1 higher than the weapon’s damage bonus if the mage already wields a 5 damage weapon.<p>If the mage would gain a combined bonus 1 higher than this, he instead gains the 9 again advantage. (If the weapon provides 9 again already, this becomes 8 again.) If the mage would gain a combined 3 higher than the limit, he gets the 8 again advantage — the maximum benefit the spell can provide.</p><p>For example, if Zeno casts this spell while using a sword that inflicts 2 damage and scores 4 successes, the sword + spell adds 5 dice to the attack, which benefits from the 9 again advantage. If Zeno had cast the spell to augment an unarmed attack it would add 4 dice.</p><p>This spell can’t enhance ranged attacks of any kind.</p>",
        "RoteName": "Adamantine Arrows Rote: Arashi Waza",
        "RoteDice": "Dice Pool: Wits + Brawl + Forces",
        "RoteDescrizione": "A master of the “storm technique” sees the chaotic currents of the wind reflected in his physical movements. He uses his mind and body to smooth the frayed lines of motion in his movement without sacrificing raw power.",
        "DescrizioneBreve": "gain bonus to future attack, up to weapon bonus",
    },
    {
        "Titolo": "Personal Invisibility",
        "Arcana": "Forces •••",
        "DescrizioneAlta": "The mage can turn herself invisible. As with the Forces 2 “Invisible Object” spell, p. 166, but cast upon herself. Cast in combination with “Sound Mastery,” p. 170, the mage can be invisible and completely silent. She must maintain concentration as an instant action to remain unseen.",
        "Practice": "Veiling",
        "Action": "Instant",
        "Duration": "Concentration",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "One success is enough to hide the mage from sight, while excess successes act to occlude her from spells used to see or locate her (compare spell Potencies). Although the mage’s physical form is invisible, her aura can still be seen by those with the ability to perceive auras (Mind 1 “Aura Perception,” p. 205, or Prime 1 “Supernal Vision,” p. 221). Also, while the mage is invisible to a vampire’s heightened senses from the Auspex Discipline, the vampire might still sense the mage’s presence through his heightened smell or hearing.</p><p>She must maintain concentration as an instant action (which means she cannot cast other spells while maintaining invisibility). She also cannot make quick movements (she can’t move more than half her Speed), or gain her Defense while concentrating. If she does either, she can be seen as a prominent blur or refraction of light, allowing others to freely target her (as if she were barely concealed, with a –1 dice penalty) on the turn in which she moves and before she acts again on the following turn.</p><p>Others can try to pinpoint an invisible person through hearing or smell (assuming they have advanced olfactory senses). See the rules for “Fighting Blind,” pp. 166-167 of the <b>World of Darkness Rulebook</b>.</p>",
        "RoteName": "Guardians of the Veil Rote: Cloak of Rain",
        "RoteDice": "Dice Pool: Wits + Stealth + Forces",
        "RoteDescrizione": "A Guardian could ask for few finer rotes when about the business of her order, whether tailing a troublesome Sleeper, gathering intelligence on a potential problem site, or preparing to eliminate a threat to the secrecy of the Mysteries. The Guardian could be the proverbial “fly on the wall” watching an event unfold, unseen and unnoticed, save by ill luck (if someone blunders into her) or mystic senses. Mages of all orders make use of this magic given its broad utility.",
        "DescrizioneBreve": "become invisible while concentrating",
    },
    {
        "Titolo": "Sorcerer's Retribution",
        "Arcana": "Song: Angels of Malice) (Forces •••, Prime ••",
        "DescrizioneAlta": "This spell creates a matrix of kinetic and magical energy around the caster that’s sensitive to invading magic. This whirling shard of bound force orbits him, avoiding nearby objects and leaving nothing other than a slight breeze to indicate its existence. When anyone casts a damaging spell on the caster the matrix lashes out, intercepting the intrusion and following it back to strike the source.",
        "Practice": "Shielding",
        "Action": "Fraying/Shielding",
        "Duration": "Prolonged (1 scene, but see below)",
        "Aspect": "Vulgar",
        "Cost": "Special",
        "DescrizioneMiddle": "Once cast, this spell acts like the spell “Magic Shield,” providing 1 point of armor per dot of the caster’s Prime Arcanum. In addition, the spell strikes the source of the magical attack with a bolt of kinetic energy, inflicting 1 point of bashing damage per success. However, the same energy that shields the mage is used in the attack, like a sort of “point defense” against the spell that blows through to hit the enemy caster as well. Reduce the number of successes calculated for the attack by the armor rating provided by the spell. For example, if the caster scores 8 successes and has Prime 3, the counterattack is only treated as if it had 5 successes. The caster may voluntarily reduce the armor protection granted by the spell to increase its counteroffensive ability. The counterattack does not use one of the caster’s actions. If the spell came from an artifact or imbued item, the kinetic energy strikes that instead.<p>By spending 1 Mana, the caster can make the spell last 1 day. However, once the spell delivers its counterattack it is expended, whether the caster spent Mana or not. It must be cast again.</p>",
        "RoteName": "Free Council Rote: Angels of Malice",
        "RoteDice": "Dice Pool: Presence + Expression + Forces",
        "RoteDescrizione": "Hellson designed this rote to strike down sorcerers who would dare attack him. He visualizes his voice coalescing into a serpent-shaped coil of energy, lying in wait against magical assault.",
        "DescrizioneBreve": "protect self against spells and lash out at attacker",
    },
    {
        "Titolo": "Sound Mastery",
        "Arcana": "Forces •••",
        "DescrizioneAlta": "The mage creates sounds or silences them. He could, for example, create the sound of a police siren or render absolutely silent the footfalls of a stealthy intruder. He can also record sounds, storing them magically for later playback.",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Concentration (unique sounds) or prolonged (repetitive sounds)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "Successes determine the sound’s volume.[TABLE1]<p>The range of sounds the mage creates depends on his ingenuity and capability. A reflexive roll of Wits + Expression (for voices) or Animal Ken (for animal cries) or Science (for devices) might be required. An instant and contested Intelligence + Investigation roll can be made for any listener who doubts his ears to realize the sound is fake (it’s a real sound, but not a real lion). The Duration for creating sounds is one scene, although if the sound is sufficiently repetitive it could last for up to a scene (or longer with extra prolonged Duration factors) without needing the mage’s concentration.<p>Conversely, one success is usually enough to completely silence a one yard radius around a targeted spot (successes can be allocated to Target factors to silence a larger area; see p. 117). A sound created by this spell or other magic within the zone of silence must contest with the silencing spell’s Potency for its sound to be heard.</p><p>A separate casting of this spell allows a mage to record sounds that occur around her and store them as bits of magical energy. For the following hour, she can choose to turn on her magical recorder as an instant action, although she can turn it off reflexively. She then “locks off” one of her Mana points, using it to store the sounds. She cannot spend that point without losing its stored recording. She can play them back for herself at any time using the “Read Matrices” spell, p. 163, or she can play them for anyone to hear (and record with a mundane recording device, perhaps for posterity) by spending the locked Mana, after which the recording is lost. (Unless she has Prime 3, allowing her to distill the Mana into tass, and so store it physically.)</p>",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Successes",
                        "Intensity"
                    ],
                    [
                        "1 Success",
                        "Casual talk"
                    ],
                    [
                        "2 Successes",
                        "Scream"
                    ],
                    [
                        "3 Successes",
                        "Electric guitar"
                    ],
                    [
                        "4 Successes",
                        "Gunshot"
                    ],
                    [
                        "5 Successes",
                        "Industrial factory"
                    ]
                ]
            }
        ],
        "RoteName": "Guardians of the Veil Rote: Ventriloquist’s Art",
        "RoteDice": "Dice Pool: Resolve + Occult or Science + Forces",
        "RoteDescrizione": "Guardians armed with this rote can distract Sleeper interlopers with all manner of sounds, or quiet their own noises should a Sleeper approach.",
        "DescrizioneBreve": "alter qualities and direction of sound",
    },
    {
        "Titolo": "Stay the Invisible Fires",
        "Arcana": "Forces •••",
        "DescrizioneAlta": "The mage creates an invisible shield against radiation. For the Duration, the mage is immune to the effects of harmful radiation and does not become irradiated, although other side effects can cause harm. So the mage could handle plutonium with bare hands without risk, but couldn’t resist the heat of a nuclear reactor (and would want to be careful to wash off any radioactive materials before the Duration ended or before coming into contact with anyone else).",
        "Practice": "Shielding",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "1 Mana (optional; extends Duration to 24 hours)",
        "RoteName": "Free Council Rote: Radiation Shield",
        "RoteDice": "Dice Pool: Strength + Science + Forces",
        "RoteDescrizione": "A Libertine’s work often involves going to dangerous places and handling dangerous materials, and this techné helps to ensure such things are a bit less dangerous.",
        "DescrizioneBreve": "gain armor against radiation",
    },
    {
        "Titolo": "Summon Supernal Being",
        "Arcana": "Any Arcanum •••",
        "Practice": "Weaving",
        "Action": "Extended",
        "Duration": "Special",
        "Aspect": "Covert",
        "Cost": "10 Mana",
        "DescrizioneMiddle": "The mage must fashion a summoning circle, usually sing runes and High Speech glyphs appropriate not only to the Arcanum he is using, but to the intended purpose of the summoning. The process and form of the ritual is different for each realm, and is discussed in detail under the appropriate realm sections. <p>Before beginning the ritual, the player must decide upon how many successes the mage will attempt to accrue. The formula is as follows: </p>The mage needs 10 successes to open the gateway. Every additional success has one of the following effects: <ul><li>Extend the duration in which the being can remain in the Fallen World without suffering damage. Each success adds 30 minutes. If the mage allocates no successes to this duration, the being begins taking damage immediately.</li><li>Protect the gateway from Abyssal intrusion. Every success thus allocated allows the player to make one additional roll without the Storyteller checking for the Abyss creeping into the gateway. </li></ul>In addition, the following factors add to the necessary total: </ul><li>Add one success per Sleeper present. In addition, a Sleeper’s presence renders the spell improbable. </li><li>Add one success per mage of a different Path present. </li><li>Add one success if the summoning is taking place in a Demesne oriented to a realm other than the one in question. </li><li>Add one success if the mage has caused a Paradox (even if he contained it) within the last week.</li><li>Add one success if the mage is AbyssMarked (see p. 71). </li><li>Subtract one success from the target if the summoning is taking place in a Demesne oriented to the realm in question. </li><li>Subtract successes if the character incorporates items and conditions into the summoning that correspond to the realm in question. The sections on the different realms later in this chapter list sample correspondences, but the character must still weave these correspondences into the spell gracefully enough to ease the casting. The Storyteller can either adjudicate the number of successes shaved off the total based on the player’s descriptions of his character’s actions, or the player can roll Intelligence + Occult. Every two successes on this roll removes one success from the target number of the summoning spell. </li></ul> <p>Once the player has determined the target number of successes and how they will be allocated, he can start rolling. The amount of time required for each roll is, of course, determined by the mage’s Gnosis rating (see p. 76 of <b>Mage: The Awakening</b>). The player is not limited in the number of rolls he can make, but fatigue will eventually begin to set in. A greater danger, though, is Abyssal intrusion. </p>The player can make a number of rolls equal to the character’s Resolve + Composure + any successes allocated to avoid Abyssal intrusion. After that point, the Storyteller rolls the character’s unmodified Gnosis for every roll that the character makes. If the Storyteller accrues a number of successes equal to the mage’s Gnosis + [ruling Arcanum used to cast the spell], the Abyss breaks into the gateway, and the creature that arrives is not a Supernal being but an Abyssal one. The Storyteller should by no means reveal how many successes she gets on the intrusion rolls. The Abyssal being that arrives might impersonate a Supernal one, at least for a while. More information on Abyssal summoning and the creatures resulting from them can be found in Chapter Three. <p><b>Example:</b> Whim, an Acanthus of the Mysterium, decides to call down a recondite being from Arcadia as part of her ongoing quest to unravel the nature of the Fallen World. She is a Master of Fate, so she is more than qualified to cast the spell. Her Gnosis is 3, so every roll requires one hour. She requires 14 successes to start — 10 (base) + 3 (three of her cabal mates are present) + 1 (she caused a Paradox within the last week). Her player decides to add in three more successes. Two are allocated two duration (if she is successful, the being will be able to survive in the Fallen World for an hour without taking damage) and one is allocated to stave off Abyssal intrusion. Her Resolve + Composure is 5, so with the success she has allocated, her player can make six rolls before Abyssal intrusion becomes a problem. </p><p>If she fails to accumulate 17 successes in six rolls (which is a distinct possibility), the Storyteller rolls Whim’s Gnosis rating for every roll beginning with the seventh. If the Storyteller accumulates eight successes (Whim’s Gnosis + Fate) before her player finishes accumulating the 17 needed for the spell, an Abyssal entity intrudes. </p><p><b>Concluding the spell:</b> Once the Supernal being has returned “home,” the mage needs to channel the magic he used to work the summoning into something else. Leaving the spell “open” is dangerous, because if he does so, sooner or later the Abyss will seep in. The spell can be closed easily enough — the mage simply needs to choose what spell to cast. The player makes the appropriate roll, the spell occurs, and the gateway closes. </p><p>If the spell rolls fails, though, or if the Supernal being dies from exposure to the Fallen World or is deliberately destroyed outside the summoning circle, the gateway collapses. This creates a temporary portal to the Abyss. Every mage within 50’ of this portal suffers a number of Health points of aggravated damage equal to the summoner’s Gnosis. In addition, the portal remains open for a number of days equal to the summoner’s Gnosis. During that time, the mage needs to watch the portal carefully, because Abyssal creatures can and do escape into the Fallen World. </p>",
        "DescrizioneBreve": "(Obrimos only) call a Seraph from the Aether, with difficulty",
    },
    {
        "Titolo": "Supernal Hack",
        "Arcana": "Forces ••• + Matter •••",
        "DescrizioneAlta": "Computer data is a unique amalgam of information stored in an Forces-based media within a Matter-based framework. Without an intuitive use of both Arcana, a mage is limited to using one sphere or the other in a brutish and possibly destructive way if he directs his Supernal attention to this delicate technology. By using both Arcana together, however, a skillful mage can manipulate, modify or delicately delete select pieces of virtual data while leaving the rest untouched.<p>Supernal Hack provides two separate effects. After casting it, an Awakened computer user can add additional dice equal to the number of dots he has in Forces to any computer-related rolls for the rest of the scene. As well, while Supernal Hack is active, any penalties inflicted by Supernal-security measures on technological devices the mage interacts with are halved.</p>",
        "Practice": "Weaving",
        "Action": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "RoteName": "Mysterium Rote: Read the Virtual Tome",
        "RoteDice": "Dice Pool: Intelligence + Computer + Forces",
        "RoteDescrizione": "In many ways, computers and data banks are the archives of the next age, holding untold secrets and knowledge. Just as Mind mages can use “Telepathy” to read an individual’s thoughts, mystagogues who are adept with both Matter and Forces can “read” the contents of an electronic disk or hard drive, intuitively sensing the interplay between magnetic, photonic or electronic markers and their physical components. Using a combination of the Matter and Forces Arcana in a technological version of telepathy, the mage can read computer files as if they were printed out on a monitor before them. Text document or database files are standard difficulty, reading data that has been intentionally given additional encryption may be attempted at a –1 to –3 penalty, depending on the complexity of the encryption used. Information can be read at the same rate as if it was being read in a text form.",
        "DescrizioneBreve": "gain bonus to Computer rolls",
    },
    {
        "Titolo": "Telekinesis",
        "Arcana": "Forces •••",
        "DescrizioneAlta": "The mage can telekinetically lift and/or use an object remotely.",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Concentration",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "The mage must declare before casting whether successes apply to the force’s Strength (its lifting ability) or Dexterity (its fine manipulation ability). The lesser Attribute has a default score of 1 dot. The caster can also raise either Attribute by choosing to suffer a –1 dice penalty on the spellcasting roll per dot to be raised. She could, for example, choose to put a lot of Strength and very little Dexterity into a spell intended to lift an extremely heavy object straight up (see “Lifting/Moving Objects,” pp. 47-48 of the <b>World of Darkness Rulebook</b>), or she could grant very little Strength and a lot of Dexterity to a spell cast to use a set of lock picks from a distance (roll the Telekinesis Dexterity + caster’s Larceny Skill).<p>The object cannot be moved beyond the mage’s sight (unless he uses Space 2 to scry it). The mage can move the item at a Speed per turn equal to his Gnosis + Forces.</p><p>The mage must concentrate for each turn. See “Concentration,” p. 119. With Forces 4, he can cast the spell with a default Duration of one scene (in which case, when he is not actively manipulating the object, it stays where he left it, even levitating in the air).</p>",
        "RoteName": "Silver Ladder Rote: Hand of the Mind",
        "RoteDice": "Dice Pool: Wits + Athletics or Larceny + Forces",
        "RoteDescrizione": "A leader must resort to underhanded means on occasion. A document may need to be filched or a lock picked. Likewise, displays of brute force are sometimes useful, such as when battering down a door. Silver Ladder mages use this rote for those times. Adamantine Arrow willworkers use their version of the rote (Strength + Athletics + Forces) for almost purely martial purposes, such as to toss things at their enemies.",
        "DescrizioneBreve": "move or throw objects",
    },
    {
        "Titolo": "Telekinetic Strike",
        "Arcana": "Forces •••",
        "DescrizioneAlta": "The mage creates a ball of telekinetic force that he hurls at his intended target.",
        "Practice": "Fraying",
        "Action": "Instant and aimed",
        "Duration": "Lasting",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "Each success inflicts one point of bashing damage. With Forces 4, this damage can be lethal. With Forces 5, one Mana can be spent to make the damage aggravated, by tearing apart the target’s cellular structure. This version of Telekinetic Strike actually causes air to ripple in an unnatural fashion, warning a target about the threat. The target is allowed his Defense against the caster’s aiming roll.",
        "RoteName": "Adamantine Arrow Rote: Mind Arrows",
        "RoteDice": "Dice Pool: Presence + Athletics + Forces",
        "RoteDescrizione": "Unarmed and at range, an Arrow mage can attack her foes. This rote launches a telekinetic assault that can strike at a distance. Of course, other mages also make use of this rote, as one never knows when it might become necessary to take someone down at 30 paces.",
        "DescrizioneBreve": "strike a target at range",
    },
    {
        "Titolo": "Turn Projectile",
        "Arcana": "Forces •••",
        "DescrizioneAlta": "The mage can direct the course of a fast projectile.",
        "Practice": "Weaving",
        "Action": "Instant",
        "Duration": "Lasting",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "Although the casting is an instant action, the mage can cast this spell at any point in the Initiative roster, even before he could normally act, although that is his action for the turn.<p>The mage can turn the projectile up, down, right, left, or even back the way it came. The degree to which the projectile’s course is altered depends on the number of successes rolled:</p>[TABLE1]*From the perspective of the projectile<p>Mages can mix and match successes to direct a projectile’s course in multiple directions. For example, with two successes, a mage can turn an arrow 45 degrees to its left and then make it go down 45 degrees from its new course. The effect is lasting; once the projectile’s course is altered, it remains traveling along its new course until something else causes it to change vectors or it smashes into something. With a successful reflexive Dexterity + Firearms roll, the mage can aim the projectile at a target along its new trajectory.</p><p>The mage can affect multiple projectiles by adding extra Target factors.</p><p>See “Target,” p. 117. When turning autofire from the same gun, use the following special Target factors chart:</p>[TABLE2]",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Successes",
                        "Targets"
                    ],
                    [
                        "1 success",
                        "Turn in one direction by up to 45 degrees"
                    ],
                    [
                        "2 successes",
                        "Turn in one direction by up to 60 degrees"
                    ],
                    [
                        "3 successes",
                        "Turn in one direction by up to 90 degrees"
                    ],
                    [
                        "4 successes",
                        "Turn in one direction by up to 120 degrees"
                    ],
                    [
                        "5 successes",
                        "Turn in one direction by up to 180 degrees"
                    ]
                ]
            },
            {
                "Placeholder": "[TABLE2]",
                "Data": [
                    [
                        "Autofire Affected",
                        "Dice penalty"
                    ],
                    [
                        "Short burst",
                        "-2"
                    ],
                    [
                        "Medium burts",
                        "-4"
                    ],
                    [
                        "Long burst",
                        "-6"
                    ]
                ]
            }
        ],
        "RoteName": "Adamantine Arrow Rote: Arrow Storm",
        "RoteDice": "Dice Pool: Dexterity + Athletics + Forces",
        "RoteDescrizione": "The Adamantine Arrow is perhaps not surprisingly renowned for this rote, by which members turn enemies’ bullets back upon them.",
        "DescrizioneBreve": "alter the trajectory of an object reflexively",
    }
]

const forceFourData = [
    {
        "Titolo": "Bag of Winds",
        "Arcana": "Forces •••• + Fate •• + Time ••",
        "DescrizioneAlta": "Aeolus gave Odysseus a bag of winds, and if the bag didn’t work, it was because of the incompetence of the hero’s men, not the efficacy of the magic. Mages have long passed on the method of duplicating Aeolus’ result in a bag or a pocket.",
        "Practice": "Patterning",
        "Action": "Instant",
        "Duration": "Conditional (Transitory when spell is triggered)",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "This spell allows the mage to trap a current weather condition in a pocket or a bag (whether a natural weather condition, or one he has already created), to be kept for later. Fate 2 allows the spell to keep the weather safe as long as the bag is clasped shut, for a base of one scene (see the sidebar on “Conditional Duration,” <b>Mage: The Awakening</b>, p. 150). When the bag is opened, the weather floods out, covering the immediate vicinity.<p>With Forces 4, the mage can trap weather conditions that aren’t disastrous in the bag. With Forces 5, the Aeolian can trap dangerous weather, such as windstorms.</p><p>The spell only works outdoors. If the bag is opened indoors, the weather inside the bag escapes through cracks in the door or window, and affects the area immediately around the building in which the owner of the bag is standing.</p>",
        "RoteName": "Mysterium Rote: Aeolus’ Gift",
        "RoteDice": "Dice Pool: Dexterity + Science + Forces",
        "RoteDescrizione": "The Mysterium sometimes find it useful to give a bit of wind or rain to a friend, as a secret, “between you and me.” With this, it’s easy, as long as the friend isn’t tempted to take a peek inside too soon.",
        "DescrizioneBreve": "store weather for later use",
    },
    {
        "Titolo": "Bestow Invisibility",
        "Arcana": "Forces ••••",
        "DescrizioneAlta": "The mage can turn another person invisible, as he does with himself with the Forces 3 “Personal Invisibility” spell, p. 169. The target must maintain concentration to remain unseen.",
        "Practice": "Veiling",
        "Action": "Instant",
        "Duration": "Concentration",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "The target, not the mage, must concentrate to maintain the effect.",
        "RoteName": "Guardians of the Veil Rote: Unseen Army",
        "RoteDice": "Dice Pool: Manipulation + Stealth + Forces",
        "RoteDescrizione": "Guardians understand that not everyone has the capabilities required to do the work the order requires of them, but they must, nonetheless, occasionally bring such unprepared souls along for the ride. This rote helps to even the odds somewhat, enabling even the most normally conspicuous souls to move with preternatural stealth. Silver Ladder mages also make use of this rote, often to conceal a bodyguard.",
        "DescrizioneBreve": "grant invisibility to others while concentrating",
    },
    {
        "Titolo": "Burst of Speed",
        "Arcana": "Forces ••••",
        "DescrizioneAlta": "The circumstances requiring it may be rare, but every so often it happens that a mage needs to outpace a horse on foot. Sometimes it just helps to be a whole hell of a lot faster than the guy with a gun.<p>This spell makes a mage swifter than any mortal human being could be, reducing the force of forward friction (from the atmosphere and winds) to nil, while vastly amplifying forward momentum. Each stride can carry the caster effortlessly for the equivalent of seven or eight normal paces. While the mage can’t outpace a bullet, she does move faster than just about any living thing without mechanical assistance.</p>",
        "Practice": "Patterning",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "1 Mana per turn",
        "DescrizioneMiddle": "A Mana point can be spent to boost Speed for a turn. The caster can do so as many times as he wishes while the spell’s scene-long Duration is still active (assuming he has enough Mana). The mage’s Speed increases by itself again for each success on the spellcasting roll. Characters who run double this figure, as well. Assuming the spell has four successes and a mage has a Speed of 12, he has an effective speed of 48. If he runs, his Speed is 96 — almost 65 miles per hour! <p>If any Sleeper witnesses the mage running faster than a normal human, Disbelief is invoked.</p>",
        "RoteName": "Mysterium Rote: Hermes’ Sandals",
        "RoteDice": "Dice Pool: Wits + Athletics + Forces",
        "RoteDescrizione": "There is a time for negotiations, a time to hold one’s ground, and a time to get the hell out of Dodge. This Mysterium rote is magic for the last of those situations. Of course, members of the Mysterium are just as apt to use this spell to catch up with someone or something as to use it to take flight. Guardians of the Veil also occasionally use this magic when they need to intercept a threat to the secrecy of the Mysteries and don’t have time to hail a cab.",
        "DescrizioneBreve": "make yourself faster temporarily",
    },
    {
        "Titolo": "Change Weather",
        "Arcana": "Forces ••••",
        "DescrizioneAlta": "The mage alters weather patterns, bringing almost any sort of normal (non-disastrous) weather to bear on an area, given enough time and effort. (Note that a frost in late spring, while potentially very destructive to local food production, is not the same sort of thing as a tornado or typhoon, and can be created using this level of Forces.)",
        "Practice": "Patterning",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "The inertia of current weather patterns might levy dice penalties. Making threatening thunderclouds release a downpour might cause no penalty, while turning a bright summer’s day into freezing rain might cause a –3 dice penalty. It takes about five minutes after casting for the storm effects to develop.<p>Major conditions, such as hurricanes or tornadoes, require the “Adverse Weather” spell, p. 174.</p>",
        "RoteName": "Free Council Rote: Rainmaker",
        "RoteDice": "Dice Pool: Intelligence + Occult or Science + Forces",
        "RoteDescrizione": "Long has humanity tried to harness weather to its own ends. A Free Council mage with this rote can call up rain to end a drought, a bit of warmth to break a cold snap, or whatever other non-extreme condition she desires. Mysterium mages use alternate means to control these forces (Resolve + Science + Forces), but accomplish the same ends.",
        "DescrizioneBreve": "create any non-disaster level weather condition",
    },
    {
        "Titolo": "Containment",
        "Arcana": "Forces ••••",
        "DescrizioneAlta": "Mages who regularly work with ancient artifacts or experiment with explosives, advanced technologies, or unusual types of magic often risk injury or death if the device or spell suddenly reacts in some violent and unpredictable manner. This spell provides automatic protection for the mage, her laboratory, and her companions.",
        "Practice": "Shielding",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "1 Mana (optional)",
        "DescrizioneMiddle": "The mage casts this spell in an area around him self. If the mage or anyone or anything within this area is attacked either physically or with magic, the spell activates. Once activated, the spell protects everything within a small radius (see <b>Mage: The Awakening</b>, p. 118) around the mage from harm by slowing down fast-moving objects, damping fires and harmlessly grounding dangerous amounts of electricity. If the mage notices any such danger, she can reflexively spend one point of Mana. Then, for the next turn, nothing in the area can move faster than a brisk walk (Speed 10), and levels of temperature and electricity remain safe for everyone inside this area. However, this spell is only useful on small to moderate-sized threats. Even if a 20-foot-high, 10 foot-thick stone wall fell on someone fairly slowly, it would still (slowly) crush them. Also, once this turn ends, this protection instantly fades, unless the mage spends another point of Mana. The mage can continue spending Mana until she either runs out or the people inside the area cease being in immediate danger.",
        "RoteName": "Mysterium Rote: Shield the Magical Laboratory",
        "RoteDice": "Dice Pool: Wits + Craft + Forces",
        "RoteDescrizione": "Ancient magics are often even less predictable than modern explosives, and so this spell has saved the lives of more than one Mysterium experimenter who has had a rote or artifact react in a dangerous manner.",
        "DescrizioneBreve": "protect against fast movement and environmental dangers",
    },
    {
        "Titolo": "Control Velocity",
        "Arcana": "Forces ••••",
        "DescrizioneAlta": "The mage can increase or decrease the velocity of an object (but not a living creature). He could, for example, make a hurtling truck slow down, or speed up (or slow down) a bullet.",
        "Practice": "Patterning or Unraveling",
        "Action": "Instant",
        "Duration": "Transitory (one turn)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "Although the casting is an instant action, the mage can cast this spell at any point in the Initiative roster, even before he could normally act, although doing so is his action for the turn.<p>Each success doubles or halves the target object’s speed. For example, a truck going 80 mph is reduced to 40 mph with one success, 20 mph with two successes, 10 mph with three successes, 5 mph with four successes, and two-and-a-half mph with five successes. Note that the mage must be able to affect the entire target and its Size (which might be up to 30 or more for an 18 wheeler rig and tow). He can’t single out portions of it, such as slowing the velocity of a single tire and so slow the whole truck (while causing the passengers and objects inside to be thrown forward). See the rules for “Size,” p. 118.</p><p>High-speed projectiles such as arrows and bullets cannot be halted at this level. Instead, add (for increased velocity) or subtract (for decreased velocity) one point of damage per every two successes, like so:</p>[TABLE1]<p>For turning autofire from the same gun, use the following special Target factors chart:</p>[TABLE2]",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Successes",
                        "Increased Velocity",
                        "Decreased Velocity"
                    ],
                    [
                        "1 success",
                        "+1 point of damage",
                        "-1 point of damage"
                    ],
                    [
                        "2 successes",
                        "+1 point of damage",
                        "-1 point of damage"
                    ],
                    [
                        "3 successes",
                        "+2 point of damage",
                        "-2 point of damage"
                    ],
                    [
                        "4 successes",
                        "+2 point of damage",
                        "-2 point of damage"
                    ],
                    [
                        "5 successes",
                        "+3 point of damage",
                        "-3 point of damage"
                    ]
                ]
            },
            {
                "Placeholder": "[TABLE2]",
                "Data": [
                    [
                        "Autofire Affected",
                        "Dice penalty"
                    ],
                    [
                        "Short burst",
                        "-2"
                    ],
                    [
                        "Medium burts",
                        "-4"
                    ],
                    [
                        "Long burst",
                        "-6"
                    ]
                ]
            }
        ],
        "RoteName": "Free Council Rote: Speed Trap",
        "RoteDice": "Dice Pool: Intelligence + Science + Forces",
        "RoteDescrizione": "Mages of the Free Council use this rote to slow down escaping enemies or to slow down those enemies’ bullets.",
        "DescrizioneBreve": "alter the speed of an object",
    },
    {
        "Titolo": "Destroy Spirit",
        "Arcana": "Forces ••••, Prime ••••",
        "DescrizioneAlta": "Caging a creature is all well and good, but sometimes you just need to annihilate it. Designed to simultaneously attack all aspects of spirits, ghosts, and other ephemeral beings, this spell is a weapon against anything that comes from anywhere other than the flesh-and-blood world of mundane Sleepers. The raw might of the Aether is brought to bear against the target, potentially destroying all traces of the unfortunate entity.",
        "Practice": "Unraveling",
        "Action": "Instant and aimed",
        "Duration": "Lasting",
        "Aspect": "Vulgar",
        "Cost": "One point of Mana (optional for aggravated damage)",
        "DescrizioneMiddle": "The mage channels a nearly solid beam of blinding white light at the target. This brightly glowing ray almost seems to have a certain weight to it, moving with about the same velocity as a thrown projectile. Each success inflicts one point of lethal damage and removes one point of Essence from any creature that has a Corpus score. Lost points of Essence are simply destroyed. With Forces 5, the mage may spend a point of Mana to inflict aggravated damage with this spell.",
        "RoteName": "Obliteration",
        "RoteDice": "Dice Pool: Strength + Athletics + Forces",
        "RoteDescrizione": "Many of the most destructive spells created were designed in response to a looming threat. This rote was crafted as a preemptive measure by a particularly paranoid Banner Warden of the Arrow named Phosphorous. Scarred by the death of her brother at the many hands of a hideous spirit of gluttony, Phosphorous devised a means to safeguard those that could not save themselves. In the early summer of 1920, while tourists flocked to the shores of the eastern United States, the bitter Obrimos waged war against the blossoming spirits of corruption and vice that were springing up throughout the area. A number of the mages of Phosphorous’ Consilium were against these unprovoked attacks, and more than one chastised the Arrow for creating such a one-dimensional spell; what good would come of such destructive power? They soon found out when one local mystagogue got in over his head. “Dapper” Dave hadn’t intended any harm by it, but whatever it was that he dredged up from the Underworld longed only to destroy. Phosphorous answered its aggression with the fury of her magic, unleashing this brutal spell upon the creature, until it troubled the Consilium no more. After that, folks stopped criticizing the Arrow’s “one-dimensional” approach.",
        "DescrizioneBreve": "inflict lethal damage and remove essence from a Spirit",
    },
    {
        "Titolo": "Fiery Transformation",
        "Arcana": "Forces •••• + Life ••••; optional Matter ••••",
        "DescrizioneAlta": "Stories of old tell of willworkers using the power of magic to metamorphose into all manner of strange forms. Many chose to become animals or to take on the shape of other people, while some assumed more fanciful skins. With this spell, a mage transforms into a creature of living flame.",
        "Practice": "Patterning",
        "Action": "Instant",
        "Duration": "Transitory (one turn)",
        "Aspect": "Vulgar",
        "Cost": "1 Mana (optional)",
        "DescrizioneMiddle": "The spell takes effect in the turn following casting.<p>Since the mage does not transform into another form of life, she is in no danger of losing herself to an alien mindset. Instead, she becomes a being of fire. Planes of force within her new shape allow her to maintain whatever Physical Attributes she possessed before the change.</p><p>The successes rolled for this spell are rolled as dice of lethal damage against anyone or anything not somehow fireproofed that makes physical contact with the mage (including her clothes and equipment). Likewise, the mage’s hand-to-hand attacks cause lethal fire damage, to which the spell’s successes are added as an equipment bonus.</p><p>By adding Matter 4 to the casting, the mage can cause all of her normal equipment (such as clothing or, say, a knife) to change into fire with her, although they retain only simple mechanical properties. Firearms thus altered, however, do not function for the duration of the spell.</p><p>With Forces 5, the caster can spend one Mana to inflict aggravated damage with this magic.</p>",
        "RoteName": "Adamantine Arrow Rote: Wrath of the Inferno",
        "RoteDice": "Dice Pool: Stamina + Intimidation + Forces",
        "RoteDescrizione": "Arrow mages who learn this rote use it to sow fear among their enemies and to inflict horrific harm in combat. While some see the rote as needlessly flashy, few things are quite as terrifying as a warrior of living fire, carving a charred and bloody swath through the ranks of her foes. Mysterium mages, though not often renowned for martial prowess, occasionally use a version of this rote to augment what combat ability they possess.",
        "DescrizioneBreve": "become living flame",
    },
    {
        "Titolo": "Fiery Servant",
        "Arcana": "Forces •••• + Mind •••••",
        "DescrizioneAlta": "Some mages pride themselves on their leadership skills. Many have the ability to make men lay down their lives. The truly powerful, however, can make even the fire itself follow them, creating beings made of flame to do their bidding.",
        "Practice": "Making",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "The mage creates a small, intelligent being made of living flame that will do whatever the mage commands it to do. Since it’s made of flame, that’s limited to burning things. The creature, which is about the size of a rat (Size 1) and which can take on any shape the mage wants it to, does get to choose what to burn and what not to burn. Successes can be split between Potency, the Size of the creature (one success adds one to Size) and the heat of the fire (see the <b>World of Darkness Rulebook</b>, p. 180 — each success adds one level to the intensity of the fire).<p>A servant with one point of Potency has a flame that has the size and produces the heat of a torch. If the fiery creature tries to burn a person, it has an attacking dice pool equivalent to its creator’s Gnosis + 2, and causes lethal damage. If the creature causes more than two points of damage on its first attack, the creature sets its target on fire, causing another point of lethal damage every round following, until the fire is put out.</p><p>Although obviously magical (and subject to Disbelief), the creature is made of nothing more than fire, and can be destroyed immediately by a fire extinguisher or a large bucket of water.</p><p>The creature is only barely sentient. Although it can follow detailed instructions, it can’t change its plan, or come up with new plans on its own.<p>",
        "RoteName": "Free Council Rote: Firebug",
        "RoteDice": "Dice Pool: Manipulation + Expression + Mind",
        "RoteDescrizione": "Even mages who prefer to do their work face-to-face admit that it can, on occasion, be necessary to send a small fiery agent in to defeat a minion, purify the ground or flush an enemy out so that the mage can confront him, man to man.",
        "DescrizioneBreve": "create sentient being of fire",
    },
    {
        "Titolo": "Firebolt",
        "Arcana": "Forces ••••",
        "DescrizioneAlta": "One of the signature spells of the battle-minded Obrimos, this magic allows a willworker to project a lancing gout of flame from his fingertips toward a target at range.",
        "Practice": "Unraveling",
        "Action": "Instant",
        "Duration": "Lasting",
        "Aspect": "Vulgar",
        "Cost": "1 Mana (optional for aggravated damage)",
        "DescrizioneMiddle": "Each success assigned to the Potency of this spell inflicts one Health box of lethal damage to the target, who is allowed to apply her Defense against the attack. With Forces 5, the caster can spend a point of Mana to make this spell inflict aggravated damage. Note that flammable objects in the target’s vicinity are apt to be set ablaze by this attack.",
        "RoteName": "Adamantine Arrow Rote: Sword of Michael",
        "RoteDice": "Dice Pool: Dexterity + Athletics + Forces",
        "RoteDescrizione": "While some Arrows prefer lightning and others sonic bursts, the simple fact of the matter is that more supernatural weirdness appears to be harmed in a meaningful way by fire than by any other natural form of energy. This rote, probably older than the order itself, capitalizes upon that truth.",
        "DescrizioneBreve": "inflict serious damage, ignite flammable objects",
    },
    {
        "Titolo": "Firestarter",
        "Arcana": "Forces ••••",
        "DescrizioneAlta": "Sometimes the wrath of the Tamers of Fire burns hot and bright. Magical arson may not be honorable, but fire can cleanse, and fire can destroy. When all looks impossible, an inferno from nowhere can ensure that even if a Champion doesn’t get out alive, his opponents join him in the flames.",
        "Practice": "Unraveling",
        "Action": "Instant",
        "Duration": "Lasting",
        "Aspect": "Covert (but see below)",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "This spell causes the area around a targeted spot (which can be anywhere within sensory perception) to catch fire.[TABLE1]Fire causes automatic lethal damage to everyone within its radius per turn of exposure (see the <b>World of Darkness Rulebook</b>, p. 180). The heat of the fire is roughly equal to that of a candle. The mage can increase this heat (and the damage it inflicts) by raising the Potency of the spell during casting:[TABLE2]",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Successes",
                        "Area around targeted spot"
                    ],
                    [
                        "1",
                        "One-yard radius"
                    ],
                    [
                        "2",
                        "Two-yard radius"
                    ],
                    [
                        "3",
                        "Four-yard radius"
                    ],
                    [
                        "4",
                        "Eight-yard radius"
                    ],
                    [
                        "5",
                        "16-yard radius"
                    ]
                ]
            },
            {
                "Placeholder": "[TABLE2]",
                "Data": [
                    [
                        "Potency",
                        "Dice penalty",
                        "Heat of Fire",
                        "Damage"
                    ],
                    [
                        "2",
                        "-2",
                        "Torch (2nd-degree burns)",
                        "2"
                    ],
                    [
                        "3",
                        "-4",
                        "Bunsen burner (3nd-degree burns)",
                        "3"
                    ],
                    [
                        "4",
                        "-6",
                        "Chemical fire/molten metal",
                        "4"
                    ],
                    [
                        "5",
                        "-8",
                        "Inferno",
                        "5"
                    ]
                ]
            }
        ],
        "RoteName": "Adamantine Arrow Rote: Conflagration",
        "RoteDice": "Dice Pool: Presence + Intimidation + Forces",
        "RoteDescrizione": "A mage with enough skill can actually frighten the atoms of the surrounding area into combusting. The truly inspired use further Forces magic to direct the course of the fire they have created. An intelligent and sensitive mage can cause a vast amount of destruction with very little effort.",
        "DescrizioneBreve": "kindle flames",
    },
    {
        "Titolo": "Friction Knife",
        "Arcana": "Forces ••••",
        "DescrizioneAlta": "The mage increases the force of friction upon a given subject to the point that contact with the air itself causes lacerations and abrasions. A stiff wind can mean excruciating pain or death in the case of a very powerful caster.",
        "Practice": "Fraying",
        "Action": "Instant and contested; target rolls Stamina + Gnosis reflexively",
        "Duration": "Transitory (one turn)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "The subject suffers one Health wound of lethal damage per every three yards (rounding down) that she moves in a turn. At the Storyteller’s discretion, one additional wound might be caused by a strong wind. Note that a person sitting in a moving vehicle does not suffer this damage unless he’s exposed to open air, such as in a convertible. (If he’s next to an open window, he suffers half damage, rounded down.) Non-magical armor provides only half its normal protection, unless the subject’s body is more than 95% covered by armor.",
        "RoteName": "Adamantine Arrow Rote: Sword of the Winds",
        "RoteDice": "Dice Pool: Intelligence + Occult or Science + Forces vs. Stamina + Gnosis",
        "RoteDescrizione": "The greatest warrior learns to use every resource in her environment, a lesson taken to heart by those Arrow mages who practice this rote. With such magic, an Arrow lays low her enemies without force of arms, allowing them to destroy themselves. Silver Ladder mages also make use of this magic to destroy foes without lifting a finger.",
        "DescrizioneBreve": "increase air friction to lethal levels",
    },
    {
        "Titolo": "Gravity Shift",
        "Arcana": "Forces ••••",
        "DescrizioneAlta": "Sometimes the path a mage needs to follow becomes blocked or impassable. No matter — with this spell the caster isn’t limited to walking on the ground. He can amble up the side of a wall or stride across a ceiling, avoiding obstructions that would slow the passage of earthbound travelers.",
        "Practice": "Patterning",
        "Action": "Instant",
        "Duration": "Concentration",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "Using this spell on a magnetized object, each success on the spell can increase or decrease the magnet’s Strength by one. An object reduced to Strength 0 is still mildly magnetic, but probably not strong enough to support the object’s own weight. One additional success can then reduce a Strength 0 magnet to a completely nonmagnetized state.<p>This spell can also be cast on objects that are not magnetized but can naturally be magnets. The first success then gives the object magnetic Strength 0, and additional successes allow the mage to increase that Strength.</p><p>Objects generally return to their old state of magnetization once the spell ends. With Forces 5 and the expenditure of a point of Mana, the mage may make the change in Strength lasting as long as the material can naturally hold that Strength of magnetization. Any object can be permanently made non-magnetic; most magnetic materials have a maximum Strength they can hold, generally 2 or 3. Such a material increased to Strength 5 would naturally weaken to its maximum magnetic Strength after the spell’s normal Duration expired.</p><p>This spell may also be used to reverse a magnet’s polarization, but the mage must use successes to make the magnet completely non-magnetized before she can apply any toward strengthening the reverse polarization.</p>",
        "RoteName": "Adamantine Arrow Rote: Human Fly",
        "RoteDice": "Dice Pool: Wits + Occult + Forces",
        "RoteDescrizione": "With this rote, no wall is too high to climb. Floor-level traps or alarm systems can be bypassed; rooftops, tree tops and even mountaintops are simple to reach.",
        "DescrizioneBreve": "redirect personal center of gravity",
    },
    {
        "Titolo": "Influence Magnet",
        "Arcana": "Forces ••••",
        "DescrizioneAlta": "The mage can strengthen or weaken any natural magnet or magnetic substance.",
        "Practice": "Patterning",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "Using this spell on a magnetized object, each success on the spell can increase or decrease the magnet’s Strength by one. An object reduced to Strength 0 is still mildly magnetic, but probably not strong enough to support the object’s own weight. One additional success can then reduce a Strength 0 magnet to a completely nonmagnetized state.<p>This spell can also be cast on objects that are not magnetized but can naturally be magnets. The first success then gives the object magnetic Strength 0, and additional successes allow the mage to increase that Strength.</p><p>Objects generally return to their old state of magnetization once the spell ends. With Forces 5 and the expenditure of a point of Mana, the mage may make the change in Strength lasting as long as the material can naturally hold that Strength of magnetization. Any object can be permanently made non-magnetic; most magnetic materials have a maximum Strength they can hold, generally 2 or 3. Such a material increased to Strength 5 would naturally weaken to its maximum magnetic Strength after the spell’s normal Duration expired.</p><p>This spell may also be used to reverse a magnet’s polarization, but the mage must use successes to make the magnet completely non-magnetized before she can apply any toward strengthening the reverse polarization.</p>",
        "RoteName": "Free Council Rote: Commanding Polarization",
        "RoteDice": "Dice Pool: Intelligence + Science + Forces",
        "RoteDescrizione": "This rote is excellent for creating powerful magnets for scientific or occult experiments, or just for boosting the power from existing magnets. Using this spell on a computer hard drive is an excellent way to wipe the memory completely, leaving no evidence of electronic data or the attempt to destroy it.",
        "DescrizioneBreve": "make a magnet stronger or weaker",
    },
    {
        "Titolo": "Invisible Fire",
        "Arcana": "Forces ••••",
        "DescrizioneAlta": "The mage strikes a target with a concentrated amount of radiation.",
        "Practice": "Fraying",
        "Action": "Instant and aimed",
        "Duration": "Lasting",
        "Aspect": "Vulgar",
        "Cost": "1 Mana (optional; makes damage aggravated)",
        "DescrizioneMiddle": "Each success inflicts one level of lethal damage due to radiation burns. Invisible Fire ignores armor not specifically shielded against radiation or magic. Anyone with the protection of Stay the Invisible Fires is immune. One point of Mana can be spent to make the damage aggravated.",
        "RoteName": "Free Council Rote: Rad-Blast",
        "RoteDice": "Dice Pool: Wits + Science + Forces",
        "RoteDescrizione": "The Libertines weren’t the first to think of using radiation as a weapon, just the first mages to do so. This techné is considered a weapon of last resort since it’s dirty and vulgar, and tends to raise difficult questions.",
        "DescrizioneBreve": "cause Lethal or Aggravated radiation damage",
    },
    {
        "Titolo": "Kinetic Ripple",
        "Arcana": "Forces ••••",
        "DescrizioneAlta": "The mage lashes out with her magic, harming anyone near her with a shimmering wave of force. Those nearest the mage suffer the most damage, as the wave of force quickly decreases in ferocity the further the wave spreads. The visible effects from this spell on a body are misleading. Serious internal damage can be caused while leaving only bruises.",
        "Practice": "Unraveling",
        "Action": "Instant; subtract target’s Stamina",
        "Duration": "Lasting",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "This spell causes damage based on target proximity from point of origin (the caster). All targets within a one-yard radius of the mage suffer one point of lethal Health damage per success on the casting roll. All targets outside the one-yard radius, but within three yards of the mage, suffer one point of bashing Health damage per success on the casting roll. Damage dealt is considered Resistant Damage (see p. 124 of <b>Mage: The Awakening</b>), and in the case of multiple targets, subtract the highest Stamina present from the casting roll. It is possible to exclude friendly targets from Kinetic Ripple by including Fate 2 in the spellcasting (see p. 154 of <b>Mage: The Awakening</b>).",
        "RoteName": "Adamantine Arrow Rote: Break the Line",
        "RoteDice": "Dice Pool: Stamina + Athletics + Forces",
        "RoteDescrizione": "The Adamantine Arrow uses this spell to disrupt enemy lines and to scatter clumped groups. Multiple Arrows with knowledge of this spell, working as a group, can quickly clear an area with successive pulses of damaging energy.",
        "DescrizioneBreve": "create an outward blast of force",
    },
    {
        "Titolo": "Levitation",
        "Arcana": "Forces ••••",
        "DescrizioneAlta": "The mage can lift himself off the ground using telekinetic force. At this level of Forces, travel is slow and requires concentration.",
        "Practice": "Patterning",
        "Action": "Instant",
        "Duration": "Concentration",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "Success allows the mage to levitate and travel in any direction with a maximum Speed equal to her Gnosis +1 per success (she cannot double this as she could by running on the ground). She must maintain concentration as an instant action (no further rolls are required). She is not very maneuverable, however. She cannot make quick movements to dodge obstacles and does not gain her Defense against any attacks that can reach her.</p><p>If she is attacked or startled, a reflexive Resolve + Composure roll must be made to maintain concentration. If it fails, she falls (see “Falling,” p. 179 of the <b>World of Darkness Rulebook</b>), although she can resume concentration as an instant action anytime within a number of turns equal to her Forces dots, halting her plummet instantly, assuming she doesn’t hit the ground before then. She’d have to fall from an extreme height — such as from skydiving — to allow her any time to regain concentration. (Note: This is an exception to the normal rules for losing concentration with a spell).</p><p>This spell instantly invokes Disbelief in Sleeper witnesses, which immediately works to unravel the magic.</p>",
        "RoteName": "Guardians of the Veil Rote: Air Walk",
        "RoteDice": "Dice Pool: Intelligence + Athletics + Forces",
        "RoteDescrizione": "Guardian mages find this a very useful spell when they need to perform home or office intrusions to fetch or destroy incriminating evidence — or to spy on someone from where he least expects it, above.",
        "DescrizioneBreve": "float slowly",
    },
    {
        "Titolo": "Quench the Invisible Fires",
        "Arcana": "Forces ••••",
        "DescrizioneAlta": "This spell cleanses radioactivity from an affected area.",
        "Practice": "Unraveling",
        "Action": "Instant",
        "Duration": "Lasting",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "Each success on the casting roll reduces any Composure-based rolls (including, obviously, Perception rolls) by one. A success also reduces any Manipulation-based rolls (i.e., attempts to communicate) by one die per success, as well. The victim cannot speak, hear or see (though spellcasting may inadvertently allow for some light or sound to escape, but this usually comes across as muffled white noise or gray, filtered light).<p>Note that if the target is a mage with at least Forces 1 or Mind 1, he might recognize (via Unseen Senses) that he is being manipulated.</p><p>At the Storyteller’s discretion, prolonged use of this spell (or if the caster gains an exceptional success) might cause the victim of the casting to gain a temporary derangement. This derangement grants either a mild version or upgrades a mild version to severe. This derangement lasts for 12 hours. Resultant derangements are usually Depression (or Melancholia), Phobia (or Hysteria), Inferiority Complex (or Anxiety).</p>",
        "RoteName": "Free Council Rote: Shorten Half-Life",
        "RoteDice": "Dice Pool: Intelligence + Science + Forces",
        "RoteDescrizione": "While Libertines work with radioactive materials only rarely, this techné allows them to clean up after themselves quickly, leaving no traces behind.",
        "DescrizioneBreve": "remove radiation from area",
    },
    {
        "Titolo": "Sensory Deprivation",
        "Arcana": "Forces ••••; optional Life ••• or Mind ••",
        "DescrizioneAlta": "The mage uses Forces to cut a target off from three of his senses: speaking, hearing and seeing. The target’s voice and hearing capabilities are dampened through a silencing of all sound around the mouth and ears.<p>Sight is removed by diminishing all light that reaches the target’s eyes. The addition of Life can stimulate the subject’s biological fear responses (increased heartbeat, sweat, hyperventilating). The addition of Mind can emotionally urge the subject to feel whatever the caster desires during this time of deprivation.</p>",
        "Practice": "Unraveling",
        "Action": "Instant and contested; target rolls Composure + Gnosis reflexively",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Covert",
        "Cost": "None",
        "DescrizioneMiddle": "Each success on the casting roll reduces any Composure-based rolls (including, obviously, Perception rolls) by one. A success also reduces any Manipulation-based rolls (i.e., attempts to communicate) by one die per success, as well. The victim cannot speak, hear or see (though spellcasting may inadvertently allow for some light or sound to escape, but this usually comes across as muffled white noise or gray, filtered light).<p>Note that if the target is a mage with at least Forces 1 or Mind 1, he might recognize (via Unseen Senses) that he is being manipulated.</p><p>At the Storyteller’s discretion, prolonged use of this spell (or if the caster gains an exceptional success) might cause the victim of the casting to gain a temporary derangement. This derangement grants either a mild version or upgrades a mild version to severe. This derangement lasts for 12 hours. Resultant derangements are usually Depression (or Melancholia), Phobia (or Hysteria), Inferiority Complex (or Anxiety).</p>",
        "RoteName": "Guardians of the Veil Rote: Interrogation",
        "RoteDice": "Dice Pool: Manipulation + Intimidation + Forces",
        "RoteDescrizione": "Using this rote, a Guardian can more effectively interrogate a victim through the use of magical torture.",
        "DescrizioneBreve": "block a target's senses",
    },
    {
        "Titolo": "Thunderbolt",
        "Arcana": "Forces ••••",
        "DescrizioneAlta": "The mage conjures up crackling tendrils of electricity that dance between her fingertips, and then sends them at a ranged target.",
        "Practice": "Unraveling",
        "Action": "Instant and aimed",
        "Duration": "Lasting",
        "Aspect": "Vulgar",
        "Cost": "1 Mana (optional for aggravated damage)",
        "DescrizioneMiddle": "Each success inflicts one Health wound of lethal damage. With Forces 5, one Mana can be spent to make the damage aggravated (although the target is allowed his Defense against the aiming roll made for the caster).",
        "RoteName": "Adamantine Arrow Rote: Lightning’s Vessel",
        "RoteDice": "Dice Pool: Stamina + Athletics + Forces",
        "RoteDescrizione": "Perhaps one of the more awe-inspiring modes of attack common to the Adamantine Arrow (which is saying something), this rote is emblematic of that order’s very name. Free Council willworkers use their own means of generating the energy needed for such magic (Intelligence + Athletics + Forces).",
        "DescrizioneBreve": "create electricity",
    },
    {
        "Titolo": "Transform Energy",
        "Arcana": "Forces ••••",
        "DescrizioneAlta": "The mage can transform energy: sound into light or heat, or electricity into sound, or fire into electricity, or any combination of these forces. All kinds of energy have their origins in certain physical principles that manifested long ago and diverged from a single course. Using that sympathy, a mage can change one kind of energy into another.",
        "Practice": "Patterning",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "Electricity, for example, can be transformed into sound. (As with the “Sound Mastery” spell, p. 170, however, a separate Skill roll might be required to generate exacting sounds. The mage could easily get screams or gunfire, but it’s harder to get a specific person screaming or the telltale sound of a certain model of gun.) Light could be changed into heat, meaning that a blindingly bright room could become pitch-black and searingly hot.<p>The existing energy is transformed, but it is not increased or diminished unless cast in combination with a spell that allows that effect. Use the chart below as a general guideline for transforming one form of energy into another:</p>[TABLE1]Note: sunlight cannot be transformed (nor can another energy be transformed into sunlight) at this level.",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Potency",
                        "Light",
                        "Sound",
                        "Heat (Fahrenheit)",
                        "Electricity",
                        "Fire"
                    ],
                    [
                        "1",
                        "Flashlight",
                        "Casual talk",
                        "Room tempo. (72)",
                        "Car Battery",
                        "Lighter"
                    ],
                    [
                        "2",
                        "75-watt lamp",
                        "Scream",
                        "body temp. (98.6)",
                        "Wall socket",
                        "Torch"
                    ],
                    [
                        "3",
                        "Car headlight",
                        "Electric guitar",
                        "Kills bacteria (160)",
                        "Security fence",
                        "Bonfire"
                    ],
                    [
                        "4",
                        "Floodlight",
                        "Gunshot",
                        "Boiling point (212)",
                        "Junction box",
                        "Inferno"
                    ],
                    [
                        "5",
                        "Stadium lights",
                        "Industrial",
                        "Books burn (451)",
                        "Main line",
                        "Conflagration"
                    ]
                ]
            }
        ],
        "RoteName": "Free Council Rote: Electromagnetic Spectrum",
        "RoteDice": "Dice Pool: Intelligence + Occult or Science + Forces",
        "RoteDescrizione": "By using advanced scientific techniques, a Council willworker can transmute simple forces, causing one form of energy to become another. Guardians of the Veil use similar magic (Wits + Occult or Science + Forces) when their duties require it.",
        "DescrizioneBreve": "change one energy form to another",
    },
    {
        "Titolo": "Trojan Horse",
        "Arcana": "Forces •••• + Time •• + Fate ••",
        "DescrizioneAlta": "The use of this spell is undoubtedly an act of cruelty; some might even call it an act of terrorism. In the end, however, the difference between a terrorist and a freedom fighter depends on point of view. Certainly, Banishers have no qualms about using this spell in their fight against mages. The mage plants a destructive spell in a Sleeper subject, concealing a lethal time bomb within an unsuspecting person.",
        "Practice": "Unraveling",
        "Action": "Extended",
        "Duration": "Lasting",
        "Aspect": "Vulgar",
        "Cost": "1 Mana + 1 Willpower",
        "DescrizioneMiddle": "This spell implants the Forces 4 rote “Thunderbolt” (see <b>Mage: The Awakening</b>, p. 173) in a Sleeper. A Sleeper subject is procured by the caster, who proceeds to cast the “Thunderbolt” spell. At the very last moment, the mage channels the energy of the spell into the Sleeper, rather than at the Sleeper. This type of casting requires concentration and slows the spell from an instant action to a special type of extended action.<p>The mage has a window of three turns in which to properly complete the spell, or the thunderbolt will be discharged targeting the Sleeper. The extended roll requires five successes.</p><p>Once the spell has been set in the target, the mage weaves Fate and Time into the spell so it remains dormant until the Sleeper is in the presence of magic. The very next time a spell is cast within sensory range of the Sleeper, the “Thunderbolt” spell is discharged, targeting the source of the magic. The spell released in this way from a Sleeper requires no roll to hit. Damage caused by the spell is equal to the caster’s Gnosis + 3.</p><p>Changing the primary Arcanum of the spell could produce a variety of different effects. Cast with Matter 4, for example, the spell could incorporate the “Transmute Air” spell (see p. 202 of <b>Mage: The Awakening</b>) to transmute the air breathed out by the Sleeper carrier into sarin gas.</p><p>Use of this rote is an act of hubris requiring a degeneration check for mages of Wisdom 4 or higher (roll three dice).</p>",
        "RoteName": "Banisher Rote: Minefield",
        "RoteDice": "Dice Pool: Resolve + Occult + Forces",
        "RoteDescrizione": "A Guardians of the Veil cabal, located in Chicago, have published a report documenting the cabal’s battles with a small cell of Banishers and the Banishers’ extensive use of this spell. The report indicates Banishers use this spell in two ways. One is to seed a crowd with Sleeper carriers, then draw a mage to the crowd and attack them in a mundane fashion. The crueler use is to cast the spell on Sleeper friends and allies of a mage.",
        "DescrizioneBreve": "embed a Thunderbolt in a Sleeper subject that fires at the next Mage nearby",
    },
    {
        "Titolo": "Unseen Hand",
        "Arcana": "Forces ••••",
        "DescrizioneAlta": "The mage can telekinetically lift a living creature remotely.",
        "Practice": "Weaving",
        "Action": "Instant and contested; target rolls Composure + Gnosis reflexively",
        "Duration": "Concentration",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "A simple success lifts the target into the air. The spell’s Strength is equal to its successes. The mage can move the living creature at a Speed per turn equal to his Gnosis plus any successes allocated for this purpose. The target cannot be moved beyond the mage’s sight (unless he uses Space 2 to scry it).<p>Each turn, the victim can attempt to struggle free from the telekinetic grip. It takes an instant action and a Strength + Athletics or Brawl roll, penalized by the spell’s assigned Strength.</p><p>With Forces 5, this spell can have a default Duration of prolonged (one scene), in which case when the caster is not actively manipulating the target, the target stays where the caster left him, even if he levitates in the air (although the target can try to break the hold as described above).</p>",
        "RoteName": "Adamantine Arrow Rote: Unyielding Grasp",
        "RoteDice": "Dice Pool: Wits + Brawl + Forces vs. Composure + Gnosis",
        "RoteDescrizione": "The Adamantine Arrow often uses this rote to freeze enemies in place, or to lift them high and then drop them (see “Falling,” p. 179 of the <b>World of Darkness Rulebook</b>). It lacks honor, but so do many Arrow enemies.",
        "DescrizioneBreve": "kinetically lift a creature",
    }
]

const forceFiveData = [
    {
        "Titolo": "Adverse Weather",
        "Arcana": "Forces •••••",
        "DescrizioneAlta": "The mage creates a major weather disturbance such as a tsunami or monsoon, following the guidelines of the “Change Weather” spell, p. 172.",
        "Practice": "Making",
        "Duration": "Prolonged (for storms, monsoons, tsunamis or similar longterm phenomena; one scene) or transitory (for tornadoes or similar short-term phenomena; one turn)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "Creating a tornado in the American Midwest in the summer might impose a -1 dice penalty (depending upon current prevailing weather), while doing so in northern Alaska probably imposes a – 5 dice penalty, regardless of the season.<p>Long-term weather effects (storms, monsoons) take about five minutes after casting to grow into force, and dissipate as soon as the spell’s Duration expires. Short-term effects arise immediately and disappear immediately when the spell expires.</p>",
        "RoteName": "Guardians of the Veil: Clearing the Streets",
        "RoteDice": "Dice Pool: Resolve + Intimidation + Forces",
        "RoteDescrizione": "Given the choice between creating a short-term panic with sudden hurricane force winds and allowing Sleepers to bear witness to something that could utterly destroy the secrecy of the occult world, most Guardians opt for the former. This rote can also be used for purely destructive purposes, of course, and this “wrath of heaven” potential draws certain members of the Silver Ladder to learn the same magic.",
        "DescrizioneBreve": "create disaster level weather condition",
    },
    {
        "Titolo": "Bestow Burst of Speed",
        "Arcana": "Forces •••••",
        "DescrizioneAlta": "The mage allows others to vastly speed up their movement, as he does for himself with Forces 4 “Burst of Speed,” p. 171.",
        "Practice": "Patterning",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "1 Mana per turn",
        "DescrizioneMiddle": "The target, not the mage, can spend a Mana point to boost his Speed for a turn, as per the rules for the “Burst of Speed” spell. If the target has no Mana, he cannot gain the benefit of this spell.",
        "RoteName": "Silver Ladder Rote: Flashpoint",
        "RoteDice": "Dice Pool: Manipulation + Athletics + Forces",
        "RoteDescrizione": "Silver Ladder mages use this rote to give their cabal-mates the speed to catch or intercept enemies.",
        "DescrizioneBreve": "make someone else faster temporarily",
    },
    {
        "Titolo": "Bestow Levitation",
        "Arcana": "Forces •••••",
        "DescrizioneAlta": "The mage can impart levitation to others. This is identical to that which a mage could bestow upon himself with “Levitation,” p. 173, although the target must concentrate to levitate. This spell can be cast upon only willing targets. To lift an unwilling target, the caster must use “Unseen Hand,” p. 174.",
        "Practice": "Making",
        "Action": "Instant",
        "Duration": "Concentration",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "The target, not the mage, must concentrate to maintain the spell.",
        "RoteName": "Mysterium Rote: Disc of Levitation",
        "RoteDice": "Dice Pool: Intelligence + Occult or Science + Forces",
        "RoteDescrizione": "A quick casting of this rote has saved the life of more than one Mysterium willworker’s cabal-mate. Adamantine Arrow mages use their own version of the rote (Wits + Occult + Forces) to give their allies the means to flee a hostile encounter or to attack a foe from an unexpected angle.",
        "DescrizioneBreve": "allow others to float slowly",
    },
    {
        "Titolo": "Complete Invisibility",
        "Arcana": "Forces •••••",
        "DescrizioneAlta": "The mage can turn herself invisible, as with the Forces 3 “Personal Invisibility” spell, p. 169, but she no longer needs to maintain concentration to remain unseen.",
        "Practice": "Veiling",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "One success is enough to hide the mage from sight, while excess successes act to occlude her from spells used to see or locate her (compare spell Potencies). Although the mage can now make quick movements (unlike with “Personal Invisibility”), and gains her Defense against attacks that can actually target her (the attacker must be able to see through the spell’s Potency with a spell of his own), she cannot make Brawl or Weaponry attacks or run or dive for cover without revealing her location. Such movements can be seen as a prominent blur or refraction of light, allowing others to freely target the mage (with a –1 dice penalty) on the turn in which she moves and before she acts again on the following turn.",
        "RoteName": "Guardians of the Veil Rote: Cloak of Light",
        "RoteDice": "Dice Pool: Wits + Stealth + Forces",
        "RoteDescrizione": "Guardians prize this rote as among the most valued for their “profession” of policing the Awakened world.",
        "DescrizioneBreve": "gain prolonged invisibility",
    },
    {
        "Titolo": "Control Gravity",
        "Arcana": "Forces •••••",
        "DescrizioneAlta": "The mage redirects the force of gravity, causing people and things to fall in another direction, such as sideways or upward.",
        "Practice": "Making",
        "Action": "Instant",
        "Duration": "Transitory (one turn)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "A simple success affects gravity in a one-yard radius. Excess successes spread the energy over a larger area.[TABLE1]<p>Characters who fall into objects take damage normally. See “Falling,” p. 179 of the <b>World of Darkness Rulebook</b>.</p><p>A person in the radius who is sent “falling” upward travels at the same rate as someone falling downward, but once he exits the radius affected, he is subject to normal gravity again. Although his momentum might still send him upward for a turn or two, the natural downward pull of gravity brings him back down — unless he falls into the radius of the altered gravity, which sends him upward again. He might oscillate between the area of altered gravity and normal gravity until the spell expires.</p>",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Success",
                        "Area-Affected"
                    ],
                    [
                        "2",
                        "Two-yard radius"
                    ],
                    [
                        "3",
                        "Four-yard radius"
                    ],
                    [
                        "4",
                        "Eight-yard radius"
                    ],
                    [
                        "5",
                        "16-yard radius"
                    ]
                ]
            }
        ],
        "RoteName": "Mysterium Rote: Upending Expectations",
        "RoteDice": "Dice Pool: Intelligence + Occult or Science + Forces",
        "RoteDescrizione": "With this rote, a Mysterium mage can reach places normally inaccessible to her, or suddenly cause an entire roomful of assailants to “fall” upward and hit the ceiling. Adamantine Arrow mages use their own version of this magic (Composure + Occult + Forces) to seize the advantage in combat.",
        "DescrizioneBreve": "alter power and direction of gravity",
    },
    {
        "Titolo": "Create Sunlight",
        "Arcana": "Forces •••••",
        "DescrizioneAlta": "The mage creates sunlight. He does not really turn night into day, but does create a miniature sun, a source of true sunlight.",
        "Practice": "Making",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "The spell’s successes determine the area of direct sunlight; anything outside the area might be illuminated indirectly by the glow, but isn’t otherwise affected.[TABLE1]<p>Needless to say, this spell is especially deadly to vampires. Within the radius affected, the sunlight is “direct” (three points of aggravated damage per turn). Outside the immediate radius (within double the radius’ area), the sunlight is “faint” (one point of aggravated damage per turn).</p>",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Success",
                        "Area-Affected"
                    ],
                    [
                        "2",
                        "Two-yard radius"
                    ],
                    [
                        "3",
                        "Four-yard radius"
                    ],
                    [
                        "4",
                        "Eight-yard radius"
                    ],
                    [
                        "5",
                        "16-yard radius"
                    ]
                ]
            }
        ],
        "RoteName": "Silver Ladder Rote: Summoning the Dawn",
        "RoteDice": "Dice Pool: Intelligence + Occult or Science + Forces",
        "RoteDescrizione": "Some creatures cannot be driven out by fire or the sword, but recoil from the cleansing light of the sun. Silver Ladder willworkers use this rote to summon true sunlight. Free Council mages are also known to make use of the same rote, whether for experimentation, defense or even just to provide some light for growing plants in a sanctum far from natural light.",
        "DescrizioneBreve": "create a burst of light",
    },
    {
        "Titolo": "Earthquake",
        "Arcana": "Forces •••••",
        "DescrizioneAlta": "With this spell, a mage can create a localized earthquake by manipulating the balance of force and pressure beneath the ground.",
        "Practice": "Unmaking",
        "Action": "Instant",
        "Duration": "Transitory (one turn)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "This spell inflicts damage upon structures such as buildings within its targeted area (a five-yard area with one success) equal to the spell’s successes. Dexterity + Athletics, minus the spell’s successes, is rolled for living beings to remain standing. In uncommon cases, those in the area (especially those who fall down) may suffer a Health wound or two of damage, almost always bashing (Storyteller’s discretion). Being in a narrow stairwell filled with plummeting debris may involve more damage, as might being beneath a falling statue, but such occurrences are judged on a case-by-case basis.[TABLE1]",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Successes",
                        "Defined Volume"
                    ],
                    [
                        "2 successes",
                        "10 cu. yards"
                    ],
                    [
                        "3 successes",
                        "20 cu. yards"
                    ],
                    [
                        "4 successes",
                        "40 cu. yards"
                    ],
                    [
                        "5 successes",
                        "80 cu. yards"
                    ]
                ]
            }
        ],
        "RoteName": "Adamantine Arrow Rote: Fist of Heaven",
        "RoteDice": "Dice Pool: Resolve + Athletics + Forces",
        "RoteDescrizione": "The earth itself can be used as a weapon by a mage of the Adamantine Arrow. With this rote, not even the ground that enemies stand on is safe. Guardians of the Veil occasionally make use of this magic (Manipulation + Athletics + Forces), using tremors to cover up stranger happenings, or to demolish a site before inquiring eyes spy things they were not meant to see.",
        "DescrizioneBreve": "shift tectonics in the area",
    },
    {
        "Titolo": "Electromagnetic Pulse",
        "Arcana": "Forces •••••",
        "DescrizioneAlta": "The mage creates an EMP that destroys power and electrical devices.",
        "Practice": "Unmaking",
        "Action": "Instant",
        "Duration": "Lasting",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "One success is sufficient to ruin every electrical device within the spell’s radius (destroying the Structures of all electronic components). (Certain military devices specifically made to resist EMP are immune).<p>A simple success affects a one-yard radius. Excess successes spread the pulse over a larger area.</p><p>The effect is lasting, although devices can be repaired.</p>",
        "RoteName": "Free Council Rote: Short Circuit",
        "RoteDice": "Dice Pool: Resolve + Science + Forces",
        "RoteDescrizione": "Free Council mages understand that modern people are often overly dependent on technology. Take that away, and the odds in any situation shift radically. Many people panic when their conveniences are taken away, not to mention the chaos that can ensue based purely on the loss of those devices. Communications break down, computers are destroyed and electronic recording media are wiped clean. Mysterium mages also use this rote, stripping others of the edge afforded by technology and stacking the deck in favor of the Awakened.",
        "DescrizioneBreve": "deactivate electronic devices",
    },
    {
        "Titolo": "Eradicate Radiation",
        "Arcana": "Forces •••••",
        "DescrizioneAlta": "The mage extinguishes a source of nuclear radiation in an area.",
        "Practice": "Unmaking",
        "Action": "Instant",
        "Duration": "Lasting",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "The intensity of the radioactive source can levy dice penalties. A small amount of uranium might impose no penalty, while a cooling rod from an active nuclear plant might levy a –3 penalty.<p>A simple success affects radiation in a 1 yard radius. Excess successes extinguish radiation over a larger radius.</p>[TABLE1]<p>The effect is lasting.</p>",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Success",
                        "Area-Affected"
                    ],
                    [
                        "2",
                        "Two-yard radius"
                    ],
                    [
                        "3",
                        "Four-yard radius"
                    ],
                    [
                        "4",
                        "Eight-yard radius"
                    ],
                    [
                        "5",
                        "16-yard radius"
                    ]
                ]
            }
        ],
        "RoteName": "Free Council Rote: Cleansing",
        "RoteDice": "Dice Pool: Resolve + Science + Forces",
        "RoteDescrizione": "While the circumstances under which this rote is useful are (thankfully) few and far between, it is definitely the sort of magic Free Council mages are glad to have at their disposal when it is necessary.",
        "DescrizioneBreve": "remove traces of toxic radiation",
    },
    {
        "Titolo": "Flight",
        "Arcana": "Forces •••••",
        "DescrizioneAlta": "The mage acquires the power of flight, using telekinetic force to repel herself from the surface of the Earth and upward into the air. This is a more advanced version of Forces 4 “Levitation” (p. 173). The mage now has more maneuverability and no longer needs to maintain concentration to lift away from gravity’s pull.",
        "Practice": "Making",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "1 Mana",
        "DescrizioneMiddle": "Success allows the mage to fly and travel in any direction with a maximum Speed equal to her Gnosis +1 per success (she cannot double this as she could by running on the ground). Reflexive Dexterity + Athletics rolls are made to avoid obstacles, and she gains her normal Defense against attacks that can reach her.<p>If she is stunned or suffers a knockout (see “Other Complications,” pp. 167-168 of the <b>World of Darkness Rulebook</b>) or is rendered unconscious (perhaps by wounds), she begins to descend as her flight becomes uncontrolled. She does not fall, but slowly floats downward at a rate of Speed equal to her Size, touching ground without injury. If the spell’s Duration expires before she touches down, she falls like anyone dropped from her current height (see “Falling,” p. 179 of the <b>World of Darkness Rulebook</b>).</p><p>This spell instantly invokes Disbelief in Sleeper witnesses, which immediately works to unravel the magic.</p>",
        "RoteName": "Mysterium Rote: Witch’s Broom",
        "RoteDice": "Dice Pool: Dexterity + Athletics + Forces",
        "RoteDescrizione": "This rote allows members of the Mysterium to avoid both the hassles and occasional perils of earthbound transportation. Granted, flight bears its own unique problems and risks, but no few mages are willing to accept them. Adamantine Arrow sorcerers use the same rote in conferring the powers of flight upon themselves.",
        "DescrizioneBreve": "gain perfect, but slow, flight",
    },
    {
        "Titolo": "Increase Gravity",
        "Arcana": "Forces •••••",
        "DescrizioneAlta": "This spell increases the pull of gravity, as if the Earth were a larger body.",
        "Practice": "Making",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "A simple success gives gravity a Strength of 1 and affects a five-square yard area. Excess successes are allocated between the Strength of the gravity and the area affected.<p>Each point of Strength subtracts three points from the Speed of anyone or anything within the volume affected. Those affected also suffer a –1 dice penalty to jumping rolls per Strength. Additionally, if the gravity’s Strength exceeds a person’s Strength, all Physical dice pools are at –1 dice per excess Strength. Flying creatures (including those using Forces spells to fly or that are lifted telekinetically) are subject to a reflexive Strength + Athletics roll each turn. Failure in any roll forces them toward the ground at a rate of Speed per turn equal to the gravity’s Strength.</p>[TABLE1]",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Successes",
                        "Defined Volume"
                    ],
                    [
                        "2 successes",
                        "10 cu. yards"
                    ],
                    [
                        "3 successes",
                        "20 cu. yards"
                    ],
                    [
                        "4 successes",
                        "40 cu. yards"
                    ],
                    [
                        "5 successes",
                        "80 cu. yards"
                    ]
                ]
            }
        ],
        "RoteName": "Guardians of the Veil Rote: Slowing the Prey",
        "RoteDice": "Dice Pool: Resolve + Occult or Science + Forces",
        "RoteDescrizione": "Quarry under the effect of this rote find any physical task that much harder to perform, which is why it is so favored by Guardians of the Veil in their efforts to maintain the secrecy of the Mysteries. Those who have seen too much discover that retreat is difficult, and it can be almost impossible to surmount even the most elementary obstacles. Some Silver Ladder willworkers use their own rote (Presence + Science + Forces) to literally force stubborn foes and rivals to their knees.",
        "DescrizioneBreve": "increase power of gravitational pull",
    },
    {
        "Titolo": "Magnetize",
        "Arcana": "Forces •••••",
        "DescrizioneAlta": "By manipulating an object’s magnetic properties, the mage can turn non-magnetic objects into temporary magnets.",
        "Practice": "Patterning",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "Any object affected by this spell temporarily becomes a magnet. It begins with a Strength of zero; the object is mildly magnetic, but it cannot provide effective resistance against a creature that wants to move the object and may not be able to magnetically support its own weight. The Strength is increased by one per additional success.<p>Note that some objects, even when strongly magnetized, cannot effectively use their Strength in all situations. Magnetizing a sheet of paper to Strength 5 may make it impossible to remove from the fridge, but the sheet will still rip if you slap it over the door to the fridge and the freezer and only open one of them.</p>",
        "RoteName": "Free Council Rote: Primagnet",
        "RoteDice": "Dice Pool: Intelligence + Science + Forces",
        "RoteDescrizione": "Libertines use this rote to create powerful magnets out of anything that is at hand. One might use the result to hide a note under a metal table, while another might use one to “lock” a metal door closed.",
        "DescrizioneBreve": "make a non-ferrous substance magnetic",
    },
    {
        "Titolo": "Nullify Gravity",
        "Arcana": "Forces •••••",
        "DescrizioneAlta": "This spell decreases the pull of gravity as if the Earth were a smaller body.",
        "Practice": "Unmaking",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "A simple success decreases gravity within a five-cubic yard volume. Successes are allocated between the Potency of the gravity and the volume affected.<p>Each point of Potency adds one to the Speed of anyone or anything within the area of effect. This sudden ease of motion might come as a surprise to a person affected. If more than five points are added to Speed, a reflexive Dexterity + Athletics roll is made for the subject to control her sudden vault. Also, every Potency point of the spell doubles a person’s jumping distance per success. For example, under a spell with Potency 1, a character jumps two feet with a vertical leap and four feet with a standing broad jump. Flying creatures (including those using Forces spells to fly or to be lifted telekinetically) add one point to their flight Speeds when going straight upward.</p>[TABLE1]",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Successes",
                        "Defined Volume"
                    ],
                    [
                        "2 successes",
                        "10 cu. yards"
                    ],
                    [
                        "3 successes",
                        "20 cu. yards"
                    ],
                    [
                        "4 successes",
                        "40 cu. yards"
                    ],
                    [
                        "5 successes",
                        "80 cu. yards"
                    ]
                ]
            }
        ],
        "RoteName": "Mysterium Rote: Moonwalking",
        "RoteDice": "Dice Pool: Intelligence + Occult or Science + Forces",
        "RoteDescrizione": "Great for a quick escape for an entire cabal, this Mysterium rote occasionally comes in handy in various other strange circumstances. Adamantine Arrow mages use this rote as well, enabling a number of willworkers to close quickly on foes, moving easily over even difficult terrain.",
        "DescrizioneBreve": "cancel gravity entirely in a region",
    },
    {
        "Titolo": "Radiation",
        "Arcana": "Forces •••••",
        "DescrizioneAlta": "The mage irradiates an area, causing it to be suffused with deadly radiation.",
        "Practice": "Unmaking",
        "Action": "Instant",
        "Duration": "Prolonged (one scene)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "The spell’s successes determine the radius. Anything outside that area is not affected.[TABLE1]<p>Living beings cannot spend time in the area without suffering the adverse effects of radiation poisoning. For every 30 minutes a person is exposed, increase the radiation’s Potency by one. Once it exceeds the creature or person’s Stamina, he suffers symptoms of poisoning.</p><p><b>1 point:</b> Weakness. The victim suffers –1 to all Physical dice pools.</p><p><b>2 points:</b> Nausea. If the victim moves more than half his Speed in a turn, a reflexive Stamina + Composure roll is required to avoid vomiting for that turn. While vomiting, the victim cannot take any other action, although he still gains his Defense.</p><p><b>3 points:</b> Bleeding from an orifice. The victim suffers one point of bashing damage. This damage does not heal as long as the victim is still exposed. In addition, long-term health problems such as cancer might develop in later years.</p><p><b>4 points:</b> Skin burns. The victim suffers one point of bashing damage this turn and per successive 10 minutes of exposure. This damage does not heal as long as the victim is still exposed.</p><p><b>5 points:</b> Fainting. A reflexive Stamina + Resolve roll is made for the victim to avoid falling unconscious for a number of minutes equal to any radiation damage he has already suffered. Any new damage he suffers due to exposure while unconscious adds to this time. Once he awakens, the roll must be made again each turn if he is still exposed.</p><p>Ongoing exposure continues to inflict damage until a victim is dead of aggravated wounds.</p>",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Successes",
                        "Radius or Defined Volume"
                    ],
                    [
                        "1 success",
                        "1-yard radius<br>5 cubic yards"
                    ],
                    [
                        "2 successes",
                        "2-yard radius<br>10 cu. yards"
                    ],
                    [
                        "3 successes",
                        "4-yard radius<br>20 cu. yards"
                    ],
                    [
                        "4 successes",
                        "8-yard radius<br>40 cu. yards"
                    ],
                    [
                        "5 successes",
                        "16-yard radius<br>80 cu. yards"
                    ]
                ]
            }
        ],
        "RoteName": "Adamantine Arrow Rote: Door to the Abyss",
        "RoteDice": "Dice Pool: Stamina + Occult or Science + Forces",
        "RoteDescrizione": "Even the most hardened Arrow willworker admits that use of this rote is cruel and unusual, but pragmatic members of the order recognize the need for such tactics every now and then. Free Council mages also make occasional use of this magic in experimentation.",
        "DescrizioneBreve": "create a burst of destructive radiation",
    },
    {
        "Titolo": "Velocity Mastery",
        "Arcana": "Forces •••••",
        "DescrizioneAlta": "The mage can completely control an object or even a living creature’s velocity, causing the subject to speed up or slow down beyond personal control. The mage can even halt bullets in midair.",
        "Practice": "Making or Unmaking",
        "Action": "Instant and contested; target rolls Composure + Gnosis reflexively",
        "Duration": "Lasting (vs. projectiles) or transitory (vs. creatures and objects)",
        "Aspect": "Vulgar",
        "Cost": "None",
        "DescrizioneMiddle": "Although the casting is an instant action, the mage can use this spell at any point in the Initiative roster, even before he could normally act, although doing so is his action for the turn.<p>This spell acts just like “Control Velocity,” p. 172, except that the mage can now cast it on living creatures or even on portions of objects (such as a truck tire, but not necessarily the rest of the truck, which surely causes the rig to jackknife unless the driver is very, very good). When the spell is cast on a living creature, its Speed trait is doubled or halved per success, but it is not in full control and reflexive Dexterity + Athletics rolls must be made each turn it moves or the subject suffers a knockdown effect (p. 168 of the <b>World of Darkness Rulebook</b>). The creature’s Speed is modified for the spell’s Duration (default of one turn).</p><p>In the case of projectiles, one success is enough to completely halt a projectile halfway in its path (or as close between there and its target as the mage desires). Additional successes can halt it closer and closer to its origin point, and an exceptional success can halt a bullet in the barrel of a gun. For instance, with two successes, a bullet is stopped after it travels only one-quarter the way from the barrel to its intended target (one success stops it halfway, while the second success halves that distance again).</p><p>The mage can affect multiple projectiles by adding extra Target factors. See “Target,” p. 118. Note that in the case of halting multiple bullets from the same gun (such as stopping machine gun fire), use the following special Target factors chart:</p>[TABLE1]",
        "Tables": [
            {
                "Placeholder": "[TABLE1]",
                "Data": [
                    [
                        "Autofire Targeted",
                        "Dice penalty"
                    ],
                    [
                        "Short burst",
                        "-2"
                    ],
                    [
                        "Medium burts",
                        "-4"
                    ],
                    [
                        "Long burst",
                        "-6"
                    ]
                ]
            }
        ],
        "RoteName": "Silver Ladder Rote: Motion Control",
        "RoteDice": "Dice Pool: Resolve + Athletics + Forces",
        "RoteDescrizione": "A Silver Ladder mage can ensure that no one whom he calls before him can delay arrival. Although this rote does not make a Silver Ladder mage bulletproof, it can make it seem that way.",
        "DescrizioneBreve": "increase or decrease speed of an object",
    }
]

export { forceOneData, forceTwoData, forceThreeData, forceFourData, forceFiveData };
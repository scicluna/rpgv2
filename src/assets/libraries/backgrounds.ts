export interface Background {
    name: string
    proficiencies: string[]
    languages?: string
    ability: string
    tools?: string[]
    equipment: string
    url: string
}

export const acolyte = {
    name: 'acolyte',
    proficiencies: ['Insight', 'Religion'],
    languages: 'Two of your choice.',
    ability: 'Shelter of the Faithful: Free healing and care at a temple, shrine, or other established presence of your faith.',
    equipment: 'A holy symbol (a gift to you when you entered the priesthood), a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a pouch containing 15gp',
    url: 'http://dnd5e.wikidot.com/background:acolyte'
}

export const charlatan = {
    name: 'charlatan',
    proficiencies: ['Deception', 'Sleight of Hand'],
    tools: ['Disguise kit', 'Forgery kit'],
    ability: 'False Identity: You have a second identity with established documentation, acquaintances, and disguises. Additionally, you can forge any document as long as youve seen an example of the document youre trying to copy',
    equipment: 'A set of fine clothes, a disguise kit, tools of the con of your choice (ten stoppered bottles filled with colored liquid, a set of weighted dice, a deck of marked cards, or a signet ring of an imaginary duke), and a pouch containing 15gp',
    url: 'http://dnd5e.wikidot.com/background:charlatan'
}

export const criminal = {
    name: 'criminal',
    proficiencies: ['Deception', 'Stealth'],
    tools: ["Thieve's tools", "One type of gaming set"],
    ability: 'Criminal Contact: You have a trustworth and reliable contact that can get you into contact with a network of other criminals.',
    equipment: ' A crowbar, a set of dark common clothes including a hood, and a pouch containing 15gp',
    url: 'http://dnd5e.wikidot.com/background:criminal'
}

export const entertainer = {
    name: 'entertainer',
    proficiencies: ['Acrobatics', 'Performance'],
    tools: ['Disguise kit', 'One type of musical instrument'],
    ability: 'By Popular Demand: You can always find a place to perform and at such a place, you receive free lodging and food. Your performance makes you something of a local figure and strangers recognize you in a town where you have performed and typically like you.',
    equipment: 'A musical instrument (one of your choice), the favor of an admirer (love letter, lock of hair, or trinket), a costume, and a pouch containing 15gp',
    url: 'http://dnd5e.wikidot.com/background:entertainer'
}

export const folkhero = {
    name: 'folkhero',
    proficiencies: ['Animal Handling', 'Survival'],
    tools: ['One type of artisan\'s tools', 'Vehicles(land)'],
    ability: 'Rustic Hospitality: The comon folk love you and you can find a place to hide, rest, or recuperate among other commoners unless you have shown yourself to be a danger to them.',
    equipment: 'A set of artisans tools (one of your choice), a shovel, an iron pot, a set of common clothes, and a pouch containing 10gp',
    url: 'http://dnd5e.wikidot.com/background:folk-hero'
}

export const gladiator = {
    name: 'gladiator',
    proficiencies: ['Acrobatics', 'Performance'],
    tools: ['Disguise kit', 'One type of musical instrument'],
    ability: 'By Popular Demand: You can always find a place to perform and at such a place, you receive free lodging and food. Your performance makes you something of a local figure and strangers recognize you in a town where you have performed and typically like you.',
    equipment: ' A musical instrument (one of your choice), the favor of an admirer (love letter, lock of hair, or trinket), a costume, and a pouch containing 15gp',
    url: 'http://dnd5e.wikidot.com/background:entertainer'
}

export const guildartisan = {
    name: 'guildartisan',
    proficiencies: ['Insight', 'Persuasion'],
    tools: ['One type of artisan\'s tools'],
    languages: 'One language of your choice',
    ability: 'Guild Membership: Membership to local guildhalls. Your guild supports you in case of lodging, food, or in criminal proceedings. You must pay 5gp dues each month.',
    equipment: "A set of artisan's tools (one of your choice), a letter of introduction from your guild, a set of traveler's clothes, and a pouch containing 15gp",
    url: 'http://dnd5e.wikidot.com/background:guild-artisan'
}

export const hermit = {
    name: 'hermit',
    proficiencies: ['Medicine', 'Religion'],
    tools: ['Herbalism kit'],
    languages: 'One language of your choice',
    ability: 'Discovery: You have access to a powerful and unique discovery based on the nature of your seclusion. It could be a location, a truth, etc... Work with your DM to determine the details of your discovery and its impact on the campaign.',
    equipment: 'A scroll case stuffed full of notes from your studies or prayers, a winter blanket, a set of common clothes, an herbalism kit, and 5gp',
    url: 'http://dnd5e.wikidot.com/background:hermit'
}

export const knight = {
    name: 'knight',
    proficiencies: ['History', 'Persuasion'],
    tools: ['One type of gaming set'],
    languages: 'One language of your choice',
    ability: 'Retainers: You have service of three retainers loyal to your family. They can be attendants, messengers, etc... They are commoners who can perform mundane tasks for you but will not risk their lives.',
    equipment: 'A set of fine clothes, a signet ring, a scroll of pedigree, and a purse containing 25gp',
    url: 'http://dnd5e.wikidot.com/background:noble'
}

export const noble = {
    name: 'noble',
    proficiencies: ['History', 'Persuasion'],
    tools: ['One type of gaming set'],
    languages: 'One language of your choice',
    ability: 'Position of Privilege: People are inclined to think the best of you due to your noble birth. You are welcome in high society wherever you are. You can secure an audience with a local noble if you need to.',
    equipment: 'A set of fine clothes, a signet ring, a scroll of pedigree, and a purse containing 25gp',
    url: 'http://dnd5e.wikidot.com/background:noble'
}

export const outlander = {
    name: 'outlander',
    proficiencies: ['Athletics', 'Survival'],
    tools: ['One type of musical instrument'],
    languages: 'One language of your choice',
    ability: 'Wanderer: You have an excellent memory for maps and geography and always remember the general layout of places. You can always find food and fresh water for yourself and your party.',
    equipment: "A staff, a hunting trap, a trophy from an animal you killed, a set of traveler's clothes, and a pouch containing 10gp",
    url: 'http://dnd5e.wikidot.com/background:outlander'
}

export const pirate = {
    name: 'pirate',
    proficiencies: ['Athletics', 'Perception'],
    tools: ["Navigator's tools", 'Vehicles(water)'],
    ability: 'Bad Reputation: No matter where you go, people are afraid of you due to your reputation. You can get away with minor criminal offenses and most people won\'t pursue justice.',
    equipment: 'A belaying pin (club), 50 feet of silk rope, a lucky charm such as a rabbit foot or a small stone with a hole in the center (or you may roll for a random trinket on the Trinkets table in chapter 5), a set of common clothes, and a pouch containing 10gp',
    url: 'http://dnd5e.wikidot.com/background:sailor'
}

export const sage = {
    name: 'sage',
    proficiencies: ['Arcana', 'History'],
    languages: 'Two languages of your choice',
    ability: 'Researcher: When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it.',
    equipment: ' A bottle of ink, a quill, a small knife, a letter from a dead colleague posing a question you have not yet been able to answer, a set of common clothes, and a pouch containing 10gp',
    url: 'http://dnd5e.wikidot.com/background:sage'
}

export const sailor = {
    name: 'sailor',
    proficiencies: ['Athletics', 'Perception'],
    tools: ["Navigator's tools", 'Vehicles(water)'],
    ability: 'Ship\'s Passage: When you need to, you can secure free passage on a sailing ship for you and your party. In return for passage, you and your party are expected to assist the crew during the voyage.',
    equipment: 'A belaying pin (club), 50 feet of silk rope, a lucky charm such as a rabbit foot or a small stone with a hole in the center (or you may roll for a random trinket on the Trinkets table in chapter 5), a set of common clothes, and a pouch containing 10gp',
    url: "http://dnd5e.wikidot.com/background:sailor"
}

export const soldier = {
    name: 'soldier',
    proficiencies: ['Athletics', 'Intimidation'],
    tools: ['One type of gaming set', 'Vehicles(land)'],
    ability: 'Military Rank: You have a military rank from your career as a soldier. Soldiers still loyal to your former org still recognize your authority and influence and they defer to you if they are of a lower rank. You can exert influence over other soldiers and gain assistance from them.',
    equipment: 'An insignia of rank, a trophy taken from a fallen enemy (a dagger, broken blade, or piece of a banner), a set of bone dice or a deck of cards, a set of common clothes, and a pouch containing 10gp',
    url: 'http://dnd5e.wikidot.com/background:soldier'
}

export const urchin = {
    name: 'urchin',
    proficiencies: ['Sleight of Hand', 'Stealth'],
    tools: ['Disguise kit', 'Thieves tools'],
    ability: 'City Secrets: You know the secret patterns and flow to cities and can find passages others would miss. When not in combat, you and your companions can travel between any two locations in the city twice as fast as normal.',
    equipment: 'A small knife, a map of the city you grew up in, a pet mouse, a token to remember your parents by, a set of common clothes, and a pouch containing 10gp',
    url: 'http://dnd5e.wikidot.com/background:urchin'
}


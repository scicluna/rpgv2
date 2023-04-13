export interface Background {
    name: string
    proficiencies: string[]
    languages?: string
    ability: string
    tools?: string[]
    equipment?: string
}

export const acolyte = {
    name: 'acolyte',
    proficiencies: ['Insight', 'Religion'],
    languages: 'Two of your choice.',
    ability: 'Shelter of the Faithful: Free healing and care at a temple, shrine, or other established presence of your faith.',
    equipment: 'A holy symbol (a gift to you when you entered the priesthood), a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a pouch containing 15gp'
}

export const charlatan = {
    name: 'charlatan',
    proficiencies: ['Deception', 'Sleight of Hand'],
    tools: ['Disguise kit', 'Forgery kit'],
    ability: 'False Identity: You have a second identity with established documentation, acquaintances, and disguises. Additionally, you can forge any document as long as youve seen an example of the document youre trying to copy',
    equipment: 'A set of fine clothes, a disguise kit, tools of the con of your choice (ten stoppered bottles filled with colored liquid, a set of weighted dice, a deck of marked cards, or a signet ring of an imaginary duke), and a pouch containing 15gp'
}

export const criminal = {
    name: 'criminal',
    proficiencies: ['Deception', 'Stealth'],
    tools: ["Thieve's tools", "One type of gaming set"],
    ability: 'Criminal Contact: You have a trustworth and reliable contact that can get you into contact with a network of other criminals.',
    equipment: ''
}

export const entertainer = {
    name: 'entertainer',
    proficiencies: ['Acrobatics', 'Performance'],
    tools: ['Disguise kit', 'One type of musical instrument'],
    ability: 'By Popular Demand: You can always find a place to perform and at such a place, you receive free lodging and food. Your performance makes you something of a local figure and strangers recognize you in a town where you have performed and typically like you.',
    equipment: ''
}

export const folkhero = {
    name: 'folkhero',
    proficiencies: ['Animal Handling', 'Survival'],
    tools: ['One type of artisan\'s tools', 'Vehicles(land)'],
    ability: 'Rustic Hospitality: The comon folk love you and you can find a place to hide, rest, or recuperate among other commoners unless you have shown yourself to be a danger to them.',
    equipment: ''
}

export const gladiator = {
    name: 'gladiator',
    proficiencies: ['Acrobatics', 'Performance'],
    tools: ['Disguise kit', 'One type of musical instrument'],
    ability: 'By Popular Demand: You can always find a place to perform and at such a place, you receive free lodging and food. Your performance makes you something of a local figure and strangers recognize you in a town where you have performed and typically like you.',
    equipment: ''
}

export const guildartisan = {
    name: 'guildartisan',
    proficiencies: ['Insight', 'Persuasion'],
    tools: ['One type of artisan\'s tools'],
    languages: 'One language of your choice',
    ability: 'Guild Membership: Membership to local guildhalls. Your guild supports you in case of lodging, food, or in criminal proceedings. You must pay 5gp dues each month.',
    equipment: ''
}

export const hermit = {
    name: 'hermit',
    proficiencies: ['Medicine', 'Religion'],
    tools: ['Herbalism kit'],
    languages: 'One language of your choice',
    ability: 'Discovery: You have access to a powerful and unique discovery based on the nature of your seclusion. It could be a location, a truth, etc... Work with your DM to determine the details of your discovery and its impact on the campaign.',
    equipment: ''
}

export const knight = {
    name: 'knight',
    proficiencies: ['History', 'Persuasion'],
    tools: ['One type of gaming set'],
    languages: 'One language of your choice',
    ability: 'Retainers: You have service of three retainers loyal to your family. They can be attendants, messengers, etc... They are commoners who can perform mundane tasks for you but will not risk their lives.',
    equipment: ''
}

export const noble = {
    name: 'noble',
    proficiencies: ['History', 'Persuasion'],
    tools: ['One type of gaming set'],
    languages: 'One language of your choice',
    ability: 'Position of Privilege: People are inclined to think the best of you due to your noble birth. You are welcome in high society wherever you are. You can secure an audience with a local noble if you need to.',
    equipment: ''
}

export const outlander = {
    name: 'outlander',
    proficiencies: ['Athletics', 'Survival'],
    tools: ['One type of musical instrument'],
    languages: 'One language of your choice',
    ability: 'Wanderer: You have an excellent memory for maps and geography and always remember the general layout of places. You can always find food and fresh water for yourself and your party.',
    equipment: ''
}

export const pirate = {
    name: 'pirate',
    proficiencies: ['Athletics', 'Perception'],
    tools: ["Navigator's tools", 'Vehicles(water)'],
    ability: 'Bad Reputation: No matter where you go, people are afraid of you due to your reputation. You can get away with minor criminal offenses and most people won\'t pursue justice.',
    equipment: ''
}

export const sage = {
    name: 'sage',
    proficiencies: ['Arcana', 'History'],
    languages: 'Two languages of your choice',
    ability: 'Researcher: When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it.',
    equipment: ''
}

export const sailor = {
    name: 'sailor',
    proficiencies: ['Athletics', 'Perception'],
    tools: ["Navigator's tools", 'Vehicles(water)'],
    ability: 'Ship\'s Passage: When you need to, you can secure free passage on a sailing ship for you and your party. In return for passage, you and your party are expected to assist the crew during the voyage.',
    equipment: ''
}

export const soldier = {
    name: 'soldier',
    proficiencies: ['Athletics', 'Intimidation'],
    tools: ['One type of gaming set', 'Vehicles(land)'],
    ability: 'Military Rank: You have a military rank from your career as a soldier. Soldiers still loyal to your former org still recognize your authority and influence and they defer to you if they are of a lower rank. You can exert influence over other soldiers and gain assistance from them.',
    equipment: ''
}

export const urchin = {
    name: 'urchin',
    proficiencies: ['Sleight of Hand', 'Stealth'],
    tools: ['Disguise kit', 'Thieves tools'],
    ability: 'City Secrets: You know the secret patterns and flow to cities and can find passages others would miss. When not in combat, you and your companions can travel between any two locations in the city twice as fast as normal.',
    equipment: ''
}


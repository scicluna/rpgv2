interface AbilityScore {
    index: string;
    name: string;
    url: string;
}

interface Proficiency {
    index: string;
    name: string;
    url: string;
}

interface Equipment {
    index: string;
    name: string;
    url: string;
}

interface StartingEquipment {
    equipment: Equipment;
    quantity: number;
}

interface Option {
    option_type: string;
    item?: Proficiency;
    count?: number;
    of?: Equipment;
    choice?: OptionChoice;
}

interface OptionChoice {
    desc: string;
    choose: number;
    type: string;
    from: From;
}

interface From {
    option_set_type: string;
    options?: Option[];
    equipment_category?: Proficiency;
}

interface ProficiencyChoice {
    desc: string;
    choose: number;
    type: string;
    from: From;
}

interface MultiClassPrerequisite {
    ability_score: AbilityScore;
    minimum_score: number;
}

interface MultiClassing {
    prerequisites?: MultiClassPrerequisite[];
    proficiencies: Proficiency[];
}

interface Subclass {
    index: string;
    name: string;
    url: string;
}

export interface DNDClass {
    index: string;
    name: string;
    hit_die: number;
    proficiency_choices: ProficiencyChoice[];
    proficiencies: Proficiency[];
    saving_throws: AbilityScore[];
    starting_equipment: StartingEquipment[];
    starting_equipment_options: ProficiencyChoice[];
    class_levels: string;
    multi_classing?: MultiClassing;
    subclasses: Subclass[];
    abilities: string[];
    url: string;
}


export const barbarian = {
    "index": "barbarian",
    "name": "Barbarian",
    "hit_die": 12,
    "proficiency_choices": [
        {
            "desc": "Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival",
            "choose": 2,
            "type": "proficiencies",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-animal-handling",
                            "name": "Skill: Animal Handling",
                            "url": "/api/proficiencies/skill-animal-handling"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-athletics",
                            "name": "Skill: Athletics",
                            "url": "/api/proficiencies/skill-athletics"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-intimidation",
                            "name": "Skill: Intimidation",
                            "url": "/api/proficiencies/skill-intimidation"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-nature",
                            "name": "Skill: Nature",
                            "url": "/api/proficiencies/skill-nature"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-perception",
                            "name": "Skill: Perception",
                            "url": "/api/proficiencies/skill-perception"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-survival",
                            "name": "Skill: Survival",
                            "url": "/api/proficiencies/skill-survival"
                        }
                    }
                ]
            }
        }
    ],
    "proficiencies": [
        {
            "index": "light-armor",
            "name": "Light Armor",
            "url": "/api/proficiencies/light-armor"
        },
        {
            "index": "medium-armor",
            "name": "Medium Armor",
            "url": "/api/proficiencies/medium-armor"
        },
        {
            "index": "shields",
            "name": "Shields",
            "url": "/api/proficiencies/shields"
        },
        {
            "index": "simple-weapons",
            "name": "Simple Weapons",
            "url": "/api/proficiencies/simple-weapons"
        },
        {
            "index": "martial-weapons",
            "name": "Martial Weapons",
            "url": "/api/proficiencies/martial-weapons"
        },
        {
            "index": "saving-throw-str",
            "name": "Saving Throw: STR",
            "url": "/api/proficiencies/saving-throw-str"
        },
        {
            "index": "saving-throw-con",
            "name": "Saving Throw: CON",
            "url": "/api/proficiencies/saving-throw-con"
        }
    ],
    "saving_throws": [
        {
            "index": "str",
            "name": "STR",
            "url": "/api/ability-scores/str"
        },
        {
            "index": "con",
            "name": "CON",
            "url": "/api/ability-scores/con"
        }
    ],
    "starting_equipment": [
        {
            "equipment": {
                "index": "explorers-pack",
                "name": "Explorer's Pack",
                "url": "/api/equipment/explorers-pack"
            },
            "quantity": 1
        },
        {
            "equipment": {
                "index": "javelin",
                "name": "Javelin",
                "url": "/api/equipment/javelin"
            },
            "quantity": 4
        }
    ],
    "starting_equipment_options": [
        {
            "desc": "(a) a greataxe or (b) any martial melee weapon",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "greataxe",
                            "name": "Greataxe",
                            "url": "/api/equipment/greataxe"
                        }
                    },
                    {
                        "option_type": "choice",
                        "choice": {
                            "desc": "any martial melee weapon",
                            "choose": 1,
                            "type": "equipment",
                            "from": {
                                "option_set_type": "equipment_category",
                                "equipment_category": {
                                    "index": "martial-melee-weapons",
                                    "name": "Martial Melee Weapons",
                                    "url": "/api/equipment-categories/martial-melee-weapons"
                                }
                            }
                        }
                    }
                ]
            }
        },
        {
            "desc": "(a) two handaxes or (b) any simple weapon",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 2,
                        "of": {
                            "index": "handaxe",
                            "name": "Handaxe",
                            "url": "/api/equipment/handaxe"
                        }
                    },
                    {
                        "option_type": "choice",
                        "choice": {
                            "desc": "any simple weapon",
                            "choose": 1,
                            "type": "equipment",
                            "from": {
                                "option_set_type": "equipment_category",
                                "equipment_category": {
                                    "index": "simple-weapons",
                                    "name": "Simple Weapons",
                                    "url": "/api/equipment-categories/simple-weapons"
                                }
                            }
                        }
                    }
                ]
            }
        }
    ],
    "class_levels": "/api/classes/barbarian/levels",
    "multi_classing": {
        "prerequisites": [
            {
                "ability_score": {
                    "index": "str",
                    "name": "STR",
                    "url": "/api/ability-scores/str"
                },
                "minimum_score": 13
            }
        ],
        "proficiencies": [
            {
                "index": "shields",
                "name": "Shields",
                "url": "/api/proficiencies/shields"
            },
            {
                "index": "simple-weapons",
                "name": "Simple Weapons",
                "url": "/api/proficiencies/simple-weapons"
            },
            {
                "index": "martial-weapons",
                "name": "Martial Weapons",
                "url": "/api/proficiencies/martial-weapons"
            }
        ]
    },
    "subclasses": [
        {
            "index": "berserker",
            "name": "Berserker",
            "url": "/api/subclasses/berserker"
        }
    ],
    "abilities": ["Rage: In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.", "Unarmored Defense: While wearing no armor: AC = 10 + DEX MOD + CON MOD."],
    "url": "https://www.5esrd.com/database/class/barbarian/"
}

export const bard = {
    "index": "bard",
    "name": "Bard",
    "hit_die": 8,
    "proficiency_choices": [
        {
            "desc": "Choose any three",
            "choose": 3,
            "type": "proficiencies",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-acrobatics",
                            "name": "Skill: Acrobatics",
                            "url": "/api/proficiencies/skill-acrobatics"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-animal-handling",
                            "name": "Skill: Animal Handling",
                            "url": "/api/proficiencies/skill-animal-handling"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-arcana",
                            "name": "Skill: Arcana",
                            "url": "/api/proficiencies/skill-arcana"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-athletics",
                            "name": "Skill: Athletics",
                            "url": "/api/proficiencies/skill-athletics"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-deception",
                            "name": "Skill: Deception",
                            "url": "/api/proficiencies/skill-deception"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-history",
                            "name": "Skill: History",
                            "url": "/api/proficiencies/skill-history"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-insight",
                            "name": "Skill: Insight",
                            "url": "/api/proficiencies/skill-insight"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-intimidation",
                            "name": "Skill: Intimidation",
                            "url": "/api/proficiencies/skill-intimidation"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-investigation",
                            "name": "Skill: Investigation",
                            "url": "/api/proficiencies/skill-investigation"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-medicine",
                            "name": "Skill: Medicine",
                            "url": "/api/proficiencies/skill-medicine"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-nature",
                            "name": "Skill: Nature",
                            "url": "/api/proficiencies/skill-nature"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-perception",
                            "name": "Skill: Perception",
                            "url": "/api/proficiencies/skill-perception"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-performance",
                            "name": "Skill: Performance",
                            "url": "/api/proficiencies/skill-performance"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-persuasion",
                            "name": "Skill: Persuasion",
                            "url": "/api/proficiencies/skill-persuasion"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-religion",
                            "name": "Skill: Religion",
                            "url": "/api/proficiencies/skill-religion"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-sleight-of-hand",
                            "name": "Skill: Sleight of Hand",
                            "url": "/api/proficiencies/skill-sleight-of-hand"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-stealth",
                            "name": "Skill: Stealth",
                            "url": "/api/proficiencies/skill-stealth"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-survival",
                            "name": "Skill: Survival",
                            "url": "/api/proficiencies/skill-survival"
                        }
                    }
                ]
            }
        },
        {
            "desc": "Three musical instruments of your choice",
            "choose": 3,
            "type": "proficiencies",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "bagpipes",
                            "name": "Bagpipes",
                            "url": "/api/proficiencies/bagpipes"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "drum",
                            "name": "Drum",
                            "url": "/api/proficiencies/drum"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "dulcimer",
                            "name": "Dulcimer",
                            "url": "/api/proficiencies/dulcimer"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "flute",
                            "name": "Flute",
                            "url": "/api/proficiencies/flute"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "lute",
                            "name": "Lute",
                            "url": "/api/proficiencies/lute"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "lyre",
                            "name": "Lyre",
                            "url": "/api/proficiencies/lyre"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "horn",
                            "name": "Horn",
                            "url": "/api/proficiencies/horn"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "pan-flute",
                            "name": "Pan flute",
                            "url": "/api/proficiencies/pan-flute"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "shawm",
                            "name": "Shawm",
                            "url": "/api/proficiencies/shawm"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "viol",
                            "name": "Viol",
                            "url": "/api/proficiencies/viol"
                        }
                    }
                ]
            }
        }
    ],
    "proficiencies": [
        {
            "index": "light-armor",
            "name": "Light Armor",
            "url": "/api/proficiencies/light-armor"
        },
        {
            "index": "simple-weapons",
            "name": "Simple Weapons",
            "url": "/api/proficiencies/simple-weapons"
        },
        {
            "index": "longswords",
            "name": "Longswords",
            "url": "/api/proficiencies/longswords"
        },
        {
            "index": "rapiers",
            "name": "Rapiers",
            "url": "/api/proficiencies/rapiers"
        },
        {
            "index": "shortswords",
            "name": "Shortswords",
            "url": "/api/proficiencies/shortswords"
        },
        {
            "index": "hand-crossbows",
            "name": "Hand crossbows",
            "url": "/api/proficiencies/hand-crossbows"
        },
        {
            "index": "saving-throw-dex",
            "name": "Saving Throw: DEX",
            "url": "/api/proficiencies/saving-throw-dex"
        },
        {
            "index": "saving-throw-cha",
            "name": "Saving Throw: CHA",
            "url": "/api/proficiencies/saving-throw-cha"
        }
    ],
    "saving_throws": [
        {
            "index": "dex",
            "name": "DEX",
            "url": "/api/ability-scores/dex"
        },
        {
            "index": "cha",
            "name": "CHA",
            "url": "/api/ability-scores/cha"
        }
    ],
    "starting_equipment": [
        {
            "equipment": {
                "index": "leather-armor",
                "name": "Leather Armor",
                "url": "/api/equipment/leather-armor"
            },
            "quantity": 1
        },
        {
            "equipment": {
                "index": "dagger",
                "name": "Dagger",
                "url": "/api/equipment/dagger"
            },
            "quantity": 1
        }
    ],
    "starting_equipment_options": [
        {
            "desc": "(a) a rapier, (b) a longsword, or (c) any simple weapon",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "rapier",
                            "name": "Rapier",
                            "url": "/api/equipment/rapier"
                        }
                    },
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "longsword",
                            "name": "Longsword",
                            "url": "/api/equipment/longsword"
                        }
                    },
                    {
                        "option_type": "choice",
                        "choice": {
                            "desc": "any simple weapon",
                            "choose": 1,
                            "type": "equipment",
                            "from": {
                                "option_set_type": "equipment_category",
                                "equipment_category": {
                                    "index": "simple-weapons",
                                    "name": "Simple Weapons",
                                    "url": "/api/equipment-categories/simple-weapons"
                                }
                            }
                        }
                    }
                ]
            }
        },
        {
            "desc": "(a) a diplomat’s pack or (b) an entertainer’s pack",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "diplomats-pack",
                            "name": "Diplomat's Pack",
                            "url": "/api/equipment/diplomats-pack"
                        }
                    },
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "entertainers-pack",
                            "name": "Entertainer's Pack",
                            "url": "/api/equipment/entertainers-pack"
                        }
                    }
                ]
            }
        },
        {
            "desc": "(a) a lute or (b) any other musical instrument",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "lute",
                            "name": "Lute",
                            "url": "/api/equipment/lute"
                        }
                    },
                    {
                        "option_type": "choice",
                        "choice": {
                            "desc": "any other musical instrument",
                            "choose": 1,
                            "type": "equipment",
                            "from": {
                                "option_set_type": "equipment_category",
                                "equipment_category": {
                                    "index": "musical-instruments",
                                    "name": "Musical Instruments",
                                    "url": "/api/equipment-categories/musical-instruments"
                                }
                            }
                        }
                    }
                ]
            }
        }
    ],
    "class_levels": "/api/classes/bard/levels",
    "multi_classing": {
        "prerequisites": [
            {
                "ability_score": {
                    "index": "cha",
                    "name": "CHA",
                    "url": "/api/ability-scores/cha"
                },
                "minimum_score": 13
            }
        ],
        "proficiencies": [
            {
                "index": "light-armor",
                "name": "Light Armor",
                "url": "/api/proficiencies/light-armor"
            }
        ],
        "proficiency_choices": [
            {
                "desc": "skill",
                "choose": 1,
                "type": "proficiencies",
                "from": {
                    "option_set_type": "options_array",
                    "options": [
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-acrobatics",
                                "name": "Skill: Acrobatics",
                                "url": "/api/proficiencies/skill-acrobatics"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-animal-handling",
                                "name": "Skill: Animal Handling",
                                "url": "/api/proficiencies/skill-animal-handling"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-arcana",
                                "name": "Skill: Arcana",
                                "url": "/api/proficiencies/skill-arcana"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-athletics",
                                "name": "Skill: Athletics",
                                "url": "/api/proficiencies/skill-athletics"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-deception",
                                "name": "Skill: Deception",
                                "url": "/api/proficiencies/skill-deception"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-history",
                                "name": "Skill: History",
                                "url": "/api/proficiencies/skill-history"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-insight",
                                "name": "Skill: Insight",
                                "url": "/api/proficiencies/skill-insight"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-intimidation",
                                "name": "Skill: Intimidation",
                                "url": "/api/proficiencies/skill-intimidation"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-investigation",
                                "name": "Skill: Investigation",
                                "url": "/api/proficiencies/skill-investigation"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-medicine",
                                "name": "Skill: Medicine",
                                "url": "/api/proficiencies/skill-medicine"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-nature",
                                "name": "Skill: Nature",
                                "url": "/api/proficiencies/skill-nature"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-perception",
                                "name": "Skill: Perception",
                                "url": "/api/proficiencies/skill-perception"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-performance",
                                "name": "Skill: Performance",
                                "url": "/api/proficiencies/skill-performance"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-persuasion",
                                "name": "Skill: Persuasion",
                                "url": "/api/proficiencies/skill-persuasion"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-religion",
                                "name": "Skill: Religion",
                                "url": "/api/proficiencies/skill-religion"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-sleight-of-hand",
                                "name": "Skill: Sleight of Hand",
                                "url": "/api/proficiencies/skill-sleight-of-hand"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-stealth",
                                "name": "Skill: Stealth",
                                "url": "/api/proficiencies/skill-stealth"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-survival",
                                "name": "Skill: Survival",
                                "url": "/api/proficiencies/skill-survival"
                            }
                        }
                    ]
                }
            },
            {
                "desc": "musical instrument",
                "choose": 1,
                "type": "proficiencies",
                "from": {
                    "option_set_type": "options_array",
                    "options": [
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "bagpipes",
                                "name": "Bagpipes",
                                "url": "/api/proficiencies/bagpipes"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "drum",
                                "name": "Drum",
                                "url": "/api/proficiencies/drum"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "dulcimer",
                                "name": "Dulcimer",
                                "url": "/api/proficiencies/dulcimer"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "flute",
                                "name": "Flute",
                                "url": "/api/proficiencies/flute"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "lute",
                                "name": "Lute",
                                "url": "/api/proficiencies/lute"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "lyre",
                                "name": "Lyre",
                                "url": "/api/proficiencies/lyre"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "horn",
                                "name": "Horn",
                                "url": "/api/proficiencies/horn"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "pan-flute",
                                "name": "Pan flute",
                                "url": "/api/proficiencies/pan-flute"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "shawm",
                                "name": "Shawm",
                                "url": "/api/proficiencies/shawm"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "viol",
                                "name": "Viol",
                                "url": "/api/proficiencies/viol"
                            }
                        }
                    ]
                }
            }
        ]
    },
    "subclasses": [
        {
            "index": "lore",
            "name": "Lore",
            "url": "/api/subclasses/lore"
        }
    ],
    "spellcasting": {
        "level": 1,
        "spellcasting_ability": {
            "index": "cha",
            "name": "CHA",
            "url": "/api/ability-scores/cha"
        },
        "info": [
            {
                "name": "Cantrips",
                "desc": [
                    "You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table."
                ]
            },
            {
                "name": "Spell Slots",
                "desc": [
                    "The Bard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                    "For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot."
                ]
            },
            {
                "name": "Spells Known of 1st Level and Higher",
                "desc": [
                    "You know four 1st-level spells of your choice from the bard spell list.",
                    "The Spells Known column of the Bard table shows when you learn more bard spells of your choice.",
                    "Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.",
                    "Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots."
                ]
            },
            {
                "name": "Spellcasting Ability",
                "desc": [
                    "Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.",
                    "Spell save DC = 8 + your proficiency bonus + your Charisma modifier.",
                    "Spell attack modifier = your proficiency bonus + your Charisma modifier."
                ]
            },
            {
                "name": "Ritual Casting",
                "desc": [
                    "You can cast any bard spell you know as a ritual if that spell has the ritual tag."
                ]
            },
            {
                "name": "Spellcasting Focus",
                "desc": [
                    "You can use a musical instrument (see Equipment) as a spellcasting focus for your bard spells."
                ]
            }
        ]
    },
    "spells": "/api/classes/bard/spells",
    "abilities": ["Bardic Inspiration: Bonus action +1d6 to a roll", "Spellcasting"],
    "url": "https://www.5esrd.com/database/class/bard/"
}

export const cleric = {
    "index": "cleric",
    "name": "Cleric",
    "hit_die": 8,
    "proficiency_choices": [
        {
            "desc": "Choose two from History, Insight, Medicine, Persuasion, and Religion",
            "choose": 2,
            "type": "proficiencies",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-history",
                            "name": "Skill: History",
                            "url": "/api/proficiencies/skill-history"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-insight",
                            "name": "Skill: Insight",
                            "url": "/api/proficiencies/skill-insight"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-medicine",
                            "name": "Skill: Medicine",
                            "url": "/api/proficiencies/skill-medicine"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-persuasion",
                            "name": "Skill: Persuasion",
                            "url": "/api/proficiencies/skill-persuasion"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-religion",
                            "name": "Skill: Religion",
                            "url": "/api/proficiencies/skill-religion"
                        }
                    }
                ]
            }
        }
    ],
    "proficiencies": [
        {
            "index": "light-armor",
            "name": "Light Armor",
            "url": "/api/proficiencies/light-armor"
        },
        {
            "index": "medium-armor",
            "name": "Medium Armor",
            "url": "/api/proficiencies/medium-armor"
        },
        {
            "index": "shields",
            "name": "Shields",
            "url": "/api/proficiencies/shields"
        },
        {
            "index": "simple-weapons",
            "name": "Simple Weapons",
            "url": "/api/proficiencies/simple-weapons"
        },
        {
            "index": "saving-throw-wis",
            "name": "Saving Throw: WIS",
            "url": "/api/proficiencies/saving-throw-wis"
        },
        {
            "index": "saving-throw-cha",
            "name": "Saving Throw: CHA",
            "url": "/api/proficiencies/saving-throw-cha"
        }
    ],
    "saving_throws": [
        {
            "index": "wis",
            "name": "WIS",
            "url": "/api/ability-scores/wis"
        },
        {
            "index": "cha",
            "name": "CHA",
            "url": "/api/ability-scores/cha"
        }
    ],
    "starting_equipment": [
        {
            "equipment": {
                "index": "shield",
                "name": "Shield",
                "url": "/api/equipment/shield"
            },
            "quantity": 1
        }
    ],
    "starting_equipment_options": [
        {
            "desc": "(a) a mace or (b) a warhammer (if proficient)",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "mace",
                            "name": "Mace",
                            "url": "/api/equipment/mace"
                        }
                    },
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "warhammer",
                            "name": "Warhammer",
                            "url": "/api/equipment/warhammer"
                        },
                        "prerequisites": [
                            {
                                "type": "proficiency",
                                "proficiency": {
                                    "index": "warhammers",
                                    "name": "Warhammers",
                                    "url": "/api/proficiencies/warhammers"
                                }
                            }
                        ]
                    }
                ]
            }
        },
        {
            "desc": "(a) scale mail, (b) leather armor, or (c) chain mail (if proficient)",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "scale-mail",
                            "name": "Scale Mail",
                            "url": "/api/equipment/scale-mail"
                        }
                    },
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "leather-armor",
                            "name": "Leather Armor",
                            "url": "/api/equipment/leather-armor"
                        }
                    },
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "chain-mail",
                            "name": "Chain Mail",
                            "url": "/api/equipment/chain-mail"
                        },
                        "prerequisites": [
                            {
                                "type": "proficiency",
                                "proficiency": {
                                    "index": "chain-mail",
                                    "name": "Chain Mail",
                                    "url": "/api/proficiencies/chain-mail"
                                }
                            }
                        ]
                    }
                ]
            }
        },
        {
            "desc": "(a) a light crossbow and 20 bolts or (b) any simple weapon",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "multiple",
                        "items": [
                            {
                                "option_type": "counted_reference",
                                "count": 1,
                                "of": {
                                    "index": "crossbow-light",
                                    "name": "Crossbow, light",
                                    "url": "/api/equipment/crossbow-light"
                                }
                            },
                            {
                                "option_type": "counted_reference",
                                "count": 20,
                                "of": {
                                    "index": "crossbow-bolt",
                                    "name": "Crossbow bolt",
                                    "url": "/api/equipment/crossbow-bolt"
                                }
                            }
                        ]
                    },
                    {
                        "option_type": "choice",
                        "choice": {
                            "desc": "any simple weapon",
                            "choose": 1,
                            "type": "equipment",
                            "from": {
                                "option_set_type": "equipment_category",
                                "equipment_category": {
                                    "index": "simple-weapons",
                                    "name": "Simple Weapons",
                                    "url": "/api/equipment-categories/simple-weapons"
                                }
                            }
                        }
                    }
                ]
            }
        },
        {
            "desc": "(a) a priest’s pack or (b) an explorer’s pack",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "priests-pack",
                            "name": "Priest's Pack",
                            "url": "/api/equipment/priests-pack"
                        }
                    },
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "explorers-pack",
                            "name": "Explorer's Pack",
                            "url": "/api/equipment/explorers-pack"
                        }
                    }
                ]
            }
        },
        {
            "desc": "holy symbol",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "equipment_category",
                "equipment_category": {
                    "index": "holy-symbols",
                    "name": "Holy Symbols",
                    "url": "/api/equipment-categories/holy-symbols"
                }
            }
        }
    ],
    "class_levels": "/api/classes/cleric/levels",
    "multi_classing": {
        "prerequisites": [
            {
                "ability_score": {
                    "index": "wis",
                    "name": "WIS",
                    "url": "/api/ability-scores/wis"
                },
                "minimum_score": 13
            }
        ],
        "proficiencies": [
            {
                "index": "light-armor",
                "name": "Light Armor",
                "url": "/api/proficiencies/light-armor"
            },
            {
                "index": "medium-armor",
                "name": "Medium Armor",
                "url": "/api/proficiencies/medium-armor"
            },
            {
                "index": "shields",
                "name": "Shields",
                "url": "/api/proficiencies/shields"
            }
        ]
    },
    "subclasses": [
        {
            "index": "life",
            "name": "Life",
            "url": "/api/subclasses/life"
        }
    ],
    "spellcasting": {
        "level": 1,
        "spellcasting_ability": {
            "index": "wis",
            "name": "WIS",
            "url": "/api/ability-scores/wis"
        },
        "info": [
            {
                "name": "Cantrips",
                "desc": [
                    "At 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table."
                ]
            },
            {
                "name": "Preparing and Casting Spells",
                "desc": [
                    "The Cleric table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                    "You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.",
                    "For example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
                    "You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list."
                ]
            },
            {
                "name": "Spellcasting Ability",
                "desc": [
                    "Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.",
                    "Spell save DC = 8 + your proficiency bonus + your Wisdom modifier",
                    "Spell attack modifier = your proficiency bonus + your Wisdom modifier"
                ]
            },
            {
                "name": "Ritual Casting",
                "desc": [
                    "You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared."
                ]
            },
            {
                "name": "Spellcasting Focus",
                "desc": [
                    "You can use a holy symbol (see Equipment) as a spellcasting focus for your cleric spells."
                ]
            }
        ]
    },
    "spells": "/api/classes/cleric/spells",
    "abilities": ["Divine Domain: Choose a domain related to your diety granting you domain spells and other class features.", "Spellcasting"],
    "url": "https://www.5esrd.com/database/class/cleric/"
}

export const druid = {
    "index": "druid",
    "name": "Druid",
    "hit_die": 8,
    "proficiency_choices": [
        {
            "desc": "Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival",
            "choose": 2,
            "type": "proficiencies",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-arcana",
                            "name": "Skill: Arcana",
                            "url": "/api/proficiencies/skill-arcana"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-animal-handling",
                            "name": "Skill: Animal Handling",
                            "url": "/api/proficiencies/skill-animal-handling"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-insight",
                            "name": "Skill: Insight",
                            "url": "/api/proficiencies/skill-insight"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-medicine",
                            "name": "Skill: Medicine",
                            "url": "/api/proficiencies/skill-medicine"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-nature",
                            "name": "Skill: Nature",
                            "url": "/api/proficiencies/skill-nature"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-perception",
                            "name": "Skill: Perception",
                            "url": "/api/proficiencies/skill-perception"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-religion",
                            "name": "Skill: Religion",
                            "url": "/api/proficiencies/skill-religion"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-survival",
                            "name": "Skill: Survival",
                            "url": "/api/proficiencies/skill-survival"
                        }
                    }
                ]
            }
        }
    ],
    "proficiencies": [
        {
            "index": "light-armor",
            "name": "Light Armor",
            "url": "/api/proficiencies/light-armor"
        },
        {
            "index": "medium-armor",
            "name": "Medium Armor",
            "url": "/api/proficiencies/medium-armor"
        },
        {
            "index": "shields",
            "name": "Shields",
            "url": "/api/proficiencies/shields"
        },
        {
            "index": "clubs",
            "name": "Clubs",
            "url": "/api/proficiencies/clubs"
        },
        {
            "index": "daggers",
            "name": "Daggers",
            "url": "/api/proficiencies/daggers"
        },
        {
            "index": "javelins",
            "name": "Javelins",
            "url": "/api/proficiencies/javelins"
        },
        {
            "index": "maces",
            "name": "Maces",
            "url": "/api/proficiencies/maces"
        },
        {
            "index": "quarterstaffs",
            "name": "Quarterstaffs",
            "url": "/api/proficiencies/quarterstaffs"
        },
        {
            "index": "sickles",
            "name": "Sickles",
            "url": "/api/proficiencies/sickles"
        },
        {
            "index": "spears",
            "name": "Spears",
            "url": "/api/proficiencies/spears"
        },
        {
            "index": "darts",
            "name": "Darts",
            "url": "/api/proficiencies/darts"
        },
        {
            "index": "slings",
            "name": "Slings",
            "url": "/api/proficiencies/slings"
        },
        {
            "index": "scimitars",
            "name": "Scimitars",
            "url": "/api/proficiencies/scimitars"
        },
        {
            "index": "herbalism-kit",
            "name": "Herbalism Kit",
            "url": "/api/proficiencies/herbalism-kit"
        },
        {
            "index": "saving-throw-int",
            "name": "Saving Throw: INT",
            "url": "/api/proficiencies/saving-throw-int"
        },
        {
            "index": "saving-throw-wis",
            "name": "Saving Throw: WIS",
            "url": "/api/proficiencies/saving-throw-wis"
        }
    ],
    "saving_throws": [
        {
            "index": "int",
            "name": "INT",
            "url": "/api/ability-scores/int"
        },
        {
            "index": "wis",
            "name": "WIS",
            "url": "/api/ability-scores/wis"
        }
    ],
    "starting_equipment": [
        {
            "equipment": {
                "index": "leather-armor",
                "name": "Leather Armor",
                "url": "/api/equipment/leather-armor"
            },
            "quantity": 1
        },
        {
            "equipment": {
                "index": "explorers-pack",
                "name": "Explorer's Pack",
                "url": "/api/equipment/explorers-pack"
            },
            "quantity": 1
        }
    ],
    "starting_equipment_options": [
        {
            "desc": "(a) a wooden shield or (b) any simple weapon",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "shield",
                            "name": "Shield",
                            "url": "/api/equipment/shield"
                        }
                    },
                    {
                        "option_type": "choice",
                        "choice": {
                            "desc": "any simple weapon",
                            "choose": 1,
                            "type": "equipment",
                            "from": {
                                "option_set_type": "equipment_category",
                                "equipment_category": {
                                    "index": "simple-weapons",
                                    "name": "Simple Weapons",
                                    "url": "/api/equipment-categories/simple-weapons"
                                }
                            }
                        }
                    }
                ]
            }
        },
        {
            "desc": "(a) a scimitar or (b) any simple melee weapon",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "scimitar",
                            "name": "Scimitar",
                            "url": "/api/equipment/scimitar"
                        }
                    },
                    {
                        "option_type": "choice",
                        "choice": {
                            "desc": "any simple melee weapon",
                            "choose": 1,
                            "type": "equipment",
                            "from": {
                                "option_set_type": "equipment_category",
                                "equipment_category": {
                                    "index": "simple-melee-weapons",
                                    "name": "Simple Melee Weapons",
                                    "url": "/api/equipment-categories/simple-melee-weapons"
                                }
                            }
                        }
                    }
                ]
            }
        },
        {
            "desc": "druidic focus",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "equipment_category",
                "equipment_category": {
                    "index": "druidic-foci",
                    "name": "Druidic Foci",
                    "url": "/api/equipment-categories/druidic-foci"
                }
            }
        }
    ],
    "class_levels": "/api/classes/druid/levels",
    "multi_classing": {
        "prerequisites": [
            {
                "ability_score": {
                    "index": "wis",
                    "name": "WIS",
                    "url": "/api/ability-scores/wis"
                },
                "minimum_score": 13
            }
        ],
        "proficiencies": [
            {
                "index": "light-armor",
                "name": "Light Armor",
                "url": "/api/proficiencies/light-armor"
            },
            {
                "index": "medium-armor",
                "name": "Medium Armor",
                "url": "/api/proficiencies/medium-armor"
            },
            {
                "index": "shields",
                "name": "Shields",
                "url": "/api/proficiencies/shields"
            }
        ]
    },
    "subclasses": [
        {
            "index": "land",
            "name": "Land",
            "url": "/api/subclasses/land"
        }
    ],
    "spellcasting": {
        "level": 1,
        "spellcasting_ability": {
            "index": "wis",
            "name": "WIS",
            "url": "/api/ability-scores/wis"
        },
        "info": [
            {
                "name": "Cantrips",
                "desc": [
                    "At 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table."
                ]
            },
            {
                "name": "Preparing and Casting Spells",
                "desc": [
                    "The Druid table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                    "You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots.",
                    "For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
                    "You can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list."
                ]
            },
            {
                "name": "Spellcasting Ability",
                "desc": [
                    "Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.",
                    "Spell save DC = 8 + your proficiency bonus + your Wisdom modifier.",
                    "Spell attack modifier = your proficiency bonus + your Wisdom modifier."
                ]
            },
            {
                "name": "Ritual Casting",
                "desc": [
                    "You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared."
                ]
            },
            {
                "name": "Spellcasting Focus",
                "desc": [
                    "You can use a druidic focus (see chapter 5, \"Equipment\") as a spellcasting focus for your druid spells."
                ]
            }
        ]
    },
    "spells": "/api/classes/druid/spells",
    "abilities": ["Spellcasting"],
    "url": "https://www.5esrd.com/database/class/druid"
}

export const fighter = {
    "index": "fighter",
    "name": "Fighter",
    "hit_die": 10,
    "proficiency_choices": [
        {
            "desc": "Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival",
            "choose": 2,
            "type": "proficiencies",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-acrobatics",
                            "name": "Skill: Acrobatics",
                            "url": "/api/proficiencies/skill-acrobatics"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-animal-handling",
                            "name": "Skill: Animal Handling",
                            "url": "/api/proficiencies/skill-animal-handling"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-athletics",
                            "name": "Skill: Athletics",
                            "url": "/api/proficiencies/skill-athletics"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-history",
                            "name": "Skill: History",
                            "url": "/api/proficiencies/skill-history"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-insight",
                            "name": "Skill: Insight",
                            "url": "/api/proficiencies/skill-insight"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-intimidation",
                            "name": "Skill: Intimidation",
                            "url": "/api/proficiencies/skill-intimidation"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-perception",
                            "name": "Skill: Perception",
                            "url": "/api/proficiencies/skill-perception"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-survival",
                            "name": "Skill: Survival",
                            "url": "/api/proficiencies/skill-survival"
                        }
                    }
                ]
            }
        }
    ],
    "proficiencies": [
        {
            "index": "all-armor",
            "name": "All armor",
            "url": "/api/proficiencies/all-armor"
        },
        {
            "index": "shields",
            "name": "Shields",
            "url": "/api/proficiencies/shields"
        },
        {
            "index": "simple-weapons",
            "name": "Simple Weapons",
            "url": "/api/proficiencies/simple-weapons"
        },
        {
            "index": "martial-weapons",
            "name": "Martial Weapons",
            "url": "/api/proficiencies/martial-weapons"
        },
        {
            "index": "saving-throw-str",
            "name": "Saving Throw: STR",
            "url": "/api/proficiencies/saving-throw-str"
        },
        {
            "index": "saving-throw-con",
            "name": "Saving Throw: CON",
            "url": "/api/proficiencies/saving-throw-con"
        }
    ],
    "saving_throws": [
        {
            "index": "str",
            "name": "STR",
            "url": "/api/ability-scores/str"
        },
        {
            "index": "con",
            "name": "CON",
            "url": "/api/ability-scores/con"
        }
    ],
    "starting_equipment": [],
    "starting_equipment_options": [
        {
            "desc": "(a) chain mail or (b) leather armor, longbow, and 20 arrows",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "chain-mail",
                            "name": "Chain Mail",
                            "url": "/api/equipment/chain-mail"
                        }
                    },
                    {
                        "option_type": "multiple",
                        "items": [
                            {
                                "option_type": "counted_reference",
                                "count": 1,
                                "of": {
                                    "index": "leather-armor",
                                    "name": "Leather Armor",
                                    "url": "/api/equipment/leather-armor"
                                }
                            },
                            {
                                "option_type": "counted_reference",
                                "count": 1,
                                "of": {
                                    "index": "longbow",
                                    "name": "Longbow",
                                    "url": "/api/equipment/longbow"
                                }
                            },
                            {
                                "option_type": "counted_reference",
                                "count": 20,
                                "of": {
                                    "index": "arrow",
                                    "name": "Arrow",
                                    "url": "/api/equipment/arrow"
                                }
                            }
                        ]
                    }
                ]
            }
        },
        {
            "desc": "(a) a martial weapon and a shield or (b) two martial weapons",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "multiple",
                        "items": [
                            {
                                "option_type": "choice",
                                "choice": {
                                    "desc": "a martial weapon",
                                    "choose": 1,
                                    "type": "equipment",
                                    "from": {
                                        "option_set_type": "equipment_category",
                                        "equipment_category": {
                                            "index": "martial-weapons",
                                            "name": "Martial Weapons",
                                            "url": "/api/equipment-categories/martial-weapons"
                                        }
                                    }
                                }
                            },
                            {
                                "option_type": "counted_reference",
                                "count": 1,
                                "of": {
                                    "index": "shield",
                                    "name": "Shield",
                                    "url": "/api/equipment/shield"
                                }
                            }
                        ]
                    },
                    {
                        "option_type": "choice",
                        "choice": {
                            "desc": "two martial weapons",
                            "choose": 2,
                            "type": "equipment",
                            "from": {
                                "option_set_type": "equipment_category",
                                "equipment_category": {
                                    "index": "martial-weapons",
                                    "name": "Martial Weapons",
                                    "url": "/api/equipment-categories/martial-weapons"
                                }
                            }
                        }
                    }
                ]
            }
        },
        {
            "desc": "(a) a light crossbow and 20 bolts or (b) two handaxes",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "multiple",
                        "items": [
                            {
                                "option_type": "counted_reference",
                                "count": 1,
                                "of": {
                                    "index": "crossbow-light",
                                    "name": "Crossbow, light",
                                    "url": "/api/equipment/crossbow-light"
                                }
                            },
                            {
                                "option_type": "counted_reference",
                                "count": 20,
                                "of": {
                                    "index": "crossbow-bolt",
                                    "name": "Crossbow bolt",
                                    "url": "/api/equipment/crossbow-bolt"
                                }
                            }
                        ]
                    },
                    {
                        "option_type": "counted_reference",
                        "count": 2,
                        "of": {
                            "index": "handaxe",
                            "name": "Handaxe",
                            "url": "/api/equipment/handaxe"
                        }
                    }
                ]
            }
        },
        {
            "desc": "(a) a dungeoneer’s pack or (b) an explorer’s pack",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "dungeoneers-pack",
                            "name": "Dungeoneer's Pack",
                            "url": "/api/equipment/dungeoneers-pack"
                        }
                    },
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "explorers-pack",
                            "name": "Explorer's Pack",
                            "url": "/api/equipment/explorers-pack"
                        }
                    }
                ]
            }
        }
    ],
    "class_levels": "/api/classes/fighter/levels",
    "multi_classing": {
        "prerequisite_options": {
            "type": "ability-scores",
            "choose": 1,
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "score_prerequisite",
                        "ability_score": {
                            "index": "str",
                            "name": "STR",
                            "url": "/api/ability-scores/str"
                        },
                        "minimum_score": 13
                    },
                    {
                        "option_type": "score_prerequisite",
                        "ability_score": {
                            "index": "dex",
                            "name": "DEX",
                            "url": "/api/ability-scores/dex"
                        },
                        "minimum_score": 13
                    }
                ]
            }
        },
        "proficiencies": [
            {
                "index": "light-armor",
                "name": "Light Armor",
                "url": "/api/proficiencies/light-armor"
            },
            {
                "index": "medium-armor",
                "name": "Medium Armor",
                "url": "/api/proficiencies/medium-armor"
            },
            {
                "index": "shields",
                "name": "Shields",
                "url": "/api/proficiencies/shields"
            },
            {
                "index": "simple-weapons",
                "name": "Simple Weapons",
                "url": "/api/proficiencies/simple-weapons"
            },
            {
                "index": "martial-weapons",
                "name": "Martial Weapons",
                "url": "/api/proficiencies/martial-weapons"
            }
        ]
    },
    "subclasses": [
        {
            "index": "champion",
            "name": "Champion",
            "url": "/api/subclasses/champion"
        }
    ],
    "abilities": ["Second Wind:Once per short rest regain hp equal to 1d10+fighter level.", "Fighting Style: Pick one: Archery(ranged +2 hit) / Defense(+1 AC) / Dueling(+2 damage) / Great Weapon(reroll ones and twos for dmg)"],
    "url": "https://www.5esrd.com/database/class/fighter"
}

export const monk = {
    "index": "monk",
    "name": "Monk",
    "hit_die": 8,
    "proficiency_choices": [
        {
            "desc": "Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth",
            "choose": 2,
            "type": "proficiencies",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-acrobatics",
                            "name": "Skill: Acrobatics",
                            "url": "/api/proficiencies/skill-acrobatics"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-athletics",
                            "name": "Skill: Athletics",
                            "url": "/api/proficiencies/skill-athletics"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-history",
                            "name": "Skill: History",
                            "url": "/api/proficiencies/skill-history"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-insight",
                            "name": "Skill: Insight",
                            "url": "/api/proficiencies/skill-insight"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-religion",
                            "name": "Skill: Religion",
                            "url": "/api/proficiencies/skill-religion"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-stealth",
                            "name": "Skill: Stealth",
                            "url": "/api/proficiencies/skill-stealth"
                        }
                    }
                ]
            }
        },
        {
            "desc": "Choose one type of artisan’s tools or one musical instrument",
            "type": "proficiencies",
            "choose": 1,
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "choice",
                        "choice": {
                            "desc": "artisan's tools",
                            "type": "proficiencies",
                            "choose": 1,
                            "from": {
                                "option_set_type": "options_array",
                                "options": [
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "alchemists-supplies",
                                            "name": "Alchemist's Supplies",
                                            "url": "/api/proficiencies/alchemists-supplies"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "brewers-supplies",
                                            "name": "Brewer's Supplies",
                                            "url": "/api/proficiencies/brewers-supplies"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "calligraphers-supplies",
                                            "name": "Calligrapher's Supplies",
                                            "url": "/api/proficiencies/calligraphers-supplies"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "carpenters-tools",
                                            "name": "Carpenter's Tools",
                                            "url": "/api/proficiencies/carpenters-tools"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "cartographers-tools",
                                            "name": "Cartographer's Tools",
                                            "url": "/api/proficiencies/cartographers-tools"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "cobblers-tools",
                                            "name": "Cobbler's Tools",
                                            "url": "/api/proficiencies/cobblers-tools"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "cooks-utensils",
                                            "name": "Cook's utensils",
                                            "url": "/api/proficiencies/cooks-utensils"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "glassblowers-tools",
                                            "name": "Glassblower's Tools",
                                            "url": "/api/proficiencies/glassblowers-tools"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "jewelers-tools",
                                            "name": "Jeweler's Tools",
                                            "url": "/api/proficiencies/jewelers-tools"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "leatherworkers-tools",
                                            "name": "Leatherworker's Tools",
                                            "url": "/api/proficiencies/leatherworkers-tools"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "masons-tools",
                                            "name": "Mason's Tools",
                                            "url": "/api/proficiencies/masons-tools"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "painters-supplies",
                                            "name": "Painter's Supplies",
                                            "url": "/api/proficiencies/painters-supplies"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "potters-tools",
                                            "name": "Potter's Tools",
                                            "url": "/api/proficiencies/potters-tools"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "smiths-tools",
                                            "name": "Smith's Tools",
                                            "url": "/api/proficiencies/smiths-tools"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "tinkers-tools",
                                            "name": "Tinker's Tools",
                                            "url": "/api/proficiencies/tinkers-tools"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "weavers-tools",
                                            "name": "Weaver's Tools",
                                            "url": "/api/proficiencies/weavers-tools"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "woodcarvers-tools",
                                            "name": "Woodcarver's Tools",
                                            "url": "/api/proficiencies/woodcarvers-tools"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "disguise-kit",
                                            "name": "Disguise Kit",
                                            "url": "/api/proficiencies/disguise-kit"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "forgery-kit",
                                            "name": "Forgery Kit",
                                            "url": "/api/proficiencies/forgery-kit"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "option_type": "choice",
                        "choice": {
                            "desc": "musical instrument",
                            "type": "proficiencies",
                            "choose": 1,
                            "from": {
                                "option_set_type": "options_array",
                                "options": [
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "bagpipes",
                                            "name": "Bagpipes",
                                            "url": "/api/proficiencies/bagpipes"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "drum",
                                            "name": "Drum",
                                            "url": "/api/proficiencies/drum"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "dulcimer",
                                            "name": "Dulcimer",
                                            "url": "/api/proficiencies/dulcimer"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "flute",
                                            "name": "Flute",
                                            "url": "/api/proficiencies/flute"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "lute",
                                            "name": "Lute",
                                            "url": "/api/proficiencies/lute"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "lyre",
                                            "name": "Lyre",
                                            "url": "/api/proficiencies/lyre"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "horn",
                                            "name": "Horn",
                                            "url": "/api/proficiencies/horn"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "pan-flute",
                                            "name": "Pan flute",
                                            "url": "/api/proficiencies/pan-flute"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "shawm",
                                            "name": "Shawm",
                                            "url": "/api/proficiencies/shawm"
                                        }
                                    },
                                    {
                                        "option_type": "reference",
                                        "item": {
                                            "index": "viol",
                                            "name": "Viol",
                                            "url": "/api/proficiencies/viol"
                                        }
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        }
    ],
    "proficiencies": [
        {
            "index": "simple-weapons",
            "name": "Simple Weapons",
            "url": "/api/proficiencies/simple-weapons"
        },
        {
            "index": "shortswords",
            "name": "Shortswords",
            "url": "/api/proficiencies/shortswords"
        },
        {
            "index": "saving-throw-dex",
            "name": "Saving Throw: DEX",
            "url": "/api/proficiencies/saving-throw-dex"
        },
        {
            "index": "saving-throw-str",
            "name": "Saving Throw: STR",
            "url": "/api/proficiencies/saving-throw-str"
        }
    ],
    "saving_throws": [
        {
            "index": "str",
            "name": "STR",
            "url": "/api/ability-scores/str"
        },
        {
            "index": "dex",
            "name": "DEX",
            "url": "/api/ability-scores/dex"
        }
    ],
    "starting_equipment": [
        {
            "equipment": {
                "index": "dart",
                "name": "Dart",
                "url": "/api/equipment/dart"
            },
            "quantity": 10
        }
    ],
    "starting_equipment_options": [
        {
            "desc": "(a) a shortsword or (b) any simple weapon",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "shortsword",
                            "name": "Shortsword",
                            "url": "/api/equipment/shortsword"
                        }
                    },
                    {
                        "option_type": "choice",
                        "choice": {
                            "desc": "any simple weapon",
                            "choose": 1,
                            "type": "equipment",
                            "from": {
                                "option_set_type": "equipment_category",
                                "equipment_category": {
                                    "index": "simple-weapons",
                                    "name": "Simple Weapons",
                                    "url": "/api/equipment-categories/simple-weapons"
                                }
                            }
                        }
                    }
                ]
            }
        },
        {
            "desc": "(a) a dungeoneer’s pack or (b) an explorer’s pack",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "dungeoneers-pack",
                            "name": "Dungeoneer's Pack",
                            "url": "/api/equipment/dungeoneers-pack"
                        }
                    },
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "explorers-pack",
                            "name": "Explorer's Pack",
                            "url": "/api/equipment/explorers-pack"
                        }
                    }
                ]
            }
        }
    ],
    "class_levels": "/api/classes/monk/levels",
    "multi_classing": {
        "prerequisites": [
            {
                "ability_score": {
                    "index": "dex",
                    "name": "DEX",
                    "url": "/api/ability-scores/dex"
                },
                "minimum_score": 13
            },
            {
                "ability_score": {
                    "index": "wis",
                    "name": "WIS",
                    "url": "/api/ability-scores/wis"
                },
                "minimum_score": 13
            }
        ],
        "proficiencies": [
            {
                "index": "simple-weapons",
                "name": "Simple Weapons",
                "url": "/api/proficiencies/simple-weapons"
            },
            {
                "index": "shortswords",
                "name": "Shortswords",
                "url": "/api/proficiencies/shortswords"
            }
        ]
    },
    "subclasses": [
        {
            "index": "open-hand",
            "name": "Open Hand",
            "url": "/api/subclasses/open-hand"
        }
    ],
    "abilities": ["Unarmored Defense: When wearing no armor your AC = 10+Dex+Wis", "Martial Arts: Dex or Str for unarmed atks. They deal 1d4 damage. Extra attack as bonus action"],
    "url": "https://www.5esrd.com/database/class/monk"
}

export const paladin = {
    "index": "paladin",
    "name": "Paladin",
    "hit_die": 10,
    "proficiency_choices": [
        {
            "desc": "Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion",
            "choose": 2,
            "type": "proficiencies",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-athletics",
                            "name": "Skill: Athletics",
                            "url": "/api/proficiencies/skill-athletics"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-insight",
                            "name": "Skill: Insight",
                            "url": "/api/proficiencies/skill-insight"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-intimidation",
                            "name": "Skill: Intimidation",
                            "url": "/api/proficiencies/skill-intimidation"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-medicine",
                            "name": "Skill: Medicine",
                            "url": "/api/proficiencies/skill-medicine"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-persuasion",
                            "name": "Skill: Persuasion",
                            "url": "/api/proficiencies/skill-persuasion"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-religion",
                            "name": "Skill: Religion",
                            "url": "/api/proficiencies/skill-religion"
                        }
                    }
                ]
            }
        }
    ],
    "proficiencies": [
        {
            "index": "all-armor",
            "name": "All armor",
            "url": "/api/proficiencies/all-armor"
        },
        {
            "index": "shields",
            "name": "Shields",
            "url": "/api/proficiencies/shields"
        },
        {
            "index": "simple-weapons",
            "name": "Simple Weapons",
            "url": "/api/proficiencies/simple-weapons"
        },
        {
            "index": "martial-weapons",
            "name": "Martial Weapons",
            "url": "/api/proficiencies/martial-weapons"
        },
        {
            "index": "saving-throw-wis",
            "name": "Saving Throw: WIS",
            "url": "/api/proficiencies/saving-throw-wis"
        },
        {
            "index": "saving-throw-cha",
            "name": "Saving Throw: CHA",
            "url": "/api/proficiencies/saving-throw-cha"
        }
    ],
    "saving_throws": [
        {
            "index": "wis",
            "name": "WIS",
            "url": "/api/ability-scores/wis"
        },
        {
            "index": "cha",
            "name": "CHA",
            "url": "/api/ability-scores/cha"
        }
    ],
    "starting_equipment": [
        {
            "equipment": {
                "index": "chain-mail",
                "name": "Chain Mail",
                "url": "/api/equipment/chain-mail"
            },
            "quantity": 1
        }
    ],
    "starting_equipment_options": [
        {
            "desc": "(a) a martial weapon and a shield or (b) two martial weapons",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "multiple",
                        "items": [
                            {
                                "option_type": "choice",
                                "choice": {
                                    "desc": "a martial weapon",
                                    "choose": 1,
                                    "type": "equipment",
                                    "from": {
                                        "option_set_type": "equipment_category",
                                        "equipment_category": {
                                            "name": "Martial Weapons",
                                            "index": "martial-weapons",
                                            "url": "/api/equipment-categories/martial-weapons"
                                        }
                                    }
                                }
                            },
                            {
                                "option_type": "counted_reference",
                                "count": 1,
                                "of": {
                                    "index": "shield",
                                    "name": "Shield",
                                    "url": "/api/equipment/shield"
                                }
                            }
                        ]
                    },
                    {
                        "option_type": "choice",
                        "choice": {
                            "desc": "two martial weapons",
                            "choose": 2,
                            "type": "equipment",
                            "from": {
                                "option_set_type": "equipment_category",
                                "equipment_category": {
                                    "index": "martial-weapons",
                                    "name": "Martial Weapons",
                                    "url": "/api/equipment-categories/martial-weapons"
                                }
                            }
                        }
                    }
                ]
            }
        },
        {
            "desc": "(a) five javelins or (b) any simple melee weapon",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 5,
                        "of": {
                            "index": "javelin",
                            "name": "Javelin",
                            "url": "/api/equipment/javelin"
                        }
                    },
                    {
                        "option_type": "choice",
                        "choice": {
                            "desc": "any simple weapon",
                            "choose": 1,
                            "type": "equipment",
                            "from": {
                                "option_set_type": "equipment_category",
                                "equipment_category": {
                                    "index": "simple-weapons",
                                    "name": "Simple Weapons",
                                    "url": "/api/equipment-categories/simple-weapons"
                                }
                            }
                        }
                    }
                ]
            }
        },
        {
            "desc": "(a) a priest’s pack or (b) an explorer’s pack",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "priests-pack",
                            "name": "Priest's Pack",
                            "url": "/api/equipment/priests-pack"
                        }
                    },
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "explorers-pack",
                            "name": "Explorer's Pack",
                            "url": "/api/equipment/explorers-pack"
                        }
                    }
                ]
            }
        },
        {
            "desc": "holy symbol",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "equipment_category",
                "equipment_category": {
                    "index": "holy-symbols",
                    "name": "Holy Symbols",
                    "url": "/api/equipment-categories/holy-symbols"
                }
            }
        }
    ],
    "class_levels": "/api/classes/paladin/levels",
    "multi_classing": {
        "prerequisites": [
            {
                "ability_score": {
                    "index": "str",
                    "name": "STR",
                    "url": "/api/ability-scores/str"
                },
                "minimum_score": 13
            },
            {
                "ability_score": {
                    "index": "cha",
                    "name": "CHA",
                    "url": "/api/ability-scores/cha"
                },
                "minimum_score": 13
            }
        ],
        "proficiencies": [
            {
                "index": "light-armor",
                "name": "Light Armor",
                "url": "/api/proficiencies/light-armor"
            },
            {
                "index": "medium-armor",
                "name": "Medium Armor",
                "url": "/api/proficiencies/medium-armor"
            },
            {
                "index": "shields",
                "name": "Shields",
                "url": "/api/proficiencies/shields"
            },
            {
                "index": "simple-weapons",
                "name": "Simple Weapons",
                "url": "/api/proficiencies/simple-weapons"
            },
            {
                "index": "martial-weapons",
                "name": "Martial Weapons",
                "url": "/api/proficiencies/martial-weapons"
            }
        ]
    },
    "subclasses": [
        {
            "index": "devotion",
            "name": "Devotion",
            "url": "/api/subclasses/devotion"
        }
    ],
    "spellcasting": {
        "level": 2,
        "spellcasting_ability": {
            "index": "cha",
            "name": "CHA",
            "url": "/api/ability-scores/cha"
        },
        "info": [
            {
                "name": "Preparing and Casting Spells",
                "desc": [
                    "The Paladin table shows how many spell slots you have to cast your spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                    "You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.",
                    "For example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or a 2nd- level slot. Casting the spell doesn't remove it from your list of prepared spells.",
                    "You can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list."
                ]
            },
            {
                "name": "Spellcasting Ability",
                "desc": [
                    "Charisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.",
                    "Spell save DC = 8 + your proficiency bonus + your Charisma modifier.",
                    "Spell attack modifier = your proficiency bonus + your Charisma modifier."
                ]
            },
            {
                "name": "Spellcasting Focus",
                "desc": [
                    "You can use a holy symbol as a spellcasting focus for your paladin spells."
                ]
            }
        ]
    },
    "spells": "/api/classes/paladin/spells",
    "abilities": ["Divine Sense: Detect celestials, fiends, or undead within 60 ft. 1+cha per long rest.", "Lay on Hands: Heal 5*paladin level per long rest split as you wish."],
    "url": "https://www.5esrd.com/database/class/paladin"
}

export const ranger = {
    "index": "ranger",
    "name": "Ranger",
    "hit_die": 10,
    "proficiency_choices": [
        {
            "desc": "Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival",
            "choose": 3,
            "type": "proficiencies",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-animal-handling",
                            "name": "Skill: Animal Handling",
                            "url": "/api/proficiencies/skill-animal-handling"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-athletics",
                            "name": "Skill: Athletics",
                            "url": "/api/proficiencies/skill-athletics"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-insight",
                            "name": "Skill: Insight",
                            "url": "/api/proficiencies/skill-insight"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-investigation",
                            "name": "Skill: Investigation",
                            "url": "/api/proficiencies/skill-investigation"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-nature",
                            "name": "Skill: Nature",
                            "url": "/api/proficiencies/skill-nature"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-perception",
                            "name": "Skill: Perception",
                            "url": "/api/proficiencies/skill-perception"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-stealth",
                            "name": "Skill: Stealth",
                            "url": "/api/proficiencies/skill-stealth"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-survival",
                            "name": "Skill: Survival",
                            "url": "/api/proficiencies/skill-survival"
                        }
                    }
                ]
            }
        }
    ],
    "proficiencies": [
        {
            "index": "light-armor",
            "name": "Light Armor",
            "url": "/api/proficiencies/light-armor"
        },
        {
            "index": "medium-armor",
            "name": "Medium Armor",
            "url": "/api/proficiencies/medium-armor"
        },
        {
            "index": "shields",
            "name": "Shields",
            "url": "/api/proficiencies/shields"
        },
        {
            "index": "simple-weapons",
            "name": "Simple Weapons",
            "url": "/api/proficiencies/simple-weapons"
        },
        {
            "index": "martial-weapons",
            "name": "Martial Weapons",
            "url": "/api/proficiencies/martial-weapons"
        },
        {
            "index": "saving-throw-dex",
            "name": "Saving Throw: DEX",
            "url": "/api/proficiencies/saving-throw-dex"
        },
        {
            "index": "saving-throw-str",
            "name": "Saving Throw: STR",
            "url": "/api/proficiencies/saving-throw-str"
        }
    ],
    "saving_throws": [
        {
            "index": "str",
            "name": "STR",
            "url": "/api/ability-scores/str"
        },
        {
            "index": "dex",
            "name": "DEX",
            "url": "/api/ability-scores/dex"
        }
    ],
    "starting_equipment": [
        {
            "equipment": {
                "index": "longbow",
                "name": "Longbow",
                "url": "/api/equipment/longbow"
            },
            "quantity": 1
        },
        {
            "equipment": {
                "index": "arrow",
                "name": "Arrow",
                "url": "/api/equipment/arrow"
            },
            "quantity": 20
        }
    ],
    "starting_equipment_options": [
        {
            "desc": "(a) scale mail or (b) leather armor",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "scale-mail",
                            "name": "Scale Mail",
                            "url": "/api/equipment/scale-mail"
                        }
                    },
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "leather-armor",
                            "name": "Leather Armor",
                            "url": "/api/equipment/leather-armor"
                        }
                    }
                ]
            }
        },
        {
            "desc": "(a) two shortswords or (b) two simple melee weapons",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 2,
                        "of": {
                            "index": "shortsword",
                            "name": "Shortsword",
                            "url": "/api/equipment/shortsword"
                        }
                    },
                    {
                        "option_type": "choice",
                        "choice": {
                            "desc": "two simple melee weapons",
                            "choose": 2,
                            "type": "equipment",
                            "from": {
                                "option_set_type": "equipment_category",
                                "equipment_category": {
                                    "index": "simple-melee-weapons",
                                    "name": "Simple Melee Weapons",
                                    "url": "/api/equipment-categories/simple-melee-weapons"
                                }
                            }
                        }
                    }
                ]
            }
        },
        {
            "desc": "(a) a dungeoneer’s pack or (b) an explorer’s pack",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "dungeoneers-pack",
                            "name": "Dungeoneer's Pack",
                            "url": "/api/equipment/dungeoneers-pack"
                        }
                    },
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "explorers-pack",
                            "name": "Explorer's Pack",
                            "url": "/api/equipment/explorers-pack"
                        }
                    }
                ]
            }
        }
    ],
    "class_levels": "/api/classes/ranger/levels",
    "multi_classing": {
        "prerequisites": [
            {
                "ability_score": {
                    "index": "dex",
                    "name": "DEX",
                    "url": "/api/ability-scores/dex"
                },
                "minimum_score": 13
            },
            {
                "ability_score": {
                    "index": "wis",
                    "name": "WIS",
                    "url": "/api/ability-scores/wis"
                },
                "minimum_score": 13
            }
        ],
        "proficiencies": [
            {
                "index": "light-armor",
                "name": "Light Armor",
                "url": "/api/proficiencies/light-armor"
            },
            {
                "index": "medium-armor",
                "name": "Medium Armor",
                "url": "/api/proficiencies/medium-armor"
            },
            {
                "index": "shields",
                "name": "Shields",
                "url": "/api/proficiencies/shields"
            },
            {
                "index": "simple-weapons",
                "name": "Simple Weapons",
                "url": "/api/proficiencies/simple-weapons"
            },
            {
                "index": "martial-weapons",
                "name": "Martial Weapons",
                "url": "/api/proficiencies/martial-weapons"
            }
        ],
        "proficiency_choices": [
            {
                "choose": 1,
                "type": "proficiencies",
                "from": {
                    "option_set_type": "options_array",
                    "options": [
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-animal-handling",
                                "name": "Skill: Animal Handling",
                                "url": "/api/proficiencies/skill-animal-handling"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-athletics",
                                "name": "Skill: Athletics",
                                "url": "/api/proficiencies/skill-athletics"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-insight",
                                "name": "Skill: Insight",
                                "url": "/api/proficiencies/skill-insight"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-investigation",
                                "name": "Skill: Investigation",
                                "url": "/api/proficiencies/skill-investigation"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-nature",
                                "name": "Skill: Nature",
                                "url": "/api/proficiencies/skill-nature"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-perception",
                                "name": "Skill: Perception",
                                "url": "/api/proficiencies/skill-perception"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-stealth",
                                "name": "Skill: Stealth",
                                "url": "/api/proficiencies/skill-stealth"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-survival",
                                "name": "Skill: Survival",
                                "url": "/api/proficiencies/skill-survival"
                            }
                        }
                    ]
                }
            }
        ]
    },
    "subclasses": [
        {
            "index": "hunter",
            "name": "Hunter",
            "url": "/api/subclasses/hunter"
        }
    ],
    "spellcasting": {
        "level": 2,
        "spellcasting_ability": {
            "index": "wis",
            "name": "WIS",
            "url": "/api/ability-scores/wis"
        },
        "info": [
            {
                "name": "Spell Slots",
                "desc": [
                    "The Ranger table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                    "For example, if you know the 1st-level spell animal friendship and have a 1st-level and a 2nd-level spell slot available, you can cast animal friendship using either slot."
                ]
            },
            {
                "name": "Spells Known of 1st Level and Higher",
                "desc": [
                    "You know two 1st-level spells of your choice from the ranger spell list.",
                    "The Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level.",
                    "Additionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots."
                ]
            },
            {
                "name": "Spellcasting Ability",
                "desc": [
                    "Wisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one.",
                    "Spell save DC = 8 + your proficiency bonus + your Wisdom modifier.",
                    "Spell attack modifier = your proficiency bonus + your Wisdom modifier."
                ]
            }
        ]
    },
    "spells": "/api/classes/ranger/spells",
    "abilities": ["Favored Enemy: Choose a type of favored enemy. You gain adv on survival and int checks vs them.", "Natural Explorer: Choose one type of natural environent. Your wis/int prof bonuses are doubled in that terrain. While in your favored terrain: Difficult terrains don't slow your group's travel. Your group can't become lost. You are always alert to danger. If you travel alone, you can move stealthily at normal pace. When you forage find twice as much food. When tracking you learn additional details."],
    "url": "https://www.5esrd.com/database/class/ranger"
}

export const rogue = {
    "index": "rogue",
    "name": "Rogue",
    "hit_die": 8,
    "proficiency_choices": [
        {
            "desc": "Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth",
            "choose": 4,
            "type": "proficiencies",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-acrobatics",
                            "name": "Skill: Acrobatics",
                            "url": "/api/proficiencies/skill-acrobatics"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-athletics",
                            "name": "Skill: Athletics",
                            "url": "/api/proficiencies/skill-athletics"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-deception",
                            "name": "Skill: Deception",
                            "url": "/api/proficiencies/skill-deception"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-insight",
                            "name": "Skill: Insight",
                            "url": "/api/proficiencies/skill-insight"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-intimidation",
                            "name": "Skill: Intimidation",
                            "url": "/api/proficiencies/skill-intimidation"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-investigation",
                            "name": "Skill: Investigation",
                            "url": "/api/proficiencies/skill-investigation"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-perception",
                            "name": "Skill: Perception",
                            "url": "/api/proficiencies/skill-perception"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-performance",
                            "name": "Skill: Performance",
                            "url": "/api/proficiencies/skill-performance"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-persuasion",
                            "name": "Skill: Persuasion",
                            "url": "/api/proficiencies/skill-persuasion"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-sleight-of-hand",
                            "name": "Skill: Sleight of Hand",
                            "url": "/api/proficiencies/skill-sleight-of-hand"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-stealth",
                            "name": "Skill: Stealth",
                            "url": "/api/proficiencies/skill-stealth"
                        }
                    }
                ]
            }
        }
    ],
    "proficiencies": [
        {
            "index": "light-armor",
            "name": "Light Armor",
            "url": "/api/proficiencies/light-armor"
        },
        {
            "index": "simple-weapons",
            "name": "Simple Weapons",
            "url": "/api/proficiencies/simple-weapons"
        },
        {
            "index": "longswords",
            "name": "Longswords",
            "url": "/api/proficiencies/longswords"
        },
        {
            "index": "rapiers",
            "name": "Rapiers",
            "url": "/api/proficiencies/rapiers"
        },
        {
            "index": "shortswords",
            "name": "Shortswords",
            "url": "/api/proficiencies/shortswords"
        },
        {
            "index": "hand-crossbows",
            "name": "Hand crossbows",
            "url": "/api/proficiencies/hand-crossbows"
        },
        {
            "index": "thieves-tools",
            "name": "Thieves' Tools",
            "url": "/api/proficiencies/thieves-tools"
        },
        {
            "index": "saving-throw-dex",
            "name": "Saving Throw: DEX",
            "url": "/api/proficiencies/saving-throw-dex"
        },
        {
            "index": "saving-throw-int",
            "name": "Saving Throw: INT",
            "url": "/api/proficiencies/saving-throw-int"
        }
    ],
    "saving_throws": [
        {
            "index": "dex",
            "name": "DEX",
            "url": "/api/ability-scores/dex"
        },
        {
            "index": "int",
            "name": "INT",
            "url": "/api/ability-scores/int"
        }
    ],
    "starting_equipment": [
        {
            "equipment": {
                "index": "leather-armor",
                "name": "Leather Armor",
                "url": "/api/equipment/leather-armor"
            },
            "quantity": 1
        },
        {
            "equipment": {
                "index": "dagger",
                "name": "Dagger",
                "url": "/api/equipment/dagger"
            },
            "quantity": 2
        },
        {
            "equipment": {
                "index": "thieves-tools",
                "name": "Thieves' Tools",
                "url": "/api/equipment/thieves-tools"
            },
            "quantity": 1
        }
    ],
    "starting_equipment_options": [
        {
            "desc": "(a) a rapier or (b) a shortsword",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "rapier",
                            "name": "Rapier",
                            "url": "/api/equipment/rapier"
                        }
                    },
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "shortsword",
                            "name": "Shortsword",
                            "url": "/api/equipment/shortsword"
                        }
                    }
                ]
            }
        },
        {
            "desc": "(a) a shortbow and quiver of 20 arrows or (b) a shortsword",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "multiple",
                        "items": [
                            {
                                "option_type": "counted_reference",
                                "count": 1,
                                "of": {
                                    "index": "shortbow",
                                    "name": "Shortbow",
                                    "url": "/api/equipment/shortbow"
                                }
                            },
                            {
                                "option_type": "counted_reference",
                                "count": 20,
                                "of": {
                                    "index": "arrow",
                                    "name": "Arrow",
                                    "url": "/api/equipment/arrow"
                                }
                            }
                        ]
                    },
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "shortsword",
                            "name": "Shortsword",
                            "url": "/api/equipment/shortsword"
                        }
                    }
                ]
            }
        },
        {
            "desc": "(a) a burglar’s pack, (b) a dungeoneer’s pack, or (c) an explorer’s pack",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "burglars-pack",
                            "name": "Burglar's Pack",
                            "url": "/api/equipment/burglars-pack"
                        }
                    },
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "dungeoneers-pack",
                            "name": "Dungeoneer's Pack",
                            "url": "/api/equipment/dungeoneers-pack"
                        }
                    },
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "explorers-pack",
                            "name": "Explorer's Pack",
                            "url": "/api/equipment/explorers-pack"
                        }
                    }
                ]
            }
        }
    ],
    "class_levels": "/api/classes/rogue/levels",
    "multi_classing": {
        "prerequisites": [
            {
                "ability_score": {
                    "index": "dex",
                    "name": "DEX",
                    "url": "/api/ability-scores/dex"
                },
                "minimum_score": 13
            }
        ],
        "proficiencies": [
            {
                "index": "light-armor",
                "name": "Light Armor",
                "url": "/api/proficiencies/light-armor"
            },
            {
                "index": "thieves-tools",
                "name": "Thieves' Tools",
                "url": "/api/proficiencies/thieves-tools"
            }
        ],
        "proficiency_choices": [
            {
                "choose": 1,
                "type": "proficiencies",
                "from": {
                    "option_set_type": "options_array",
                    "options": [
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-acrobatics",
                                "name": "Skill: Acrobatics",
                                "url": "/api/proficiencies/skill-acrobatics"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-athletics",
                                "name": "Skill: Athletics",
                                "url": "/api/proficiencies/skill-athletics"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-deception",
                                "name": "Skill: Deception",
                                "url": "/api/proficiencies/skill-deception"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-insight",
                                "name": "Skill: Insight",
                                "url": "/api/proficiencies/skill-insight"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-intimidation",
                                "name": "Skill: Intimidation",
                                "url": "/api/proficiencies/skill-intimidation"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-investigation",
                                "name": "Skill: Investigation",
                                "url": "/api/proficiencies/skill-investigation"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-perception",
                                "name": "Skill: Perception",
                                "url": "/api/proficiencies/skill-perception"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-performance",
                                "name": "Skill: Performance",
                                "url": "/api/proficiencies/skill-performance"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-persuasion",
                                "name": "Skill: Persuasion",
                                "url": "/api/proficiencies/skill-persuasion"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-sleight-of-hand",
                                "name": "Skill: Sleight of Hand",
                                "url": "/api/proficiencies/skill-sleight-of-hand"
                            }
                        },
                        {
                            "option_type": "reference",
                            "item": {
                                "index": "skill-stealth",
                                "name": "Skill: Stealth",
                                "url": "/api/proficiencies/skill-stealth"
                            }
                        }
                    ]
                }
            }
        ]
    },
    "subclasses": [
        {
            "index": "thief",
            "name": "Thief",
            "url": "/api/subclasses/thief"
        }
    ],
    "abilities": ["Expertise: choose two skills/tools and double your prof bonus when using them.", "Sneak Attack: Once per turn +1d6 damage when you have advantage or have another ally in melee"],
    "url": "https://www.5esrd.com/database/class/rogue"
}

export const sorcerer = {
    "index": "sorcerer",
    "name": "Sorcerer",
    "hit_die": 6,
    "proficiency_choices": [
        {
            "desc": "Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion",
            "choose": 2,
            "type": "proficiencies",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-arcana",
                            "name": "Skill: Arcana",
                            "url": "/api/proficiencies/skill-arcana"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-deception",
                            "name": "Skill: Deception",
                            "url": "/api/proficiencies/skill-deception"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-insight",
                            "name": "Skill: Insight",
                            "url": "/api/proficiencies/skill-insight"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-intimidation",
                            "name": "Skill: Intimidation",
                            "url": "/api/proficiencies/skill-intimidation"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-persuasion",
                            "name": "Skill: Persuasion",
                            "url": "/api/proficiencies/skill-persuasion"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-religion",
                            "name": "Skill: Religion",
                            "url": "/api/proficiencies/skill-religion"
                        }
                    }
                ]
            }
        }
    ],
    "proficiencies": [
        {
            "index": "daggers",
            "name": "Daggers",
            "url": "/api/proficiencies/daggers"
        },
        {
            "index": "darts",
            "name": "Darts",
            "url": "/api/proficiencies/darts"
        },
        {
            "index": "slings",
            "name": "Slings",
            "url": "/api/proficiencies/slings"
        },
        {
            "index": "quarterstaffs",
            "name": "Quarterstaffs",
            "url": "/api/proficiencies/quarterstaffs"
        },
        {
            "index": "crossbows-light",
            "name": "Crossbows, light",
            "url": "/api/proficiencies/crossbows-light"
        },
        {
            "index": "saving-throw-con",
            "name": "Saving Throw: CON",
            "url": "/api/proficiencies/saving-throw-con"
        },
        {
            "index": "saving-throw-cha",
            "name": "Saving Throw: CHA",
            "url": "/api/proficiencies/saving-throw-cha"
        }
    ],
    "saving_throws": [
        {
            "index": "con",
            "name": "CON",
            "url": "/api/ability-scores/con"
        },
        {
            "index": "cha",
            "name": "CHA",
            "url": "/api/ability-scores/cha"
        }
    ],
    "starting_equipment": [
        {
            "equipment": {
                "index": "dagger",
                "name": "Dagger",
                "url": "/api/equipment/dagger"
            },
            "quantity": 2
        }
    ],
    "starting_equipment_options": [
        {
            "desc": "(a) a light crossbow and 20 bolts or (b) any simple weapon",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "multiple",
                        "items": [
                            {
                                "option_type": "counted_reference",
                                "count": 1,
                                "of": {
                                    "index": "crossbow-light",
                                    "name": "Crossbow, light",
                                    "url": "/api/equipment/crossbow-light"
                                }
                            },
                            {
                                "option_type": "counted_reference",
                                "count": 20,
                                "of": {
                                    "index": "crossbow-bolt",
                                    "name": "Crossbow bolt",
                                    "url": "/api/equipment/crossbow-bolt"
                                }
                            }
                        ]
                    },
                    {
                        "option_type": "choice",
                        "choice": {
                            "desc": "any simple weapon",
                            "choose": 1,
                            "type": "equipment",
                            "from": {
                                "option_set_type": "equipment_category",
                                "equipment_category": {
                                    "index": "simple-weapons",
                                    "name": "Simple Weapons",
                                    "url": "/api/equipment-categories/simple-weapons"
                                }
                            }
                        }
                    }
                ]
            }
        },
        {
            "desc": "(a) a component pouch or (b) an arcane focus",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "component-pouch",
                            "name": "Component pouch",
                            "url": "/api/equipment/component-pouch"
                        }
                    },
                    {
                        "option_type": "choice",
                        "choice": {
                            "desc": "arcane focus",
                            "choose": 1,
                            "type": "equipment",
                            "from": {
                                "option_set_type": "equipment_category",
                                "equipment_category": {
                                    "index": "arcane-foci",
                                    "name": "Arcane Foci",
                                    "url": "/api/equipment-categories/arcane-foci"
                                }
                            }
                        }
                    }
                ]
            }
        },
        {
            "desc": "(a) a dungeoneer’s pack or (b) an explorer’s pack",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "dungeoneers-pack",
                            "name": "Dungeoneer's Pack",
                            "url": "/api/equipment/dungeoneers-pack"
                        }
                    },
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "explorers-pack",
                            "name": "Explorer's Pack",
                            "url": "/api/equipment/explorers-pack"
                        }
                    }
                ]
            }
        }
    ],
    "class_levels": "/api/classes/sorcerer/levels",
    "multi_classing": {
        "prerequisites": [
            {
                "ability_score": {
                    "index": "cha",
                    "name": "CHA",
                    "url": "/api/ability-scores/cha"
                },
                "minimum_score": 13
            }
        ],
        "proficiencies": []
    },
    "subclasses": [
        {
            "index": "draconic",
            "name": "Draconic",
            "url": "/api/subclasses/draconic"
        }
    ],
    "spellcasting": {
        "level": 1,
        "spellcasting_ability": {
            "index": "cha",
            "name": "CHA",
            "url": "/api/ability-scores/cha"
        },
        "info": [
            {
                "name": "Cantrips",
                "desc": [
                    "At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table."
                ]
            },
            {
                "name": "Spell Slots",
                "desc": [
                    "The Sorcerer table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                    "For example, if you know the 1st-level spell burning hands and have a 1st-level and a 2nd-level spell slot available, you can cast burning hands using either slot."
                ]
            },
            {
                "name": "Spells Known of 1st Level and Higher",
                "desc": [
                    "You know two 1st-level spells of your choice from the sorcerer spell list.",
                    "The Spells Known column of the Sorcerer table shows when you learn more sorcerer spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level. ",
                    "Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots."
                ]
            },
            {
                "name": "Spellcasting Ability",
                "desc": [
                    "Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.",
                    "Spell save DC = 8 + your proficiency bonus + your Charisma modifier.",
                    "Spell attack modifier = your proficiency bonus + your Charisma modifier."
                ]
            },
            {
                "name": "Spellcasting Focus",
                "desc": [
                    "You can use an arcane focus as a spellcasting focus for your sorcerer spells."
                ]
            }
        ]
    },
    "spells": "/api/classes/sorcerer/spells",
    "abilities": ["Sorcerous Origin: Choose a bloodline which describes the source of your innate magical power. Your choice grants you features at 1st, 6th, 14th, and 18th level", "Spellcasting"],
    "url": "https://www.5esrd.com/database/class/sorcerer"
}

export const warlock = {
    "index": "warlock",
    "name": "Warlock",
    "hit_die": 8,
    "proficiency_choices": [
        {
            "desc": "Choose two skills from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion",
            "choose": 2,
            "type": "proficiencies",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-arcana",
                            "name": "Skill: Arcana",
                            "url": "/api/proficiencies/skill-arcana"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-deception",
                            "name": "Skill: Deception",
                            "url": "/api/proficiencies/skill-deception"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-history",
                            "name": "Skill: History",
                            "url": "/api/proficiencies/skill-history"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-intimidation",
                            "name": "Skill: Intimidation",
                            "url": "/api/proficiencies/skill-intimidation"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-investigation",
                            "name": "Skill: Investigation",
                            "url": "/api/proficiencies/skill-investigation"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-nature",
                            "name": "Skill: Nature",
                            "url": "/api/proficiencies/skill-nature"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-religion",
                            "name": "Skill: Religion",
                            "url": "/api/proficiencies/skill-religion"
                        }
                    }
                ]
            }
        }
    ],
    "proficiencies": [
        {
            "index": "light-armor",
            "name": "Light Armor",
            "url": "/api/proficiencies/light-armor"
        },
        {
            "index": "simple-weapons",
            "name": "Simple Weapons",
            "url": "/api/proficiencies/simple-weapons"
        },
        {
            "index": "saving-throw-wis",
            "name": "Saving Throw: WIS",
            "url": "/api/proficiencies/saving-throw-wis"
        },
        {
            "index": "saving-throw-cha",
            "name": "Saving Throw: CHA",
            "url": "/api/proficiencies/saving-throw-cha"
        }
    ],
    "saving_throws": [
        {
            "index": "wis",
            "name": "WIS",
            "url": "/api/ability-scores/wis"
        },
        {
            "index": "cha",
            "name": "CHA",
            "url": "/api/ability-scores/cha"
        }
    ],
    "starting_equipment": [
        {
            "equipment": {
                "index": "dagger",
                "name": "Dagger",
                "url": "/api/equipment/dagger"
            },
            "quantity": 2
        },
        {
            "equipment": {
                "index": "leather-armor",
                "name": "Leather Armor",
                "url": "/api/equipment/leather-armor"
            },
            "quantity": 1
        }
    ],
    "starting_equipment_options": [
        {
            "desc": "(a) a light crossbow and 20 bolts or (b) any simple weapon",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "multiple",
                        "items": [
                            {
                                "option_type": "counted_reference",
                                "count": 1,
                                "of": {
                                    "index": "crossbow-light",
                                    "name": "Crossbow, light",
                                    "url": "/api/equipment/crossbow-light"
                                }
                            },
                            {
                                "option_type": "counted_reference",
                                "count": 20,
                                "of": {
                                    "index": "crossbow-bolt",
                                    "name": "Crossbow bolt",
                                    "url": "/api/equipment/crossbow-bolt"
                                }
                            }
                        ]
                    },
                    {
                        "option_type": "choice",
                        "choice": {
                            "desc": "any simple weapon",
                            "choose": 1,
                            "type": "equipment",
                            "from": {
                                "option_set_type": "equipment_category",
                                "equipment_category": {
                                    "index": "simple-weapons",
                                    "name": "Simple Weapons",
                                    "url": "/api/equipment-categories/simple-weapons"
                                }
                            }
                        }
                    }
                ]
            }
        },
        {
            "desc": "(a) a component pouch or (b) an arcane focus",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "component-pouch",
                            "name": "Component pouch",
                            "url": "/api/equipment/component-pouch"
                        }
                    },
                    {
                        "option_type": "choice",
                        "choice": {
                            "desc": "arcane focus",
                            "choose": 1,
                            "type": "equipment",
                            "from": {
                                "option_set_type": "equipment_category",
                                "equipment_category": {
                                    "index": "arcane-foci",
                                    "name": "Arcane Foci",
                                    "url": "/api/equipment-categories/arcane-foci"
                                }
                            }
                        }
                    }
                ]
            }
        },
        {
            "desc": "(a) a scholar’s pack or (b) a dungeoneer’s pack",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "scholars-pack",
                            "name": "Scholar's Pack",
                            "url": "/api/equipment/scholars-pack"
                        }
                    },
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "dungeoneers-pack",
                            "name": "Dungeoneer's Pack",
                            "url": "/api/equipment/dungeoneers-pack"
                        }
                    }
                ]
            }
        },
        {
            "desc": "any simple weapon",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "equipment_category",
                "equipment_category": {
                    "index": "simple-weapons",
                    "name": "Simple Weapons",
                    "url": "/api/equipment-categories/simple-weapons"
                }
            }
        }
    ],
    "class_levels": "/api/classes/warlock/levels",
    "multi_classing": {
        "prerequisites": [
            {
                "ability_score": {
                    "index": "cha",
                    "name": "CHA",
                    "url": "/api/ability-scores/cha"
                },
                "minimum_score": 13
            }
        ],
        "proficiencies": [
            {
                "index": "light-armor",
                "name": "Light Armor",
                "url": "/api/proficiencies/light-armor"
            },
            {
                "index": "simple-weapons",
                "name": "Simple Weapons",
                "url": "/api/proficiencies/simple-weapons"
            }
        ]
    },
    "subclasses": [
        {
            "index": "fiend",
            "name": "Fiend",
            "url": "/api/subclasses/fiend"
        }
    ],
    "spellcasting": {
        "level": 1,
        "spellcasting_ability": {
            "index": "cha",
            "name": "CHA",
            "url": "/api/ability-scores/cha"
        },
        "info": [
            {
                "name": "Cantrips",
                "desc": [
                    "You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table."
                ]
            },
            {
                "name": "Spell Slots",
                "desc": [
                    "The Warlock table shows how many spell slots you have. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.",
                    "For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell thunderwave, you must spend one of those slots, and you cast it as a 3rd-level spell."
                ]
            },
            {
                "name": "Spells Known of 1st Level and Higher",
                "desc": [
                    "At 1st level, you know two 1st-level spells of your choice from the warlock spell list.",
                    "The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level and higher. ",
                    "A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.",
                    "Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots."
                ]
            },
            {
                "name": "Spellcasting Ability",
                "desc": [
                    "Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.",
                    "Spell save DC = 8 + your proficiency bonus + your Charisma modifier.",
                    "Spell attack modifier = your proficiency bonus + your Charisma modifier."
                ]
            },
            {
                "name": "Spellcasting Focus",
                "desc": [
                    "You can use an arcane focus as a spellcasting focus for your warlock spells."
                ]
            }
        ]
    },
    "spells": "/api/classes/warlock/spells",
    "abilities": ["Patron: You have struck a bargain with an otherwordly being of your choice. Your choice grants you features at 1st, 6th, 10th, and 14th levels.", "Spellcasting (regain spells on short rests)"],
    "url": "https://www.5esrd.com/database/class/warlock"
}

export const wizard = {
    "index": "wizard",
    "name": "Wizard",
    "hit_die": 6,
    "proficiency_choices": [
        {
            "desc": "Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion",
            "choose": 2,
            "type": "proficiencies",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-arcana",
                            "name": "Skill: Arcana",
                            "url": "/api/proficiencies/skill-arcana"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-history",
                            "name": "Skill: History",
                            "url": "/api/proficiencies/skill-history"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-insight",
                            "name": "Skill: Insight",
                            "url": "/api/proficiencies/skill-insight"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-investigation",
                            "name": "Skill: Investigation",
                            "url": "/api/proficiencies/skill-investigation"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-medicine",
                            "name": "Skill: Medicine",
                            "url": "/api/proficiencies/skill-medicine"
                        }
                    },
                    {
                        "option_type": "reference",
                        "item": {
                            "index": "skill-religion",
                            "name": "Skill: Religion",
                            "url": "/api/proficiencies/skill-religion"
                        }
                    }
                ]
            }
        }
    ],
    "proficiencies": [
        {
            "index": "daggers",
            "name": "Daggers",
            "url": "/api/proficiencies/daggers"
        },
        {
            "index": "darts",
            "name": "Darts",
            "url": "/api/proficiencies/darts"
        },
        {
            "index": "slings",
            "name": "Slings",
            "url": "/api/proficiencies/slings"
        },
        {
            "index": "quarterstaffs",
            "name": "Quarterstaffs",
            "url": "/api/proficiencies/quarterstaffs"
        },
        {
            "index": "crossbows-light",
            "name": "Crossbows, light",
            "url": "/api/proficiencies/crossbows-light"
        },
        {
            "index": "saving-throw-int",
            "name": "Saving Throw: INT",
            "url": "/api/proficiencies/saving-throw-int"
        },
        {
            "index": "saving-throw-wis",
            "name": "Saving Throw: WIS",
            "url": "/api/proficiencies/saving-throw-wis"
        }
    ],
    "saving_throws": [
        {
            "index": "int",
            "name": "INT",
            "url": "/api/ability-scores/int"
        },
        {
            "index": "wis",
            "name": "WIS",
            "url": "/api/ability-scores/wis"
        }
    ],
    "starting_equipment": [
        {
            "equipment": {
                "index": "spellbook",
                "name": "Spellbook",
                "url": "/api/equipment/spellbook"
            },
            "quantity": 1
        }
    ],
    "starting_equipment_options": [
        {
            "desc": "(a) a quarterstaff or (b) a dagger",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "quarterstaff",
                            "name": "Quarterstaff",
                            "url": "/api/equipment/quarterstaff"
                        }
                    },
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "dagger",
                            "name": "Dagger",
                            "url": "/api/equipment/dagger"
                        }
                    }
                ]
            }
        },
        {
            "desc": "(a) a component pouch or (b) an arcane focus",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "component-pouch",
                            "name": "Component pouch",
                            "url": "/api/equipment/component-pouch"
                        }
                    },
                    {
                        "option_type": "choice",
                        "choice": {
                            "desc": "arcane focus",
                            "choose": 1,
                            "type": "equipment",
                            "from": {
                                "option_set_type": "equipment_category",
                                "equipment_category": {
                                    "index": "arcane-foci",
                                    "name": "Arcane Foci",
                                    "url": "/api/equipment-categories/arcane-foci"
                                }
                            }
                        }
                    }
                ]
            }
        },
        {
            "desc": "(a) a scholar’s pack or (b) an explorer’s pack",
            "choose": 1,
            "type": "equipment",
            "from": {
                "option_set_type": "options_array",
                "options": [
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "scholars-pack",
                            "name": "Scholar's Pack",
                            "url": "/api/equipment/scholars-pack"
                        }
                    },
                    {
                        "option_type": "counted_reference",
                        "count": 1,
                        "of": {
                            "index": "explorers-pack",
                            "name": "Explorer's Pack",
                            "url": "/api/equipment/explorers-pack"
                        }
                    }
                ]
            }
        }
    ],
    "class_levels": "/api/classes/wizard/levels",
    "multi_classing": {
        "prerequisites": [
            {
                "ability_score": {
                    "index": "int",
                    "name": "INT",
                    "url": "/api/ability-scores/int"
                },
                "minimum_score": 13
            }
        ],
        "proficiencies": []
    },
    "subclasses": [
        {
            "index": "evocation",
            "name": "Evocation",
            "url": "/api/subclasses/evocation"
        }
    ],
    "spellcasting": {
        "level": 1,
        "spellcasting_ability": {
            "index": "int",
            "name": "INT",
            "url": "/api/ability-scores/int"
        },
        "info": [
            {
                "name": "Cantrips",
                "desc": [
                    "At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table."
                ]
            },
            {
                "name": "Spellbook",
                "desc": [
                    "At 1st level, you have a spellbook containing six 1st- level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind."
                ]
            },
            {
                "name": "Preparing and Casting Spells",
                "desc": [
                    "The Wizard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                    "You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.",
                    "For example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell magic missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
                    "You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list."
                ]
            },
            {
                "name": "Spellcasting Ability",
                "desc": [
                    "Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.",
                    "Spell save DC = 8 + your proficiency bonus + your Intelligence modifier.",
                    "Spell attack modifier = your proficiency bonus + your Intelligence modifier."
                ]
            },
            {
                "name": "Ritual Casting",
                "desc": [
                    "You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared."
                ]
            },
            {
                "name": "Spellcasting Focus",
                "desc": [
                    "You can use an arcane focus as a spellcasting focus for your wizard spells."
                ]
            }
        ]
    },
    "spells": "/api/classes/wizard/spells",
    "abilities": ["Arcane Recovery: 1/day on short rest, you can choose expended spell slots to recover equal to or less than half your wizard level (rounded up)", "Spellcasting"],
    "url": "https://www.5esrd.com/database/class/wizard"
}
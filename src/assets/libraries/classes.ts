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
    prerequisites: MultiClassPrerequisite[];
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
    multi_classing: MultiClassing;
    subclasses: Subclass[];
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
    "url": "/api/classes/barbarian"
}

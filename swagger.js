const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./app.js']

const doc = {
    info: {
        version: "1.0.0",
        title: "API de gestion de personnages de Genshin Impact",
        description: "API permettant de gérer les personnages de Genshin Impact"
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Personnages",
            "description": "Opérations sur les personnages"
        },
        {
            "name": "Statistiques",
            "description": "Opérations sur les statistiques"
        }
    ],
    definitions: {
        Statistique: {
            _id: "Pyro",
            count: 1
        },
        Personnage: {
            name: "Albedo",
            title: "Kreideprinz",
            description: "Génie connu sous le surnom de « Kreideprinz », Albedo est l'alchimiste en chef et le capitaine des enquêteurs de l'Ordre de Favonius.",
            weapon_type: "Épée à une main",
            element: "Géo",
            affiliation: "Ordre de Favonius",
            region: "Mondstadt",
            rarity: 5,
            birthday: "0000-09-13",
            constellation: "Princeps Cretaceus",
            skills: [
                {
                    name: "Attaque normale : Escrime de Favonius - Blanche",
                    attributes: [
                        {
                            label: "DGT 1er coup",
                            value: "106.76%"
                        },
                        {
                            label: "DGT 2e coup",
                            value: "106.76%"
                        },
                        {
                            label: "DGT 3e coup",
                            value: "137.89%"
                        },
                        {
                            label: "DGT 4e coup",
                            value: "144.57%"
                        },
                        {
                            label: "DGT 5e coup",
                            value: "180.38%"
                        },
                        {
                            label: "DGT attaque chargée",
                            value: "137.44% + 174.93%"
                        }
                    ]
                },
                {
                    name: "Genèse : Aura solaire",
                    attributes: [
                        {
                            label: "DGT compétence",
                            value: "309.7%"
                        },
                        {
                            label: "DGT Germe éphémère",
                            value: "317.3% DÉF"
                        },
                        {
                            label: "Durée",
                            value: "30 s"
                        },
                        {
                            label: "Temps de recharge",
                            value: "4 s"
                        }
                    ]
                },
                {
                    name: "Transformation : Reflux Géo",
                    attributes: [
                        {
                            label: "DGT explosifs",
                            value: "872.1%"
                        },
                        {
                            label: "DGT Germe fatal",
                            value: "171% par Germe"
                        },
                        {
                            label: "Temps de recharge",
                            value: "12 s"
                        },
                        {
                            label: "Énergie élémentaire",
                            value: "40"
                        }
                    ]
                }
            ],
            passives: [
                "Menace calcaire",
                "Sagesse en bouteille",
                "Découverte de génie"
            ],
            constellations: [
                {
                    name: "Fleur d'Éden",
                    level: 1
                },
                {
                    name: "Éon de l'avènement",
                    level: 2
                },
                {
                    name: "Fleur solaire",
                    level: 3
                },
                {
                    name: "Chute divine",
                    level: 4
                },
                {
                    name: "Flux antique",
                    level: 5
                },
                {
                    name: "Pureté de la terre",
                    level: 6
                }
            ]
        }
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc)
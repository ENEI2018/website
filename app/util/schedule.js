module.exports = [
    {
        id: 0,
        day: "23 de Março",
        schedule: [
            {
                type: "break",
                typeBreak: true,
                title: "Pequeno-almoço",
                time: "8:00 - 8:30",
                location: "Cantina de Engenharia",
                breakBefore: true,
                breakAfter: true,
            },
            {
                type: "talks",
                typeTalks: true,
                location: "Auditório Nobre da FEUP",
                slots: [
                    {
                        type: "talk",
                        typeTalk: true,
                        time: "8:00 - 8:45",
                        title: "Cenas muito interessantes",
                        speaker: "Pacman"
                    },
                    {
                        type: "talk",
                        typeTalk: true,
                        time: "8:50 - 9:30",
                        title: "Cenas mais interessantes",
                        speaker: "Ghost"
                    }
                ]
            },
            {
                type: "workshops",
                typeWorkshops: true,
                slots: [
                    {
                        type: "workshop",
                        typeWorkshop: true,
                        time: "8:00 - 8:45",
                        title: "Programar totil",
                        speaker: "Hackerino",
                        location: "Sala B456"
                    },
                    {
                        type: "workshop",
                        typeWorkshop: true,
                        time: "8:50 - 9:30",
                        title: "Hardcore Coding",
                        speaker: "Code Ninja",
                        location: "Sala B456"
                    }
                ]
            }
        ]
    },
    {
        id: 1,
        day: "24 de Março",
        schedule: []
    },
    {
        id: 2,
        day: "25 de Março",
        schedule: []
    },
    {
        id: 3,
        day: "26 de Março",
        schedule: []
    }
]
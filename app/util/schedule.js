module.exports = [
    {
        id: 0,
        day: "23 de Março",
        schedule: [{
                type: "other",
                typeOther: true,
                title: "Boas-vindas",
                time: "14:00 - 17:30",
                show: true
            },
            {
                type: "other",
                typeOther: true,
                title: "Sessão de abertura",
                subtitle: "Reitor da Universidade do Porto",
                time: "17:30 - 19:30",
                show: true
            },
            {
                type: "break",
                typeBreak: true,
                title: "Jantar",
                time: "19:30",
                location: "Cantina de Engenharia",
                breakBefore: true,
                show: true
            }
        ]
    },
    {
        id: 1,
        day: "24 de Março",
        schedule: [{
                type: "break",
                typeBreak: true,
                title: "Pequeno-almoço",
                time: "8:00 - 8:30",
                location: "Cantina de Engenharia",
                breakAfter: true,
                show: true
            },
            {
                type: "talks",
                typeTalks: true,
                location: "Auditório Nobre da FEUP",
                slots: [
                    {
                        type: "talk",
                        typeTalk: true,
                        time: "11:00 - 12:00",
                        title: "MINIX 3: A Reliable and Secure Operating System",
                        speaker: "Andrew Tanenbaum",
                        url: "/speakers/12",
                        show: true
                    },
                    {
                        type: "talk",
                        typeTalk: true,
                        time: "12:00 - 12:30",
                        title: "Contrução de uma pipeline de release para aplicações móveis",
                        speaker: "Ivo Silva",
                        url: "/speakers/8",
                        show: true
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
                        time: "10:00 - 12:30",
                        location: "Sala B456",
                        title: "Web Security",
                        speaker: "Renato Rodrigues",
                        show: true
                    }
                ]
            },
            {
                type: "break",
                typeBreak: true,
                title: "Almoço",
                time: "12:30 - 14:00",
                location: "Cantina de Engenharia",
                breakBefore: true,
                breakAfter: true,
                show: true
            }
        ]
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

/*
EXEMPLO

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
                        speaker: "Pacman",
                        //url: "/"
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
            },
            {
                type: "other",
                typeOther: true,
                title: "Sessão de abertura",
                subtitle: "Reitor da Universidade do Porto",
                time: "8:00 - 8:30",
                location: "Cantina de Engenharia",
            }
        ]
*/
import { State } from "../interfaces/state.interface";
import { bandeira_AC, bandeira_AL, bandeira_AM, bandeira_AP, bandeira_BA, bandeira_CE, bandeira_DF, bandeira_ES, bandeira_GO, bandeira_MA, bandeira_MG, bandeira_MS, bandeira_MT, bandeira_PA, bandeira_PB, bandeira_PE, bandeira_PI, bandeira_PR, bandeira_RJ, bandeira_RN, bandeira_RO, bandeira_RR, bandeira_RS, bandeira_SC, bandeira_SE, bandeira_SP, bandeira_TO, coatOfArms_AC } from "../assets";

export const states: State[] = [
    {
        id: 1,
        name: "Acre",
        acronym: "AC",
        capital: "Rio Branco",
        flag: bandeira_AC,
        coatOfAmrs: coatOfArms_AC,
        nickname: "Terra das águas",
        admitted: {
            day: 15,
            month: "Junho",
            year: 1962,
        },
        description: ["A bandeira do estado que lutou para ser brasileiro tem duas cores principais: verde e amarela.", "O gaúcho José Plácido de Castro liderou uma revolta que tirou Luiz Galvez do poder da então 'República do Acre'. Para homenagear essa luta, foi inserida a estrela vermelha na bandeira.", "A bandeira atual foi oficialmente adotada em 22 de dezembro de 1995."],
        sources: [
            {
                title: "Instituído o Estado do Acre",
                link: "https://www.planalto.gov.br/ccivil_03/leis/1950-1969/L4070.htm#:~:text=LEI%20No%204.070,%20DE%2015%20DE%20JUNHO%20DE%201962.&text=Eleva%20o%20Territ%C3%B3rio%20do%20Acre,eu%20sanciono%20a%20seguinte%20Lei:&text=1.%C2%BA%20O%20Territ%C3%B3rio%20%C3%A0,erigido%20em%20Estado%20do%20Acre",
            },
            {
                title: "Bandeira do Acre - Wikipédia",
                link: "https://pt.wikipedia.org/wiki/Bandeira_do_Acre",
            },
            {
                title: "História do Acre - Wikipédia",
                link: "https://pt.wikipedia.org/wiki/Hist%C3%B3ria_do_Acre",
            }
        ],
        composition: ["A bandeira do Acre é constituída por dois triângulos retângulos (um amarelo e outro verde) unidos pelas respectivas hipotenusas, constituindo, assim, no todo, um quadrilátero paralelogramo.", "A estrela vermelha no canto superior esquerdo é chamada de 'Estrela Altaneira'."],
        colors: [
            {
                name: "Amarelo",
                hex: "#FFD700"
            },
            {
                name: "Verde",
                hex: "#009E49",
            },
            {
                name: "Vermelho",
                hex: "#FF0000"
            },
        ],
    },

    {
        id: 2,
        name: "Alagoas",
        acronym: "AL",
        capital: "Maceió",
        flag: bandeira_AL,
        coatOfAmrs: "",
        nickname: "Caribe brasileiro",
        admitted: {
            day: 11,
            month: "Junho",
            year: 1891,
        },
        description: ["Alagoas é o estado onde nasceu Manuel Deodoro da Fonseca, Marechal do Exército Brasileiro que proclamou a República e foi o primeiro presidente do Brasil.", "A bandeira atual foi oficialmente adotada em 23 de setembro de 1963."],
        sources: [
            {
                title: "Bandeira de Alagoas - Wikipédia",
                link: "https://pt.wikipedia.org/wiki/Bandeira_de_Alagoas",
            },
            {
                title: "História de Alagoas - Wikipédia",
                link: "https://pt.wikipedia.org/wiki/Hist%C3%B3ria_de_Alagoas",
            },
            {
                title: "Alagoas - IBGE",
                link: "https://cidades.ibge.gov.br/brasil/al/historico"
            }
        ],
        composition: ["As cores da bandeira de Alagoas fazem referência à bandeira da França, cujo simbolismo representa o ideal revolucionário 'liberdade, igualdade e fraternidade'.", "O brasão simboliza as primeiras cidades alagoanas, Marechal Deodoro, Porto Calvo e Penedo, bem como suas riquezas agrícolas: a cana-de-açucar e o algodão."],
        colors: [
            {
                name: "Vermelho",
                hex: "#DA251D",
            },
            {
                name: "Azul",
                hex: "#0077B9"
            }
        ],
    },

    {
        id: 3,
        name: "Amapá",
        acronym: "AP",
        capital: "Macapá",
        flag: bandeira_AP,
        coatOfAmrs: "",
        nickname: "Portal da Amazônia",
        admitted: {
            day: 5,
            month: "Outubro",
            year: 1988,
        },
        description: ["O estado do Amapá está localizado na região Norte do país, sendo um dos estados mais recentes do Brasil, criado em 1988. É um dos poucos estados brasileiros que possue território nos hemisférios norte e sul.", "O Amapá é o único estado brasileiro que foi conquistado por meio de arbitragem internacional.", "A bandeira atual do Amapá foi adotada em 5 de outubro de 1988"],
        sources: [
            {
                title: "Bandeira do Amapá",
                link: "https://pt.wikipedia.org/wiki/Bandeira_do_Amap%C3%A1",
            },
            {
                title: "História do Amapá",
                link: "https://pt.wikipedia.org/wiki/Hist%C3%B3ria_do_Amap%C3%A1"
            },
            {
                title: "Território Federal do Amapá",
                link: "https://pt.wikipedia.org/wiki/Territ%C3%B3rio_Federal_do_Amap%C3%A1"
            },
            {
                title: "Amapá - Brasil Escola",
                link: "https://brasilescola.uol.com.br/brasil/amapa.htm"
            },
            {
                title: "Questão do Amapá",
                link: "https://pt.wikipedia.org/wiki/Quest%C3%A3o_do_Amap%C3%A1"
            }
        ],
        composition: ["O verde representa as matas, o amarelo as riquezas minerais, o azul representa o céu e o branco representa a paz. O preto simboliza o respeito aos homens que morreram lutando pelo estado.", "A figura geométrica centralizada no lado esquerdo, representa a Fortaleza de São José de Macapá."],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 4,
        name: "Amazonas",
        acronym: "AM",
        capital: "Manaus",
        flag: bandeira_AM,
        coatOfAmrs: "",
        nickname: "Coração da Amazônia",
        admitted: {
            day: 15,
            month: "Novembro",
            year: 1889,
        },
        description: [],
        sources: [{
            title: "História do Amazonas",
            link: "https://pt.wikipedia.org/wiki/Hist%C3%B3ria_do_Amazonas",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 5,
        name: "Bahia",
        acronym: "BA",
        capital: "Salvador",
        flag: bandeira_BA,
        coatOfAmrs: "",
        nickname: "Terra da Alegria",
        admitted: {
            day: 15,
            month: "Novembro",
            year: 1889,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 6,
        name: "Ceará",
        acronym: "CE",
        capital: "Fortaleza",
        flag: bandeira_CE,
        coatOfAmrs: "",
        nickname: "Terra do Sol",
        admitted: {
            day: 15,
            month: "Novembro",
            year: 1889,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 7,
        name: "Distrito Federal",
        acronym: "DF",
        capital: "Brasília",
        flag: bandeira_DF,
        coatOfAmrs: "",
        nickname: "Brasília, a Capital do Brasil",
        admitted: {
            day: 21,
            month: "Abril",
            year: 1960,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 8,
        name: "Espírito Santo",
        acronym: "ES",
        capital: "Vitória",
        flag: bandeira_ES,
        coatOfAmrs: "",
        nickname: "Coração Capixaba",
        admitted: {
            day: 15,
            month: "Novembro",
            year: 1889,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 9,
        name: "Goiás",
        acronym: "GO",
        capital: "Goiânia",
        flag: bandeira_GO,
        coatOfAmrs: "",
        nickname: "Estado do Cerrado",
        admitted: {
            day: 15,
            month: "Novembro",
            year: 1889,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 10,
        name: "Maranhão",
        acronym: "MA",
        capital: "São Luís",
        flag: bandeira_MA,
        coatOfAmrs: "",
        nickname: "Terra dos Lençóis",
        admitted: {
            day: 15,
            month: "Novembro",
            year: 1889,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 11,
        name: "Mato Grosso",
        acronym: "MT",
        capital: "Cuiabá",
        flag: bandeira_MT,
        coatOfAmrs: "",
        nickname: "Terra dos Pantanais",
        admitted: {
            day: 11,
            month: "Outubro",
            year: 1977,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 12,
        name: "Mato Grosso do Sul",
        acronym: "MS",
        capital: "Campo Grande",
        flag: bandeira_MS,
        coatOfAmrs: "",
        nickname: "Portal do Pantanal",
        admitted: {
            day: 11,
            month: "Outubro",
            year: 1977,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 13,
        name: "Minas Gerais",
        acronym: "MG",
        capital: "Belo Horizonte",
        flag: bandeira_MG,
        coatOfAmrs: "",
        nickname: "Terra do Pão de Queijo",
        admitted: {
            day: 15,
            month: "Novembro",
            year: 1889,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 14,
        name: "Pará",
        acronym: "PA",
        capital: "Belém",
        flag: bandeira_PA,
        coatOfAmrs: "",
        nickname: "Terra das Mangueiras",
        admitted: {
            day: 15,
            month: "Novembro",
            year: 1889,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 15,
        name: "Paraíba",
        acronym: "PB",
        capital: "João Pessoa",
        flag: bandeira_PB,
        coatOfAmrs: "",
        nickname: "Coração do Nordeste",
        admitted: {
            day: 15,
            month: "Novembro",
            year: 1889,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 16,
        name: "Paraná",
        acronym: "PR",
        capital: "Curitiba",
        flag: bandeira_PR,
        coatOfAmrs: "",
        nickname: "Terra das Araucárias",
        admitted: {
            day: 15,
            month: "Novembro",
            year: 1889,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 17,
        name: "Pernambuco",
        acronym: "PE",
        capital: "Recife",
        flag: bandeira_PE,
        coatOfAmrs: "",
        nickname: "Terra do Frevo",
        admitted: {
            day: 15,
            month: "Novembro",
            year: 1889,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 18,
        name: "Piauí",
        acronym: "PI",
        capital: "Teresina",
        flag: bandeira_PI,
        coatOfAmrs: "",
        nickname: "Porta do Sertão",
        admitted: {
            day: 15,
            month: "Novembro",
            year: 1889,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 19,
        name: "Rio de Janeiro",
        acronym: "RJ",
        capital: "Rio de Janeiro",
        flag: bandeira_RJ,
        coatOfAmrs: "",
        nickname: "Cidade Maravilhosa e capital mundial do Samba",
        admitted: {
            day: 15,
            month: "Novembro",
            year: 1889,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 20,
        name: "Rio Grande do Norte",
        acronym: "RN",
        capital: "Natal",
        flag: bandeira_RN,
        coatOfAmrs: "",
        nickname: "Maravilha do Brasil",
        admitted: {
            day: 15,
            month: "Novembro",
            year: 1889,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 21,
        name: "Rio Grande do Sul",
        acronym: "RS",
        capital: "Porto Alegre",
        flag: bandeira_RS,
        coatOfAmrs: "",
        nickname: "Terra dos Pampas",
        admitted: {
            day: 15,
            month: "Novembro",
            year: 1889,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 22,
        name: "Rondônia",
        acronym: "RO",
        capital: "Porto Velho",
        flag: bandeira_RO,
        coatOfAmrs: "",
        nickname: "Terra do Rondon",
        admitted: {
            day: 22,
            month: "Dezembro",
            year: 1981,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 23,
        name: "Roraima",
        acronym: "RR",
        capital: "Boa Vista",
        flag: bandeira_RR,
        coatOfAmrs: "",
        nickname: "Monte Roraima",
        admitted: {
            day: 5,
            month: "Outubro",
            year: 1988,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 24,
        name: "Santa Catarina",
        acronym: "SC",
        capital: "Florianópolis",
        flag: bandeira_SC,
        coatOfAmrs: "",
        nickname: "Paraíso das Praias",
        admitted: {
            day: 15,
            month: "Novembro",
            year: 1889,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 25,
        name: "São Paulo",
        acronym: "SP",
        capital: "São Paulo",
        flag: bandeira_SP,
        coatOfAmrs: "",
        nickname: "Terra da Garoa e capital econômica do Brasil",
        admitted: {
            day: 15,
            month: "Novembro",
            year: 1889,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 26,
        name: "Sergipe",
        acronym: "SE",
        capital: "Aracaju",
        flag: bandeira_SE,
        coatOfAmrs: "",
        nickname: "Terra dos Cajuais",
        admitted: {
            day: 15,
            month: "Novembro",
            year: 1889,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },

    {
        id: 27,
        name: "Tocantins",
        acronym: "TO",
        capital: "Palmas",
        flag: bandeira_TO,
        coatOfAmrs: "",
        nickname: "Portal do Jalapão",
        admitted: {
            day: 5,
            month: "Outubro",
            year: 1988,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""],
        colors: [
            {
                name: "",
                hex: "",
            },
        ],
    },
]
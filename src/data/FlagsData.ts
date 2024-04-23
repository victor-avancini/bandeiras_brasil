import { State } from "../interfaces/state.interface";
import bandeira_AC from "../assets/bandeira_acre.png";
import bandeira_AL from "../assets/bandeira_alagoas.png";
import bandeira_AP from "../assets/bandeira_amapa.jpg";
import bandeira_AM from "../assets/bandeira_amazonas.jpg";
import bandeira_BA from "../assets/bandeira_bahia.jpg";
import bandeira_CE from "../assets/bandeira_ceara.jpg";
import bandeira_DF from "../assets/bandeira_distrito_federal.jpg";
import bandeira_ES from "../assets/bandeira_espirito_santo.jpg";
import bandeira_GO from "../assets/bandeira_goias.jpg";
import bandeira_MA from "../assets/bandeira_maranhao.jpg";
import bandeira_MT from "../assets/bandeira_mato_grosso.jpg";
import bandeira_MS from "../assets/bandeira_mato_grosso_do_sul.jpg";
import bandeira_MG from "../assets/bandeira_minas_gerais.jpg";
import bandeira_PA from "../assets/bandeira_para.jpg";
import bandeira_PB from "../assets/bandeira_paraiba.jpg";
import bandeira_PR from "../assets/bandeira_parana.jpg";
import bandeira_PE from "../assets/bandeira_pernambuco.jpg";
import bandeira_PI from "../assets/bandeira_piaui.jpg";
import bandeira_RJ from "../assets/bandeira_rio_de_janeiro.jpg";
import bandeira_RN from "../assets/bandeira_rio_grande_do_norte.jpg";
import bandeira_RS from "../assets/bandeira_rio_grande_do_sul.jpg";
import bandeira_RO from "../assets/bandeira_rondonia.jpg";
import bandeira_RR from "../assets/bandeira_roraima.jpg";
import bandeira_SC from "../assets/bandeira_santa_catarina.jpg";
import bandeira_SP from "../assets/bandeira_sao_paulo.jpg";
import bandeira_SE from "../assets/bandeira_sergipe.jpg";
import bandeira_TO from "../assets/bandeira_tocantins.jpg";

export const states: State[] = [
    {
        id: 1,
        name: "Acre",
        acronym: "AC",
        capital: "Rio Branco",
        flag: bandeira_AC,
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
    },

    {
        id: 2,
        name: "Alagoas",
        acronym: "AL",
        capital: "Maceió",
        flag: bandeira_AL,
        nickname: "Caribe brasileiro",
        admitted: {
            day: 11,
            month: "Junho",
            year: 1891,
        },
        description: ["lagoas é o estado onde nasceu Manuel Deodoro da Fonseca, Marechal do Exército Brasileiro que proclamou a República e foi o primeiro presidente do Brasil.", "O brasão simboliza as primeiras cidades alagoanas, Marechal Deodoro, Porto Calvo e Penedo, bem como suas riquezas agrícolas: a cana-de-açucar e o algodão.", "A bandeira atual foi oficialmente adotada em 23 de setembro de 1963."],
        sources: [
            {
                title: "Bandeira de Alagoas - Wikipédia",
                link: "https://pt.wikipedia.org/wiki/Bandeira_de_Alagoas",
            },
            {
                title: "História de Alagoas - Wikipédia",
                link: "https://pt.wikipedia.org/wiki/Hist%C3%B3ria_de_Alagoas",
            },
        ],
        composition: [""]
    },

    {
        id: 3,
        name: "Amapá",
        acronym: "AP",
        capital: "Macapá",
        flag: bandeira_AP,
        nickname: "Portal da Amazônia",
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
        composition: [""]
    },

    {
        id: 4,
        name: "Amazonas",
        acronym: "AM",
        capital: "Manaus",
        flag: bandeira_AM,
        nickname: "Coração da Amazônia",
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
        composition: [""]
    },

    {
        id: 5,
        name: "Bahia",
        acronym: "BA",
        capital: "Salvador",
        flag: bandeira_BA,
        nickname: "Terra da Alegria",
        admitted: {
            day: 32,
            month: "Fechou",
            year: 3000,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },

    {
        id: 6,
        name: "Ceará",
        acronym: "CE",
        capital: "Fortaleza",
        flag: bandeira_CE,
        nickname: "Terra do Sol",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },

    {
        id: 7,
        name: "Distrito Federal",
        acronym: "DF",
        capital: "Brasília",
        flag: bandeira_DF,
        nickname: "Brasília, a Capital do Brasil",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },

    {
        id: 8,
        name: "Espírito Santo",
        acronym: "ES",
        capital: "Vitória",
        flag: bandeira_ES,
        nickname: "Coração Capixaba",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },

    {
        id: 9,
        name: "Goiás",
        acronym: "GO",
        capital: "Goiânia",
        flag: bandeira_GO,
        nickname: "Estado do Cerrado",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },

    {
        id: 10,
        name: "Maranhão",
        acronym: "MA",
        capital: "São Luís",
        flag: bandeira_MA,
        nickname: "Terra dos Lençóis",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },

    {
        id: 11,
        name: "Mato Grosso",
        acronym: "MT",
        capital: "Cuiabá",
        flag: bandeira_MT,
        nickname: "Terra dos Pantanais",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },

    {
        id: 12,
        name: "Mato Grosso do Sul",
        acronym: "MS",
        capital: "Campo Grande",
        flag: bandeira_MS,
        nickname: "Portal do Pantanal",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },

    {
        id: 13,
        name: "Minas Gerais",
        acronym: "MG",
        capital: "Belo Horizonte",
        flag: bandeira_MG,
        nickname: "Terra do Pão de Queijo",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },

    {
        id: 14,
        name: "Pará",
        acronym: "PA",
        capital: "Belém",
        flag: bandeira_PA,
        nickname: "Terra das Mangueiras",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },

    {
        id: 15,
        name: "Paraíba",
        acronym: "PB",
        capital: "João Pessoa",
        flag: bandeira_PB,
        nickname: "Coração do Nordeste",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },

    {
        id: 16,
        name: "Paraná",
        acronym: "PR",
        capital: "Curitiba",
        flag: bandeira_PR,
        nickname: "Terra das Araucárias",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },

    {
        id: 17,
        name: "Pernambuco",
        acronym: "PE",
        capital: "Recife",
        flag: bandeira_PE,
        nickname: "Terra do Frevo",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },

    {
        id: 18,
        name: "Piauí",
        acronym: "PI",
        capital: "Teresina",
        flag: bandeira_PI,
        nickname: "Porta do Sertão",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },

    {
        id: 19,
        name: "Rio de Janeiro",
        acronym: "RJ",
        capital: "Rio de Janeiro",
        flag: bandeira_RJ,
        nickname: "Cidade Maravilhosa e capital mundial do Samba",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },

    {
        id: 20,
        name: "Rio Grande do Norte",
        acronym: "RN",
        capital: "Natal",
        flag: bandeira_RN,
        nickname: "Maravilha do Brasil",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },

    {
        id: 21,
        name: "Rio Grande do Sul",
        acronym: "RS",
        capital: "Porto Alegre",
        flag: bandeira_RS,
        nickname: "Terra dos Pampas",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },

    {
        id: 22,
        name: "Rondônia",
        acronym: "RO",
        capital: "Porto Velho",
        flag: bandeira_RO,
        nickname: "Terra do Rondon",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },

    {
        id: 23,
        name: "Roraima",
        acronym: "RR",
        capital: "Boa Vista",
        flag: bandeira_RR,
        nickname: "Monte Roraima",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },

    {
        id: 24,
        name: "Santa Catarina",
        acronym: "SC",
        capital: "Florianópolis",
        flag: bandeira_SC,
        nickname: "Paraíso das Praias",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },

    {
        id: 25,
        name: "São Paulo",
        acronym: "SP",
        capital: "São Paulo",
        flag: bandeira_SP,
        nickname: "Terra da Garoa e capital econômica do Brasil",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },

    {
        id: 26,
        name: "Sergipe",
        acronym: "SE",
        capital: "Aracaju",
        flag: bandeira_SE,
        nickname: "Terra dos Cajuais",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },

    {
        id: 27,
        name: "Tocantins",
        acronym: "TO",
        capital: "Palmas",
        flag: bandeira_TO,
        nickname: "Portal do Jalapão",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
        description: [],
        sources: [{
            title: "",
            link: "",
        }],
        composition: [""]
    },
]
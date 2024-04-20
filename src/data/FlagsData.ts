import { Estado } from "../interfaces/estado.interface";
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

export const estados: Estado[] = [
    {
        nome: "Acre",
        sigla: "AC",
        capital: "Rio Branco",
        bandeira: bandeira_AC,
        nickname: "Terra das águas",
        admitted: {
            day: 15,
            month: "Junho",
            year: 1962,
        },
    },

    {
        nome: "Alagoas",
        sigla: "AL",
        capital: "Maceió",
        bandeira: bandeira_AL,
        nickname: "Caribe brasileiro",
        admitted: {
            day: 11,
            month: "Junho",
            year: 1891,
        },
    },

    {
        nome: "Amapá",
        sigla: "AP",
        capital: "Macapá",
        bandeira: bandeira_AP,
        nickname: "Portal da Amazônia",
        admitted: {
            day: 5,
            month: "Outubro",
            year: 1988,
        },
    },

    {
        nome: "Amazonas",
        sigla: "AM",
        capital: "Manaus",
        bandeira: bandeira_AM,
        nickname: "Coração da Amazônia",
        admitted: {
            day: 15,
            month: "Novembro",
            year: 1889,
        },
    },

    {
        nome: "Bahia",
        sigla: "BA",
        capital: "Salvador",
        bandeira: bandeira_BA,
        nickname: "Terra da Alegria",
        admitted: {
            day: 32,
            month: "Fechou",
            year: 3000,
        },
    },

    {
        nome: "Ceará",
        sigla: "CE",
        capital: "Fortaleza",
        bandeira: bandeira_CE,
        nickname: "Terra do Sol",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
    },

    {
        nome: "Distrito Federal",
        sigla: "DF",
        capital: "Brasília",
        bandeira: bandeira_DF,
        nickname: "Brasília, a Capital do Brasil",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
    },

    {
        nome: "Espírito Santo",
        sigla: "ES",
        capital: "Vitória",
        bandeira: bandeira_ES,
        nickname: "Coração Capixaba",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
    },

    {
        nome: "Goiás",
        sigla: "GO",
        capital: "Goiânia",
        bandeira: bandeira_GO,
        nickname: "Estado do Cerrado",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
    },

    {
        nome: "Maranhão",
        sigla: "MA",
        capital: "São Luís",
        bandeira: bandeira_MA,
        nickname: "Terra dos Lençóis",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
    },

    {
        nome: "Mato Grosso",
        sigla: "MT",
        capital: "Cuiabá",
        bandeira: bandeira_MT,
        nickname: "Terra dos Pantanais",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
    },

    {
        nome: "Mato Grosso do Sul",
        sigla: "MS",
        capital: "Campo Grande",
        bandeira: bandeira_MS,
        nickname: "Portal do Pantanal",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
    },

    {
        nome: "Minas Gerais",
        sigla: "MG",
        capital: "Belo Horizonte",
        bandeira: bandeira_MG,
        nickname: "Terra do Pão de Queijo",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
    },

    {
        nome: "Pará",
        sigla: "PA",
        capital: "Belém",
        bandeira: bandeira_PA,
        nickname: "Terra das Mangueiras",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
    },

    {
        nome: "Paraíba",
        sigla: "PB",
        capital: "João Pessoa",
        bandeira: bandeira_PB,
        nickname: "Coração do Nordeste",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
    },

    {
        nome: "Paraná",
        sigla: "PR",
        capital: "Curitiba",
        bandeira: bandeira_PR,
        nickname: "Terra das Araucárias",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
    },

    {
        nome: "Pernambuco",
        sigla: "PE",
        capital: "Recife",
        bandeira: bandeira_PE,
        nickname: "Terra do Frevo",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
    },

    {
        nome: "Piauí",
        sigla: "PI",
        capital: "Teresina",
        bandeira: bandeira_PI,
        nickname: "Porta do Sertão",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
    },

    {
        nome: "Rio de Janeiro",
        sigla: "RJ",
        capital: "Rio de Janeiro",
        bandeira: bandeira_RJ,
        nickname: "Cidade Maravilhosa e capital mundial do Samba",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
    },

    {
        nome: "Rio Grande do Norte",
        sigla: "RN",
        capital: "Natal",
        bandeira: bandeira_RN,
        nickname: "Maravilha do Brasil",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
    },

    {
        nome: "Rio Grande do Sul",
        sigla: "RS",
        capital: "Porto Alegre",
        bandeira: bandeira_RS,
        nickname: "Terra dos Pampas",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
    },

    {
        nome: "Rondônia",
        sigla: "RO",
        capital: "Porto Velho",
        bandeira: bandeira_RO,
        nickname: "Terra do Rondon",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
    },

    {
        nome: "Roraima",
        sigla: "RR",
        capital: "Boa Vista",
        bandeira: bandeira_RR,
        nickname: "Monte Roraima",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
    },

    {
        nome: "Santa Catarina",
        sigla: "SC",
        capital: "Florianópolis",
        bandeira: bandeira_SC,
        nickname: "Paraíso das Praias",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
    },

    {
        nome: "São Paulo",
        sigla: "SP",
        capital: "São Paulo",
        bandeira: bandeira_SP,
        nickname: "Terra da Garoa e capital econômica do Brasil",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
    },

    {
        nome: "Sergipe",
        sigla: "SE",
        capital: "Aracaju",
        bandeira: bandeira_SE,
        nickname: "Terra dos Cajuais",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
    },

    {
        nome: "Tocantins",
        sigla: "TO",
        capital: "Palmas",
        bandeira: bandeira_TO,
        nickname: "Portal do Jalapão",
        admitted: {
            day: 1,
            month: "Janeiro",
            year: 2021,
        },
    },
]
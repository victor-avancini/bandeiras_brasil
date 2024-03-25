export interface Estado {
    nome: string;
    sigla: string;
    capital: string;
    bandeira: string;
}

export interface FlagCardProps {
    estado: Estado;
}

export interface EstadoPageProps {
    estado: Estado;
}

export const estados: Estado[] = [
    {
        nome: "Acre",
        sigla: "AC",
        capital: "Rio Branco",
        bandeira: "bandeira",
    },

    {
        nome: "Alagoas",
        sigla: "AL",
        capital: "Maceió",
        bandeira: "bandeira",
    },

    {
        nome: "Amapá",
        sigla: "AP",
        capital: "Macapá",
        bandeira: "bandeira",
    },

    {
        nome: "Amazonas",
        sigla: "AM",
        capital: "Manaus",
        bandeira: "bandeira",
    },

    {
        nome: "Bahia",
        sigla: "BA",
        capital: "Salvador",
        bandeira: "bandeira",
    },

    {
        nome: "Ceará",
        sigla: "CE",
        capital: "Fortaleza",
        bandeira: "bandeira",
    },

    {
        nome: "Distrito Federal",
        sigla: "DF",
        capital: "Brasília",
        bandeira: "bandeira",
    },

    {
        nome: "Espírito Santo",
        sigla: "ES",
        capital: "Vitória",
        bandeira: 'bandeira',
    },

    {
        nome: "Goiás",
        sigla: "GO",
        capital: "Goiânia",
        bandeira: "bandeira",
    },

    {
        nome: "Maranhão",
        sigla: "MA",
        capital: "São Luís",
        bandeira: "bandeira",
    },

    {
        nome: "Mato Grosso",
        sigla: "MT",
        capital: "Cuiabá",
        bandeira: "bandeira",
    },

    {
        nome: "Mato Grosso do Sul",
        sigla: "MS",
        capital: "Campo Grande",
        bandeira: "bandeira",
    },

    {
        nome: "Minas Gerais",
        sigla: "MG",
        capital: "Belo Horizonte",
        bandeira: "bandeira",
    },

    {
        nome: "Pará",
        sigla: "PA",
        capital: "Belém",
        bandeira: "bandeira",
    },

    {
        nome: "Paraíba",
        sigla: "PB",
        capital: "João Pessoa",
        bandeira: "bandeira",
    },

    {
        nome: "Paraná",
        sigla: "PR",
        capital: "Curitiba",
        bandeira: "bandeira",
    },

    {
        nome: "Pernambuco",
        sigla: "PE",
        capital: "Recife",
        bandeira: "bandeira",
    },

    {
        nome: "Piauí",
        sigla: "PI",
        capital: "Teresina",
        bandeira: "bandeira",
    },

    {
        nome: "Rio de Janeiro",
        sigla: "RJ",
        capital: "Rio de Janeiro",
        bandeira: "bandeira",
    },

    {
        nome: "Rio Grande do Norte",
        sigla: "RN",
        capital: "Natal",
        bandeira: "bandeira",
    },

    {
        nome: "Rio Grande do Sul",
        sigla: "RS",
        capital: "Porto Alegre",
        bandeira: "bandeira",
    },

    {
        nome: "Rondônia",
        sigla: "RO",
        capital: "Porto Velho",
        bandeira: "bandeira",
    },

    {
        nome: "Roraima",
        sigla: "RR",
        capital: "Boa Vista",
        bandeira: "bandeira",
    },

    {
        nome: "Santa Catarina",
        sigla: "SC",
        capital: "Florianópolis",
        bandeira: "bandeira",
    },

    {
        nome: "São Paulo",
        sigla: "SP",
        capital: "São Paulo",
        bandeira: "bandeira",
    },

    {
        nome: "Sergipe",
        sigla: "SE",
        capital: "Aracaju",
        bandeira: "bandeira",
    },

    {
        nome: "Tocantins",
        sigla: "TO",
        capital: "Palmas",
        bandeira: "bandeira",
    },
]
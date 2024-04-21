export interface Estado {
    name: string;
    acronym: string;
    capital: string;
    flag: string;
    nickname: string;
    admitted: {
        day: number,
        month: string,
        year: number,
    },
    description: string[],
    sources: {
        title: string,
        link: string,
    }[],
}

export interface FlagCardProps {
    estado: Estado;
}

export interface EstadoPageProps {
    estado: Estado;
}
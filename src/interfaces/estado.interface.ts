export interface Estado {
    nome: string;
    sigla: string;
    capital: string;
    bandeira: string;
    nickname: string;
    admitted: {
        day: number,
        month: string,
        year: number,
    }
}

export interface FlagCardProps {
    estado: Estado;
}

export interface EstadoPageProps {
    estado: Estado;
}
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
export interface State {
    id: number,
    name: string,
    acronym: string,
    capital: string,
    flag: string,
    coatOfAmrs: string,
    nickname: string,
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
    composition: string[],
    colors: {
        name: string,
        hex: string,
    }[]
}

export interface FlagCardProps {
    state: State;
}

export interface StatePageProps {
    state: State;
}

export interface Color {
    name: string;
    hex: string;
}

export interface ColorCardProps {
    color: Color
}
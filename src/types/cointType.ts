export interface CoinType {
    id: string;
    rank: number;
    name: string;
    symbol: string;
    price_usd: number;
}

export interface CoinApiResponse {
    data: CoinType[];
}
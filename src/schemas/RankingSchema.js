export default class RankingSchema {
    static schema = {
        name: "Ranking",
        primaryKey: "id",
        properties: {
            id: { type: "int", indexed: true },
            name: "string",
            plays: "int",
        },
    };
}

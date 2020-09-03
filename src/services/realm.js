import Realm from "realm";

import RankingSchema from "../schemas/RankingSchema";

export default function getRealm() {
    return Realm.open({
        schema: [RankingSchema],
    });
}

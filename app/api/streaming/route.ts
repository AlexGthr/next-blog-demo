import * as streamingAvailability from "streaming-availability";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const RAPID_API_KEY = process.env.STREAMING_AVAILABILITY_API_KEY;

        // Vérifie si la clé API est bien présente
        if (!RAPID_API_KEY) {
            return new NextResponse("API key missing", { status: 400 });
        }

        const client = new streamingAvailability.Client(new streamingAvailability.Configuration({
            apiKey: RAPID_API_KEY
        }));
        
        // Appel à l'API pour obtenir des informations sur un show spécifique
        const show = await client.showsApi.getShow(
            { id: "tt0068646", country: "us" }
        );

        // Retourne la réponse JSON avec les données du show
        return NextResponse.json(show);

    } catch (error) {
        console.error('[STREAMING ERROR]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

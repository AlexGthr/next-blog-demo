import { NextResponse } from "next/server";

export async function GET() {
    try {
        const RAPID_API_KEY = process.env.STREAMING_AVAILABILITY_API_KEY;
        const type = "shows"; // Remplace par "movies" si nécessaire
        const id = "tt0068646"; // L'identifiant du show ou du film
        const country = "us"; // Le pays pour lequel tu veux les options de streaming

        // Vérifie si la clé API est bien présente
        if (!RAPID_API_KEY) {
            return NextResponse.json({ error: "API key missing" }, { status: 400 });
        }


        // Effectue l'appel à l'API
        const response = await fetch(`https://streaming-availability.p.rapidapi.com/${type}/${id}?country=${country}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
                'x-rapidapi-key': RAPID_API_KEY,
                'Content-Type': 'application/json' // En-tête pour spécifier le type de contenu
            }
        });

        // Vérifie si la réponse est OK
        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json({ error: errorData.message || "Error fetching data" }, { status: response.status });
        }

        // Récupère les données de la réponse
        const show = await response.json();

        // Retourne la réponse JSON avec les données du show
        return NextResponse.json(show);

    } catch (error) {
        console.error('[STREAMING ERROR]', error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}


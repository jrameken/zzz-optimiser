// New Vercel Syntax
export default async function handler(req, res) {
    const { uid } = req.query; // Grabs the ?uid= from the frontend fetch
    
    try {
        const response = await fetch(`https://enka.network/api/zzz/uid/${uid}`, {
            headers: { "User-Agent": "ZZZ-Optimizer-App/1.0" }
        });
        const data = await response.json();
        
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
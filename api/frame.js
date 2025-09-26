// api/frame.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Dummy roll dice (1–6)
  const roll = Math.floor(Math.random() * 6) + 1;

  // Placeholder image (nanti bisa diganti papan yang digenerate)
  const imageUrl = `https://snakes-ledders.vercel.app/assets/dice-${roll}.png`;

  res.status(200).json({
    frame: {
      version: "0.0.0",
      image: imageUrl,
      buttons: [
        {
          label: "🎲 Roll Dice",
          action: "post",
          target: "https://snakes-ledders.vercel.app/api/frame"
        },
        {
          label: "🏆 Leaderboard",
          action: "post",
          target: "https://snakes-ledders.vercel.app/api/leaderboard"
        },
        {
          label: "🌐 Play Full Game",
          action: "link",
          target: "https://snakes-ledders.vercel.app/"
        }
      ]
    },
    meta: {
      roll
    }
  });
}

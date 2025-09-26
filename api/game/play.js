export default async function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json({ ok: true, message: 'Game started' })
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}

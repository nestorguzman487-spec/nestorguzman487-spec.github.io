export default function handler(req, res) {
  if (req.method === "GET") {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode === "subscribe" && token === "CitasTallerWebhook2026") {
      return res.status(200).send(challenge);
    }

    return res.status(403).send("Token incorrecto");
  }

  if (req.method === "POST") {
    console.log("Webhook recibido:", JSON.stringify(req.body, null, 2));

    return res.status(200).send("EVENT_RECEIVED");
  }

  return res.status(405).send("Método no permitido");
}

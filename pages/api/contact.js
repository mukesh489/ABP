export default function handler(req, res) {
    if (req.method === "POST") {
      const { name, email, message } = req.body;
  
      if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required." });
      }
  
      
      console.log("Form submitted:", { name, email, message });
  
      return res.status(200).json({ message: "Thank you for contacting us!" });
    }
  
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  
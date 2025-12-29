import Groq from "groq-sdk";

const llmRewrite = async (originalContent, externalContents = []) => {
  // If no references, skip rewrite
  if (!externalContents.length) {
    console.log("⚠️ No external content, skipping LLM rewrite");
    return originalContent;
  }

  // If no API key, skip rewrite safely
  if (!process.env.GROQ_API_KEY) {
    console.log("⚠️ GROQ_API_KEY missing, skipping LLM rewrite");
    return originalContent;
  }

  try {
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const prompt = `
Rewrite the following article using insights from reference articles.
Do NOT copy sentences. Keep it original, structured, and readable.

ORIGINAL:
${originalContent}

REFERENCE 1:
${externalContents[0]}

REFERENCE 2:
${externalContents[1] || ""}

Return only rewritten content.
`;

    console.log("🤖 Attempting LLM rewrite...");

    const response = await groq.chat.completions.create({
      // ⚠️ model intentionally configurable
      model: process.env.GROQ_MODEL || "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    return response.choices[0]?.message?.content?.trim() || originalContent;
  } catch (error) {
    console.log("⚠️ LLM unavailable, falling back to original content");
    return originalContent;
  }
};

export default llmRewrite;

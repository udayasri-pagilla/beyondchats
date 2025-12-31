export default async function llmRewrite(
  originalContent,
  externalContents
) {
  console.log(" Attempting LLM rewrite...");

  // If no external content, fallback
  if (!externalContents || externalContents.length === 0) {
    console.log(" No external content, using original");
    return originalContent;
  }

  try {
    // Dynamically import Groq ONLY if available
    const { default: Groq } = await import("groq-sdk");

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const prompt = `
Rewrite the following article using insights from competitor articles.

ORIGINAL ARTICLE:
${originalContent}

COMPETITOR CONTENT:
${externalContents.join("\n\n")}

Rewrite in a clean, professional blog format.
`;

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.warn(
      "LLM unavailable, falling back to original content"
    );
    return originalContent;
  }
}

import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/articles";

const publishArticle = async (originalArticle, newContent, references = []) => {
  try {
    const payload = {
      title: `Updated: ${originalArticle.title}`,
      content: `${newContent}\n\n---\n\nReferences:\n${references
        .map((link, i) => `${i + 1}. ${link}`)
        .join("\n")}`,
      type: "generated",
      references,
      sourceUrl: originalArticle.sourceUrl,
    };

    await axios.post(API_BASE_URL, payload);

    console.log("Generated article published successfully");
  } catch (error) {
    console.error(
      " Failed to publish generated article:",
      error.message
    );
  }
};

export default publishArticle;

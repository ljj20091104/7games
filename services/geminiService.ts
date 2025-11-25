import { GoogleGenAI } from "@google/genai";

const getClient = (): GoogleGenAI => {
  const apiKey = process.env.API_KEY || ''; 
  // Note: In a real app, ensure this env var is set.
  // We handle the case where it might be missing gracefully in the UI.
  return new GoogleGenAI({ apiKey });
};

export const generateMarketingResponse = async (userQuery: string): Promise<string> => {
  try {
    const ai = getClient();
    
    const systemPrompt = `
      You are the AI Sales Assistant for "7GAMES", a casual gaming portal.
      Our business model: We provide free casual and puzzle games to millions of users to aggregate traffic, 
      then we offer high-quality ad inventory and traffic solutions to marketers.
      
      Your goal is to answer questions about:
      1. Game recommendations for players (focus on puzzle, casual, strategy).
      2. Traffic demographics and advertising opportunities for marketers.
      
      Keep answers concise, professional, yet energetic. 
      If asked about pricing, mention "Contact our sales team for a custom quote".
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userQuery,
      config: {
        systemInstruction: systemPrompt,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request right now. Please try again or contact support.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our AI assistant is currently experiencing high traffic. Please browse our FAQ or Contact page directly.";
  }
};
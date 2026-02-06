
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getStressAdvice = async (history: { role: 'user' | 'model', text: string }[]): Promise<string> => {
  try {
    const lastMessage = history[history.length - 1]?.text || "Hello";
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: lastMessage,
      config: {
        systemInstruction: `You are the Health Paw Stress Care Chatbot. Your goal is to help users manage stress through evidence-based methods like CBT and controlled breathing exercises. 
        Focus on:
        1. Calming the body through slow, controlled breathing.
        2. CBT techniques to reduce stress levels, cognitive arousal, and increase mindful awareness.
        3. Keep responses empathetic, supportive, and grounded in wellness.`,
        temperature: 0.7,
      },
    });
    return response.text || "I'm here to listen and help you breathe through this stress.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my relaxation modules. Let's try some deep breaths together while I reconnect.";
  }
};

export const generateTherapyDraft = async (condition: string, symptoms: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a therapy/prescription draft for the following: Condition: ${condition}, Symptoms: ${symptoms}. Include safety checks like allergies, dose ranges, and blood markers.`,
      config: {
        systemInstruction: "You are a clinician assistant. Generate structured therapy drafts based on medical history and symptoms. Always include clear safety warnings and state that this is a draft for clinical review.",
      }
    });
    return response.text || "Could not generate draft.";
  } catch (error) {
    return "Error generating therapy draft.";
  }
};

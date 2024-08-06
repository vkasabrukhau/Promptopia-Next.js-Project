import { connectionToDB } from "@utils/database";
import Prompt from "@models/prompt";
export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();
  try {
    await connectionToDB();
    const newPrompt = new Prompt({ creator: userId, prompt, tag });
    await newPrompt.save();
    return newResponse(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    const { userId, prompt, tag } = await req.json();
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};

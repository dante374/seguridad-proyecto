import { MLCEngine } from "@mlc-ai/web-llm";

let engine;
let model = "Llama-3-8B-Instruct-q4f16_1-MLC";

self.onmessage = async (event) => {
  const { type, data } = event.data;

  if (type === "init") {
    engine = new MLCEngine();

    engine.setInitProgressCallback((report) => {
      self.postMessage({ type: "progress", report });
    });

    await engine.reload(model);
    self.postMessage({ type: "ready" });
  }

  if (type === "chat") {
    const stream = await engine.chat.completions.create({
      messages: data.messages,
      model: model,
      stream: true,
    });

    for await (const response of stream) {
      for (const choice of response.choices) {
        if (choice.delta?.content) {
          self.postMessage({ type: "reply", content: choice.delta.content });
        }
      }
    }

    self.postMessage({ type: "done" });
  }
};
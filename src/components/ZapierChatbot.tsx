// components/ZapierChatbot.jsx
import { useEffect } from "react";

const ZapierChatbot = () => {
  useEffect(() => {
    // sécurité si le script n’est pas encore chargé
    if (!window.customElements?.get("zapier-interfaces-chatbot-embed")) {
      console.log("Zapier chatbot loading...");
    }
  }, []);

  return (
    <zapier-interfaces-chatbot-embed
      is-popup="true"
      chatbot-id="cmj7npk1o000tb1mv3zb8ajs7"
    ></zapier-interfaces-chatbot-embed>
  );
};

export default ZapierChatbot;

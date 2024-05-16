import React from "react";
import BotResponse from "./BotResponse";

const IntroSection = () => {
  return (
    <div id="introsection">
      <h1>
        Ambaan
        <BotResponse response=" - Your Faithful Companion" />
      </h1>
      <h2>
        Ambaan Bot is an AI therapist. This is a confidential and safe space designed to support you emotionally.

      
      </h2>
      Features:
      <ul>
        <li>Instant support to any of your questions</li>
        <li>Choose between 3 LLMs - OpenAI, LLaMa3 and Mistral 7b</li>
        <li>User-friendly interface</li>
      </ul>
      <p>
       Disclaimer : 
       <ul>
        <li>This is not a replacement for professional help</li>
        <li>Use with Caution</li>
        <li>Not for emergency situations</li>
      </ul>

      </p>
    </div>
  );
};

export default IntroSection;

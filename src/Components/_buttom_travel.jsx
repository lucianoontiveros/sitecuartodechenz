import { Button } from "flowbite-react";
import React from "react";

const _buttom_travel = () => {
  return (
    <div className="flex flex-col gap-2">
      <a
        href="https://discord.gg/UdU3wvpWu7"
        target="_blank"
        rel="noopener noreferrer"
        alt="discord"
        style={{ display: "inline-block", width: "100%" }}
      >
        <Button
          gradientMonochrome="cyan"
          style={{ width: "100%" }}
        >
          Discord
        </Button>
      </a>
      <a
        href="https://www.twitch.tv/cuartodechenz"
        target="_blank"
        rel="noopener noreferrer"
        alt="Twitch"
        style={{ display: "inline-block", width: "100%" }}
      >
        <Button
          gradientMonochrome="purple"
          style={{ width: "100%" }}
        >
          Twitch
        </Button>
      </a>
    </div>
  );
};

export default _buttom_travel;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

export function Main() {
  const initialNumOfCards = 5
  const [num, setNum] = useState(initialNumOfCards);
  return (
    <main>
      <hr />
      <section>
        <header>
          <h2>Projects</h2>
          {/* <p>Section Subheading</p> */}
        </header>
        {projects.slice(0, num).map((project) => renderCard(project))}
        {num < projects.length && (
          <button
            style={{ backgroundColor: "black", border: "black", padding: "1rem" }}
            onClick={() => setNum(projects.length)}
            type="submit"
          >
            Show {projects.length - initialNumOfCards} more &rarr;
          </button>
        )}
      </section>
      <hr />
      <section>
        <blockquote>
          "You miss 100% of the shots you don't take." -Wayne Gretzky
          <footer>
            <i>- Michael Scott</i>
          </footer>
        </blockquote>
      </section>
    </main>
  );

  function renderCard(project: Project) {
    return (
      <aside>
        <h4>
        <a rel="noreferrer" target="_blank" href={project.url}> 
            {project.name}
            {" "}<img height={25} alt={project.name} src={project.icon}/>
          </a>
        </h4>
        <p>
          <small style={{ color: "black" }}>
            <b>tldr;</b> {project.tldr}
          </small>
        </p>
        <br />
        <p>
          {project.demo && renderPill("Demo", project.demo, "blue")}
          {renderPill("Code", project.url, "black")}
        </p>
      </aside>
    );
  }

  function renderPill(content: string, url: string, color: string) {
    return (
      <sup style={{ backgroundColor: color }}>
        <a
          style={{ color: "white" }}
          rel="noreferrer"
          target="_blank"
          href={url}
        >
          {content} &rarr;
        </a>
      </sup>
    );
  }
}

interface Project {
  name: string;
  url: string;
  demo?: string;
  tldr: string;
  description: string;
  icon: string;
  row: number;
  col: number;
}

const projects: Project[] = [
  {
    name: "Diabuddy Web/iOS App",
    url: "https://github.com/diabuddy",
    tldr:
      "Award Winning Hacking Health 2018 serverless health monitor for children",
    description: "Built using: Emberjs, firebase, and swift",
    icon: "/assets/diabuddy.png",
    row: 10,
    col: 8,
  },
  {
    name: "Trendify Web App",
    url: "https://github.com/NickLewanowicz/trendify-web",
    tldr: "Award Winning CUHacking 2018 web socket based game",
    description: "Built using: express, socket.io, d3, Ember.js",
    icon: "/assets/Trendify.png",
    row: 10,
    col: 8,
  },
  {
    name: "ParkSpace",
    url: "https://github.com/NickLewanowicz/ParkSpace",
    tldr: "Production ready iOS app to rent parking spaces",
    description:
      "Uses linux's proc virtual fs to persist information and metrics about the system, and uses urwid console interface to render it.",
    icon: "/assets/parkspace.png",
    row: 6,
    col: 6,
  },
  {
    name: "Reinforced Learning Visualizer Ai",
    url: "https://github.com/NickLewanowicz/reinforced-learning-ai",
    demo: "https://nicklewanowicz.github.io/reinforced-learning-ai/",
    tldr: "Demonstration of Learning Automata in a sandbox",
    description:
      "Makes use of HTML5 Audio API, as well as Canvas contexts to visualize byte frequencies during song playback",
    icon: "/assets/LAAi.svg",
    row: 4,
    col: 6,
  },
  {
    name: "Network Diagnostic Ai",
    url: "https://github.com/NickLewanowicz/root-cause-ai",
    demo: "https://nicklewanowicz.github.io/root-cause-ai/",
    tldr: "Heuristic search on a graph to find deficiencies",
    description:
      "Makes use of HTML5 Audio API, as well as Canvas contexts to visualize byte frequencies during song playback",
    icon: "/assets/PegAi.svg",
    row: 4,
    col: 5,
  },
  {
    name: "Peg Solitaire Ai",
    url: "https://github.com/NickLewanowicz/peg-solitaire-ai",
    demo: "https://nicklewanowicz.github.io/peg-solitaire-ai/",
    tldr: "Ai to solve French Peg Solitaire",
    description:
      "Makes use of HTML5 Audio API, as well as Canvas contexts to visualize byte frequencies during song playback",
    icon: "/assets/PegAi.svg",
    row: 4,
    col: 5,
  },
  {
    name: "Overboard Ai",
    url: "https://github.com/NickLewanowicz/overboard-ai",
    demo: "https://nicklewanowicz.github.io/overboard-ai/",
    tldr: "MiniMax Ai to compete in Overboard game",
    description:
      "Makes use of HTML5 Audio API, as well as Canvas contexts to visualize byte frequencies during song playback",
    icon: "/assets/OverboardAi.svg",
    row: 3,
    col: 6,
  },
  {
    name: "Extended-LS",
    url: "https://github.com/NickLewanowicz/extended-ls",
    tldr: "Modification to Ubuntu's LS command",
    description:
      "Makes use of HTML5 Audio API, as well as Canvas contexts to visualize byte frequencies during song playback",
    icon: "/assets/extendedLs.svg",
    row: 3,
    col: 4,
  },
  {
    name: "BetterPassword Manager",
    url: "https://github.com/NickLewanowicz/BetterPassword-HCI",
    demo: "https://nicklewanowicz.github.io/BetterPassword-HCI/",
    tldr: "Phrase based password research system",
    description:
      "Makes use of HTML5 Audio API, as well as Canvas contexts to visualize byte frequencies during song playback",
    icon: "/assets/better-password.svg",
    row: 3,
    col: 6,
  },
  {
    name: "typ3",
    url: "https://github.com/MyCryptoHQ/typ3",
    tldr: "Ethereum focused development tool from EthWaterloo 2017",
    description:
      "Makes use of HTML5 Audio API, as well as Canvas contexts to visualize byte frequencies during song playback",
    icon: "/assets/typ3.svg",
    row: 4,
    col: 6,
  },
  {
    name: "Scholarchain",
    url: "https://github.com/NickLewanowicz/Scholarchain",
    tldr: "CUHacking 2017 first attempt at a decentralized application",
    description:
      "Uses linux's proc virtual fs to persist information and metrics about the system, and uses urwid console interface to render it.",
    icon: "/assets/Scholarchain.svg",
    row: 3,
    col: 6,
  },
];

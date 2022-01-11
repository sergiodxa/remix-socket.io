import { useContext, useEffect } from "react";
import { wsContext } from "~/ws-context";

export default function Index() {
  let socket = useContext(wsContext);
  useEffect(() => {
    if (!socket) return;
    socket.on("event", (data) => {
      console.log(data);
    });
    socket.emit("something", "ping");
  }, [socket]);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <div>
        <button onClick={() => socket.emit("something", "ping")}>
          Send ping
        </button>
      </div>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}

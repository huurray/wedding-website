import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
// styles
import "./index.css";

export default function InvitationCard() {
  const ticketRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const { name } = queryString.parse(window.location.search);

  useEffect(() => {
    const speed = 2.3;
    const r = gsap.timeline({ repeat: -1 });
    const o = gsap.timeline({ repeat: -1 });
    const h = gsap.timeline({ repeat: -1 });

    if (ticketRef.current) {
      ticketRef.current.addEventListener("click", () => {
        r.pause();
        o.pause();
        h.pause();
        navigate(`/invitation${name ? `?name=${name}` : ""}`);
      });
    }

    r.to("#app", {
      "--r": "180deg",
      "--p": "0%",
      duration: speed,
      ease: "sine.in",
    });
    r.to("#app", {
      "--r": "360deg",
      "--p": "100%",
      duration: speed,
      ease: "sine.out",
    });
    o.to("#app", {
      "--o": 1,
      duration: speed / 2,
      ease: "power1.in",
    });
    o.to("#app", {
      "--o": 0,
      duration: speed / 2,
      ease: "power1.out",
    });

    h.to("#app", {
      "--h": "100%",
      duration: speed / 2,
      ease: "sine.in",
    });
    h.to("#app", {
      "--h": "50%",
      duration: speed / 2,
      ease: "sine.out",
    });
    h.to("#app", {
      "--h": "0%",
      duration: speed / 2,
      ease: "sine.in",
    });
    h.to("#app", {
      "--h": "50%",
      duration: speed / 2,
      ease: "sine.out",
    });
  }, []);

  return (
    <main id="app">
      <section className="ticket" ref={ticketRef}>
        <header className="front">
          <div className="holo"></div>
          <p className="back-letter">준혁, 승아 드림.</p>
          <aside className="divider"></aside>
        </header>
        <section className="back">
          <div className="holo"></div>
          <p style={{ marginTop: 50, lineHeight: "24px", color: "#fff" }}>
            안녕하세요.
            <br />
            {name && `${name}님.`}
            {name && <br />}
            <br />
            저희의 결혼식에
            <br />
            정중히 초대합니다.
          </p>
          <aside className="divider">
            <div>
              <h4>2024. 8. 25. Sunday, 11AM</h4>
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
}

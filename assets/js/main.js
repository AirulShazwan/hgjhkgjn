
/* IQ-SITE 2026 — main JS
   - Mobile menu toggle
   - Scroll reveal (IntersectionObserver)
   - Countdown timer (to conference start)
*/

(() => {
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  // Footer year
  const y = $("#year");
  if (y) y.textContent = new Date().getFullYear();

  // Mobile menu
  const btn = $("#menuBtn");
  const panel = $("#menuPanel");
  if (btn && panel){
    btn.addEventListener("click", () => {
      const open = panel.getAttribute("data-open") === "true";
      panel.setAttribute("data-open", String(!open));
      panel.style.display = open ? "none" : "block";
      btn.setAttribute("aria-expanded", String(!open));
    });
    // Default hidden on load for small screens
    panel.style.display = "none";
    panel.setAttribute("data-open","false");
  }

  // Scroll reveal
  const revealEls = $$(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in-view");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

  // Countdown (set to 1 Sep 2026 08:00 MYT by default)
  const cdRoot = $("#countdown");
  if (cdRoot){
    // NOTE: JS Date uses local timezone of device. This is OK for most use.
    const target = new Date("2026-09-01T08:00:00");
    const parts = {
      days: $("#cdDays"),
      hours: $("#cdHours"),
      mins: $("#cdMins"),
      secs: $("#cdSecs"),
    };

    const pad2 = (n) => String(n).padStart(2,"0");

    const tick = () => {
      const now = new Date();
      let diff = target - now;
      if (diff < 0) diff = 0;

      const d = Math.floor(diff / (1000*60*60*24));
      const h = Math.floor((diff / (1000*60*60)) % 24);
      const m = Math.floor((diff / (1000*60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      if (parts.days) parts.days.textContent = d;
      if (parts.hours) parts.hours.textContent = pad2(h);
      if (parts.mins) parts.mins.textContent = pad2(m);
      if (parts.secs) parts.secs.textContent = pad2(s);
    };

    tick();
    setInterval(tick, 1000);
  }
})();

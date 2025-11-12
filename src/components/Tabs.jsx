import { useEffect, useRef, useState } from 'react';

export default function Tabs({ items = [], initialIndex = 0 }){
  const [active, setActive] = useState(initialIndex);
  const listRef = useRef(null);
  const indicatorRef = useRef(null);

  // Position animated accent indicator under the active tab
  useEffect(() => {
    const list = listRef.current;
    const indicator = indicatorRef.current;
    if (!list || !indicator) return;
    const activeEl = list.querySelectorAll('.tab')[active];
    if (!activeEl) return;
    const rect = activeEl.getBoundingClientRect();
    const parentRect = list.getBoundingClientRect();
    const left = rect.left - parentRect.left + 10; // account for tab padding
    const width = rect.width - 20;
    indicator.style.transform = `translateX(${left}px)`;
    indicator.style.width = `${width}px`;
  }, [active, items.length]);

  return (
    <div className="tabs">
      <div className="tab-list" role="tablist" ref={listRef}>
        <div className="tabs__indicator" ref={indicatorRef} />
        {items.map((it, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={active === i}
            className={`tab ${active === i ? 'tab--active' : ''}`}
            onClick={() => setActive(i)}>
            {it.label}
          </button>
        ))}
      </div>
      <div className="tab-panel" role="tabpanel">
        {items[active]?.content || null}
      </div>
    </div>
  );
}
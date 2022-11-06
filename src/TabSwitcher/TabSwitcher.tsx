import React from "react";
import {
  TabsHighlight,
  Tab,
  TabsNav,
  TabsNavWrapper,
  FlashLight
} from "./TabSwitcher.styled";

const tabsData = [
  {
    title: "Anasayfa",
    value: "Anasayfa"
  },
  {
    title: "Projeler",
    value: "Projeler"
  },
  {
    title: "Gelecek",
    value: "Gelecek"
  },
  {
    title: "Üyeler",
    value: "Üyeler"
  }
];

type TabData = typeof tabsData[number];

export const TabSwitcher = () => {
  const [tabBoundingBox, setTabBoundingBox] = React.useState<DOMRect>();
  const [wrapperBoundingBox, setWrapperBoundingBox] = React.useState<DOMRect>();
  const [highlightedTab, setHighlightedTab] = React.useState<TabData>();
  const [isHoveredFromNull, setIsHoveredFromNull] = React.useState(true);

  const highlightRef = React.useRef(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const repositionHighlight = (
    e: React.MouseEvent<HTMLElement>,
    tab: TabData
  ) => {
    setTabBoundingBox(e.currentTarget.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef.current?.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(tab);
  };

  const resetHighlight = () => setHighlightedTab(undefined);

  const highlightStyles: React.CSSProperties = {};

  if (tabBoundingBox && wrapperBoundingBox) {
    highlightStyles.transitionDuration = isHoveredFromNull ? "0ms" : "150ms";
    highlightStyles.opacity = highlightedTab ? 1 : 0;
    highlightStyles.width = `${tabBoundingBox.width}px`;
    highlightStyles.transform = `translate(${
      tabBoundingBox.left - wrapperBoundingBox.left
    }px)`;
  }

  return (
    <TabsNavWrapper>
      <FlashLight ref={highlightRef} style={highlightStyles} />
      <TabsNav ref={wrapperRef} onMouseLeave={resetHighlight}>
        <TabsHighlight
          width={tabBoundingBox?.width}
          ref={highlightRef}
          style={highlightStyles}
        />
        {tabsData.map((tab) => (
          <Tab
            key={tab.value}
            onMouseOver={(ev) => repositionHighlight(ev, tab)}
          >
            {tab.title}
          </Tab>
        ))}
      </TabsNav>
    </TabsNavWrapper>
  );
};

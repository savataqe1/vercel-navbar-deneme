import styled from "styled-components";
import type { Width } from "./TabSwitcher.types";

export const TabsNav = styled.div`
  position: relative;
  padding: 0 8px;
  border-radius: 28px;
  background-color: #151515;
  z-index: 20;
`;

export const TabsNavWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  padding: 1px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Tab = styled.a`
  padding: 12px 12px;
  font-size: ${14 / 16}rem;
  color: hsl(0 0% 43.5%);
  display: inline-block;
  position: relative;
  cursor: pointer;
  transition: color 250ms;

  &:hover {
    color: rgba(255, 255, 255, 0.75);
  }
`;

export const TabsHighlight = styled.div<Width>`
  background: rgba(255, 255, 255, 0.01);
  position: absolute;
  top: 0px;
  left: 0;
  border-radius: 28px;
  height: 32px;
  transition: 0.15s ease;
  transition-property: width, transform, opacity;

  &:before {
    content: "";
    filter: blur(20px);
    position: absolute;
    left: 50%;
    transform: translate(-50%, 130%);
    width: ${({ width }) => (width ?? 30) * 1.1}px;
    height: 20px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.4);
    z-index: 10;
  }
`;

export const FlashLight = styled.div`
  position: absolute;
  left: 0;
  bottom: -25px;
  border-radius: 28px;
  transition: 0.15s ease;
  transition-property: width, transform, opacity;
  filter: blur(15px);
  transform: translate(-50%, 0%);
  height: 50px;
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 10;
`;

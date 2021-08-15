import { Children, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

function getPageFromHash() {
  const hash = window.location.hash;
  if (/^#\d+$/.test(hash)) {
    return parseInt(hash.substring(1));
  }
  return 1;
}

interface Props {
  children: ReactNode;
}

export function Pages({ children }: Props) {
  const [page, setPage] = useState(getPageFromHash);

  const items = Children.toArray(children);
  const current = Math.max(1, Math.min(items.length, page));

  useEffect(() => {
    window.addEventListener("hashchange", function () {
      setPage(getPageFromHash());
    });
  });

  const item = items[current - 1];
  const barColor = getBarColor((item as any).type?.name ?? "");

  return (
    <Wrapper>
      <Content>{items[current - 1]}</Content>
      <BottomBar style={{ backgroundColor: barColor }}>
        {current > 1 && <LeftLink href={`#${current - 1}`}>Back</LeftLink>}
        <PageNumber>&ndash; {current} &ndash;</PageNumber>
        {current < items.length && (
          <RightLink href={`#${current + 1}`}>Next</RightLink>
        )}
      </BottomBar>
    </Wrapper>
  );
}

function getBarColor(name: string) {
  if (name.endsWith("Lesson")) {
    return "#000000";
  } else if (name.endsWith("Task")) {
    return "#2380e6";
  } else if (name.endsWith("Bonus")) {
    return "#fd7e14";
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomBar = styled.div`
  background-color: black;
  color: white;
  padding: 8px 16px;
  display: grid;
  grid-template-columns: 100px auto 100px;
  font-weight: bold;
`;

const LeftLink = styled.a`
  color: white;
  grid-column: 1;
`;

const RightLink = styled.a`
  color: white;
  text-align: right;
  grid-column: 3;
`;

const PageNumber = styled.div`
  text-align: center;
  font-weight: bold;
  grid-column: 2;
`;

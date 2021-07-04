import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Data } from "../lib/type";

const CountryWrapper = styled.div`
    width: 40rem;
    border: 0.1rem solid ${p => p.theme.gray400};
    border-radius: 0.5rem;
    background-color: ${p => p.theme.gray100};
`;

const CountryHead = styled.button`
    display: flex;
    width: 100%;
    padding: 2rem;
    font-weight: 500;
`;

const CountryName = styled.span`
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const CountryCode = styled.span`
    margin-left: 1rem;
    color: ${p => p.theme.gray700};
`;

const CountryFrame = styled.div.attrs<{ height: number }>(p => ({ style: { maxHeight: `${p.height}px` } }))<{
    height: number;
}>`
    overflow: hidden;
    transition: max-height 0.2s;
    will-change: max-height;
    backface-visibility: hidden;
    pointer-events: none;
`;

const FrameInner = styled.div`
    border-top: 0.1rem solid ${p => p.theme.gray400};
    padding: 2rem;
`;

const FrameLanguages = styled.div`
    text-align: right;
`;

const FrameTitle = styled.span`
    color: ${p => p.theme.gray700};
`;

const FrameInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    &:last-child {
        margin: 0;
    }
`;

export const Country: React.FC<Data.Country> = ({ emoji, name, code, continent, languages, capital }) => {
    const frameRef = useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = useState<number>(0);

    const onToggle = () => {
        const frame = frameRef.current;

        if (!frame) {
            return;
        }

        if (height === 0) {
            setHeight(frame.scrollHeight);
        } else {
            setHeight(0);
        }
    };

    return (
        <CountryWrapper>
            <CountryHead onClick={onToggle}>
                <CountryName>
                    {emoji} {name}
                </CountryName>
                <CountryCode>{code}</CountryCode>
            </CountryHead>
            <CountryFrame ref={frameRef} height={height}>
                <FrameInner>
                    {continent && (
                        <FrameInfo>
                            <FrameTitle>Continent</FrameTitle>
                            {continent.name}
                        </FrameInfo>
                    )}
                    {capital && (
                        <FrameInfo>
                            <FrameTitle>Capital</FrameTitle>
                            {capital}
                        </FrameInfo>
                    )}
                    {languages && languages.length > 0 && (
                        <FrameInfo>
                            <FrameTitle>Languages</FrameTitle>
                            <FrameLanguages>
                                {languages.map(language => (
                                    <div key={language.code}>{language.name}</div>
                                ))}
                            </FrameLanguages>
                        </FrameInfo>
                    )}
                </FrameInner>
            </CountryFrame>
        </CountryWrapper>
    );
};

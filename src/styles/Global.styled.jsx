import styled from "styled-components";

export const Container = styled.div`
    width: 100%;    
    display: flex; 
    flex-direction: ${({ direction }) => direction};
`

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    justify-content: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
    gap: ${({ gap }) => gap};
    background: ${({ bg }) => bg};
    width: ${({ width }) => width};
`

export const PaddingContainer = styled.div`
    padding-top: ${({ top }) => top};
    padding-bottom: ${({ bottom }) => bottom};
    padding-right: ${({ right }) => right};
    padding-left: ${({ left }) => left};
`

export const BoldText = styled.span`
    font-weight: 700;
    font-size: ${({ size }) => size};
    color: ${({ color }) => color};
`

export const ParaText = styled.span`
    font-weight: 400;
    font-size: ${({ size }) => size};
    color: ${({ color }) => color};
`
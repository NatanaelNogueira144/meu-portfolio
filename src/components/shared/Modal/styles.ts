import styled, { keyframes } from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0; 
    left: 0;
    width: 100vw; 
    height: 100vh;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`;

export const ModalContent = styled.div`
    background: #fff;
    border-radius: 8px;
    padding: 40px 32px;
    position: relative;
    min-width: 320px;
    max-width: 90vw;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 8px 24px rgba(0,0,0,0.23);
    animation: fadeIn 0.2s;
`;

keyframes`
    fadeIn {
        from { transform: translateY(32px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`;

export const ModalClose = styled.button`
    position: absolute;
    top: 10px; 
    right: 16px;
    background: transparent;
    border: none;
    font-size: 2rem;
    color: ${props => props.theme.colors.black};
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.colors.primary};
    }
`;
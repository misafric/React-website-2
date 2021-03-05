import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 12;
`;

const HeroSection = styled.section`
    height: 100vh;
    max-height: 1000px;
    position: relative;
    overflow: hidden;
`;

const HeroWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const HeroSlide = styled.div``;
const HeroSlider = styled.div``;
const HeroImage = styled.img``;
const HeroContent = styled.div``;
const Arrow = styled(IoMdArrowRoundForward)``;

const arrowButtons = css`
    height: 50px;
    width: 50px;
    color: #fff;
    cursor: pointer;
    background: #000D1A;
    border-radius: 45px;
    margin-right: 1rem;
    padding: 12px;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background: #CD853F;
        transform: scale(1.05);
    }
`;

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`;

const Hero = ({ slides }) => {
    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return(
                        <HeroSlide key={index}>
                            <HeroSlider>
                                <HeroImage />
                                <HeroContent>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.price}</p>
                                    <Button to={slide.path} primary='true'
                                    css={`
                                        max-width: 150px;
                                    `}
                                    >
                                        {slide.label}
                                        <Arrow />
                                    </Button>
                                </HeroContent>
                            </HeroSlider>
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow />
                    <NextArrow />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero

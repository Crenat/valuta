// Libraries
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    border-radius: 1rem;
    padding: 1rem;
    border: 2px solid #fafafa;
  }
`;

export const Image = styled(motion.img)`
  border-radius: 1rem;
  
  @media screen and (max-width: 1340px) {
    border-radius: .7rem;
  }

  @media screen and (max-width: 480px) {
    border-radius: 1rem;
  }
`;

export const Title = styled(motion.h1)`
  margin-top: .5rem;
  font-size: 1.5rem;
  font-weight: bold;

  @media screen and (max-width: 1340px) {
    font-size: 1rem;
    line-height: 1.3rem;
  }
`;

export const Description = styled(motion.p)``;

export const Year = styled(motion.p)`
  color: #e8d102;
  font-size: 1.2rem;
  font-weight: bold;
  margin: .5rem 0;
`;



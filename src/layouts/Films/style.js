// Libraries
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrap = styled(motion.div)`
  color: white;
  display: grid;
  grid-template-columns: repeat(8, minmax(200px, 250px));
  grid-auto-rows: minmax(300px, auto);
  grid-row-gap: 1rem;
  grid-column-gap: 3rem;

  @media screen and (max-width: 2250px) {
    grid-template-columns: repeat(7, minmax(200px, 250px));
  }

  @media screen and (max-width: 2000px) {
    grid-template-columns: repeat(6, minmax(200px, 250px));
  }

  @media screen and (max-width: 1745px) {
    grid-template-columns: repeat(6, minmax(150px, 200px));
  }

  @media screen and (max-width: 1340px) {
    grid-template-columns: repeat(6, minmax(100px, 200px));
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, minmax(110px, 200px));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 45%);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 100%;
    grid-row-gap: 2rem;
  }
`;

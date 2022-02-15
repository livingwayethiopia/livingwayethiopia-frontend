import styled from "styled-components";
import Image from "next/image";
export const Container = styled.div`
  .imageCard {
    height: 300px;
    @media (max-width: 620px) {
      height: 400px;
    }
    @media (max-width: 420px) {
      height: 300px;
    }
  }
`;

export const ImageContainer = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: 50% 0%;
`;

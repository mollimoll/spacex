import React, { FC } from "react"
import styled from "styled-components"
import { COLOR } from "../constants"

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  width: 40vw;
  background-color: ${COLOR.GREY};
  margin: 1.5vw;
  border: 2px solid ${COLOR.BLACK.LIGHT};
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    flex-direction: column;
    height: 50%;
    margin: 1rem;
    padding-bottom: 1rem;
  }

  p {
    flex-grow: 10;
    overflow: scroll;
  }

  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
  }

  @media screen and (max-width: 600px) {
    width: 90vw;
  }
`

type Props = {
  id: string
  image: string
  name: string
  description: string
  onClick: (id: string) => void
}

const DeviceCard: FC<Props> = ({ id, image, name, description, onClick }) => {
  return (
    <StyledCard data-testid='card' onClick={() => onClick(id)}>
      <img src={image} alt='' />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </StyledCard>
  )
}

export default DeviceCard

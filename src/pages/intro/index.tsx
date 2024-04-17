import styled from "@emotion/styled";
// components
import InvitationCard from "./InvitationCard";

export default function IntroPage() {
  return (
    <Container>
      <InvitationCard />
      <p>초대 카드를 눌러 입장해주세요</p>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};

  & > p {
    color: ${({ theme }) => theme.colors.gray700};
  }
`;

import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um atomo e react avancado escrito ao lado"
    />
    <S.Title>React Avancado</S.Title>
    <S.Description>Typescript, React, Next e Styled Componest</S.Description>
    <S.Illustatrion
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com codigo"
    />
  </S.Wrapper>
);

export default Main;

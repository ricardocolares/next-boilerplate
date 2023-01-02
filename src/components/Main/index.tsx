import * as S from './styles';

const Main = ({
  title = 'React Avancado',
  description = 'TS, React, Next and Styled Components',
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um atomo e react avancado escrito ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustatrion
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com codigo"
    />
  </S.Wrapper>
);

export default Main;

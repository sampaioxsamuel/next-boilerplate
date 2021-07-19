import * as S from './styles'

const Main = ({
  title = 'React Avancado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avancado escrito ao lado."
      />
      <S.Title>{title}</S.Title>
      <S.Description> {description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela de codigo"
      />
    </S.Wrapper>
  )
}

export default Main

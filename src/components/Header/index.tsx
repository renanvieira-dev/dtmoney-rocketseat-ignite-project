import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface IHeaderProps {
  onOpenNewTransitionModal: () => void;
}

export function Header({ onOpenNewTransitionModal }: IHeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button
          onClick={onOpenNewTransitionModal}
          type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
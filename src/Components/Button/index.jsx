import { Container } from './styles';

export function Button({ title, loading = false, ...rest }) {
  return (
    //usa o ...rest quando eu nao quero
    // passar todas as propriedades
    // o rest serve para pegar todas as propriedades
    // que eu passar no botão
    // e jogar elas aqui sem ter que ficar desestruturando
    <Container type="button" disabled={loading} {...rest}>
      {loading ? 'Carregando...' : title}
    </Container>
  );
}

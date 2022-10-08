import { Container, Links, Content } from './styles';
import { Button } from '../../Components/Button';
import { Header } from '../../Components/Header';
import { Section } from '../../Components/Section';
import { Tag } from '../../Components/Tag';
import { ButtonText } from '../../Components/ButtonText';

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="excluir nota" isActive />
          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec vulputate nisi, sit amet molestie libero. Donec rhoncus urna
            lorem, in porttitor ipsum suscipit non. Aenean aliquam diam libero,
            in mollis enim vehicula id. Phasellus egestas neque sed facilisis
            dignissim. Fusce vel nisl augue. Sed blandit tortor elementum
            viverra hendrerit. Duis vehicula, metus et ornare vestibulum, dolor
            erat congue diam, a luctus augue erat sodales tortor.
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}

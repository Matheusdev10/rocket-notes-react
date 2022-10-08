import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Container, Form, Avatar } from './styles';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import { Link } from 'react-router-dom';

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>
      <Form>
        <Avatar>
          <img
            src="https://github.com/matheusdev10.png"
            alt="foto do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={FiUser}></Input>
        <Input placeholder="Email" type="text" icon={FiMail}></Input>
        <Input placeholder="Senha" type="password" icon={FiLock}></Input>
        <Input placeholder="Nova senha" type="password" icon={FiLock}></Input>
        <Button title="Salvar" />
      </Form>
    </Container>
  );
}

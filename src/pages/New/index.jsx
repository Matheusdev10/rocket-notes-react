import { useState } from 'react';
import { Header } from '../../Components/Header';
import { Input } from '../../Components/Input';
import { useNavigate } from 'react-router-dom';
import { TextArea } from '../../Components/TextArea';
import { NoteItem } from '../../Components/NoteItem';
import { Section } from '../../Components/Section';
import { api } from '../../services/api';
import { ButtonText } from '../../Components/ButtonText';

import { Button } from '../../Components/Button';

import { Container, Form } from './styles';

export function New() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navigate = useNavigate();
  function handleGoBack() {
    navigate(-1);
  }

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink('');
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Digite o título da nota');
    }
    if (newLink) {
      return alert(
        'Você deixou um link no campo adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio'
      );
    }
    if (newTag) {
      return alert(
        'Você deixou uma tag no campo adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio'
      );
    }

    await api.post('/notes', {
      title,
      description,
      tags,
      links,
    });

    alert('Nota criada com sucesso');
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>

            <ButtonText title="Voltar" onClick={handleGoBack} />
          </header>
          <Input
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="observações"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                placeholder="Novo link"
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(tag);
                  }}
                />
              ))}
              <NoteItem
                isNew
                placeholder="Nova tag"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button type="button" title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}

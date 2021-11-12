import React from 'react';
import { Container, Row , Col, Accordion} from 'react-bootstrap';
import './App.css';
import Imagem from './componentes/imagem';

function App () {
  return (
      <Container>

        <Row className="justify-content-md-center">
          <Col>
            <center><h1>Meu Perfil</h1></center>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs = {6} md = {4}>
              <Imagem />
          </Col>
        </Row>

        <br/>
      
        <Row>
          <Col>
            <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Dados Pessoais</Accordion.Header>
                    <Accordion.Body>
                      <p>Lucas Matos Moreira;</p>
                      <p>20 anos;</p>
                      <p>Santos, São Paulo;</p>
                      <p>Brasileiro</p>
                    </Accordion.Body>
                  </Accordion.Item>
              <Accordion.Item eventKey="1">
              <Accordion.Header>Formação</Accordion.Header>
                <Accordion.Body>
                  <p>Técnico de eletronica em ETEC Aristóteles Ferreira</p>
                  <p>Cursando Ciencia da Computação em UNIP</p>
                  <p>Ensino Médio Completo</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
              <Accordion.Header>Experiência</Accordion.Header>
                <Accordion.Body>
                  <p>Estágio como Jovem Aprendiz ADM em correios</p>
                  <p>Estágio em Futuro consultoria TI</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
              <Accordion.Header>Projetos</Accordion.Header>
                <Accordion.Body>
                  <p>Criptografia com Python</p>
                  <p>Sistema banco com python</p>
                  <p>Sistema de classificação de ordenação de dados</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
  );
}
export default App;
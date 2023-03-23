import Hero from 'components/Hero/Hero';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Home() {
  return (
    <>
      <Hero />
      <Container style={{ maxWidth: 1440 }}>
        <Row>
          <Col sm={6}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta rem
            quos molestias consequuntur quas unde modi veritatis, quibusdam
            perspiciatis cumque ab voluptas quia quis pariatur possimus
            provident sequi inventore voluptatibus?
          </Col>
          <Col sm={6}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde et
            accusantium aut enim cumque non, aspernatur veritatis reprehenderit,
            nesciunt similique nostrum, magnam nihil repellat impedit eligendi.
            Id dolorem corrupti consectetur.
          </Col>
        </Row>
        <Row className="justify-content-end">
          <Col sm={3}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            alias, asperiores minima optio deserunt libero doloremque atque
            ratione provident iste pariatur et enim consectetur repellat
            perspiciatis esse beatae adipisci fuga?
          </Col>
          <Col sm={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            ipsam exercitationem id blanditiis quos, aliquam velit quis
            voluptatum laboriosam eveniet doloribus vitae rem ex hic repellendus
            odit quibusdam perferendis consectetur!
          </Col>
        </Row>
      </Container>
    </>
  );
}

import {
  Container,
  Badge,
  List,
  ListItem,
  Link
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="GAMERZONE">
    <Container>
      <Title>
        GAMERZONE <Badge>2019</Badge>
      </Title>
      <P>
        A platform for organizing in-game tournaments in the game PUBG.
        Also implemented integration with the discord bot, which tracked player statistics.
        Players winning tournaments earned intra-project currency for which they could buy goods in the store.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJs, Express, Redis, RabbitMQ, PostgreSQL, React, NextJs, Redux-saga, Docker-compose</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/gamerzone_01.png" alt="gamerzone" />
      <WorkImage src="/images/works/gamerzone_02.png" alt="gamerzone" />
      <WorkImage src="/images/works/gamerzone_03.png" alt="gamerzone" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

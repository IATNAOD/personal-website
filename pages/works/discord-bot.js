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
  <Layout title="Custom discord bot">
    <Container>
      <Title>
        Custom discord bot <Badge>2020</Badge>
      </Title>
      <P>
        A custom bot for a semi-role project was implemented and integrated with the site, for a better user experience.
        In the bot were implemented: chat moderation tools, custom intra-project economy, factions system,
        inventory system, functions of auto-creation of private voice rooms
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJs, Fastify, MongoDB, DiscordJs, React, Redux-saga, Docker-compose</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

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
  <Layout title="Stream control API">
    <Container>
      <Title>
        Stream control API <Badge>2021-2022</Badge>
      </Title>
      <P>
        Stateless REST API service for launching, switching and managing live broadcasts
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Only back</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJs, Fastify, WebSockets, Redis, REST API, Clickhouse, Docker-compose</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

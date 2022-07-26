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
  <Layout title="Steam multi-account trading bot">
    <Container>
      <Title>
        Steam multi-account trading bot <Badge>2021</Badge>
      </Title>
      <P>
        Web application for multi-account trading in Steam. Several services are used for trading,
        where things from Steam are bought/sold according to a certain strategy.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJs, Fastify, CronJob, MongoDB, SocketIO, Steam API, React, Redux-saga, Docker-compose</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/steam-trade_01.png" alt="steam-trade" />
      <WorkImage src="/images/works/steam-trade_02.png" alt="steam-trade" />
      <WorkImage src="/images/works/steam-trade_03.png" alt="steam-trade" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

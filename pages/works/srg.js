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
  <Layout title="SRG REVP">
    <Container>
      <Title>
        SRG real estate valuation platform <Badge>2021</Badge>
      </Title>
      <P>
        Web application for real estate valuation with integration of external services of the company.
        Created for internal use among company employees
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJs, Fastify, PostgreSQL, Vue, Vuex, Docker-compose</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/srg_01.png" alt="srg" />
      <WorkImage src="/images/works/srg_02.png" alt="srg" />
      <WorkImage src="/images/works/srg_03.png" alt="srg" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

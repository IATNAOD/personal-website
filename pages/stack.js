import { Container, Heading, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const stack = [
  'JavaScript',
  'TypeScript',
  'NodeJs',
  'Express',
  'Fastify',
  'React',
  'NextJs',
  'React-native',
  'Redux',
  'Redux-saga',
  'MongoDB',
  'PostgreSQL',
  'Rabbitmq',
  'Redis',
  'Docker',
  'Docker-compose',
  'Nginx',
  'Puppeteer',
  'Linux',
  'Git',
  'REST'
].join(' • ')

const Stack = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Stack
      </Heading>
      <Box mb="4">{stack}</Box>
    </Container>
  </Layout>
)

export default Stack
export { getServerSideProps } from '../components/chakra'

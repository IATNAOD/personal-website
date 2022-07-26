import NextLink from 'next/link'
import { Link, Container, Heading, Box, Button, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoGoogle } from 'react-icons/io5'
import IoLogoTelegram from '../components/icons/telegram'
import IoLogoHackerone from '../components/icons/hackerone'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a full stack web and mobile developer from Russia.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} mb={5}>
          <Heading as="h2" variant="page-title">
            Alexey Surov
          </Heading>
          <p>Digital Craftsman | node.js(3+ years) / React(2+ years) / React-native(1+ year)</p>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Alexey is a full-stack web and mobile developer living in Yaroslavl,
          with a passion for creating cool projects that solve real problems.
          He knows the ins and outs of project development, from planning to solving real problems with code.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Born in Yaroslavl, Russia.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          I got interested in programming. Started mastering art of code,
          making simple programs in compiling languages (c, c++)
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Getting my first job. Developing a platform for organizing tournaments in the game PUBG
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          I got to know freelancing. Starting to do different projects
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Getting a second job at SRG. In the team I am developing a platform for employees to evaluate real estate
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Creating a b2b marketplace, including front, back and mobile development. Beginning to take an active interest in mobile development
        </BioSection>
        <BioSection>
          <BioYear>Now</BioYear>
          Completing a transportation project, including the development of back, admin panel and mobile applications for customers and drivers for IOS and android
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/iatnaod" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                github
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:iatnaod@iatnaod.space" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGoogle />}
              >
                iatnaod@iatnaod.space
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://t.me/iatnaod" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTelegram />}
              >
                telegram
              </Button>
            </Link>
          </ListItem>
        </List>

      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'

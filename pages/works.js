import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbB2B from '../public/images/works/b2b_01.png'
import thumbWeirdMerch from '../public/images/works/weird-merch_01.png'
import thumbGamerzone from '../public/images/works/gamerzone_01.png'
import thumbSRG from '../public/images/works/srg_01.png'
import thumbSCA from '../public/images/works/sca_01.png'
import thumbSteamTrade from '../public/images/works/steam-trade_01.png'
import thumbSteamDiscordBot from '../public/images/works/discord-bot_01.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={2} gap={6}>
        <Section>
          <WorkGridItem id="b2b" title="B2B marketplace" thumbnail={thumbB2B}>
            A B2B marketplace app with chat and personal pricings for each buyer
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="weird-merch" title="Weird Merch" thumbnail={thumbWeirdMerch}>
            Custom clothing marketplace
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="gamerzone" title="Tournament organization platform" thumbnail={thumbGamerzone}>
            A platform for organizing in-game tournaments in the game PUBG
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="srg" title="SRG real estate valuation platform" thumbnail={thumbSRG}>
            Web-application for real estate valuation with integration of external services
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="stream-control-api" title="Stream control API" thumbnail={thumbSCA}>
            REST API service for launching, switching and managing live broadcasts
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="steam-trade" title="Steam multi-account trading bot" thumbnail={thumbSteamTrade}>
            Web application for multi-account trading in Steam
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="discord-bot" title="Custom discord bot" thumbnail={thumbSteamDiscordBot}>
            Custom discord bot for a semi-role project
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'

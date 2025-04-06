'use client'

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  useBreakpointValue,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FaLeaf, FaTractor, FaSeedling } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <Container maxW={'5xl'} px={6}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 6, md: 10 }}
          py={{ base: 16, md: 28 }}
        >
          <Heading
            fontWeight={700}
            fontSize={useBreakpointValue({ base: '3xl', sm: '4xl', md: '5xl' })}
            lineHeight={'110%'}
          >
            {t('home.heroTitle1')} <br />
            <Text as={'span'} color={'green.400'}>
              {t('home.heroTitle2')}
            </Text>
          </Heading>
          <Text color={'gray.500'} fontSize={{ base: 'md', md: 'lg' }}>
            {t('home.heroDesc')}
          </Text>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} justify={'center'}>
            <Link to={'/getadvice'}>
              <Button
                colorScheme={'green'}
                bg={'green.400'}
                rounded={'full'}
                px={6}
                _hover={{ bg: 'green.500' }}
              >
                {t('home.getStarted')}
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>

      {/* Features Section */}
      <Container maxW={'6xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <VStack>
            <Icon as={FaLeaf} w={10} h={10} color={'green.400'} />
            <Text fontSize={'xl'} fontWeight={'bold'}>
              {t('home.features.sustainableFarming')}
            </Text>
            <Text textAlign={'center'} color={'gray.600'}>
              {t('home.features.desc1')}
            </Text>
          </VStack>
          <VStack>
            <Icon as={FaTractor} w={10} h={10} color={'green.400'} />
            <Text fontSize={'xl'} fontWeight={'bold'}>
              {t('home.features.smartAutomation')}
            </Text>
            <Text textAlign={'center'} color={'gray.600'}>
              {t('home.features.desc2')}
            </Text>
          </VStack>
          <VStack>
            <Icon as={FaSeedling} w={10} h={10} color={'green.400'} />
            <Text fontSize={'xl'} fontWeight={'bold'}>
              {t('home.features.higherYields')}
            </Text>
            <Text textAlign={'center'} color={'gray.600'}>
              {t('home.features.desc3')}
            </Text>
          </VStack>
        </SimpleGrid>
      </Container>

      {/* How It Works Section */}
      <Box bg={useColorModeValue('gray.100', 'gray.700')} py={12}>
        <Container maxW={'5xl'}>
          <Heading textAlign={'center'} mb={6}>
            {t('home.howItWorks')}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <VStack>
              <Text fontSize={'lg'} fontWeight={'bold'}>
                {t('home.step1')}
              </Text>
              <Text textAlign={'center'} color={'gray.600'}>
                {t('home.step1desc')}
              </Text>
            </VStack>
            <VStack>
              <Text fontSize={'lg'} fontWeight={'bold'}>
                {t('home.step2')}
              </Text>
              <Text textAlign={'center'} color={'gray.600'}>
                {t('home.step2desc')}
              </Text>
            </VStack>
            <VStack>
              <Text fontSize={'lg'} fontWeight={'bold'}>
                {t('home.step3')}
              </Text>
              <Text textAlign={'center'} color={'gray.600'}>
                {t('home.step3desc')}
              </Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg={'gray.900'} color={'gray.300'} py={6} mt={12}>
        <Container maxW={'6xl'}>
          <Flex direction={{ base: 'column', md: 'row' }} justify={'space-between'}>
            <Text>{t('home.footer.rights')}</Text>
            <HStack spacing={4}>
              <Link to={'/about'}>{t('home.footer.about')}</Link>
              <Link to={'/contact'}>{t('home.footer.contact')}</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </>
  )
}

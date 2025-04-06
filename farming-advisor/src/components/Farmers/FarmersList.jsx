'use client';

import { useEffect, useState } from 'react';
import { fetchFarmers, getAdvice } from '../../api';
import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Spinner,
  Grid,
  Image,
} from '@chakra-ui/react';
import { CheckIcon, LinkIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function FarmersList() {
  const { t, i18n } = useTranslation();

  const [farmers, setFarmers] = useState([]);
  const [advice, setAdvice] = useState(null);
  const [selectedFarm, setSelectedFarm] = useState(null);
  const [loadingAdvice, setLoadingAdvice] = useState(false);
  const [loadingFarmers, setLoadingFarmers] = useState(true);

  useEffect(() => {
    async function loadFarmers() {
      const data = await fetchFarmers();
      setFarmers(data);
      setLoadingFarmers(false);
    }
    loadFarmers();
  }, []);

  const handleGetAdvice = async (farmId) => {
    setSelectedFarm(farmId);
    setLoadingAdvice(true);
    const lang = i18n.language; // current selected language
    const result = await getAdvice(farmId, lang);
    setAdvice(result);
    setLoadingAdvice(false);
  };




  return (
    <Center py={6} flexDirection="column" px={4}>
      <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" mb={4}>
        {t('ai.farmersData')}
      </Text>

      {loadingFarmers ? (
        <Center py={10}>
          <Spinner size="xl" color="green.400" />
        </Center>
      ) : farmers.length === 0 ? (
        <Text fontSize="lg" fontWeight="medium" color="gray.500" textAlign="center">
          {t('ai.uploadFarmData')}
        </Text>
      ) : (
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={6}
          w="full"
        >
          {farmers.map((farm) => (
            <Box
              key={farm.Farm_ID}
              maxW={'330px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'md'}
              overflow={'hidden'}
              mx="auto"
            >
              <Stack textAlign={'center'} p={6} color={useColorModeValue('gray.800', 'white')} align={'center'}>
                <Text
                  fontSize={'sm'}
                  fontWeight={500}
                  bg={useColorModeValue('green.50', 'green.900')}
                  p={2}
                  px={3}
                  color={'green.500'}
                  rounded={'full'}
                >
                  {farm.Crop_Type}
                </Text>
                <Text fontSize={'lg'} fontWeight={700}>
                  {t('ai.soilPh')}: {farm.Soil_pH}
                </Text>
              </Stack>

              <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={4} textAlign="center">
                <Button
                  w={'full'}
                  bg={'green.400'}
                  color={'white'}
                  rounded={'xl'}
                  boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                  _hover={{ bg: 'green.500' }}
                  _focus={{ bg: 'green.500' }}
                  onClick={() => handleGetAdvice(farm.Farm_ID)}
                >
                  {t('ai.getAdvice')}
                </Button>
              </Box>
            </Box>
          ))}
        </Grid>
      )}

      {loadingAdvice && (
        <Center mt={6}>
          <Spinner size="xl" color="green.400" />
        </Center>
      )}

      {advice && selectedFarm && !loadingAdvice && (
        <Box
          mt={6}
          p={6}
          borderRadius="lg"
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow="lg"
          w={{ base: '90%', md: '70%', lg: '50%' }}
          mx="auto"
          transition="all 0.3s ease-in-out"
        >
          <Text fontSize="xl" fontWeight="bold" textAlign="center" mb={4}>
            {t('ai.aiAdviceForFarm', { farmId: selectedFarm })} 🌱
          </Text>

          {typeof advice.recommendation?.content === 'string' && (
            <Box p={4} borderRadius="md" bg={useColorModeValue('gray.50', 'gray.800')} boxShadow="md">
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                📝 {t('ai.recommendations')}:
              </Text>

              <List spacing={2}>
                {(() => {
                  const lang = advice.lang || 'en';
                  const content = advice.recommendation.content;

                  let points = [];


                  if (lang === 'hi' || lang === 'mr') {
                    // Matches each numbered section like "1। ...", "2। ..." up to next number or end
                    points = content.match(/(?:\d+।)[\s\S]*?(?=\d+।|$)/g) || [];
                  } else {
                    // English splitting
                    points = content.split(/\. +/).filter(line => line.trim());
                  }

                  return points.map((point, index) => (
                    <ListItem key={index} display="flex" alignItems="start">
                      <ListIcon as={CheckIcon} color="green.400" mt={1} />
                      <Text whiteSpace="pre-line">{point.trim()}</Text>
                    </ListItem>
                  ));
                })()}
              </List>
            </Box>
          )}





          {advice.videos && (
            <Box mt={4} textAlign="center">
              <Button
                as="a"
                href={advice.videos}
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="blue"
                size="md"
                fontWeight="medium"
              >
                🎥 {t('ai.watchRelatedVideos')}
              </Button>
            </Box>
          )}

          {advice.useful_links && advice.useful_links.length > 0 && (
            <Stack mt={4}>
              <Text fontWeight="bold">🔗 {t('ai.usefulLinks')}:</Text>
              <List spacing={2}>
                {advice.useful_links.map((link, index) => (
                  <ListItem key={index} display="flex" alignItems="center">
                    <ListIcon as={LinkIcon} color="blue.400" />
                    <Link
                      to={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#3182CE', textDecoration: 'underline', fontWeight: '500' }}
                    >
                      {link}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Stack>
          )}

          {advice.images && advice.images.length > 0 && (
            <Stack mt={4}>
              <Text fontWeight="bold">🖼 {t('ai.relatedImages')}:</Text>
              <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4} mt={2}>
                {advice.images.map((imgUrl, index) => (
                  <Image
                    key={index}
                    src={imgUrl}
                    alt={`Related image ${index + 1}`}
                    borderRadius="md"
                    boxShadow="md"
                    objectFit="cover"
                    maxH="200px"
                    w="100%"
                  />
                ))}
              </Grid>
            </Stack>
          )}
        </Box>
      )}
    </Center>
  );
}

export default FarmersList;


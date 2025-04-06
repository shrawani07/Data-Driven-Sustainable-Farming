'use client';

import {
  Container,
  Box,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'gray.200');

  return (
    <Container maxW='3xl' centerContent>
      <Box
        w='100%'
        p={8}
        boxShadow='lg'
        borderRadius='md'
        bg={bgColor}
        textAlign='center'
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Heading size='xl' mb={4} color={textColor}>
            {t('about.title')}
          </Heading>
          <Text fontSize='lg' color={textColor} mb={6}>
            {t('about.description')}
          </Text>
          <VStack spacing={4}>
            <Text fontSize='md' color={textColor}>
              {t('about.point1')}
            </Text>
            <Text fontSize='md' color={textColor}>
              {t('about.point2')}
            </Text>
            <Text fontSize='md' color={textColor}>
              {t('about.point3')}
            </Text>
          </VStack>
          <Button mt={6} colorScheme='green' as={Link} to='/'>
            {t('about.backToHome')}
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
};

export default AboutPage;

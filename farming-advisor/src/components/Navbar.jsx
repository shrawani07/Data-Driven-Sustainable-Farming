import * as React from 'react';
import {
  Container,
  Box,
  Flex,
  Spacer,
  Heading,
  Menu,
  MenuItem,
  MenuDivider,
  MenuButton,
  IconButton,
  MenuList,
  HStack,
  Button,
  useColorModeValue,
  useColorMode,
  Select
} from '@chakra-ui/react';
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { MdAdd } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => i18n.changeLanguage(lng);
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const [language, setLanguage] = React.useState(i18n.language || 'en');
  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Flex align="center">
        <HStack>
          <Link to="/">
            <Box p="2">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Heading
                  as="h1"
                  fontSize={{ base: '2xl', sm: '3xl' }}
                  bgGradient="linear(to-l, rgb(79, 250, 142), #FF0080)"
                  bgClip="text"
                  _hover={{
                    textDecoration: 'none',
                    bgGradient: 'linear(to-r, green.500, yellow.500)'
                  }}
                >
                  {t('title')}
                </Heading>
              </motion.div>
            </Box>
          </Link>
        </HStack>
        <Spacer />

        {/* Desktop Buttons */}
        <HStack display={{ base: "none", md: "flex" }} spacing={3}>
          <Button as={Link} to="/farmer-upload" leftIcon={<MdAdd />} colorScheme="pink">
            {t('uploadFarmer')}
          </Button>
          <Button as={Link} to="/market-upload" leftIcon={<MdAdd />} colorScheme="purple">
            {t('uploadMarket')}
          </Button>
          <Button as={Link} to="/getadvice" leftIcon={<LuLayoutDashboard />} colorScheme="blue">
            {t('aiAdvice')}
          </Button>
          // Inside your component JSX
          <Select
            size="sm"
            variant="filled"
            value={language}
            onChange={(e) => {
              const newLang = e.target.value;
              setLanguage(newLang);
              changeLanguage(newLang);
            }}
            bg={useColorModeValue("white", "gray.700")}
            color={useColorModeValue("black", "white")}
            borderRadius="md"
            boxShadow="sm"
            _hover={{ bg: useColorModeValue("gray.100", "gray.600") }}
            _focus={{
              borderColor: "green.400",
              boxShadow: "0 0 0 1px green.400",
            }}
            width="100px"
            fontWeight="medium"
            mr={2}
          >
            <option value="en">English</option>
            <option value="mr"> मराठी</option>
            <option value="hi"> हिंदी</option>
          </Select>
          <IconButton
            aria-label="Toggle Dark Mode"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            colorScheme="gray"
          />
        </HStack>

        {/* Mobile Menu */}
        <Box display={{ base: "block", md: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<GiHamburgerMenu />}
              size="md"
              bg={useColorModeValue("gray.200", "gray.800")}
            />
            <MenuList>
              <MenuItem icon={<MdAdd />} onClick={() => navigate("/farmer-upload")}>
                {t('uploadFarmer')}
              </MenuItem>
              <MenuDivider />
              <MenuItem icon={<MdAdd />} onClick={() => navigate("/market-upload")}>
                {t('uploadMarket')}
              </MenuItem>
              <MenuDivider />
              <MenuItem icon={<LuLayoutDashboard />} onClick={() => navigate("/getadvice")}>
                {t('aiAdvice')}
              </MenuItem>
              <MenuDivider />

              {/* Language Dropdown */}
              {/* Language Switcher inside mobile menu */}
              <MenuDivider />
              <MenuItem onClick={() => changeLanguage('en')}>🌐 English</MenuItem>
              <MenuItem onClick={() => changeLanguage('hi')}>🌐 हिन्दी</MenuItem>
              <MenuItem onClick={() => changeLanguage('mr')}>🌐 मराठी</MenuItem>
              <MenuDivider />


              <MenuDivider />
              <MenuItem icon={colorMode === 'light' ? <FaMoon /> : <FaSun />} onClick={toggleColorMode}>
                {colorMode === 'light' ? t('darkMode') : t('lightMode')}
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Container>
  );
};

export default Navbar;

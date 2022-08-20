import { React, useState } from 'react';
import {
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
  Tooltip,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { MdCode, MdAccountBox } from 'react-icons/md';
import { FaCrosshairs } from 'react-icons/fa';

export default function Navbar() {
  let navigate = useNavigate();
  const [active, setActive] = useState(false);
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue('#FFFFFF', '#121212');
  const icons = useColorModeValue('#121212', '#FFFFFF');
  const bgComponent = useColorModeValue('#F4F6F8', '#2C2C2C');

  function buttonHandle() {
    setActive(!active);
    toggleColorMode();
  }

  function handleBack() {
    navigate("/");
  }

  function handleGit() {
    window.location.replace('https://github.com/darkwarden/Valorant-Tools');
  }

  return (
    <Flex
      bg={bg}
      w={{ md: '4%', base: '30%' }}
      className="left-navbar"
      alignItems="center"
      flexDirection="column"
      rowGap={4}
    >
      <Tooltip
        hasArrow
        label="Github Source Code"
        placement="bottom"
        bg="red.600"
      >
        <Button
          color={icons}
          onClick={handleGit}
          className="menu-button"
          bgColor={bgComponent}
          p={1}
          borderRadius="8px"
          sx={{
            position: '-webkit-sticky',
            /* Safari */ position: 'sticky',
            top: '5px',
          }}
        >
          <MdCode size="25px" />
        </Button>
      </Tooltip>

      <Tooltip hasArrow label="Toggle Dark/Light" placement="top" bg="red.600">
        <Button
          onClick={buttonHandle}
          className="darkmode-button"
          color={icons}
          bgColor={bgComponent}
          p={1}
          borderRadius="8px"
          sx={{
            position: '-webkit-sticky',
            /* Safari */ position: 'sticky',
            top: '64px',
          }}
        >
          {active ? <FaSun size="25px" /> : <FaMoon size="25px" />}
        </Button>
      </Tooltip>

      <Tooltip
        hasArrow
        label="Valorant Profile"
        placement="top"
        bg="red.600"
      >
        <Button
          color={icons}
          onClick={handleBack}
          className="menu-button"
          bgColor={bgComponent}
          p={1}
          borderRadius="8px"
          sx={{
            position: '-webkit-sticky',
            /* Safari */ position: 'sticky',
            top: '124px',
          }}
        >
          <MdAccountBox size="25px" />
        </Button>
      </Tooltip>

      <Tooltip
        hasArrow
        label="Valorant Crosshairs"
        placement="top"
        bg="red.600"
      >
        <Button
          color={icons}
          onClick={handleBack}
          className="menu-button"
          bgColor={bgComponent}
          p={1}
          borderRadius="8px"
          sx={{
            position: '-webkit-sticky',
            /* Safari */ position: 'sticky',
            top: '184px',
          }}
        >
          <FaCrosshairs size="25px" />
        </Button>
      </Tooltip>
    </Flex>
  );
}

import { React, useRef, useContext, useState, useEffect } from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  Text,
  FormControl,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';
import { MdArrowForward } from 'react-icons/md';
import { UserContext } from '../lib/UserContext';
import wallpaper from '../assets/wallapaper2.jpg';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';

export default function SearchPage() {
  let navigate = useNavigate();
  const usernameTemp = useRef();
  const tagTemp = useRef();
  const [temp1, setTemp1] = useState('');
  const [temp2, setTemp2] = useState('');
  const { userData } = useContext(UserContext);
  const { fetchData } = useContext(UserContext);
  const { fetchDataMMR } = useContext(UserContext);
  const { fetchDataMatches } = useContext(UserContext);
  const { matchFilter } = useContext(UserContext);


  const [isError, setisError] = useState(true);

  function input1(e) {
    const temp = e.target.value;
    setTemp1(temp);
  }

  function input2(e) {
    const temp = e.target.value;
    setTemp2(temp);
  }

  useEffect(() => {
    if (temp1 !== '' && temp2 !== '') {
      setisError(false);
    } else {
      setisError(true);
    }
  }, [temp1, temp2]);

  function errorHandling(e) {
    e.preventDefault();
    if (usernameTemp.current.value !== '' && tagTemp.current.value !== '') {
      handleSubmit();
    }
  }

  function handleSubmit() {
    userData.username = usernameTemp.current.value;
    userData.tag = tagTemp.current.value;
    localStorage.setItem('username', userData.username);
    localStorage.setItem('tag', userData.tag);
    fetchData();
    fetchDataMMR();
    fetchDataMatches();
    matchFilter();
    navigate('/Profile');
  }

  return (
    <Flex>
      <Navbar />
      <Flex
        bgImage={wallpaper}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        overflow="hidden"
        h="100vh"
        w={'1920px'}
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          w={{ md: '45%', base: '95%' }}
          className="Login"
          bgColor="#ffffffd1"
          px="40px"
          pt="65px"
          pb="40px"
          borderRadius="20px"
          alignItems="center"
          flexDirection="column"
        >
          <Heading color="black" mb={8} size="lg">
            Sign In
          </Heading>
          <FormControl isInvalid={isError}>
            <Flex
              className="inputField"
              as="form"
              onSubmit={errorHandling}
              flexDirection="column"
              gap={2}
              pt={5}
              pb={4}
              alignItems="center"
              color="#535353"
            >
              <Input
                ref={usernameTemp}
                borderRadius="7px"
                bgColor="#EDEDED"
                placeholder="USERNAME"
                width="306px"
                height="51px"
                fontWeight="semibold"
                fontSize="md"
                _placeholder={{ color: '#535353' }}
                onChange={input1}
              ></Input>
              <Input
                ref={tagTemp}
                borderRadius="7px"
                bgColor="#EDEDED"
                placeholder="TAGLINE"
                width="306px"
                height="51px"
                fontWeight="semibold"
                fontSize="md"
                _placeholder={{ color: '#535353' }}
                onChange={input2}
              ></Input>

              {isError ? (
                <FormErrorMessage fontWeight="bold">
                  Input is required.
                </FormErrorMessage>
              ) : (
                <FormHelperText></FormHelperText>
              )}
              <Button
                type="submit"
                bgColor="#D13639"
                mt="60px"
                borderRadius="18px"
                w="60px"
                h="60px"
                color="white"
                _hover={{ color: 'black', bgColor: '#E2E8F0' }}
              >
                <MdArrowForward size="30px" />
              </Button>
            </Flex>
          </FormControl>
        </Flex>
      </Flex>
    </Flex>
  );
}

import { React, useContext, useEffect } from 'react';
import {
  Heading,
  Flex,
  Text,
  Image,
  useColorModeValue,
  SkeletonCircle,
  Skeleton,
  Button,
} from '@chakra-ui/react';
import { RiMedalFill } from 'react-icons/ri';
import { GiLaurelsTrophy } from 'react-icons/gi';
import { UserContext } from '../lib/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const bg = useColorModeValue('#FFFFFF', '#121212');
  const text = useColorModeValue('#2C2C2C', '#FAFAFA');
  let navigate = useNavigate();

  const { data } = useContext(UserContext);
  const { mmr } = useContext(UserContext);

  const { fetchData } = useContext(UserContext);
  const { fetchDataMMR } = useContext(UserContext);
  const { fetchDataMatches } = useContext(UserContext);
  const { matchFilter } = useContext(UserContext);
  const { fetchDataWin } = useContext(UserContext);
  const { fetchDataUpdateRank } = useContext(UserContext);

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const buttonHandle = async event => {
    fetchDataMatches();
    fetchData();
    fetchDataMMR();
    navigate('/Profile');
    matchFilter();
  }

  return (
    <Flex
      bgColor={bg}
      className="status-bar"
      w="100%"
      flexDirection={{ md: 'column', base: 'row' }}
      alignItems="center"
      py={{ md: 4, base: 0 }}
      marginLeft={{ base: 0, md: 1 }}
      p={{ base: 3, md: 0 }}
      borderRadius={{ base: '20px', md: '0px' }}
      h={{ base: null, md: '100vh' }}
      justifyContent="center"
    >
      <Flex
        flexDirection={{ md: 'column', base: 'column' }}
        alignItems="center"
        rowGap={{ base: 4, md: 0 }}
      >
        <Text color="#C0C2C8" fontWeight="semibold">
          Your Profile
        </Text>
        <Flex flexDirection={{ md: 'column', base: 'row' }} columnGap={9}>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            {data.card ? (
              <Image
                src={data.card.small}
                borderRadius="100%"
                boxSize={{ md: '100px', base: '85px' }}
                mt={{ md: '65px', base: '0px' }}
              />
            ) : (
              <SkeletonCircle
                mt={{ md: '90px', base: 0 }}
                size={{ base: '85px', md: '100px' }}
              />
            )}
            {data.name ? (
              <Heading size={{ md: 'md', base: 'sm' }} py={3} color={text}>
                {data.name} #{data.tag}
              </Heading>
            ) : (
              <Skeleton mt="20px" height="30px">
                <Heading color={text}>loading.....</Heading>
              </Skeleton>
            )}
          </Flex>

          <Flex
            className="level-mmr"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            py={{ md: '100px', base: '0px' }}
            rowGap={{ md: '20px', base: '10px' }}
          >
            <Flex
              mt={{ md: 10, base: 0 }}
              alignItems="center"
              className="level"
              columnGap={2}
            >
              <RiMedalFill size="36px" color={text} />
              <Flex flexDirection="column" justifyContent="center" mt="-3px">
                <Text fontWeight="bold" mb="-3px" color="#46B8A3">
                  Level
                </Text>
                {data.account_level ? (
                  <Text fontWeight="bold" mt="-3px" color={text}>
                    {data.account_level}
                  </Text>
                ) : (
                  <Skeleton>
                    <Text fontWeight="bold" mt="-3px" color={text}>
                      200
                    </Text>
                  </Skeleton>
                )}
              </Flex>
            </Flex>
            <Flex alignItems="center" className="mmr" columnGap={2}>
              <GiLaurelsTrophy size="36px" color={text} />
              <Flex flexDirection="column" justifyContent="center" mt="-3px">
                <Text fontWeight="bold" mb="-3px" color="#46B8A3">
                  ELO
                </Text>
                {mmr.elo ? (
                  <Text fontWeight="bold" mt="-3px" color={text}>
                    {mmr.elo}
                  </Text>
                ) : (
                  <Skeleton>
                    <Text fontWeight="bold" mt="-3px" color={text}>
                      200
                    </Text>
                  </Skeleton>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        {data.last_update ? (
          <Text
            color="#C0C2C8"
            mt={{ md: '35px', base: '0px' }}
            fontWeight="semibold"
          >
            Updated {data.last_update}.
          </Text>
        ) : null}

        <Button onClick={buttonHandle}>Reload Profile</Button>
      </Flex>
    </Flex>
  );
}

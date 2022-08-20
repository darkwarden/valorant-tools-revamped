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
  Stack,
} from '@chakra-ui/react';
import { RiMedalFill } from 'react-icons/ri';
import { GiLaurelsTrophy } from 'react-icons/gi';
import { UserContext } from '../lib/UserContext';
import { useNavigate } from 'react-router-dom';

export default function RankStats() {
  const bg = useColorModeValue('#FFFFFF', '#121212');
  const text = useColorModeValue('#2C2C2C', '#FAFAFA');
  let navigate = useNavigate();

  const { data } = useContext(UserContext);
  const { mmr } = useContext(UserContext);

  const { match } = useContext(UserContext);

  const { match1 } = useContext(UserContext);
  const { match2 } = useContext(UserContext);
  const { match3 } = useContext(UserContext);
  const { match4 } = useContext(UserContext);
  const { match5 } = useContext(UserContext);

  const { fetchData } = useContext(UserContext);
  const { fetchDataMMR } = useContext(UserContext);
  const { fetchDataMatches } = useContext(UserContext);
  const { fetchDataWin } = useContext(UserContext);
  const { fetchDataUpdateRank } = useContext(UserContext);



  return (
    //Base container of your profile
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
      <Stack>
        <Text fontSize="lg" fontWeight="semibold">
          Current rank & Stats
        </Text>
        <Text 
        fontSize="sm" 
        fontWeight="semibold"
        pl={{ md: 4, base: 4 }}
        >
          of the last 5 matches
        </Text>
            <Flex
              flexDirection="column"
              w={{ md: '100%', base: null }}
              alignItems="center"
              justifyContent="center"
            >
              <Flex alignItems="center" gap={3}>
                <Flex flexDirection="column">
                  {mmr.currenttierpatched ? (
                    <Heading color="#46B8A3" size={{ md: 'lg', base: 'lg' }}>
                      {mmr.currenttierpatched}
                    </Heading>
                  ) : (
                    <Skeleton isLoaded>
                      <Heading size={{ md: 'xl', base: 'lg' }}>
                        No data found
                      </Heading>
                    </Skeleton>
                  )}

                  {mmr.ranking_in_tier ? (
                    <Text color="#46B8A3" as="i">
                      Current RR: {mmr.ranking_in_tier}
                    </Text>
                  ) : (
                    <Skeleton isLoaded>
                      <Text color="#46B8A3" as="i"></Text>
                    </Skeleton>
                  )}
                </Flex>
            </Flex>

            <Flex w="40%" justifyContent="center"></Flex>

        </Flex>





        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {data.card ? (
            <Image
              src={
                'https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/22/largeicon.png'
              }
              boxSize={{ md: '100px', base: '85px' }}
              mt={{ md: '15px', base: '0px' }}
            />
          ) : (
            <SkeletonCircle
              mt={{ md: '90px', base: 0 }}
              size={{ base: '85px', md: '100px' }}
            />
          )}
        </Flex>
        <Text
          fontSize="lg"
          fontWeight="semibold"
          pt={{ base: 10, md: 3 }}
          pl={{ base: 3, md: 3 }}
          alignItems="center"
          justifyContent="center"
        >
          Avarage KD:{' '}{parseFloat((((match1.stats.kills/match1.stats.deaths) + (match2.stats.kills/match2.stats.deaths) + (match3.stats.kills/match3.stats.deaths) + (match4.stats.kills/match4.stats.deaths) + (match5.stats.kills/match5.stats.deaths) + Number.EPSILON) * 100) / 500).toFixed(2)}
        </Text>

        <Text
          fontSize="lg"
          fontWeight="semibold"
          pt={{ base: 3, md: 3 }}
          pl={{ base: 3, md: 3 }}
          alignItems="center"
          justifyContent="center"
        >
          Avarage HS%: NaN
        </Text>

        <Text
          fontSize="lg"
          fontWeight="semibold"
          pt={{ base: 3, md: 3 }}
          pl={{ base: 3, md: 3 }}
          alignItems="center"
          justifyContent="center"
        >
          Winrate: NaN
        </Text>



        
      </Stack>
    </Flex>
  );
}

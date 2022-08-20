import { React, useContext, useEffect } from 'react';
import {
  Heading,
  Flex,
  Text,
  Image,
  useColorModeValue,
  SkeletonCircle,
  Skeleton,
  Stack,
} from '@chakra-ui/react';
import { UserContext } from '../lib/UserContext';

export default function Matches() {
  const bg = useColorModeValue('#FFFFFF', '#121212');
  const text = useColorModeValue('#2C2C2C', '#FAFAFA');

  const { match } = useContext(UserContext);

  const { match1 } = useContext(UserContext);
  const { match2 } = useContext(UserContext);
  const { match3 } = useContext(UserContext);
  const { match4 } = useContext(UserContext);
  const { match5 } = useContext(UserContext);

  return (
    //Base container of your profile
    <Flex
      bgColor={bg}
      className="status-bar"
      w="100%"
      flexDirection={{ md: 'column', base: 'column' }}
      overflowY="scroll"
      rowGap={4}
      columnGap={4}
      alignItems="center"
      py={{ md: 4, base: 0 }}
      marginLeft={{ base: 0, md: 1 }}
      p={{ base: 3, md: 0 }}
      borderRadius={{ base: '20px', md: '0px' }}
      h={{ base: null, md: '100vh' }}
      justifyContent="center"
    >
      {/* 1st match */}
      <Stack>
        <Flex
          flexDirection={{ md: 'column', base: 'row' }}
          columnGap={9}
          boxShadow="dark-lg"
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mt={{ md: 60, base: 0 }}
            mr={{ md: 0, base: 0 }}
          >
            {match1.assets ? (
              <Image
                src={match1?.assets?.agent?.small}
                borderRadius="100%"
                boxSize={{ md: '80px', base: '45px' }}
                mt={{ md: '15px', base: '0px' }}
              />
            ) : (
              <SkeletonCircle
                mt={{ md: '90px', base: 0 }}
                size={{ base: '85px', md: '100px' }}
              />
            )}
            {match[0] ? (
              <Heading size={{ md: 'md', base: 'sm' }} py={3} color={text}>
                {match[0].metadata.map}
              </Heading>
            ) : (
              <Skeleton mt="20px" height="30px">
                <Heading color={text}>loading.....</Heading>
              </Skeleton>
            )}
          </Flex>

          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            {match1.stats ? (
              <Stack>
                <Text>K / A / D</Text>
                <Text>
                  {match1?.stats?.kills} / {match1?.stats?.assists} /{' '}
                  {match1?.stats?.deaths}
                </Text>
              </Stack>
            ) : (
              <SkeletonCircle
                mt={{ md: '90px', base: 0 }}
                size={{ base: '85px', md: '100px' }}
              />
            )}
          </Flex>

          <Flex
            flexDirection="column"
            alignItems="end"
            justifyContent="end"
            mt={{ md: -55, base: 4 }}
            mr={{ md: '20px', base: 0 }}
            fontSize={{ md: '15px', base: '12px' }}
          >
            {match1.stats ? (
              <Stack>
                <Text>KD:</Text>
                <Text>
                  {Math.round(
                    (match1.stats.kills / match1.stats.deaths +
                      Number.EPSILON) *
                      100
                  ) / 100}
                </Text>
              </Stack>
            ) : (
              <SkeletonCircle
                mt={{ md: '90px', base: 0 }}
                size={{ base: '85px', md: '100px' }}
              />
            )}
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {match[0] ? (
            <Stack>
              <Text>{match[0]?.metadata?.game_start_patched}</Text>
            </Stack>
          ) : (
            <SkeletonCircle
              mt={{ md: '90px', base: 0 }}
              size={{ base: '85px', md: '100px' }}
            />
          )}
        </Flex>
      </Stack>

      {/* 2th match */}

      <Stack>
        <Flex
          flexDirection={{ md: 'column', base: 'row' }}
          columnGap={9}
          boxShadow="dark-lg"
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mr={{ md: 0, base: 0 }}
          >
            {match2.assets ? (
              <Image
                src={match2?.assets?.agent?.small}
                borderRadius="100%"
                boxSize={{ md: '80px', base: '45px' }}
                mt={{ md: '15px', base: '0px' }}
              />
            ) : (
              <SkeletonCircle
                mt={{ md: '90px', base: 0 }}
                size={{ base: '85px', md: '100px' }}
              />
            )}
            {match[1] ? (
              <Heading size={{ md: 'md', base: 'sm' }} py={3} color={text}>
                {match[1].metadata.map}
              </Heading>
            ) : (
              <Skeleton mt="20px" height="30px">
                <Heading color={text}>loading.....</Heading>
              </Skeleton>
            )}
          </Flex>

          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            {match2.stats ? (
              <Stack>
                <Text>K / A / D</Text>
                <Text>
                  {match2?.stats.kills} / {match2?.stats.assists} /{' '}
                  {match2?.stats.deaths}
                </Text>
              </Stack>
            ) : (
              <SkeletonCircle
                mt={{ md: '90px', base: 0 }}
                size={{ base: '85px', md: '100px' }}
              />
            )}
          </Flex>

          <Flex
            flexDirection="column"
            alignItems="end"
            justifyContent="end"
            mt={{ md: -55, base: 4 }}
            mr={{ md: '20px', base: 0 }}
            fontSize={{ md: '15px', base: '12px' }}
          >
            {match2.stats ? (
              <Stack>
                <Text>KD:</Text>
                <Text>
                  {Math.round(
                    (match2.stats.kills / match2.stats.deaths +
                      Number.EPSILON) *
                      100
                  ) / 100}
                </Text>
              </Stack>
            ) : (
              <SkeletonCircle
                mt={{ md: '90px', base: 0 }}
                size={{ base: '85px', md: '100px' }}
              />
            )}
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {match[1] ? (
            <Stack>
              <Text>{match[1]?.metadata?.game_start_patched}</Text>
            </Stack>
          ) : (
            <SkeletonCircle
              mt={{ md: '90px', base: 0 }}
              size={{ base: '85px', md: '100px' }}
            />
          )}
        </Flex>
      </Stack>

      {/* 3th match */}

      <Stack>
        <Flex
          flexDirection={{ md: 'column', base: 'row' }}
          columnGap={9}
          boxShadow="dark-lg"
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mr={{ md: 0, base: 0 }}
          >
            {match3.assets ? (
              <Image
                src={match3?.assets?.agent?.small}
                borderRadius="100%"
                boxSize={{ md: '80px', base: '45px' }}
                mt={{ md: '15px', base: '0px' }}
              />
            ) : (
              <SkeletonCircle
                mt={{ md: '90px', base: 0 }}
                size={{ base: '85px', md: '100px' }}
              />
            )}
            {match[2] ? (
              <Heading size={{ md: 'md', base: 'sm' }} py={3} color={text}>
                {match[2].metadata.map}
              </Heading>
            ) : (
              <Skeleton mt="20px" height="30px">
                <Heading color={text}>loading.....</Heading>
              </Skeleton>
            )}
          </Flex>

          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            {match3.stats ? (
              <Stack>
                <Text>K / A / D</Text>
                <Text>
                  {match3?.stats.kills} / {match3?.stats.assists} /{' '}
                  {match3?.stats.deaths}
                </Text>
              </Stack>
            ) : (
              <SkeletonCircle
                mt={{ md: '90px', base: 0 }}
                size={{ base: '85px', md: '100px' }}
              />
            )}
          </Flex>

          <Flex
            flexDirection="column"
            alignItems="end"
            justifyContent="end"
            mt={{ md: -55, base: 4 }}
            mr={{ md: '20px', base: 0 }}
            fontSize={{ md: '15px', base: '12px' }}
          >
            {match3.stats ? (
              <Stack>
                <Text>KD:</Text>
                <Text>
                  {Math.round(
                    (match3.stats.kills / match3.stats.deaths +
                      Number.EPSILON) *
                      100
                  ) / 100}
                </Text>
              </Stack>
            ) : (
              <SkeletonCircle
                mt={{ md: '90px', base: 0 }}
                size={{ base: '85px', md: '100px' }}
              />
            )}
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {match[2] ? (
            <Stack>
              <Text>{match[2]?.metadata?.game_start_patched}</Text>
            </Stack>
          ) : (
            <SkeletonCircle
              mt={{ md: '90px', base: 0 }}
              size={{ base: '85px', md: '100px' }}
            />
          )}
        </Flex>
      </Stack>

      {/* 4th match */}

      <Stack>
        <Flex
          flexDirection={{ md: 'column', base: 'row' }}
          columnGap={9}
          boxShadow="dark-lg"
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mr={{ md: 0, base: 0 }}
          >
            {match4.assets ? (
              <Image
                src={match4?.assets?.agent?.small}
                borderRadius="100%"
                boxSize={{ md: '80px', base: '45px' }}
                mt={{ md: '15px', base: '0px' }}
              />
            ) : (
              <SkeletonCircle
                mt={{ md: '90px', base: 0 }}
                size={{ base: '85px', md: '100px' }}
              />
            )}
            {match[3] ? (
              <Heading size={{ md: 'md', base: 'sm' }} py={3} color={text}>
                {match[3].metadata.map}
              </Heading>
            ) : (
              <Skeleton mt="20px" height="30px">
                <Heading color={text}>loading.....</Heading>
              </Skeleton>
            )}
          </Flex>

          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            {match4.stats ? (
              <Stack>
                <Text>K / A / D</Text>
                <Text>
                  {match4?.stats.kills} / {match4?.stats.assists} /{' '}
                  {match4?.stats.deaths}
                </Text>
              </Stack>
            ) : (
              <SkeletonCircle
                mt={{ md: '90px', base: 0 }}
                size={{ base: '85px', md: '100px' }}
              />
            )}
          </Flex>

          <Flex
            flexDirection="column"
            alignItems="end"
            justifyContent="end"
            mt={{ md: -55, base: 4 }}
            mr={{ md: '20px', base: 0 }}
            fontSize={{ md: '15px', base: '12px' }}
          >
            {match4.stats ? (
              <Stack>
                <Text>KD:</Text>
                <Text>
                  {Math.round(
                    (match4.stats.kills / match4.stats.deaths +
                      Number.EPSILON) *
                      100
                  ) / 100}
                </Text>
              </Stack>
            ) : (
              <SkeletonCircle
                mt={{ md: '90px', base: 0 }}
                size={{ base: '85px', md: '100px' }}
              />
            )}
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {match[3] ? (
            <Stack>
              <Text>{match[3]?.metadata?.game_start_patched}</Text>
            </Stack>
          ) : (
            <SkeletonCircle
              mt={{ md: '90px', base: 0 }}
              size={{ base: '85px', md: '100px' }}
            />
          )}
        </Flex>
      </Stack>

      {/* 5th match */}

      <Stack>
        <Flex
          flexDirection={{ md: 'column', base: 'row' }}
          columnGap={9}
          boxShadow="dark-lg"
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mr={{ md: 0, base: 0 }}
          >
            {match5.assets ? (
              <Image
                src={match5?.assets?.agent?.small}
                borderRadius="100%"
                boxSize={{ md: '80px', base: '45px' }}
                mt={{ md: '15px', base: '0px' }}
              />
            ) : (
              <SkeletonCircle
                mt={{ md: '90px', base: 0 }}
                size={{ base: '85px', md: '100px' }}
              />
            )}
            {match[4] ? (
              <Heading size={{ md: 'md', base: 'sm' }} py={3} color={text}>
                {match[4].metadata.map}
              </Heading>
            ) : (
              <Skeleton mt="20px" height="30px">
                <Heading color={text}>loading.....</Heading>
              </Skeleton>
            )}
          </Flex>

          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            {match5.stats ? (
              <Stack>
                <Text>K / A / D</Text>
                <Text>
                  {match5?.stats.kills} / {match5?.stats.assists} /{' '}
                  {match5?.stats.deaths}
                </Text>
              </Stack>
            ) : (
              <SkeletonCircle
                mt={{ md: '90px', base: 0 }}
                size={{ base: '85px', md: '100px' }}
              />
            )}
          </Flex>

          <Flex
            flexDirection="column"
            alignItems="end"
            justifyContent="end"
            mt={{ md: -55, base: 4 }}
            mr={{ md: '20px', base: 0 }}
            fontSize={{ md: '15px', base: '12px' }}
          >
            {match5.stats ? (
              <Stack>
                <Text>KD:</Text>
                <Text>
                  {Math.round(
                    (match5.stats.kills / match5.stats.deaths +
                      Number.EPSILON) *
                      100
                  ) / 100}
                </Text>
              </Stack>
            ) : (
              <SkeletonCircle
                mt={{ md: '90px', base: 0 }}
                size={{ base: '85px', md: '100px' }}
              />
            )}
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {match[4] ? (
            <Stack>
              <Text>{match[4]?.metadata?.game_start_patched}</Text>
            </Stack>
          ) : (
            <SkeletonCircle
              mt={{ md: '90px', base: 0 }}
              size={{ base: '85px', md: '100px' }}
            />
          )}
        </Flex>
      </Stack>
    </Flex>
  );
}

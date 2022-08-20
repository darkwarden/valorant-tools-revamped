import { Flex, useColorModeValue } from '@chakra-ui/react';
import { useEffect } from 'react';
import Matches from '../components/Matches';
import Navbar from '../components/NavBar';
import Profile from '../components/Profile';
import RankStats from '../components/RankStats';
// import Facts from "../components/Facts";

// import Navbar from '../components/NavBar';
// import Profile from "../components/Profile";
// import Rank from "../components/Rank";
// import RecentMatches from "../components/RecentMatches";

export default function ProfilePage() {
  const bg = useColorModeValue('#F4F6F8', '#2C2C2C');

  return (
    <Flex maxWidth="2000px">
      <Navbar />
      <Flex
        h="100vh"
        w={{ md: '96%', base: '140%' }}
        bgColor={bg}
        className="main-page"
        alignItems="center"
        flexDirection={{ base: 'column', md: 'row' }}
        overflowY="scroll"
      >
        <Flex p={{ base: 5, md: 0 }} w={{ md: '25%', base: '100%' }}>
          <Profile />
        </Flex>
        <Flex p={{ base: 5, md: 0 }} w={{ md: '30%', base: '100%' }}>
          <RankStats/>
        </Flex>
        <Flex p={{ base: 5, md: 0 }} w={{ md: '55%', base: '100%' }}>
          <Matches/>
        </Flex>
        <Flex>
          <Flex>

          </Flex>
          <Flex>

          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

import { useState } from 'react';
import axios from 'axios';
import { createContext } from 'react';
const HenrikDevValorantAPI = require('unofficial-valorant-api');
const VAPI = new HenrikDevValorantAPI();

export const UserContext = createContext(null);

const userData = {
  username: localStorage.getItem('username'),
  tag: localStorage.getItem('tag'),
};

const rank = {
  Unranked:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/0/largeicon.png',
  Iron1:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/3/largeicon.png',
  Iron2:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/4/largeicon.png',
  Iron3:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/5/largeicon.png',
  Bronze1:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/6/largeicon.png',
  Bronze2:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/7/largeicon.png',
  Bronze3:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/8/largeicon.png',
  Silver1:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/9/largeicon.png',
  Silver2:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/10/largeicon.png',
  Silver3:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/11/largeicon.png',
  Gold1:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/12/largeicon.png',
  Gold2:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/13/largeicon.png',
  Gold3:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/14/largeicon.png',
  Platinum1:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/15/largeicon.png',
  Platinum2:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/16/largeicon.png',
  Platinum3:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/17/largeicon.png',
  Diamond1:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/18/largeicon.png',
  Diamond2:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/19/largeicon.png',
  Diamond3:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/20/largeicon.png',
  Immortal1:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/21/largeicon.png',
  Immortal2:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/22/largeicon.png',
  Immortal3:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/23/largeicon.png',
  Radiant:
    'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/24/largeicon.png',
  Ascendant1:
    'https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/21/largeicon.png',
  Ascendant2:
    'https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/22/largeicon.png',
  Ascendant3:
    'https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/23/largeicon.png',
};

export function UserProvider({ children }) {
  const [data, setData] = useState([]);
  const [mmr, setMmr] = useState([]);
  const [match, setMatch] = useState([]);
  const [match1, setMatch1] = useState([]);
  const [match2, setMatch2] = useState([]);
  const [match3, setMatch3] = useState([]);
  const [match4, setMatch4] = useState([]);
  const [match5, setMatch5] = useState([]);

  const [rankurl, setRankurl] = useState('');
  const [act, setAct] = useState('e5a1');



  const fetchData = e => {
    const name = `${userData.username}`;
    const tag = `${userData.tag}`;

    VAPI.getAccount({ name, tag }).then(resp => {
      setData(resp.data);
    });
  };

  const fetchDataMMR = e => {
    const name = `${userData.username}`;
    const tag = `${userData.tag}`;
    const version = 'v1';
    const region = 'eu';

    VAPI.getMMR({ version, region, name, tag }).then(resp => {
      setMmr(resp.data);
    });
  };

  const fetchDataMatches = e => {
    const name = `${userData.username}`;
    const tag = `${userData.tag}`;
    const region = 'eu';
    const filter = 'competitive';
    const size = '5';

    VAPI.getMatches({ region, name, tag, size, filter }).then(resp => {
      setMatch(resp.data);
    });
  };

  const matchFilter = e => {
    const puuid = data.puuid;
    const game1 = match[0]?.players?.all_players.filter(t => t.puuid === puuid);
    const game2 = match[1]?.players?.all_players.filter(t => t.puuid === puuid);
    const game3 = match[2]?.players?.all_players.filter(t => t.puuid === puuid);
    const game4 = match[3]?.players?.all_players.filter(t => t.puuid === puuid);
    const game5 = match[4]?.players?.all_players.filter(t => t.puuid === puuid);

    setMatch1(game1[0]);
    setMatch2(game2[0]);
    setMatch3(game3[0]);
    setMatch4(game4[0]);
    setMatch5(game5[0]);
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        data,
        mmr,
        match,
        match1,
        match2,
        match3,
        match4,
        match5,
        fetchData,
        fetchDataMMR,
        fetchDataMatches,
        matchFilter,
        rankurl,
        act,
        setAct,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

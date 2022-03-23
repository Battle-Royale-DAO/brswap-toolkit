import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
    color: "#1309ff"
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    color: "#1309ff",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.brdao.online",
      },
      {
        label: "Liquidity",
        href: "https://exchange.brdao.online/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    color: "#1309ff",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    color: "#1309ff",
    href: "/syrup",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    status: status.LIVE,
    color: "#1309ff",
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        color: "#1309ff",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
        color: "#1309ff",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://pancakeswap.info",
      },
      {
        label: "Tokens",
        href: "https://pancakeswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://pancakeswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://pancakeswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Github",
        href: "https://github.com/Battle-Royale-DAO",
      },
      {
        label: "Docs",
        href: "https://br-dao.gitbook.io/battle-royale-dao/",
      }
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "Official Telegram",
        href: "https://t.me/br_dao",
      }
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/BattleRoyaleDAO",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;

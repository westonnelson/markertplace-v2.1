import { arbitrum, optimism, mainnet, polygon, Chain } from 'wagmi/chains'

//CONFIGURABLE: The default export controls the supported chains for the marketplace. Removing
// or adding chains will result in adding more or less chains to the marketplace.
// They are an extension of the wagmi chain objects

type ReservoirChain = Chain & {
  lightIconUrl: string
  darkIconUrl: string
  reservoirBaseUrl: string
  proxyApi: string
  routePrefix: string
  apiKey?: string
  coingeckoId?: string
  collectionSetId?: string
  community?: string
}

export const DefaultChain: ReservoirChain = {
  ...mainnet,
  // Any url to display the logo of the chain in light mode
  lightIconUrl: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880',
  // Any url to display the logo of the chain in dark mode
  darkIconUrl: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880',
  // The base url of the reservoir api, this is used in the app when
  // directly interacting with the reservoir indexer servers (in the api proxy for example)
  // or when prefetching server side rendered data
  reservoirBaseUrl: 'https://api.reservoir.tools',
  // Used on the client side portions of the marketplace that need an api key added
  // Prevents the api key from being leaked in the clientside requests
  // If you'd like to disable proxying you can just change the proxyApi to the reservoirBaseUrl
  // Doing so will omit the api key unless further changes are made
  proxyApi: '/api/reservoir/ethereum',
  // A prefix used in the asset specific routes on the app (tokens/collections)
  routePrefix: 'ethereum',
  // Reservoir API key which you can generate at https://reservoir.tools/
  // This is a protected key and displays as 'undefined' on the browser
  // DO NOT add NEXT_PUBLIC to the key or you'll risk leaking it on the browser
  apiKey: process.env.ETH_RESERVOIR_API_KEY,
  // Coingecko id, used to convert the chain's native prices to usd. Can be found here:
  // https://www.coingecko.com/en/api/documentation#operations-coins-get_coins_list
  coingeckoId: 'ethereum',
  collectionSetId: process.env.NEXT_PUBLIC_ETH_COLLECTION_SET_ID,
  community: process.env.NEXT_PUBLIC_ETH_COMMUNITY,
}

export default [
  DefaultChain,
  {
    ...polygon,
    lightIconUrl: 'https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912',
    darkIconUrl: 'https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912',
    reservoirBaseUrl: 'https://api-polygon.reservoir.tools',
    proxyApi: '/api/reservoir/polygon',
    routePrefix: 'polygon',
    apiKey: process.env.POLYGON_RESERVOIR_API_KEY,
    coingeckoId: 'matic-network',
    collectionSetId: process.env.NEXT_PUBLIC_POLYGON_COLLECTION_SET_ID,
    community: process.env.NEXT_PUBLIC_POLYGON_COMMUNITY,
  },
  {
    ...arbitrum,
    name: 'Arbitrum',
    lightIconUrl: 'https://assets.coingecko.com/asset_platforms/images/33/small/AO_logomark.png?1679733357',
    darkIconUrl: 'https://assets.coingecko.com/asset_platforms/images/33/small/AO_logomark.png?1679733357',
    reservoirBaseUrl: 'https://api-arbitrum.reservoir.tools',
    proxyApi: '/api/reservoir/arbitrum',
    routePrefix: 'arbitrum',
    apiKey: process.env.ARBITRUM_RESERVOIR_API_KEY,
    coingeckoId: 'arbitrum-iou',
  },
  {
    ...optimism,
    name: 'Optimism',
    lightIconUrl: 'https://assets.coingecko.com/coins/images/25244/small/Optimism.png?1660904599',
    darkIconUrl: 'https://assets.coingecko.com/coins/images/25244/small/Optimism.png?1660904599',
    reservoirBaseUrl: 'https://api-optimism.reservoir.tools',
    proxyApi: '/api/reservoir/optimism',
    routePrefix: 'optimism',
    apiKey: process.env.OPTIMISM_RESERVOIR_API_KEY,
    coingeckoId: 'optimism',
  },
{
  ...zkevm
  lightIconUrl: 'https://zkevm.polygonscan.com/',
  darkIconUrl: 'https://zkevm.polygonscan.com/',

  id: 1101,
  
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://zkevm-rpc.com"]
    },
    public: {
      http: ["https://zkevm-rpc.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "PolygonzkEVMScan",
      url: "https://zkevm.polygonscan.com",
    },
  },
  lightIconUrl: 'https://zkevm.polygonscan.com/',
  darkIconUrl: 'https://zkevm.polygonscan.com/',
  reservoirBaseUrl: process.env.ZKEVM_RESERVOIR_API_BASE,
  proxyApi: '/api/nftearth/zkevm',
  routePrefix: 'zkevm',
  apiKey: process.env.ZKEVM_RESERVOIR_API_KEY,
},
] as ReservoirChain[]

# **Swarm DappStore Website**

 This repo contains the files for the swarm dappstore website.

You can find the website at: [http://swarm-gateways.net/bzz:/swarmapps.eth/](http://swarm-gateways.net/bzz:/swarmapps.eth/)

(if you are running a local swarm node, the link is [ http://localhost:8500/bzz:/swarmapps.eth/)]( http://localhost:8500/bzz:/swarmapps.eth/)

Swarm is a P2P decentralized incentivized storage network.

For more information about swarm, visit [http://swarm-gateways.net/bzz:/theswarm.eth/](http://swarm-gateways.net/bzz:/theswarm.eth/)

## Installation

1.  Clone the repo
2.  `npm install`
3.  `npm install -g @angular/cli`
4.  `ng serve` 

The `ng serve` will make the website available through `http://localhost:4200`.

## deployment

The site uses webpack optimization through the `angular-cli` package. All needed files are optimized for low size and lower bandwidth requirements, resulting in higher serving speed.

To prepare the site for deployment, run `ng build --prod --aot`. This will produce a `dist/` folder in your working directory, which can be used to serve the page standalone.

## dependencies

*   angular2
*   nodejs >= 7
*   npm >= 3

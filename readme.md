## Technologies Used

- [Node](https://nodejs.org/en), [Express](https://expressjs.com/)
- [Postgres](https://www.postgresql.org/)
- [Redis](https://redis.io/)
  <br/>

## Installation

- Clone the repository <br/>

  ```
    git clone git@github.com:innerpage/webapp-api__dev.git
    cd webapp-api__dev
  ```

- Install dependencies <br/>
  ```
    ./init.sh
  ```

<br/>

## Configuration

- Copy `.env-bak` to `.env`
- Update `.env` with your configuration

<br/>

## Build

- Build the code <br/>

  ```
    ./build.sh
  ```

<br/>

## Deployment

- [Configure Nginx as Reverse Proxy for Node](https://www.digitalocean.com/community/tutorials/nginx-reverse-proxy-node-angular)
- Use [PM2](https://pm2.keymetrics.io/) to serve the webapp e.g.
  `pm2 start index.js --name innerpage-webapi --watch`

<br/>

## Contributing

Feel free to contribute by opening pull requests or reporting issues.

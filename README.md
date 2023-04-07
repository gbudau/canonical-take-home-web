# How to run and test the code

## Using Docker

- [Install Docker](https://docs.docker.com/get-docker/) on your machine.
- Build your container:

```bash
docker build -t nextjs-docker .
```

- Run your container:

```bash
docker run -p 3000:3000 nextjs-docker
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running Locally

- Install the dependencies:

```bash
npm ci
```

- Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Screenshot

![Three Blog Posts](/screenshot.png?raw=true)

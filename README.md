This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`] after an internship at ENI

## Getting Started

1.First, Clone this repository:
git clone

2.after cloning, modify all "godrogodrodago.azurewebsites.net" to "localhost:3000" such that you will be able to access into the api in localhost developpment server

3.Install node:

-Go to the official Node.js website (https://nodejs.org/) and download the version that is compatible with your operating system.

-Run the installer and follow the prompts to complete the installation.

-Verify that Node.js and npm (Node Package Manager) are installed by running the following command in your terminal or command prompt:

node -v
npm -v

4.Install yarn:

npm install --global yarn

Verify that yarn is installed by running the following command in your terminal or command prompt: yarn -v

5.Install all packages and dependances required for this project:
yarn install

6.Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/products](http://localhost:3000/api/products). This endpoint can be edited in `pages/api/products/index.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)

## run on docker
Once docker was installed on your computer, you can run the follwing command to build and run the application:

docker build -t imagenameinlowercase:tag .
docker run -d -p 3002:3000 imagenameinlowercase:tag

- your feedback and contributions are welcome!

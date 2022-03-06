import type { NextPage } from 'next'
import { GetServerSideProps } from 'next';

const Home: NextPage = () => {
  return (
    <div />
  )
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.writeHead(302, { Location: '/bands' }).end();
  return {
    props: {}
  }
}

export default Home

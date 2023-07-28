import Image from 'next/image'
import { Inter } from 'next/font/google'
import { GetServerSideProps } from 'next'

const inter = Inter({ subsets: ['latin'] })

const Dashboard = () => {
  return (
    <main>

    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = req?.cookies?.token;

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/lets-start",
      },
    };
  }


  return {
    props: {}
  }
}

export default Dashboard;
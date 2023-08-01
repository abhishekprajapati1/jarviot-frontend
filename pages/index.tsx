import { GetServerSideProps } from 'next';
import PublicFiles from '@/components/PublicFiles';
import ExteranllySharedFiles from '@/components/ExteranllySharedFiles';
import PeopleWithAccess from '@/components/PeopleWithAccess';
import ReportHeader from '@/components/ReportHeader';
import StatSection from '@/components/StatSection';


const Dashboard = () => {
  return (
    <main>
      <ReportHeader />
      <StatSection />
      <PublicFiles />
      <PeopleWithAccess />
      <ExteranllySharedFiles />
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
"use client";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import RecentTransactions from "@/app/(DashboardLayout)/components/dashboard/RecentTransactions";

const SamplePage = () => {
  return (
    <PageContainer title='Sample Page' description='this is Sample page'>
      <RecentTransactions />
    </PageContainer>
  );
};

export default SamplePage;

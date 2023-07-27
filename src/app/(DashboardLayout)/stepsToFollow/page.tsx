"use client";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import RecentTransactions from "@/app/(DashboardLayout)/components/dashboard/RecentTransactions";

const Steps = () => {
  return (
    <PageContainer title='Steps Page' description='this is Steps page'>
      <RecentTransactions />
    </PageContainer>
  );
};

export default Steps;

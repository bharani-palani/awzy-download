"use client";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import RecentTransactions from "@/app/(DashboardLayout)/components/dashboard/RecentTransactions";

const Steps = () => {
  return (
    <PageContainer
      title='Steps to follow after download'
      description='Describes the steps to install & configure Awzy in your development machine'
    >
      <RecentTransactions />
    </PageContainer>
  );
};

export default Steps;

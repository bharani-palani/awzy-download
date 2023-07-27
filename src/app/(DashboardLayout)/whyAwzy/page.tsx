"use client";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import { Typography, Grid, CardContent, Button } from "@mui/material";
import BlankCard from "@/app/(DashboardLayout)/components/shared/BlankCard";

const WhyAwzy = () => {
  return (
    <PageContainer title='Author Page' description='this is Author page'>
      <BlankCard>
        <CardContent>
          <Typography variant='h3'>Why Awzy</Typography>
          <Typography variant='subtitle2' fontWeight='100'>
            Responsiveness ready for all devices
          </Typography>
        </CardContent>
      </BlankCard>
    </PageContainer>
  );
};

export default WhyAwzy;

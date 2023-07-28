"use client";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import { Typography, Divider, CardContent, Button } from "@mui/material";
import BlankCard from "@/app/(DashboardLayout)/components/shared/BlankCard";

const Author = () => {
  return (
    <PageContainer
      title='Awzy Author'
      description='The details of Author of Awzy'
    >
      <BlankCard>
        <CardContent>
          <Typography variant='h3'>Bharani Palani</Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography variant='h5'>Web</Typography>
          <Button
            color='primary'
            target='_blank'
            href='https://bharani.tech'
            style={{ textTransform: "inherit" }}
          >
            https://bharani.tech
          </Button>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography variant='h5'>Email</Typography>
          <Button
            color='primary'
            target='_blank'
            href='mailto:tp.bharani@gmail.com'
            style={{ textTransform: "inherit" }}
          >
            tp.bharani@gmail.com
          </Button>
        </CardContent>
      </BlankCard>
    </PageContainer>
  );
};

export default Author;

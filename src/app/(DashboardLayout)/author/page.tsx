"use client";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import { Typography, Grid, CardContent, Button } from "@mui/material";
import BlankCard from "@/app/(DashboardLayout)/components/shared/BlankCard";

const Author = () => {
  return (
    <PageContainer title='Author Page' description='this is Author page'>
      <BlankCard>
        <CardContent>
          <Typography variant='h3'>Bharani Palani</Typography>
          <Button
            color='primary'
            target='_blank'
            href='https://bharani.tech'
            style={{ textTransform: "inherit" }}
          >
            https://bharani.tech
          </Button>
        </CardContent>

        <CardContent>
          <Typography variant='h4'>Email</Typography>
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

"use client";
import React from "react";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import {
  Typography,
  Grid,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import BlankCard from "@/app/(DashboardLayout)/components/shared/BlankCard";

const WhyAwzy = () => {
  const lists = [
    "Responsiveness ready for all devices",
    "Custom routes(href) with custom title",
    "Bootstrap 5 library ready",
    "All HTML5 elements available",
    "Googgle maps as built in component",
    "Build dynamic forms for your own Mysql table, field etc & form input UI fields to save visitor data",
    "Customisable side bar, theme, music, video etc..",
    "Maintain AWS S3 bucket here & render your media files at rocket speed",
    "Configure users like Admin, managers, Associates etc.. with your preferred designation name",
    "Setup your own layout for different pages",
    "Change your content anytime.. save and publish",
    "CRUD operation handle available for users and pages",
  ];
  return (
    <PageContainer
      title='Why Awzy ??'
      description='Page describing why Awzy is needed'
    >
      <BlankCard>
        <CardContent>
          <Typography variant='h3'>Why Awzy ??</Typography>
          <Typography variant='h6' fontWeight='100'></Typography>
          <List component='div'>
            {lists.map((l, i) => (
              <React.Fragment key={i}>
                <ListItem>
                  <ListItemText primary={l} />
                </ListItem>
                {i !== lists.length - 1 && <Divider />}
                {i === lists.length - 1 && (
                  <Divider textAlign='right'>& more..</Divider>
                )}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </BlankCard>
    </PageContainer>
  );
};

export default WhyAwzy;

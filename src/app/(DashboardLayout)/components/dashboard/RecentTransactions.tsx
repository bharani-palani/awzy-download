import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses,
} from "@mui/lab";
import { OverridableStringUnion } from "@mui/types";

interface TimelineDotPropsColorOverrides {}

interface TextProps {
  key: number;
  left: string;
  right: string;
  rightHelp?: Array<string>;
  color?: OverridableStringUnion<
    | "inherit"
    | "grey"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning",
    TimelineDotPropsColorOverrides
  >;
}

const steps: TextProps[] = [
  {
    key: 1,
    left: "Step 1",
    right: "npm install --legacy-peer-deps",
    color: "primary",
  },
  {
    key: 2,
    left: "Step 2",
    right:
      "npm run install-awzy host=localhost user=root password=12345 username=superadmin userpassword=Success@123",
    rightHelp: [
      `- {host} MySql host name`,
      `- {user} - MySql user name`,
      `- {password} - MySql password`,
      ` - {username} - Awzy super admin user name (Remeber this.. It cannot be revoked)`,
      `- {userpassword} - Awzy super admin password (Remeber this.. It cannot be revoked)`,
      `- This will install awzy database w.r.t above credentials.`,
      `- Login Awzy with the remebered {username} and {userpassword}`,
    ],
    color: "error",
  },
  {
    key: 3,
    left: "Step 3",
    right:
      "Create .env file, inside src folder, to configure local and production variables. Here is a sample",
    rightHelp: [
      `SKIP_PREFLIGHT_CHECK=true`,
      `FAST_REFRESH=false`,
      `REACT_APP_LOCALHOST='localhost:8888'`,
      `REACT_APP_LOCALHOST_BASE_URL='http://localhost:1234/awzy-cms/services'`,
      `REACT_APP_LOCALHOST_DB_HOST_NAME='localhost'`,
      `REACT_APP_LOCALHOST_DB_USER_NAME='root'`,
      `REACT_APP_LOCALHOST_DB_PASSWORD='12345'`,
      `REACT_APP_LOCALHOST_DB_NAME='awzy'`,
      ``,
      `REACT_APP_PRODUCTION_HOST='yourdomain.com'`,
      `REACT_APP_PRODUCTION_BASE_URL='https://yourdomain.com/services'`,
      `REACT_APP_PRODUCTION_DB_HOST_NAME='192.168.0.1'`,
      `REACT_APP_PRODUCTION_DB_USER_NAME='dbusername'`,
      `REACT_APP_PRODUCTION_DB_PASSWORD='dbpassword'`,
      `REACT_APP_PRODUCTION_DB_NAME='dbname'`,
    ],
    color: "success",
  },
  {
    key: 4,
    left: "Step 4",
    right: "Configure nginx (Not for production)",
    rightHelp: [
      `**Proxy server setup for api in localhost**`,
      ``,
      `Open **/awzy-cms/nginx/conf/nginx.conf** to change proxy_pass settings in line 11, 21 & 25 for port and endpoint setup`,
      ``,
      `Windows`,
      ``,
      `complete the setup in nginx.conf file`,
      `Open nginx folder and run nginx.exe`,
      `To stop / reload server - Open task manager to delete your nginx instance and run nginx.exe to restart`,
      ``,
      `MAC`,
      ``,
      `Check you have installed nginx (Homebrew)`,
      `Run "**vim /usr/local/etc/nginx/nginx.conf**" in terminal`,
      `Copy **/awzy-cms/nginx/conf/nginx.conf** content with neccessary setup and paste it in "**/usr/local/etc/nginx/nginx.conf**"`,
      `In terminal run,`,
      `**sudo brew services start nginx** (Start nginx)`,
      `**sudo brew services restart nginx** (Restart nginx)`,
      `**sudo brew services stop nginx** (Stop nginx)`,
      ``,
      `##### If port 1234 is blocked, follow below, else skip this step`,
      ``,
      `Update package.json - Change **proxy: http://localhost:1235**`,
      `Update .env file - Change REACT_APP_LOCALHOST_BASE_URL to **http://localhost:1235/awzy-cms/services**`,
      `In line 11 Change listen 1234 to 1235`,
      `Restart nginx`,
      `Browse awzy in **http://localhost:1235**, as you have changed the port settings to **1235**`,
    ],
    color: "warning",
  },
  {
    key: 5,
    left: "Step 5",
    right: "npm run start",
    color: "secondary",
  },
  {
    key: 6,
    left: "Step 6",
    right: "npm run build",
    color: "success",
  },
];

const RecentTransactions = () => {
  return (
    <DashboardCard title='Steps to follow after download'>
      <>
        <Timeline
          className='theme-timeline'
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          sx={{
            p: 0,
            mb: "-40px",
            "& .MuiTimelineConnector-root": {
              width: "1px",
              backgroundColor: "#efefef",
            },
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.5,
              paddingLeft: 0,
            },
          }}
        >
          {steps.map((step, i) => (
            <TimelineItem key={step.key}>
              <TimelineOppositeContent>{step.left}</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color={step.color} variant='outlined' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                {step.right}
                {step?.rightHelp && (
                  <ul>
                    {step?.rightHelp.map((m, i) => (
                      <li style={{ wordBreak: "break-word" }} key={i}>
                        {m}
                      </li>
                    ))}
                  </ul>
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </>
    </DashboardCard>
  );
};

export default RecentTransactions;

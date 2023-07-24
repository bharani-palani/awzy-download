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
  rightHelp?: string;
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
    rightHelp: `
      <div>- {host} MySql host name</div>
      <div>- {user} - MySql user name</div>
      <div>- {password} - MySql password</div>
      <div>- {username} - Awzy super admin user name (Remeber this.. It cannot be revoked)</div>
      <div>- {userpassword} - Awzy super admin password (Remeber this.. It cannot be revoked)</div>
      <div>- This will install awzy database w.r.t above credentials.</div>
      <div>- Login Awzy with the remebered {username} and {userpassword}</div>
      `,
    color: "error",
  },
  {
    key: 3,
    left: "Step 3",
    right:
      "Create .env file, inside src folder, to configure local and production variables. Here is a sample",
    rightHelp: `
      <div>- SKIP_PREFLIGHT_CHECK=true</div>
      <div>- FAST_REFRESH=false</div>
      <div>- REACT_APP_LOCALHOST='localhost:8888'</div>
      <div>- REACT_APP_LOCALHOST_BASE_URL='http://localhost:1234/awzy-cms/services'</div>
      <div>- REACT_APP_LOCALHOST_DB_HOST_NAME='localhost'</div>
      <div>- REACT_APP_LOCALHOST_DB_USER_NAME='root'</div>
      <div>- REACT_APP_LOCALHOST_DB_PASSWORD='12345'</div>
      <div>- REACT_APP_LOCALHOST_DB_NAME='awzy'</div>
      <br />
      <div>- REACT_APP_PRODUCTION_HOST='yourdomain.com'</div>
      <div>- REACT_APP_PRODUCTION_BASE_URL='https://yourdomain.com/services'</div>
      <div>- REACT_APP_PRODUCTION_DB_HOST_NAME='192.168.0.1'</div>
      <div>- REACT_APP_PRODUCTION_DB_USER_NAME='dbusername'</div>
      <div>- REACT_APP_PRODUCTION_DB_PASSWORD='dbpassword'</div>
      <div> - REACT_APP_PRODUCTION_DB_NAME='dbname'</div>
            `,
    color: "success",
  },
  {
    key: 4,
    left: "Step 4",
    right: "Configure nginx (Not for production)",
    rightHelp: `
    <div>**Proxy server setup for api in localhost**</div>
    <br />
    <div>Open **/awzy-cms/nginx/conf/nginx.conf** to change proxy_pass settings in line 11, 21 & 25 for port and endpoint setup</div>
    <br />
    <b>Windows</b>
    <br />
    <div>- complete the setup in nginx.conf file</div>
    <div>- Open nginx folder and run nginx.exe</div>
    <div>- To stop / reload server - Open task manager to delete your nginx instance and run nginx.exe to restart</div>
    <br />
    <b>MAC</b>
    <br />
    <div>- Check you have installed nginx (Homebrew)</div>
    <div>- Run "**vim /usr/local/etc/nginx/nginx.conf**" in terminal</div>
    <div>- Copy **/awzy-cms/nginx/conf/nginx.conf** content with neccessary setup and paste it in "**/usr/local/etc/nginx/nginx.conf**"</div>
    <div>In terminal run,</div>
    <div>- **sudo brew services start nginx** (Start nginx)</div>
    <div>- **sudo brew services restart nginx** (Restart nginx)</div>
    <div>- **sudo brew services stop nginx** (Stop nginx)</div>
    <br />
    <div>##### If port 1234 is blocked, follow below, else skip this step</div>
    <br />
    <div>- Update package.json - Change **proxy: http://localhost:1235**</div>
    <div>- Update .env file - Change REACT_APP_LOCALHOST_BASE_URL to **http://localhost:1235/awzy-cms/services**</div>
    <div>- In line 11 Change listen 1234 to 1235</div>
    <div>- Restart nginx</div>
    <div>- Browse awzy in **http://localhost:1235**, as you have changed the port settings to **1235**</div>
    `,
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
                  <div dangerouslySetInnerHTML={{ __html: step.rightHelp }} />
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

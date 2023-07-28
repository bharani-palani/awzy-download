import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Rating,
} from "@mui/material";
import DashboardCard from "@/app/(DashboardLayout)//components/shared/DashboardCard";

const products = [
  {
    id: "1",
    name: "Pavithra Premkumar",
    post: "Web Designer",
    pname: "Manju groups",
    priority: "Low",
    pbg: "primary.main",
    budget: <Rating value={4} />,
  },
  {
    id: "2",
    name: "Srinivas Ramakrishnan",
    post: "Solution Architect",
    pname: "Genesys systems",
    priority: "Medium",
    pbg: "secondary.main",
    budget: <Rating value={4} />,
  },
  {
    id: "3",
    name: "Suresh Dhanapal",
    post: "Project manager",
    pname: "Photon Interactive",
    priority: "High",
    pbg: "success.main",
    budget: <Rating value={5} />,
  },
  {
    id: "4",
    name: "Muralikrishna Srinivasan",
    post: "Frontend Engineer",
    pname: "RBS",
    priority: "High",
    pbg: "success.main",
    budget: <Rating value={5} />,
  },
];

const ProductPerformance = () => {
  return (
    <DashboardCard title='Reviews'>
      <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
        <Table
          aria-label='simple table'
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant='subtitle2' fontWeight={600}>
                  #
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='subtitle2' fontWeight={600}>
                  Name / Role
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='subtitle2' fontWeight={600}>
                  Company
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='subtitle2' fontWeight={600}>
                  CMS Usage
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography variant='subtitle2' fontWeight={600}>
                  Rating
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => (
              <TableRow key={product.name}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {product.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography variant='subtitle2' fontWeight={600}>
                        {product.name}
                      </Typography>
                      <Typography
                        color='textSecondary'
                        sx={{
                          fontSize: "13px",
                        }}
                      >
                        {product.post}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    color='textSecondary'
                    variant='subtitle2'
                    fontWeight={400}
                  >
                    {product.pname}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      px: "4px",
                      backgroundColor: product.pbg,
                      color: "#fff",
                    }}
                    size='small'
                    label={product.priority}
                  ></Chip>
                </TableCell>
                <TableCell align='right'>
                  <Typography variant='h6'>{product.budget}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default ProductPerformance;

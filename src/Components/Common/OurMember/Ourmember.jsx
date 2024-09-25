import { Box, Container, useMediaQuery } from '@mui/material'
import HeaderSection from './HeaderSection'
import ExecutiveSlider from '../ExecutiveMember/ExecutiveSlider';
import { useLocation } from 'react-router-dom';

export default function Ourmember() {
  const forBelow767 = useMediaQuery("(max-width:767px)");
  const { pathname } = useLocation();

  return (
    <Box sx={{ p: pathname === "/members"
      ? (forBelow767 ? "100px 0px 40px 0px" : "210px 0px 64px 0px")
      : (forBelow767 ? "40px 0px" : "64px 0px"), background: "#FAFAFA" }}>
      <Container sx={{ display: "flex", flexDirection: "column", gap: forBelow767 ? "40px" : "64px" }}>
        <HeaderSection />
        <ExecutiveSlider/>
      </Container>
    </Box>
  )
}

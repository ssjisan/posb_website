import { Box, Container, useMediaQuery } from '@mui/material'
import HeaderSection from './HeaderSection'
import MemberBody from './MemberBody'
import ExecutiveSlider from '../ExecutiveMember/ExecutiveSlider';

export default function Ourmember() {
  const forBelow599 = useMediaQuery("(max-width:599px)");
  const forBelow767 = useMediaQuery("(max-width:767px)");

  return (
    <Box sx={{ p: forBelow767 ? "40px 0px" : "64px 0px", background: "#FAFAFA" }}>
      <Container sx={{ display: "flex", flexDirection: "column", gap: forBelow767 ? "40px" : "64px" }}>
        <HeaderSection />
        {forBelow599 ? <ExecutiveSlider /> : <MemberBody />}
      </Container>
    </Box>
  )
}

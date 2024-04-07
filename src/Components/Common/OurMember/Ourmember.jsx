import { Box, Container } from '@mui/material'
import HeaderSection from './HeaderSection'
import MemberBody from './MemberBody'

export default function Ourmember() {
  return (
    <Box sx={{ p: "64px 0px", background: "#FAFAFA" }}>
      <Container sx={{ display: "flex", flexDirection: "column", gap: "64px" }}>
        <HeaderSection />
        <MemberBody />
      </Container>
    </Box>
  )
}

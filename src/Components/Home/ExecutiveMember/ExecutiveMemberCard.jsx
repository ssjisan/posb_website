import { Box, Typography } from "@mui/material"
import MemberData from "../../../assets/MemberList.json"
export default function ExecutiveMemberCard() {
    return (
        <>
            {
                MemberData.map((data) => {
                    return (
                        <Box sx={{ display: "flex", gap: "24px", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "260px" }} key={data.id}>
                            <Box sx={{ width: "140px", height: "140px", overflow: "hidden", borderRadius: "200px" }}>
                                <img src={data.imgUrl} alt="" width="100%" height="100%" />
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
                                <Typography variant="h5">{data.name}</Typography>
                                <Typography variant="h6" sx={{ fontWeight: "300 !important" }}>{data.position}</Typography>
                            </Box>
                        </Box>
                    )
                })
            }
        </>
    )
}

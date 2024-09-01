import {
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
  TableCell,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function JournalTable() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));


  const [journals, setJournals] = useState([]);
  useEffect(() => {
    loadJournals();
  }, []);

  const loadJournals = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_API}/journals`
      );
      setJournals(data);
    } catch (err) {
      toast.error("Journals can't load");
    }
  };
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell align="left">Publish Date</StyledTableCell>
                <StyledTableCell align="left">Preview</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {journals.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.title}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {new Date(row.publishedDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </StyledTableCell>
                  <StyledTableCell align="left"><a href={row.link} target="_blank">Click Here</a></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

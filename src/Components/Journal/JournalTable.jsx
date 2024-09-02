import {
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function JournalTable() {
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
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            borderRadius: "8px",
            border: "1px solid rgba(224, 224, 224, 1)",
          }}
        >
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    width: "72px",
                    borderRight: "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  No
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                >
                  Title
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    width: "200px",
                    borderRight: "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  Publish Date
                </TableCell>
                <TableCell align="left" sx={{ width: "120px" }}>
                  Preview
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {journals.map((row, i) => (
                <TableRow key={row.name}>
                  <TableCell
                    sx={{
                      width: "72px",
                      borderRight: "1px solid rgba(224, 224, 224, 1)",
                    }}
                  >
                    {i + 1}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                  >
                    {row.title}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      borderRight: "1px solid rgba(224, 224, 224, 1)",
                      width: "200px",
                    }}
                  >
                    {new Date(row.publishedDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </TableCell>
                  <TableCell align="left" sx={{ width: "120px" }}>
                    <a href={row.link} target="_blank">
                      Click Here
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

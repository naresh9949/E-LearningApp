import * as React from "react";
import { useState,useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { tableCellClasses } from "@mui/material/TableCell";
import styled from "styled-components";
import API from "./../API";
import ActivateButton from "./Button";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "black",
    color: "white",
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 44,
  },
}));

const RabbitMQ = () => {
  const [width,setWidth] = useState(window.innerWidth);
  const breakpoint = 620;

  console.log(width);

  var idx = -1;
  const [data, setData] = useState(() => {
    return API.getData();
  });

  const getConnectionType = (ConnectionType) => {
    if (ConnectionType === true) return "Primary";
    else return "Secondary";
  };

  const getConnectionStatus = (ConnectionStatus) => {
    if (ConnectionStatus === true) return "Active";
    else return "Inactive";
  };

  const getButtonText = (ConnectionStatus) => {
    if (ConnectionStatus === true) return "Deactivate";
    else return "Activate";
  };

  const getIndex = () => {
    idx++;
    return idx;
  };
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer sx={{maxHeight:500}}>
      <Table stickyHeader aria-label="table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Listner</StyledTableCell>
            <StyledTableCell align="center">Queue</StyledTableCell>
            <StyledTableCell align="center">Application</StyledTableCell>
            {width > breakpoint && <StyledTableCell align="center">Connection Type</StyledTableCell>}
            <StyledTableCell align="center">Connection Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.listner}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.listner}
              </TableCell>
              <TableCell align="center">{row.queue}</TableCell>
              <TableCell align="center">{row.application}</TableCell>
              {width > breakpoint && <TableCell align="center">
                  {getConnectionType(row.connection_type)}
                </TableCell>}
              

              <TableCell align="center">
                {getConnectionStatus(row.connection_status)}
              </TableCell>
              <TableCell align="center">
                <ActivateButton
                  state={row.connection_status}
                  name={getButtonText(row.connection_status)}
                  data={data}
                  idx={getIndex()}
                  action={setData}
                ></ActivateButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
  );
};

export default RabbitMQ;

// {width > 660 && <h2>You have {width} unread messages.</h2>}
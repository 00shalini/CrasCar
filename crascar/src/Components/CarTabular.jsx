import React from "react";
import { Option, Details, Table, Filter, Header, FilterBtn } from "./CarTab";
import axios from "axios";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopTimePicker from "@mui/lab/DesktopTimePicker";
import ReactPaginate from "react-paginate";
import "./CarTab.css";

function CarTabular() {
  const [car, setCar] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [timing, setTime] = React.useState("");
  const [pagenum, setPageNum] = React.useState(0);
  const dataperpage = 10;
  const pagevisited = pagenum * dataperpage;
  const displaydata = car.slice(pagevisited, pagevisited + dataperpage);
  const BaseUrl = `https://data.cityofnewyork.us/resource/h9gi-nx95.json`;

  React.useEffect(() => {
    axios
      .get(BaseUrl)
      .then((res) => {
        setCar(res.data);
      })
      .catch((err) => alert(err.message));
  }, []);

  const getdata = () => {
    axios
      .get(`${BaseUrl}?crash_date=${value}`)
      .then((res) => {
        setCar(res.data);
      })
      .catch((err) => alert(err.message));

    axios
      .get(`${BaseUrl}?crash_time=${timing}`)
      .then((res) => {
        setCar(res.data);
      })
      .catch((err) => alert(err.message));
  };

  const pagecount = Math.ceil(car.length / dataperpage);

  const changepage = ({ selected }) => {
    setPageNum(selected);
  };

  return (
    <Option>
      <Header>AUTOMOBILE CRASH DETAILS</Header>
      <Details>
        <Table>
          <thead>
            <tr style={{textAlign:'center'}}>
              <th style={{borderBottom:'2px solid navy',height:'40px',padding:'3px 3px'}}>Vehicle_Type_Code_1</th>
              <th style={{borderBottom:'2px solid navy'}}>Vehicle_Type_Code_2</th>
              <th style={{borderBottom:'2px solid navy'}}>Crash_Date</th>
              <th style={{borderBottom:'2px solid navy'}}>Crash_Time</th>
            </tr>
          </thead>
          <tbody>
            {displaydata.length > 0 ? (
              displaydata.map((item) => {
                return (
                  <tr style={{textAlign:'center',height:'50px'}}>
                    <td>{item.vehicle_type_code1}</td>
                    <td >{item.vehicle_type_code2}</td>
                    <td>{item.crash_date}</td>
                    <td>{item.crash_time}</td>
                  </tr>
                );
              })
            ) : (
              <h2>no data</h2>
            )}
          </tbody>
        </Table>
        <Filter>
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Filter By Crash Date"
                value={value}
                minDate={new Date("2000-01-01")}
                onChange={(newValue) => {
                  var yyyy = newValue.getFullYear().toString();
                  var mm = (newValue.getMonth() + 1).toString();
                  var dd = newValue.getDate().toString();
                  if (mm < 10) {
                    mm = `0${mm}`;
                  }

                  var date = `${yyyy}-${mm}-${dd}T00:00:00.000`;

                  setValue(date);
                }}
                renderInput={(params) => <TextField {...params} />}
                style={{marginBottom:'40px'}}
              />
              <DesktopTimePicker
                label="Filter By Crash Time"
                value={timing}
                onChange={(newValue) => {
                  var hr = newValue.getHours().toString();
                  var min = newValue.getMinutes().toString();

                  var t = `${hr}:${min}`;

                  setTime(t);
              
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <FilterBtn onClick={getdata}>Apply Filter</FilterBtn>
          </div>
        </Filter>
      </Details>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pagecount}
        onPageChange={changepage}
        containerClassName={"paginationbttns"}
        previousLinkClassName={"previousbttns"}
        nextLinkClassName={"nextbttns"}
        disabledClassName={"paginationdisabled"}
        activeClassName={"paginationActive"}
      />
    </Option>
  );
}

export { CarTabular };

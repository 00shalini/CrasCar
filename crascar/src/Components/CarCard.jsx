import React from "react";
import {
  Option,
  Details,
  Filter,
  Cardview,
  DataView,
  Span,
  Header,
  FilterBtn,
} from "./CarTab";
import axios from "axios";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopTimePicker from "@mui/lab/DesktopTimePicker";
import ReactPaginate from "react-paginate";
import "./CarTab.css";
import { Link } from "react-router-dom";

function CarCard() {
  const [car, setCar] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [timing, setTime] = React.useState("");
  const [pagenum, setPageNum] = React.useState(0);
  const dataperpage = 10;
  const pagevisited = pagenum * dataperpage;
  const displaydata = car.slice(pagevisited, pagevisited + dataperpage);
  const [collisionid, setCollisionId] = React.useState([]);
  const [fulldetail, setFullDetail] = React.useState([]);
  const BaseUrl = `https://data.cityofnewyork.us/resource/h9gi-nx95.json`;

  React.useEffect(() => {
    axios
      .get(BaseUrl)
      .then((res) => {
        setCar(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const getdata = () => {
    axios
      .get(`${BaseUrl}?crash_date=${value}`)
      .then((res) => {
        setCar(res.data);
      })
      .catch((err) => console.log(err.message));

    axios
      .get(`${BaseUrl}?crash_time=${timing}`)
      .then((res) => {
        setCar(res.data);
      })
      .catch((err) => console.log(err.message));
  };

  const handlecard = (e) => {
    axios
      .get(`${BaseUrl}?collision_id=${e.target.id}`)
      .then((res) => {
        var data = res.data;
        setFullDetail(data);
        console.log(fulldetail);
        data.map((it) => {
          setCollisionId(it.collision_id);
        });
      })
      .catch((err) => console.log(err.message));
  };

  const pagecount = Math.ceil(car.length / dataperpage);

  const changepage = ({ selected }) => {
    setPageNum(selected);
  };

  return (
    <Option>
      <Header>AUTOMOBILE CRASH DETAILS</Header>
      <Details>
        <div>
          {displaydata.length > 0 ? (
            displaydata.map((item) => {
              return (
                <Link
                  to={`/carview/${collisionid}`}
                  style={{ textDecoration: "none", border: "1px solid black" }}
                >
                  <Cardview
                    onClick={handlecard}
                    key={item.collision_id}
                    id={item.collision_id}
                  >
                    <DataView>
                      Vehicle Type Code 1 :
                      <Span>{item.vehicle_type_code1}</Span>
                    </DataView>
                    <DataView>
                      Vehicle Type Code 2 :
                      <Span>{item.vehicle_type_code2}</Span>
                    </DataView>
                    <DataView>
                      Crash Date :<Span>{item.crash_date}</Span>
                    </DataView>
                    <DataView>
                      Crash Time :<Span>{item.crash_time}</Span>
                    </DataView>

                   
                  </Cardview>
                </Link>
              );
            })
          ) : (
            <h2>no data</h2>
          )}
        </div>
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

export { CarCard };

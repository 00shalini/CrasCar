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
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

function CarCard() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#2B3856",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    borderRadius: 5,
    color: "white",
  };

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Option>
      <Header>AUTOMOBILE CRASH DETAILS</Header>
      <Details>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 1200 }}>
            {car.map((item) => {
              if (collisionid === item.collision_id) {
                return (
                  <div key={item.collision_id} id={item.collision_id}>
                    <table>
                      <tr>
                        <th>Collision_id</th>
                        <td>{item.collision_id}</td>
                      </tr>
                      <tr>
                        <th> Vehicle Type Code 1 </th>
                        <td>{item.vehicle_type_code1}</td>
                      </tr>
                      <tr>
                        <th>Vehicle Type Code 2</th>
                        <td>{item.vehicle_type_code2}</td>
                      </tr>
                      <tr>
                        <th>Borough</th>
                        <td>{item.borough}</td>
                      </tr>
                      <tr>
                        <th>ZipCode</th> <td>{item.zip_code}</td>
                      </tr>
                      <tr>
                        <th>Crash Date </th>
                        <td>{item.crash_date}</td>
                      </tr>
                      <tr>
                        <th>Crash Time</th>
                        <td>{item.crash_time}</td>
                      </tr>

                      <tr>
                        Cross Street Name:<td>{item.cross_sreet_name}</td>
                      </tr>
                      <tr>
                        
                        Location:<th>Latitude </th>
                        <td>{item.latitude}</td>
                        <th>Longitude</th>
                        <td>{item.longitude}</td>
                      </tr>

                      <tr>
                        <th>No. of persons Injured</th>
                        <td>{item.number_of_persons_injured}</td>
                      </tr>
                      <tr>
                        <th>No. of persons Killed</th>
                        <td>{item.number_of_persons_killed}</td>
                      </tr>
                      <tr>
                        <th>No. of pedestrians Injured</th>
                        <td>{item.number_of_pedestrians_injured}</td>
                      </tr>
                      <tr>
                        <th>No. of pedestrians Killed</th>
                        <td>{item.number_of_pedestrians_killed}</td>
                      </tr>
                      <tr>
                        <th>No. of cyclist Injured</th>
                        <td>{item.number_of_cyclist_injured}</td>
                      </tr>
                      <tr>
                        <th>No. of cyclist Killed</th>
                        <td>{item.number_of_cyclist_killed}</td>
                      </tr>
                      <tr>
                        <th>No. of motorist Injured</th>
                        <td>{item.number_of_motorist_injured}</td>
                      </tr>
                      <tr>
                        <th>No. of motorist Killed</th>
                        <td>{item.number_of_motorist_killed}</td>
                      </tr>
                      <tr>
                        <th>Contributing Factor Vehicle 1</th>
                        <td>{item.contributing_factor_vehicle_1}</td>
                      </tr>
                    </table>
                  </div>
                );
              }
            })}
          </Box>
        </Modal>
        <div onClick={handleOpen}>
          {displaydata.length > 0 ? (
            displaydata.map((item) => {
              return (
                <Cardview
                  onClick={handlecard}
                  key={item.collision_id}
                  id={item.collision_id}
                >
                  <DataView>
                    Vehicle Type Code 1 :<Span>{item.vehicle_type_code1}</Span>
                  </DataView>
                  <DataView>
                    Vehicle Type Code 2 :<Span>{item.vehicle_type_code2}</Span>
                  </DataView>
                  <DataView>
                    Crash Date :<Span>{item.crash_date}</Span>
                  </DataView>
                  <DataView>
                    Crash Time :<Span>{item.crash_time}</Span>
                  </DataView>
                </Cardview>
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

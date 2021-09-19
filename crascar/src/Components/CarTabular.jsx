import React from "react";
import {
  OptionBar,
  Option,
  View,
  TableCharts,
  Card,
  Select,
  Details,
  Table,
  Filter,
} from "./CarTab";
import axios from "axios";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopTimePicker from '@mui/lab/DesktopTimePicker';

function CarTabular() {
  const BaseUrl = "https://data.cityofnewyork.us/resource/h9gi-nx95.json";
  const [car, setCar] = React.useState([]);
  const [value, setValue] = React.useState(new Date());

  React.useEffect(() => {
    axios
      .get(
        `${BaseUrl}?crash_date=${value}&vehicle_type_code2=&$offset=&$limit=${5}`
      )
      .then((res) => {
        setCar(res.data);
      });
  }, []);
  return (
    <Option>
      <OptionBar>
        <View>SELECT VIEW</View>
        <TableCharts />
        <Card />
        <Select name="Sort By">
          <option value="select by">Sort By</option>
          <option value="crash date">Crash Date</option>
          <option value="crash time">Crash Time</option>
          <option value="location">Location</option>
        </Select>
      </OptionBar>
      <h4>Automobile Crash Details</h4>
      <Details>
        <Table>
          <thead>
            <tr>
              <th>Vehicle_Type_Code_1</th>
              <th>Vehicle_Type_Code_2</th>
              <th>Crash_Date</th>
              <th>Crash_Time</th>
            </tr>
          </thead>
          <tbody>
            {car.map((item) => {
              return (
                <tr>
                  <td>{item.vehicle_type_code1}</td>
                  <td>{item.vehicle_type_code2}</td>
                  <td>{item.crash_date}</td>
                  <td>{item.crash_time}</td>
                </tr>
              );
            })}
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
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                style={{color:'black'}}
              />
               <DesktopTimePicker
          label="Filter By Crash Time"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
            </LocalizationProvider>
          </div>
        </Filter>
      </Details>
    </Option>
  );
}

export { CarTabular };

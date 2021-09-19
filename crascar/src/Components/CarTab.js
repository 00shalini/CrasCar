import styled from "styled-components";
import { GridOnOutlined, TableChart } from "@material-ui/icons";


export const OptionBar = styled.div`
  border-bottom: 2px solid lightgray;
  height: 40px;
  background-color: lightgray;
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: fixed;
  margin-top: -110px;
`;

export const Option = styled.div`
  margin-top: 200px;
`;

export const View = styled.h5`
  padding-left: 1050px;
  margin-top: 5px;
  width: 100px;
`;
export const TableCharts = styled(TableChart)`
  cursor: pointer;
  margin-left: 40px;
`;

export const Header = styled.h4` 
   margin-left:200px;
   font-weight:700;
   padding-top: 100px;

`

export const Card = styled(GridOnOutlined)`
  margin-left: -180px;
  cursor: pointer;
`;

export const Select = styled.select`
  margin-left: -240px;
  width: 200px;
  height: 30px;
  border: none;
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Table = styled.table`

  margin-left: 220px;
  width: 800px;
`;

export const Filter = styled.div`

  margin-left: 40px;
  width: 300px;
  z-index: -1;
  padding-top: 50px;
`;

export const Cardview = styled.div`
  width: 50vw;
  height: 210px;
  background-color: darkgray;
  border-radius: 10px;
  margin: 10px;
  margin-left: 230px;
  color: black;
  box-shadow: 2px 0px 56px -9px rgba(9,9,79,0.46);
-webkit-box-shadow: 2px 0px 56px -9px rgba(9,9,79,0.46);
-moz-box-shadow: 2px 0px 56px -9px rgba(9,9,79,0.46);

`;

export const DataView = styled.h3`
  padding-left: 20px;
  padding-top: 10px;

`;

export const Span = styled.span`
  padding-left: 30px;
  font-weight: 400;
`;

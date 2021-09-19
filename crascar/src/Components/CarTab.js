import styled from 'styled-components';
import { GridOnOutlined, TableChart } from '@material-ui/icons';

export const OptionBar = styled.div`

border-bottom: 2px solid lightgray;
height: 40px;
margin-top: 90px;
background-color: lightgray;
padding-top: 30px;
display: grid;
grid-template-columns: repeat(4,1fr);
`

export const Option= styled.div`
margin-top: 90px;
`;


export const View = styled.h5` 
    padding-left : 900px;
    margin-top: 5px;
 width: 100px;
`
export const TableCharts = styled(TableChart)`
cursor: pointer;
margin-left: 40px;
`

export const Card = styled(GridOnOutlined)`

margin-left:-180px;
cursor: pointer;
`

export const Select = styled.select`

margin-left:-240px;
width: 200px;
height: 30px;
border: none;

`

export const Details = styled.div`

display: grid;
grid-template-columns: repeat(2,1fr);

`;

export const Table = styled.table`
  
border: 1px solid black;
margin-left: 220px;
width: 800px;
`

export const Filter = styled.div` 
border: 1px solid black;
margin-left: 10px;
width: 300px;
`
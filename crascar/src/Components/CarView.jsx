import React from "react";
import { CarCard } from "./CarCard";
import { CarTabular } from "./CarTabular";
import { OptionBar, View, TableCharts, Card } from "./CarTab";

function CarView() {
  const [tabview, setTabView] = React.useState(false);
  const handletabview = (e) => {
    setTabView(true);
   
   
  };

  const handlecardview = () => {
    
    setTabView(false);
   
  };
  return (
    <div>
      <OptionBar>
        <View>SELECT VIEW</View>
        <TableCharts onClick={handletabview} />
        <Card onClick={handlecardview} />
      </OptionBar>
      {tabview === true ?<CarTabular /> :   <CarCard />}
      
     
    </div>
  );
}

export { CarView };

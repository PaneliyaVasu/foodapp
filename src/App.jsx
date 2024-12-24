import { useState } from "react";
import Foodlist from "./component/Foodlist";
import Nav from "./component/nav";
import Container from "./component/container";
import InnerContainer from "./component/InnerContainer";
import Fooddetails from "./component/Fooddetail";
import Search from "./component/Search";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615");

  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <Foodlist setFoodId={setFoodId} key={foodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <Fooddetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;

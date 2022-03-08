import {Routes, Route, BrowserRouter} from "react-router-dom";

import Container from "./ui/Container/Container";
import Main from "./component/Main/Main";
import Detailed from "./component/Detailed/Detailed";

function App() {
  return (
    <div className="App">
      <Container>
      <Routes>
            <Route index path='/' element={<Main/>}/>
            <Route path='todo/:id' element={<Detailed/>}/>
      </Routes>
      </Container>
    </div>
  );
}

export default App;

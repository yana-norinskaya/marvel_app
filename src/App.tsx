import React from 'react';
import {MainPage, ComicsPage, ComicsInfoPage, Page404} from "./page";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SingleCharPage} from "./page/SingleCharPage";
import {Container} from "./styles/style";

function App() {
  return (
    <Container>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <MainPage/>} />
                <Route path="/comics" element={ <ComicsPage/>} />
                <Route path="/comics/:id" element={ <ComicsInfoPage/>} />
                <Route path="*" element={ <Page404/>} />
                <Route path="/characters/:id" element={<SingleCharPage />}/>
            </Routes>
        </BrowserRouter>
    </Container>
  );
}

export default App;

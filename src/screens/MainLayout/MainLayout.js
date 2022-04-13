import React from "react";
import './MainLayout.css';
import {Col, Row} from "react-bootstrap"
// import {Grid} from "@mui/material"
// import {
//     BrowserRouter as Router,
//     Route,
//     Routes,
//   } from 'react-router-dom';
// import {UserList} from "../components/UserList"
import { Link } from "react-router-dom";

const MainLayout = () =>{
    return(
        <div className="block">
            <header className="header">
                <Row className="justify-content-center">
                    <Col xl={10}>
                        <h1 className="headerTitle">
                            НАЗНАЧИТЬ РЕЦЕПТ
                        </h1>
                    </Col>
                    <div className="headerBtn">
                        <Col xl={10}>
                            <Link to={"/users"}
                                    className="addPatients">
                                Назначит новый рецепт
                            </Link>
                        </Col>
                        <Col xl={10}>
                            <Link to={"/addPrescription"}
                                    className="patients">
                                Пациенты
                            </Link>
                        </Col>
                        <Col xl={10}>
                            <Link to={"/analitika"}
                                    className="analitika">
                                Аналитика
                            </Link>
                        </Col>
                    </div>
                    
                </Row>
            </header>




            
            {/* <Link to={"/users"}> USERS </Link> */}
            {/* <Grid container >
                <Grid item xs={12}>
                    <Router>
                        <Routes>
                            <Route exact path="/users" component={UserList} />
                        </Routes>

                    </Router>
                </Grid>
            </Grid> */}
        </div>
    )
}

export default MainLayout
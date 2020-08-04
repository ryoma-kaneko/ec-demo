import React from 'react';
import {Route,Switch} from "react-router";
import {Login,Home} from "./templates";
const Router = () => {
    return (
        <Switch>
            <Route exact path = "/login" componet = {Login} />
            {/* 動的にルーティングする書き方 */}
            {/* <Route path="/posts/:id" componet={Post} /> */}
            <Route exact path = "(/)?" component = {Home} />
        </Switch>
    )
}

export default Router;
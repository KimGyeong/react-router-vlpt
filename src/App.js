import React from 'react';
import Home from "./Home";
import {Link, Route} from "react-router-dom";
import About from "./About";
import Profiles from "./Profiles";

function App() {
    // /about 경로가 / 규칙과 일치하기에 exact라는 property를 true로 설정하면 됨.
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles">프로필 목록</Link>
                </li>
            </ul>
            <hr />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profiles" component={Profiles} />
        </div>
    );
}

export default App;

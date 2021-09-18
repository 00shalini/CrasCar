import React from 'react';
import {Routes, Switch, Route} from 'react-router-dom';
import { CarTabular } from './CarTabular';
import { Home } from './Home';

function Routes() {
    return (
        <div>
            <Routes>
                <Switch>
                    <Route exact path='/'>
                         <Home/>
                    </Route>
                    <Route path='/carview'>
                        <CarTabular/>
                    </Route>
                    <Route path='/about'>

                    </Route>
                    <Route path='/contact'>
                        
                    </Route>
                </Switch>
            </Routes>
        </div>
    )
}

export {Routes}

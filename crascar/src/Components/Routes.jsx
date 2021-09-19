import React from 'react';
import {  Switch, Route} from 'react-router-dom';

import { CarView } from './CarView';
import { Home } from './Home';
import { Navbar } from './Navbar';

function Routes() {
    return (
        <div>
            <Navbar/>
                <Switch>
                   
                    <Route exact path='/'>
                         <Home/>
                    </Route>
                    <Route path='/carview'>
                        <CarView/>
                    </Route>
                    <Route path='/about'>

                    </Route>
                    <Route path='/contact'>
                        
                    </Route>
                      
                </Switch>
           
        </div>
    )
}

export {Routes}

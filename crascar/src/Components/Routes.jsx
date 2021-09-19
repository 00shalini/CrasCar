import React from 'react';
import {  Switch, Route} from 'react-router-dom';
import { CardDetail } from './CardDetail';

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
                    <Route path='/carview/:id'>
                        <CardDetail />
                     </Route>   
                </Switch>
           
        </div>
    )
}

export {Routes}

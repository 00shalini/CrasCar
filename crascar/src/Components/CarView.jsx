import React from 'react'
import { CarCard } from './CarCard'
import { CarTabular } from './CarTabular'

function CarView() {
    return (
        <div>
            <CarTabular/>
            <CarCard/>
        </div>
    )
}

export {CarView}

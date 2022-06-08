import React from 'react'
import Box from './Box'

import data from '../Api'

const Services = () => {
    const dataBox = data.map(data =>
        <Box
            key={data.id}
            title={data.title}
            description={data.description}
            img={data.url}

        />
    )
    return (
        <div id="services">
            <div className="s-heading">
                <h1>Servicios</h1>
                <p>Algunos de nuestros servicios</p>
            </div>
            <div className="b-container">
                {dataBox}

            </div>

        </div>
    )
}

export default Services

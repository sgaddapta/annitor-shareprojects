import { Fragment } from 'react'

const textSliderData = [
    'Solar Panels',
    'Water Heating',
    'Power Storeage',
    'Feasibility Study',
    'Waste Recycling',
    'Water Heating',
    'Financing',
    'Energy Efficiency'
];
const MarqueTwo = ({className}:{className?:string}) => {
    return (
        <div className={`marque-section ${className}`}>
            <div className="container-fluid">
                <div className="marquee-wrapper style-2 text-slider">
                    <div className="marquee-inner to-left">
                        <ul className="marqee-list d-flex">
                            <li className="marquee-item style-2">
                                {textSliderData.map((text, index) => (
                                    <Fragment key={index}>
                                        <span className="text-slider">
                                            <img src="/img/asterisk.svg" alt="img" />
                                        </span>
                                        <span className="text-slider text-style">{text}</span>
                                    </Fragment>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MarqueTwo
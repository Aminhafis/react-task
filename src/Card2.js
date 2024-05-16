import React from "react";
import './card2.css'

import car from '../src/image/car.jpg'
import clock from '../src/image/hello.jpg'
import Hello from "./Navbar";



function Carding() {
    let data = [
        {
            id: 1,
            image: clock,
            position: 'Finance',
            heading: 'Unmatched Toner Cartridge Quality 20 less than ocm price',
            description: 'hbebdfjenfjn kjenfjnf jbnefnf hehbf jfkenfen ffnjkefje fekjfj njkfenf'
        },
        {
            id: 2,
            position: 'Finance',
            image: '',
            heading: 'Las vegas how to have non gambling fun',
            description: 'bjedbjdcjn bfhbfvjfbnjbn  kjrbfhjbvjbn vbfkbnvfjnbv  fjbnrvjnbv rbfvjnfvjknv '
        },
        {
            id: 3,
            image: car,
            position: 'Visco',
            heading: 'Unmatched toner cartridge quality 20 less than oem price',
            description: 'efbhrfhb iruhfjrhnfvc jhhbfjrbnvcjnvc kjnvjknv bvkjnvdkjnvkjnv kvbnjn'
        },
        {
            id: 4,
            position: 'Finance',
            heading: 'Unmatched toner cartridge quality 20 less than oem price',
            name: 'kinga dvssmmmk'
        },
        {
            id: 5,
            position: 'Finance',
            heading: 'Unmatched toner cartridge quality 20 less than oem price',
            name: 'kinga dvssmmmk'
        },
        {
            id: 6,
            position: 'Finance',
            heading: 'Unmatched toner cartridge quality 20 less than oem price',
            name: 'kinga dvssmmmk'
        },
        {
            id: 7,
            image: clock,
            heading: 'Search engine optimizationnd advertising',
            description: 'vbdhsbdfewbn ebhfjewnbfj bfnejknfj jkefbnjbn bnfj'
        },
        {
            id: 8,
            position: 'Leadership',
            heading: 'Unmatched toner cartridge quality 20 less than oem price',
            description: 'jnefjhebnrf hrfehnfj jfbrnefbjhrvf hbfrehdbfj hbfhjdebnnfn bnfrjkn'
        },
        {
            id: 9,
            position: 'Leadership',
            heading: 'Unmatched toner cartridge quality 20 less than oem price',
            description: 'jnefjhebnrf hrfehnfj jfbrnefbjhrvf hbfrehdbfj hbfhjdebnnfn bnfrjkn'
        }
    ];

    return (
        <div className="mainClass">
          
            {data.map((p) => (
                <div key={p.id} className="card">
                    <img src={p.image} alt="" />
                    <h4>{p.position}</h4>
                    <h2>{p.heading}</h2>
                    <p>{p.description}</p>
                    <h2>{p.name}</h2>
                </div>
            ))}
        </div>
    );
}

export default Carding;

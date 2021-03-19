import React from 'react'
const informations = [
    {
        id: 1,
        date: "2019 - Ongoing",
        qualification: "Master in Computer Engineering",
        institute: { name: "NCIT", location: "Balkumari, Lalitpur", affiliation: "Pokhara University" }
    },
    {
        id: 2,
        date: "2012 - 2016",
        qualification: "Bachelor in Electronics and Communication Engineering",
        institute: { name: "NCE", location: "Satdobato, Lalitpur", affiliation: "Tribhuvan University" }
    },
    {
        id: 3,
        date: "2010 - 2012",
        qualification: "Intermediate Level in Science",
        institute: { name: "Ambition Academy", location: "Baneshwor, Kathmandu", affiliation: "HSEB" }
    },
    {
        id: 4,
        date: "2001 - 2010",
        qualification: "School Leaving Certificate",
        institute: { name: "Arunima Higher Secondary School", location: "Boudha, Kathmandu", affiliation: "Nepal Government" }
    }
]
function Academic() {
    return (
        <div className="academic">

            <div>
                <h1>Academic</h1>
            </div>

            <div className="line"></div>

            <div className="institutes">
                {
                    informations.map(info => {
                        const { id, date, qualification, institute: { name, location, affiliation } } = info
                        return (
                            <React.Fragment key={id}>
                                <div className="date">
                                    {date}
                                </div>
                                <div className="institute">
                                    <blockquote>
                                        {qualification}
                                    </blockquote>
                                    <pre style={{ margin: "0.3rem auto", whiteSpace:"pre-wrap" }}>
                                        {name}, {location}
                                    </pre>
                                    <tt>
                                        {affiliation}
                                    </tt>
                                </div>
                                <div className="line line-below"></div>
                            </React.Fragment>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Academic
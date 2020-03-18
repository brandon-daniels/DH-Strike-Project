var config = {
    style: 'mapbox://styles/brandondaniels1917/ck7p8e3x103m81iqhe4xbeosm',
    accessToken: 'pk.eyJ1IjoiYnJhbmRvbmRhbmllbHMxOTE3IiwiYSI6ImNrMm1tYjgwYTBqbDIzZHQ1dmdyNWZxeWcifQ.fdROqOxFdqnMmA6G_f_hgw',
    showMarkers: false,
    theme: 'light',
    alignment: 'center',
    title: 'The Red State Revolt',
    subtitle: 'Mapping the teacher strikes from 2018',
    byline: '',
    footer: 'Data from the Department of Education and Buruea of Labor Statistics',
    chapters: [
        {
            id: 'glacier-np',
            title: 'West Viginia',
            image: 'https://media.graytvinc.com/images/690*388/WV+teacher+rally+crowd.jpg',
            description: 'West Viginia was the first state wide teacher strike in 2018. On Feburary 22, 2018, all Fifty-Five counties of West Virginia were closed for tweleve consecutive school days. This strike helped initiate other teacher strikes in Oklahoma, Kentucky, Arizona, Colorado, and North Carolina.',
            location: {
                center: [-80.80653, 38.65278],
                zoom: 5.87,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'westvirginia',
                    opacity: 1
//                    height: 0
                },
            ],
            onChapterExit: [
              {
                    layer: 'westvirginia',
                    opacity: 0
    //              height: 30000
              }
            ]
        },
        {
            id: 'harrison1998',
            title: 'Strike Density across the state',
            image: '',
            description: 'This map visualies the number of students in each of the 55 school districts in West Virginia. While not a measument of the number of teachers, it helps approximate the districts where the strike was most impactful',
            location: {
                center: [-80.80653, 38.65278],
                zoom: 7,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

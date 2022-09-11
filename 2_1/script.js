[
    {
        "name": "DESIGN AND IMPLEMENTATION OF MOBILE APPLICATIONS",
        "list": [
            {
                "label": "WEBEX (BARESI LUCIANO)",
                "src": ""
            },
            {
                "label": "WEBEEP",
                "src": "https://webeep.polimi.it/course/view.php?id=7528"
            },
            {
                "label": "OLD PLAYLIST",
                "src": "https://www.youtube.com/playlist?list=PLF4udTOd6fde39Es8Bxl0CCMkvvHHCjlR"
            },
            {
                "label": "OLD GITHUB",
                "src": "https://github.com/gioenn/dima"
            }
        ],
        "notes": [
            "PROJECT"
        ]
    },
    {
        "name": "IMAGE ANALYSIS AND COMPUTER VISION",
        "list": [
            {
                "label": "WEBEX (CAGLIOTI VINCENZO)",
                "src": ""
            },
            {
                "label": "WEBEEP",
                "src": "https://webeep.polimi.it/course/view.php?id=7868"
            }
        ],
        "notes": []
    },
    {
        "name": "NUMERICAL ANALYSIS",
        "list": [
            {
                "label": "WEBEX (PEROTTO SIMONA)",
                "src": ""
            },
            {
                "label": "WEBEEP",
                "src": "https://webeep.polimi.it/course/view.php?id=8537"
            }
        ],
        "notes": []
    },
    {
        "name": "ARTIFICIAL NEURAL NETWORKS AND DEEP LEARNING",
        "list": [
            {
                "label": "WEBEX (MATTEUCCI MATTEO)",
                "src": ""
            },
            {
                "label": "WEBEEP",
                "src": "https://webeep.polimi.it/course/view.php?id=8151"
            },
            {
                "label": "CALENDARIO",
                "src": "calendarioFT.pdf"
            }
        ],
        "notes": []
    }
].forEach((course) => {
    let toAppend = `<p>${course.name}</p><ul>`;
    course.list.forEach((item) => {
        toAppend += `<li><a href="${item.src}" target="_blank">${item.label}</a></li>`
    });
    if(course.notes.length != 0) {
        toAppend += "<ul>";
        course.notes.forEach((note) => {
            toAppend += `<li>${note}</li>`
        });
        toAppend += "</ul>";
    }
    toAppend += "</ul>";
    document.body.innerHTML += toAppend;
});

document.body.innerHTML += `
<p class="aligncenter">
    <img src="orario.png" alt="centered image" >
</p>
`;
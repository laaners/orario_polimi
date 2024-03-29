[
    {
        "name": "	MODEL IDENTIFICATION AND DATA ANALYSIS - 1ST MODULE",
        "list": [
            {
                "label": "WEBEX (FORMENTIN SIMONE)",
                "src": ""
            },
            {
                "label": "WEBEEP",
                "src": "https://webeep.polimi.it/course/view.php?id=8943"
            },
            {
                "label": "APPUNTI VECCHI",
                "src": "https://gitlab.com/polinetwork/CompSc2/-/tree/main/Model%20Identification%20and%20Data%20Analysis/MIDA%201"
            }
        ],
        "notes": [
            "8:30-10:00",
            "16:20-17:50",
            "Ends at 6th of April, midterm not additional call",
            "22-04 midterm"
        ]
    },
    {
        "name": "NATURAL LANGUAGE PROCESSING",
        "list": [
            {
                "label": "WEBEX (CARMAN MARK JAMES)",
                "src": ""
            },
            {
                "label": "WEBEEP",
                "src": "https://webeep.polimi.it/course/view.php?id=9727"
            }
        ],
        "notes": []
    },
    {
        "name": "COMPUTER GRAPHICS",
        "list": [
            {
                "label": "WEBEX (GRIBAUDO MARCO)",
                "src": ""
            },
            {
                "label": "WEBEEP",
                "src": "https://webeep.polimi.it/course/view.php?id=7087"
            },
            {
                "label": "WEBEEP OLD",
                "src": "https://webeep.polimi.it/course/view.php?id=1122"
            }
        ],
        "notes": []
    },
    {
        "name": "MECCANICA",
        "list": [
            {
                "label": "WEBEX (SOMASCHINI CLAUDIO)",
                "src": ""
            },
            {
                "label": "WEBEEP",
                "src": "https://webeep.polimi.it/course/view.php?id=6786"
            },
            {
                "label": "APPUNTI VECCHI",
                "src": "https://gitlab.com/polinetwork/info3y/-/tree/master/MECCANICA/Lezioni/Prof.%20Sabbioni"
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
    document.querySelector("#list").innerHTML += toAppend;
});
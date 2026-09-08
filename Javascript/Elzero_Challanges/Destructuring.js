let people = [
    { nickname: "TOP", times: 2, FMVP: true, weapons: ["M416", "Mini14"] },
    { nickname: "DOK", times: 2, FMVP: true, weapons: ["AUG13", "S12K"] },
    { nickname: "ZYOLL", times: 1, FMVP: true, weapons: ["M416", "UMP45"] },
    { nickname: "REFUS", times: 0, FMVP: false, weapons: ["AUG13", "S12K"] },
];

for (player = 1; player <= 4; player++) {

    if (player === 1) {
        const [{ nickname, times, FMVP, weapons: [w1, w2] }, , ,] = people;
        if (FMVP === true) {
            console.log(`Welcome ${nickname} , You are Global MVP ${times} times, Your prefered weapons are ${w1} & ${w2}`);
        }
        else {
            console.log(`Welcome ${nickname} , You aren't a global FMVP, Your prefered weapons are ${w1} & ${w2}`);
        }
    } else if (player === 2) {
        const [, { nickname, times, FMVP, weapons: [w1, w2] }, ,] = people;
        if (FMVP === true) { console.log(`Welcome ${nickname} , You are Global MVP ${times} times, Your prefered weapons are ${w1} & ${w2}`); }
        else {
            console.log(`Welcome ${nickname} , You are Global MVP ${times} times, You aren't a global FMVP, Your prefered weapons are ${w1} & ${w2}`);
        }
    } else if (player === 3) {
        const [, , { nickname, times, FMVP, weapons: [w1, w2] },] = people;
        if (FMVP === true) { console.log(`Welcome ${nickname} , You are Global MVP ${times} times, Your prefered weapons are ${w1} & ${w2}`); }
        else {
            console.log(`Welcome ${nickname} , You aren't a global FMVP, Your prefered weapons are ${w1} & ${w2}`);
        }
    } else {
        const [, , , { nickname, times, FMVP, weapons: [w1, w2] }] = people;

        if (FMVP === true) { console.log(`Welcome ${nickname} , You are Global MVP ${times} times, Your prefered weapons are ${w1} & ${w2}`); }
        else {
            console.log(`Welcome ${nickname} , You aren't a global FMVP, Your prefered weapons are ${w1} & ${w2}`);
        }
    }
};
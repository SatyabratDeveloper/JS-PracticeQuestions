/*
    Question: Building a gradebook app

    A teacher has finished grading their students tests and needs your help to:
    1. Calculate the average score for the class.
    2. Converting the student score to a letter grade.
       Here are the scores and their corresponding letter grades:
        Score       Range Grade
        100	        "A++"
        90 - 99	    "A"
        80 - 89	    "B"
        70 - 79	    "C"
        60 - 69	    "D"
        0 - 59	    "F"
    3. Check if a student has a passing grade (A passing grade is anything that is not an "F").
    4. Message the student with the results
*/

function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) return "A++";
    else if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
    const classAvg = getAverage(totalScores);
    const studentGrade = getGrade(studentScore);
    const studentResult = hasPassingGrade(studentScore);

    return `Class average: ${classAvg}. Your grade: ${studentGrade}. ${
        studentResult ? "You passed the course." : "You failed the course."
    }`;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

let data = `1. Software testing activities should start
a. as soon as the code is written
b. during the design  stage
c. when the requirements have been formally documented
* d. as soon as possible in the development life cycle
2.Faults found by users are due to:
a. Poor quality software
* b. Poor software and poor testing
c. bad luck
d. insufficient time for testing
3.What is the main reason for testing software before releasing it?
a. to show that system will work after release
b. to decide when the software is of sufficient quality to release
c. to find as many bugs as possible before release
* d. to give information for a risk based decision about release
4. which of the following statements is not true
a. performance testing can be done during unit testing as well as during the testing of whole system
b. The acceptance test does not necessarily include a regression test
* c. Verification  activities should not involve testers (reviews, inspections etc)
d. Test environments should be as similar to production environments as possible
5. When reporting faults found to developers, testers should be:
a. as polite, constructive and helpful as possible
b. firm about insisting that a bug is not a “feature” if it should be fixed
c. diplomatic, sensitive to the way they may react to criticism
* d. All of the above
6.In which order should tests be run?
* a. the most important tests first
b. the most difficult tests first(to allow maximum time for fixing)
c. the easiest tests first(to give initial confidence)
d. the order they are thought of
7. The later in the development life cycle a fault is discovered, the more expensive it is to fix. why?
a. the documentation is poor, so it takes longer to find out what the software is doing.
b. wages are rising
* c. the  fault has been built into more documentation,code,tests, etc
d. none of the above
8. Which is not true-The black box tester
a. should be able to understand a functional specification or requirements document
* b. should be able to understand the source code.
c. is highly motivated to find faults
d. is creative to find the system’s weaknesses
9. A test design technique is
* a. a process for selecting test cases
b. a process for determining expected outputs
c. a way to measure the quality of software
d. a way to measure in a test plan what has to be done
10. Testware(test cases, test dataset)
* a. needs configuration management just like requirements, design and code
b. should be newly constructed for each new version of the software
c. is needed only until the software is released into production or use
d. does not need to be documented and commented, as it does not form part of the released
software system
11. An incident logging system
a. only records defects
b. is of limited value
* c. is a valuable source of project information during testing if it contains all incidents
d. should be used only by the test team.
12. Increasing the quality of the software, by better development methods, will affect the time needed for testing (the test phases) by:
* a. reducing test time
b. no change
c. increasing test time
d. can’t say
13. Coverage measurement
a. is nothing to do with testing
* b. is a partial measure of test thoroughness
c. branch coverage should be mandatory for all software
d. can only be applied at unit or module testing, not at system testing
14. When should you stop testing?
a. when time for testing has run out.
b. when all planned tests have been run
* c. when the test completion criteria have been met
d. when no faults have been found by the tests run
15. Which of the following is true?
a. Component testing should be black box, system testing should be white box.
* b. if u find a lot of bugs in testing, you should not be very confident about the quality of software
c. the fewer bugs you find,the better your testing was
d. the more tests you run, the more bugs you will find.
16. What is the important criterion in deciding what testing technique to use?
a.  how well you know a particular technique
* b. the objective of the test
c. how appropriate the technique is for testing the application
d. whether there is a tool to support the technique
18. Using the same code example as question 17,how many  tests are required to achieve 100% branch/decision coverage?
a. 1
b. 2
* c. 3
d. 4
19 Which of the following is NOT a type of non-functional test?
* a. State-Transition
b. Usability
c. Performance
d. Security
20. Which of the following  tools would you use to detect a memory leak?
a. State analysis
b. Coverage analysis
* c. Dynamic analysis
d. Memory analysis
21. Which  of the following is NOT a standard related to testing?
a.  IEEE829
* b.  IEEE610
c.  BS7925-1
d.  BS7925-2
22.which of the following is the component test standard?
a. IEEE 829
b. IEEE 610
c. BS7925-1
* d. BS7925-2
23 which of the following statements are true?
a. Faults in program specifications are the most expensive to fix.
b. Faults in code are the most expensive to fix.
* c. Faults in requirements are the most expensive to fix
d. Faults in designs are the most expensive to fix.
24. Which of the following is not the integration strategy?
* a. Design based
b. Big-bang
c. Bottom-up
d. Top-down
25. Which of the following is a black box design technique?
a. statement testing
* b. equivalence partitioning
c. error- guessing
d. usability testing
26. A program with high cyclometic complexity  is almost likely to be:
a. Large
b. Small
c. Difficult to write
* d. Difficult to test
27. Which of the following is a static test?
* a. code inspection
b. coverage analysis
c. usability assessment	
d. installation test
28. Which of the following is the odd one out?
a. white box
b. glass box
c. structural
* d. functional
29. A program validates a numeric field as follows:values less than 10 are rejected, values between 10 and 21 are accepted, values greater than or equal to 22 are rejected which of the following input values cover all of the equivalence partitions?
a. 10,11,21
b.   3,20,21
* c.   3,10,22
d. 10,21,22
30. Using  the same specifications as question 29, which of the following covers the MOST boundary values?
a. 9,10,11,22
* b. 9,10,21,22
c. 10,11,21,22
d. 10,11,20,21`;
const newData = data.split("\n");
let newQ;
let idAnswer = 0;
const question = [];
const answers = [];
const trueAnswer = [];
let j = 0; // id number question
let chess = 0;

for (let i = 0; i < newData.length; i++) {
  if (Number(newData[i].charAt(0)) > 1 || newData[i].charAt(0) < 9) {
    question.push({
      id: j,
      q: newData[i],
    });

    j++;
  } else {
    const newAnswer =
      newData[i].charAt(0) === "*" ? newData[i].replace("*", "") : newData[i];
    answers.push({
      id: j,
      a: newAnswer,
    });
    chess++;
  }
  if (newData[i].charAt(0) == "*") {
    trueAnswer.push({
      id: j,
      true: newData[i],
    });
  }
}
const htmlAnswers = answers.map((answer) => {
    if (answer.id === idAnswer + 1) {
      return `<div>
          <input type="radio" name="size" value="${answer.a}" id="${answer.a}">
          <label for=${answer.a}>${answer.a}</label>
          </div>`;
    }
    return "";
  });
  
  
  newQ = `<h3>${question[idAnswer].q}</h3>  
      ${htmlAnswers}
  `;

const btn = document.querySelector(".question");
const answer = document.querySelector(".answer");
const submit = document.querySelector(".submit");
btn.innerHTML = newQ;

const Submit = () => {
  const radioButtons = document.querySelectorAll('input[name="size"]');
  let myAnswer;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      myAnswer = radioButton.value;
      break;
    }
  }
  console.log(myAnswer);
 
  answer.innerHTML =  `<h3>${trueAnswer[idAnswer].true}</h3>`

  setTimeout(Next, 5000);
};

const Next = () => {
    answer.innerHTML = ''
  idAnswer++;
  if (idAnswer > question.length - 1) {
    idAnswer = 0;
  }
  const htmlAnswers = answers.map((answer) => {
    if (answer.id === idAnswer + 1) {
      return `<div>
          <input type="radio" name="size" value="${answer.a}" id="${answer.a}">
          <label for=${answer.a}>${answer.a}</label>
          </div>`;
    }
    return "";
  });
  
  
  newQ = `<div>${question[idAnswer].q}</div>  
      ${htmlAnswers}
  `;
  btn.innerHTML = newQ
};

const Back = () => {
    idAnswer--;
    if (idAnswer < 0 ) {
      idAnswer = 0;
    }
    const htmlAnswers = answers.map((answer) => {
      if (answer.id === idAnswer + 1) {
        return `<div>
            <input type="radio" name="size" value="${answer.a}" id="${answer.a}">
            <label for=${answer.a}>${answer.a}</label>
            </div>`;
      }
      return "";
    });
    
    
    newQ = `<div>${question[idAnswer].q}</div>  
        ${htmlAnswers}
    `;
    btn.innerHTML = newQ
  };
  

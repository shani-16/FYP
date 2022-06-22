import React from "react";

const coursesInformation = () => {
  return (
    <>
      <div>
        <h1 className="h1 text-center my-2">
          Courses Information of BS Computer Science
        </h1>
        <div className="container">
          <div className="row">
            <div className="column">
              <p className="h2 text-center text-center">Semester 1</p>
              <table className="table">
                <thead>
                  <tr>
                    <th># </th>
                    <th>Course Code</th>
                    <th>Course Title</th>
                    <th>Credit Hours</th>
                    <th>Pre-Requisits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>CS 1x1</td>
                    <td>Introduction to ICT</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>CS 1x2</td>
                    <td>Programming Fundamentals</td>
                    <td>3 - 1</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>HU 1x1</td>
                    <td>English Composition and Comprehension</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>MT 1x1</td>
                    <td>Calculus and Analytical Geometry</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>NS 1x1</td>
                    <td>Applied Physics</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="column">
              <p className="h2 text-center text-center">Semester 2</p>
              <table className="table">
                <thead>
                  <tr>
                    <th># </th>
                    <th>Course Code</th>
                    <th>Course Title</th>
                    <th>Credit Hours</th>
                    <th>Pre-Requisits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>CS 1x3</td>
                    <td>Digital Logic Design</td>
                    <td>3 - 1</td>
                    <td>Applied Physics</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>CS 1x4</td>
                    <td>Object Oriented Porgramming</td>
                    <td>3 - 1</td>
                    <td>Programming Fundamentals</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>HU 1x2</td>
                    <td>Communication and Presentaions Skills</td>
                    <td>3 - 0</td>
                    <td>English Composition and Comprehension</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>MT 1x2</td>
                    <td>Probability and Statistics</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>UE 1x1</td>
                    <td> University Elective - 1 (Intro to Economics)</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <p className="h2 text-center">Semester 3</p>
              <table className="table">
                <thead>
                  <tr>
                    <th># </th>
                    <th>Course Code</th>
                    <th>Course Title</th>
                    <th>Credit Hours</th>
                    <th>Pre-Requisits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>CS 2x1</td>
                    <td>Computer Organization and Assembly Language</td>
                    <td>3 - 1</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>CS 2X2</td>
                    <td>Data Structures and Algorithms</td>
                    <td>3 - 1</td>
                    <td>Object Oriented Porgramming</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>CS 2x3</td>
                    <td>Discrete Structures</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>HU 2x1</td>
                    <td>Professional Practices</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>SC 2x1</td>
                    <td>CS Supporting -1 (Diffenrential Equation)</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="column">
              <p className="h2 text-center">Semester 4</p>
              <table className="table">
                <thead>
                  <tr>
                    <th># </th>
                    <th>Course Code</th>
                    <th>Course Title</th>
                    <th>Credit Hours</th>
                    <th>Pre-Requisits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>CS 2x4</td>
                    <td>Design and Analysis of Algorithm</td>
                    <td>3 - 0</td>
                    <td>Data Structures and Algorithms</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>CS 2x5</td>
                    <td>Theory of Automata</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>CS 2x6</td>
                    <td>Database Systems</td>
                    <td>3 - 1</td>
                    <td>Data Structures and Algorithms</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>MT 2x1</td>
                    <td>Linear Algebra</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>UE 2x1</td>
                    <td>University Elective -2 (Intro to Accounting)</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <p className="h2 text-center">Semester 5</p>
              <table className="table">
                <thead>
                  <tr>
                    <th># </th>
                    <th>Course Code</th>
                    <th>Course Title</th>
                    <th>Credit Hours</th>
                    <th>Pre-Requisits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>CS 3x1</td>
                    <td>Compiler Construction</td>
                    <td>3 - 0</td>
                    <td>Theory of Automata</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>SC 3x1</td>
                    <td>CS Supporting - 2 (Multi-variable Calculus)</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>CS 3x2</td>
                    <td>Operating Systems</td>
                    <td>3 - 1</td>
                    <td>Data Structures and Algorithms</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>CS 3x3</td>
                    <td>Software Engineering</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>SC 3x2</td>
                    <td>CS Supporting - 3 (Graph Theory)</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="column">
              <p className="h2 text-center">Semester 6</p>
              <table className="table">
                <thead>
                  <tr>
                    <th># </th>
                    <th>Course Code</th>
                    <th>Course Title</th>
                    <th>Credit Hours</th>
                    <th>Pre-Requisits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>CS 3x4</td>
                    <td>Artificial Intelligence</td>
                    <td>3 - 1</td>
                    <td>Discrete Structures</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>CS 3x5</td>
                    <td>Computer Networks</td>
                    <td>3 - 1</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>CS 3x6</td>
                    <td>CS Elective - 1 (Visual Programming)</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>CS 3x7</td>
                    <td>CS Elective - 2 (Computer Vision)</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>HU 3x1</td>
                    <td>Technical and Business Writing</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <p className="h2 text-center">Semester 7</p>
              <table className="table">
                <thead>
                  <tr>
                    <th># </th>
                    <th>Course Code</th>
                    <th>Course Title</th>
                    <th>Credit Hours</th>
                    <th>Pre-Requisits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>CS 4x1</td>
                    <td>CS Elective - 3 (Software Engineering)</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>CS 4x2</td>
                    <td>CS Elective - 4 (Human Computer Interaction)</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>CS 4x3</td>
                    <td>Final Year Project - I</td>
                    <td>0 - 3</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>UE 4x1</td>
                    <td>University Elective - 3 (Intro to Business)</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>CS 4x4</td>
                    <td>Parallel and Distriuted Computing</td>
                    <td>3 - 0</td>
                    <td>Operating Systems</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>HU 4x1</td>
                    <td>Pakistan Studies</td>
                    <td>2 - 0</td>
                    <td>None</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="column">
              <p className="h2 text-center">Semester 8</p>
              <table className="table">
                <thead>
                  <tr>
                    <th># </th>
                    <th>Course Code</th>
                    <th>Course Title</th>
                    <th>Credit Hours</th>
                    <th>Pre-Requisits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>CS 4x5</td>
                    <td> CS Elective - 5 (Mobile App Development)</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>UE 4x2</td>
                    <td>
                      University Elective - 4 (Entrepreneur and Leadership
                      Skills)
                    </td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>CS 4x6</td>
                    <td>Final Year Project - II</td>
                    <td>0 - 3</td>
                    <td>Final Year Project - I</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>CS 4x7</td>
                    <td>Information Security</td>
                    <td>3 - 0</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>HU 4x2</td>
                    <td>Islamic Studies/Ethics</td>
                    <td>2 - 0</td>
                    <td>None</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default coursesInformation;

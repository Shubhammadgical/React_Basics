import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
class Quizz extends React.Component {
  state = {
    showQuestion: false,
    AllQuestions: [],
    totalScore: 0,
    tamplate: {
      question: "",
      score: "",
      options: [],
      showOptions: false,
    },
    index: -1,
    error: "",
    NoOfOptions: [],
  };
  handleQues = () => {
    let s1 = this.state;
    s1.showQuestion = true;
    s1.index++;
    let NewTemplate = { que: "", score: "", option: [], showOptions: false };
    if (s1.totalScore < 20) {
      s1.AllQuestions.push(NewTemplate);
    }
    this.setState(s1);
    console.log(s1.totalScore);
  };
  handleChange = (e) => {
    let s1 = this.state;
    if (e.currentTarget.name === "question") {
      s1.AllQuestions[s1.index].que = e.currentTarget.value;
    }
    if (e.currentTarget.name === "score") {
      s1.AllQuestions[s1.index].score = e.currentTarget.value;
    }
    this.setState(s1);
  };
  set = () => {
    let s1 = this.state;
    if (s1.AllQuestions.length > 0) {
      for (let i = 0; i < s1.AllQuestions.length; i++) {
        if (s1.totalScore + +s1.AllQuestions[i].score < 20) {
          s1.totalScore = s1.totalScore + +s1.AllQuestions[i].score;
          s1.error = "";
        } else {
          s1.error = "Total score is greater than or equal than 20";
        }
      }
    }
    this.setState(s1);
  };
  handleOption = (index) => {
    console.log(index);
    let s1 = this.state;
    s1.AllQuestions[index].showOptions = true;
    s1.NoOfOptions.push(1);
    this.setState(s1);
  };
  render() {
    let { totalScore, showQuestion, AllQuestions, error, NoOfOptions } =
      this.state;

    return (
      <div style={{ padding: "20px" }}>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            height: "100px",
          }}
        >
          <b>World Quiz</b>
          <div style={{ float: "right", paddingTop: "30px" }}>
            <button className="btn btn-primary" onClick={this.handleQues}>
              Add Question
            </button>
          </div>
          <div
            style={{ float: "right", paddingTop: "36px", paddingRight: "20px" }}
          >
            Total Score : {totalScore}
          </div>
        </div>
        <div style={{ color: "red", textAlign: "center" }}>
          {error ? <span>{error}</span> : <br />}
        </div>

        <br />
        {showQuestion === true && AllQuestions.length > 0 ? (
          <div>
            {AllQuestions.map((que, index) => (
              <div
                style={{
                  border: "1px solid black",
                  padding: "20px",
                  marginBottom: "20px",
                }}
                key={index}
              >
                <input
                  type="text"
                  placeholder="Question Title"
                  value={que.que}
                  onChange={this.handleChange}
                  name="question"
                ></input>
                <br />
                <br />
                <input
                  type="number"
                  placeholder="Score"
                  value={que.score}
                  onChange={this.handleChange}
                  name="score"
                ></input>
                <br />
                <br />
                <div>
                  {que.showOptions && NoOfOptions.length > 0 ? (
                    <div>
                      {NoOfOptions.map((opt) => (
                        <div>
                          <input type="text" placeholder="Enter Option"></input>
                          <br />
                          <br />
                        </div>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  style={{
                    float: "right",
                    paddingTop: "25px",
                    paddingRight: "20px",
                  }}
                >
                  <button
                    className="btn btn-primary"
                    onClick={() => this.handleOption(index)}
                  >
                    Add Option
                  </button>
                </div>
                <div>
                  <br />
                  <button onClick={this.set}>Set</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Quizz;

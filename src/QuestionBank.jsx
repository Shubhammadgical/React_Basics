import React from "react";
import http from "./httpService";
class Quizz extends React.Component {
  state = {
    AllQuestions: [],
    totalScore: 0,
    tamplate: {
      question: "",
      score: "",
      options: [],
      showOptions: false,
    },
    index: -1,
    optIndex: -1,
    error: "",
  };
  handleQues = () => {
    let s1 = this.state;
    s1.showQuestion = true;
    let NewTemplate = {
      que: "",
      score: "",
      option: [{ opt: "" }, { opt: "" }, { opt: "" }, { opt: "" }],

      NoOfOptions: [],
    };
    if (s1.totalScore < 20 && s1.error === "") {
      s1.AllQuestions.push(NewTemplate);
    } else {
      s1.error = "Total score is greater than or equal than 20";
    }
    this.setState(s1);
  };
  handleChange = (e) => {
    let s1 = this.state;
    if (e.currentTarget.name === "question") {
      s1.AllQuestions[s1.index].que = e.currentTarget.value;
    }
    if (e.currentTarget.name === "score") {
      s1.AllQuestions[s1.index].score = e.currentTarget.value;
    }
    if (e.currentTarget.name === "option") {
      s1.AllQuestions[s1.index].option[s1.optIndex].opt = e.currentTarget.value;
    }
    this.setState(s1);
  };
  set = () => {
    let s1 = this.state;
    s1.totalScore = 0;
    let total = 0;
    if (s1.AllQuestions.length > 0) {
      for (let i = 0; i < s1.AllQuestions.length; i++) {
        total = total + +s1.AllQuestions[i].score;
        console.log(total);
        if (s1.totalScore + +s1.AllQuestions[i].score <= 20) {
          s1.totalScore = s1.totalScore + +s1.AllQuestions[i].score;
          s1.error = "";
        }
        if (total > 20) {
          s1.error = "Total score is greater than or equal than 20";
        }
      }
    }
    this.setState(s1);
  };
  handleOption = (index) => {
    let s1 = this.state;
    s1.AllQuestions[index].showOptions = true;
    if (s1.AllQuestions[index].NoOfOptions.length < 4) {
      s1.AllQuestions[index].NoOfOptions.push(1);
    }
    this.setState(s1);
  };

  handleIndex = (index, optindex) => {
    let s1 = this.state;
    s1.index = index;
    s1.optIndex = optindex;
    this.setState(s1);
  };
  async componentDidMount() {
    let response = await http.get("/svr/questions");
    let s1 = this.state;
    s1.AllQuestions = response.data;
    let total = 0;
    for (let i = 0; i < s1.AllQuestions.length; i++) {
      total = total + +s1.AllQuestions[i].score;
    }
    if (total > 20) {
      s1.error = "Total score is greater than or equal than 20";
    } else {
      s1.error = "";
    }
    if (total > 20) {
      s1.error = "Total score is greater than or equal than 20";
    }
    s1.totalScore = total;
    this.setState(s1);
  }
  render() {
    let { totalScore, AllQuestions, error } = this.state;
    return (
      <div style={{ padding: "20px" }}>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            height: "100px",
          }}
        >
          <h3>World Quiz</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
            }}
          >
            <span style={{ paddingTop: "8px", paddingRight: "10px" }}>
              Total Score : {totalScore}
            </span>
            <button className="btn btn-primary" onClick={this.handleQues}>
              Add Question
            </button>
          </div>
        </div>
        <div style={{ color: "red", textAlign: "center" }}>
          {error ? <span>{error}</span> : <br />}
        </div>

        <br />
        {AllQuestions.length > 0 ? (
          <div>
            {AllQuestions.map((que, index) => (
              <div
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  marginBottom: "20px",
                }}
                key={index}
              >
                <input
                  type="text"
                  placeholder="Question Title"
                  value={que.que}
                  onChange={this.handleChange}
                  onMouseOver={() => this.handleIndex(index)}
                  name="question"
                ></input>
                <br />
                <br />
                <input
                  type="number"
                  placeholder="Score"
                  value={que.score}
                  onChange={this.handleChange}
                  onMouseOver={() => this.handleIndex(index)}
                  name="score"
                ></input>
                <br />
                <br />
                <div>
                  {que.NoOfOptions.length > 0 ? (
                    <div>
                      {que.NoOfOptions.map((opt, optindex) => (
                        <div key={optindex}>
                          <input
                            type="text"
                            onMouseOver={() =>
                              this.handleIndex(index, optindex)
                            }
                            onChange={this.handleChange}
                            placeholder="Enter Option"
                            name="option"
                            value={que.option[optindex].opt}
                          ></input>
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
                  <button className="btn btn-success" onClick={this.set}>
                    Set Score
                  </button>
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

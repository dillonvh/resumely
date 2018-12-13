import React from "react";

const itemStyle = {
  fontSize: '1.5rem',
  padding: '30%',
};

const inputStyle = {
  backgroundColor: '#0D0630',
  color: '#E6F9AF',
  borderStyle: 'none none solid none',
  borderColor: '#E6F9AF',
  outline: 'none',
  marginLeft: '5pt',
}

const buttonStyling = {
  backgroundColor:'#E6F9AF', 
  color: '#0D0630', 
  borderStyle: 'none',
  borderRadius: '10%',
  outline: 'none',
  marginTop: '5pt,',
  cursor: 'pointer'
}

function getQuestions() {
  let questions = [];
  questions.push(
    <div className="Question" key={0} style={itemStyle}>
      What is your name?
      <br />
      <input autoFocus type="text" style={inputStyle}/>
      <br />
      <button onClick={() => this.props.scroll(0)} style={buttonStyling}>Scroll</button>
    </div>
  );
  // user should be able to click to add or subtract fields
  // and reorder
  questions.push(
    <div className="Question" key={1} style={itemStyle}>
      Contact Information:
      <br />
      <label>
        Phone: <input type="text"  style={inputStyle}/>
      </label>
      <br />
      <label>
        Email: <input type="text"  style={inputStyle}/>
      </label>
      <br />
      <label>
        LinkedIn: <input type="text"  style={inputStyle}/>
      </label>
      <br />
      <label>
        GitHub: <input type="text"  style={inputStyle}/>
      </label>
      <br />
      <label>
        Website: <input type="text"  style={inputStyle}/>
      </label>
      <br />
      <button onClick={() => this.props.scroll(1)} style={buttonStyling}>Scroll</button>
    </div>
  );
  // user should be able to add more college options
  questions.push(
    <div className="Question" key={2} style={itemStyle}>
      What college did you go to?
      <br />
      <input type="text"  style={inputStyle}/>
      <br />
      <br />
      <label>
        GPA: <input type="text"  style={inputStyle}/>
      </label>
      <br />
      <label>
        Graduation Date: <input type="text"  style={inputStyle}/>
      </label>
      <br />
      <label>
        Major: <input type="text"  style={inputStyle}/>
      </label>
      <br />
      <label>
        Minor: <input type="text"  style={inputStyle}/>
      </label>
      <br />
      <button onClick={() => this.props.scroll(2)} style={buttonStyling}>Scroll</button>
    </div>
  );
    // user should be able to add more courses and subtract them
    questions.push(
      <div className="Question" key={3} style={itemStyle}>
        What courses did you take that are relevant to the position?
        <br />
        <br />
        <label>
          Course 1: <input type="text"  style={inputStyle}/>
        </label>
        <br />
        <label>
          Course 2: <input type="text"  style={inputStyle}/>
        </label>
        <br />
        <label>
          Course 3: <input type="text"  style={inputStyle}/>
        </label>
        <br />
        <button onClick={() => this.props.scroll(3)} style={buttonStyling}>Scroll</button>
      </div>
    );
    // user should be able to add more courses and subtract them
    questions.push(
      <div className="Question" key={4} style={itemStyle}>
        What courses did you take that are relevant to the position?
        <br />
        <br />
        <label>
          Course 1: <input type="text"  style={inputStyle}/>
        </label>
        <br />
        <label>
          Course 2: <input type="text"  style={inputStyle}/>
        </label>
        <br />
        <label>
          Course 3: <input type="text"  style={inputStyle}/>
        </label>
        <br />
        <button onClick={() => this.props.scroll(4)} style={buttonStyling}>Scroll</button>
      </div>
    );
    // user should be able to add more courses and subtract them
    questions.push(
      <div className="Question" key={5} style={itemStyle}>
        Being bilingual is highly marketable? Do you know any other languages?
        <input type="text"  style={inputStyle}/>
        <br />
        <button onClick={() => this.props.scroll(5)} style={buttonStyling}>Scroll</button>
      </div>
    );
    questions.push(
      <div className="Question" key={6} style={itemStyle}>
        Were you in any clubs or societies?
        <input type="text"  style={inputStyle}/>
        <br />
        <button onClick={() => this.props.scroll(6)} style={buttonStyling}>Scroll</button>
      </div>
    );
    questions.push(
      <div className="Question" key={7} style={itemStyle}>
        Here are the clubs and societies you said you were in:
        <br />
        Did you have any leadership positions within them?
        <br />
        {//radio button yes/no for each
        }
        <input type="text"  style={inputStyle}/>
        <br />
        Great! What were your responsibilities?
        <br />
        <input type="text"  style={inputStyle}/>
        <br />
        <button onClick={() => this.props.scroll(7)} style={buttonStyling}>Scroll</button>
      </div>
    );
    questions.push(
      <div className="Question" key={8} style={itemStyle}>
        Let's talk about what technologies you have experience working with.
        <br />
        What programming or markup languages do you know?
        <br />
        <input type="text"  style={inputStyle}/>
        <br />
        What frameworks and libraries are you familiar with?
        <br />
        <input type="text"  style={inputStyle}/>
        <br />
        What databases have you worked with?
        <br />
        <input type="text"  style={inputStyle}/>
        <br />
        What other tools have you worked with?
        <br />
        <input type="text"  style={inputStyle}/>
        <br />
        Finally, what platforms are you familiar with?
        <br />
        <input type="text"  style={inputStyle}/>
        <br />
        <button onClick={() => this.props.scroll(8)} style={buttonStyling}>Scroll</button>
      </div>
    );
    questions.push(
      <div className="Question" key={9} style={itemStyle}>
        What awards have you won?
        <br />
        <input type="text"  style={inputStyle}/>
        <br />
        <button onClick={() => this.props.scroll(9)} style={buttonStyling}>Scroll</button>
      </div>
    );
    questions.push(
      <div className="Question" key={10} style={itemStyle}>
        Have you contributed to any open source projects?
        <br />
        <input type="text"  style={inputStyle}/>
        <br />
        <button onClick={() => this.props.scroll(10)} style={buttonStyling}>Scroll</button>
      </div>
    );
    questions.push(
      <div className="Question" key={11} style={itemStyle}>
        Now let's talk about your portfolio. What projects do you want to talk about?
        <br />
        <input type="text"  style={inputStyle}/>
        <br />
        <button onClick={() => this.props.scroll(11)} style={buttonStyling}>Scroll</button>
      </div>
    );
    questions.push(
      <div className="Question" key={12} style={itemStyle}>
        Here are the projects you said you wanted to talk about:
        <br />
        What was the project about?
        <input type="text"  style={inputStyle}/>
        <br />
        <button onClick={() => this.props.scroll(12)} style={buttonStyling}>Scroll</button>
      </div>
    );
    questions.push(
      <div className="Question" key={13} style={itemStyle}>
        Where have you worked in the past?
        <br />
        <label>
          Position Title: <input type="text"  style={inputStyle}/>
        </label>
        <br />
        <label>
          Responsibilities: <input type="text"  style={inputStyle}/>
        </label>
        <br />
        <button onClick={() => this.props.scroll(13)} style={buttonStyling}>Scroll</button>
      </div>
    );
  return questions;
}

export default getQuestions;

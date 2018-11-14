import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      {
        // TASK 1
        // The props "className" and "style" are passed to the Heading1
        // function. //Update the function so it applies the className and style
        // props to the h1 element.
        // bonus
        // The Heading1 function should not allow the style object to update the color. Remove color from style before
        // adding the other styles to h1
      }
      <Heading1
        className="custom-heading"
        style={{ textDecoration: "underline", color: "blue" }}
        title="React Test"
      />
      <p>
        Tasks are listed in the App Function. You should not make any changes to
        the App Function. But can make any changes you need to the code outside
        of App, including adding new components.
      </p>
      <p>
        After you complete as much of this test as you can. Please ensure you
        have saved your work. Then send us the Editor Url from the share menu.
        Or fork the project to your own git hub account and send the github url.
        If you do not use git, please ensure you have a copy on your computer of
        this file in case something goes wrong.
      </p>
      {
        // TASK 2
        // The following call to MyTable should produce the same table as below.
        // bonus
        // The table should be sortable by clicking on the column headings
        // The table rows should be the same color as shown in the first column
      }
      <MyTable
        data={[
          ["blue", "A", 10, 20],
          ["green", "1", 30, 5],
          ["red", "A1", 10, 30]
        ]}
      />
      <pre>
        <table>
          <thead>
            <th>Color</th>
            <th>Make</th>
            <th>Height</th>
            <th>Width</th>
          </thead>
          <tbody>
            <tr>
              <td>blue</td>
              <td>A</td>
              <td>10</td>
              <td>20</td>
            </tr>
            <tr>
              <td>green</td>
              <td>1</td>
              <td>30</td>
              <td>5</td>
            </tr>
            <tr>
              <td>red</td>
              <td>A1</td>
              <td>10</td>
              <td>30</td>
            </tr>
            <tr>
              <td>TOTAL</td>
              <td />
              <td>50</td>
              <td>55</td>
            </tr>
          </tbody>
        </table>
      </pre>
      {
        // TASK 3
        // The following calls to MyTable2 should produce the same table as in
        // Task 2. You can assume that it will only ever be passed data in
        // these 2 formats
      }
      <MyTable2
        data={[
          { color: "blue", make: "A", height: 10, width: 20 },
          { color: "green", make: "1", height: 30, width: 5 },
          { color: "red", make: "A1", height: 10, width: 30 }
        ]}
      />
      <MyTable2
        data={{
          blue: { make: "A", height: 10, width: 20 },
          green: { make: "1", height: 30, width: 5 },
          red: { make: "A1", height: 10, width: 30 }
        }}
      />
      {
        // TASK 4
        // Complete the books component. It should use the api from
        // http://www.penguinrandomhouse.biz/webservices/rest/
        // to allow a user to search for an author.
        // The component is set up to render state at the moment. So if your
        // search works the state should be updated.
        // bonus
        // Format the retuned data. Do not spend too long on this.
      }
      <Books />
    </div>
  );
}

class Books extends React.Component {
  state = { value: "", data: {} };

  search = title => {
    // fetch the data here, e.g. https://reststop.randomhouse.com/resources/authors?lastName=
    // then update the data property in state with the results
  };

  handleSubmit = event => {
    this.search(this.state.value);
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

function Heading1(props) {
  return <h1>{props.title}</h1>;
}

function MyTable(props) {
  return <pre>*** This should be the same table as below ***</pre>;
}

function MyTable2(props) {
  return <pre>*** This should be the same as the table made in Task 2 ***</pre>;
}

async function fetchAsync() {
  let data = await (await fetch("https://api.github.com")).json();
  return data;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

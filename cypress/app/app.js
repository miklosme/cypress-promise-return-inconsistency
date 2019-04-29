import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="app">
        <table>
          <tr>
            <th>Foo</th>
            <th>Bar</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>aaa</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>bbb</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>ccc</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Editor />
        <Preview />
      </div>
    );
  }
}

class Editor extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
        <div className="editorClass">
          <Toolbar title="Editor" clase="fas fa-code"/>
          <textarea id="editor" type="text"></textarea>
        </div>
    );
  }
}

class Preview extends Component {
  constructor(props){
    super(props)
  }
  render (){
    return (
        <div className="previewClass">
          <Toolbar title="Vista previa" clase="far fa-eye"/>
          <textarea id="editor" type="text" disabled="true"></textarea>
        </div>
    );
  }
}

class Toolbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: props.title,
      clase: props.clase
    }
  }
  render(){
    return (
        <div className="toolbar">
          <i className={this.state.clase}></i>
          <span className="title">{this.state.title}</span>
          <span className="max-icon"><i className="fas fa-expand-arrows-alt"></i></span>
        </div>
    );
  }
}

export default App;

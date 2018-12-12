import React, { Component } from 'react';
import './App.css';

var myMarked = require('marked'); //Libreria para poder realizar el renderizado a HTML

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

const renderer = new myMarked.Renderer();

class App extends Component {
  constructor(props){
     super(props);
     this.state = {
         markdown: placeholder
     };
     this.handleMarkdownChange = this.handleMarkdownChange.bind(this);
  }

  handleMarkdownChange(event){
      this.setState({
          markdown: event.target.value
      });
  }

  render() {
    return (
      <div className="App">
        <Editor markdown={this.state.markdown} onChange={this.handleMarkdownChange}/>
        <Preview markdown={this.state.markdown}/>
      </div>
    );
  }
}

const Editor = (props) => {
    return (
        <div className="editorClass">
          <Toolbar title="Editor" clase="fas fa-code"/>
          <textarea id="editor" type="text" value={props.markdown} onChange={props.onChange} spellCheck="false"/>
        </div>
    );
};

const Preview = (props) => {
    return (
       <div className="previewClass">
         <Toolbar title="Vista previa" clase="far fa-eye"/>
         <div className="preview-style" dangerouslySetInnerHTML={{__html: myMarked(props.markdown, { renderer: renderer })}}></div>
       </div>
    );
};

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
          <i className={this.state.clase}/>
          <span className="title">{this.state.title}</span>
          <span className="max-icon"><i className="fas fa-expand-arrows-alt"/></span>
        </div>
    );
  }
}

export default App;

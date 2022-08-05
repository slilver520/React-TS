import * as React from 'react';
import { Component } from 'react';

class WordRelayClass extends Component {
  state = {
    word: '사과',
    value: '',
    result: '',
  };

  onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const input = this.input;
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: '딩동댕',
        word: this.state.value,
        value: '',
      });
      if (input) {
        input.focus();
      }
    } else {
      this.setState({
        result: '땡',
        value: '',
      });
      if (input) {
        input.focus();
      }
    }
  };

  onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.currentTarget.value });
  };

  input: HTMLInputElement | null = null; // this.input을 생성

  onRefInput = (c: HTMLInputElement) => {
    this.input = c;
  };

  render() {
    return (
      <>
        <h1>끝말잇기</h1>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
          <button>클릭</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

export default WordRelayClass;
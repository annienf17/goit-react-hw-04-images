import React, { Component } from 'react';
import { Puff } from  'react-loader-spinner'

export class Loader extends Component {
  render() {
    return <div>
<Puff
  height="80"
  width="80"
  radius={1}
  color="#4fa94d"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>;
  }
}
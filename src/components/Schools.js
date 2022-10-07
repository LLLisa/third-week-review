import React from 'react';

class Schools extends React.Component {
  render() {
    const { schoolList } = this.props;
    return (
      <div>
        <h3>List of Schools</h3>
        <ul>
          {schoolList.map((school) => {
            return <li key={school.id}>{school.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Schools;

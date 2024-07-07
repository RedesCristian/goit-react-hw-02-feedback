import React from 'react';
import SectionTitle from './SectionTitle';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
        backgroundColor: 'lightgrey',
        paddingLeft: '120px',
        margin: '0',
      }}
    >
      <SectionTitle />
    </div>
  );
};
export default App;

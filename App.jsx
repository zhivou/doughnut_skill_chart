import React, {Component, lazy, Suspense } from 'react';

const SkillsContainer = React.lazy(() => import('SkillsContainer'));

class App extends Component {
  render(){
    return(
        <Suspense fallback={<div>Loading...</div>}>
          <SkillsContainer/>
        </Suspense>
    )
  }
}

export default App;

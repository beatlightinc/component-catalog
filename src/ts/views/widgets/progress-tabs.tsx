import * as React from 'react';
import * as classnames from 'classnames';

const ProgressTabs = (props: {
  currentTab?: number,
  tabNames: string[]

  tabOnClick?: (step: number) => void;
}) => {
  const {
    currentTab,
    tabNames,
    tabOnClick
  } = props;

  const tabElements = [];
  for (let i = 0; i < tabNames.length; i++) {
    const tabClass = classnames("tab", {
      "active": i === currentTab,
      "clickable": i != currentTab,
    });
    tabElements.push(
      <div
        className={tabClass}
        key={i}
        onClick={i === currentTab ? null : ()=>tabOnClick(i)}
      >
        {`${tabNames[i].toUpperCase()}`}
      </div>
    );
  };

  return (
    <div className="progress-tabs-wrapper">
      { tabElements }
    </div>
  )
}

export default ProgressTabs;

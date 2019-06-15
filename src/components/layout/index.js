import React, { Fragment, useState } from 'react';

import LoadingIndicator from '../LoadingIndicator';

const Wrapper = ({ children }) => (
  <div style={{ background: '#eee', padding: 10, width: '100%' }}>
    {children}
  </div>
);

const TextInput = ({ task, setTask, saveTask }) => {
  const onChange = e => {
    setTask(e.target.value);
  };

  const onClick = () => {
    saveTask();
  };

  return (
    <div>
      <input type="text" value={task} onChange={onChange} />
      <button onClick={onClick}>Save</button>
    </div>
  );
};

const List = ({ list }) => (
  <ul>{/* list.map((value) => (<li>{value}</li>) */}</ul>
);

const Counter = ({ count, setCount }) => {
  const onClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export const Layout = ({ children, isLoading }) => {
  const [task, setTask] = useState('');
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);

  const saveTask = t => {
    console.log(task);
    list.push(task);
    console.log(list);
  };

  return <Wrapper>{children}</Wrapper>;
};

// export default Layout;

var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className='text-center'>About</h1>
      <p>This is a weather application built on React. This was built for a React Web App Developer Course</p>
      <p>Here are some of the tools used:</p>
      <ul>
        <li>
          <a href='https://facebook.github.io/react'>React </a> - This was the Javascript framework
        </li>
        <li>
          <a href='http://openweathermap.org'>Open weather Map</a> - This was the weather API used
        </li>
      </ul>
    </div>
  );
};

module.exports = About;

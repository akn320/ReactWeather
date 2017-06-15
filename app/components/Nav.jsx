var React = require('react');
var {Link} = require('react-router-dom');
var createReactClass = require('create-react-class');


var Nav = createReactClass({
  onSearch: function(e) {
    e.preventDefault();
    var location = this.refs.city.value;
    var encodedLocation = encodeURIComponent(location);
    if (location.length > 0){
      this.refs.city.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Weather App</li>
            <li>
              <Link to='/'>Get Weather</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/examples'>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className='menu'>
              <li>
                <input type="search" ref='city' placeholder='Search Weather by city'/>
              </li>
              <li>
                <input type="submit" className='button' value='Get Weather'/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;

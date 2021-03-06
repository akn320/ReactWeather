var React = require('react');
var createReactClass = require('create-react-class');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage')
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = createReactClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function(e){
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount() {
    var location = this.props.location.search.split('=')[1];
    if(location && location.length > 0) {
      this.handleSearch(location);
      //window.location.hash = '#/';
    }
  },
  componentWillReceiveProps(newProps) {
    var location = decodeURIComponent(newProps.location.search).split('=')[1]

    if(location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function() {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className='text-center'>Fetching weather...</h3>;
      } else if(temp && location){
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError(){
      if (typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className='text-center page-title'>Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;

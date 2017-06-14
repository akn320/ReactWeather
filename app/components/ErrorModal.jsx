var React = require('react');
var createReactClass = require('create-react-class');
var propTypes = require('prop-types');

var ErrorModal = createReactClass({
  getDefaultProps: function(){
    return {
      title: 'Error'
    };
  },
  propTypes: {
    title: propTypes.string,
    message: propTypes.string.isRequired
  },
  componentDidMount(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){
    var {title, message} = this.props;
    return(
      <div id='error-modal' className='reveal tiny text-center' data-reveal="">
          <h4>{title}</h4>
          <p>{message}</p>
          <p>
            <button className="button hollow" data-close="">
              Okay
            </button>
          </p>
      </div>
    );
  }
});

module.exports = ErrorModal;

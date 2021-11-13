import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class Clock extends Component {
   constructor(props) {
      super(props);
      this.id = props.id;
      this.name = props.name;
      this.timeZone = Number(props.timeZone);
      this.state = {
         time: moment().utcOffset(this.timeZone).format('HH:mm:ss'),
      };
   }

   componentDidMount() {
      this.interval = setInterval(() => this.tick(), 100);
   }

   componentWillUnmount() {
      clearInterval(this.interval);
   }

   tick() {
      this.setState({
         time: moment().utcOffset(this.timeZone).format('HH:mm:ss'),
      });
   }

   render() {
      const { onDelete } = this.props;
      const { time } = this.state;
      return (
         <div className="clock">
            <div className="clock_title">{this.name}:</div>
            <div className="clock_time">{time}</div>
            <button className="clock_remove" type="button" onClick={onDelete}>
               &times;
            </button>
         </div>
      );
   }
}

Clock.propTypes = {
   name: PropTypes.string.isRequired,
   timeZone: PropTypes.number.isRequired,
   onDelete: PropTypes.func.isRequired,
   id: PropTypes.string.isRequired,
};

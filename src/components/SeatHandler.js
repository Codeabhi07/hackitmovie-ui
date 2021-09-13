import React, { Component } from "react";
import SeatPicker from "react-seat-picker";
import styled from "styled-components";
import "../css/SeatHandler.css";
export default class App extends Component {
  addSeatCallback = ({ row, number, id }, addCb) => {
    this.props.setSelected((prevItems) => [...prevItems, number]);
    addCb(row, number, id);
  };

  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.props.setSelected((list) => list.filter((item) => item !== number));
    removeCb(row, number);
  };

  render() {
    const Seat = styled.div`
      height: 25px;
      width: 25px;
      border-radius: 8px;
      margin: 3px;
    `;

    return (
      <div className="App">
        <div className="headerKey">
        <div className="showKey"><h4>SHOW : {this.props.showid}</h4></div>
        <div className="seatingKey">
          <Seat className="seat" />
          <div>Available</div>
          <Seat className="seat--reserved" />
          <div>Unavailable</div>
          <Seat className="seat--selected" />
          <div>Selected</div>
        </div>
        </div>
        <div className="screen">SCREEN 1</div>
        <SeatPicker
          addSeatCallback={this.addSeatCallback.bind(this)}
          removeSeatCallback={this.removeSeatCallback.bind(this)}
          rows={this.props.rows}
          alpha
          maxReservableSeats={10}
          visible
        />
      </div>
    );
  }
}

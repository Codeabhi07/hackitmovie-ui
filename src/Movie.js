import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SeatHandler from "./components/SeatHandler";
import Modal from "./components/ConfirmationModal";
import axios from "axios";
import Loading from "./components/Loading";
import { NotificationManager } from 'react-notifications';
import {
  Outer,
  Background,
  Container,
  LeftContainer,
  Poster,
  BlankSpace,
  RightContainer,
  Text,
  Footer
} from "./utils/StyledDivs";


export default function Movie() {

  const [showid,setShowid] = useState(1);
  const [selected, setSelected] = useState([]);
  const [show, setShow] = useState(false);
  const [seatdata, setSeatData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reload,setReload]=useState(false);
  const [bookingId,setBookingId]=useState(0);

  const AppURL="https://hackitmovie.herokuapp.com";
  const showsData=[{showId:1,showTime:'09:15 AM'},
  {showId:2,showTime:'12:15 PM'},
  {showId:3,showTime:'03:15 PM'},
  {showId:4,showTime:'06:15 PM'}];
  
  const handleShow = (e) => {
      setShowid(e.target.id);
      setReload(()=> !reload);
  };
  
  const handleOpen = () => {
    const json=JSON.stringify(selected);
    const url=`${AppURL}/api/v1/createBooking`;
    const config = {
      headers: { 'showid': showid,
                'Content-Type' : 'application/json' }
       };
       axios
           .post(url, json, config)
           .then((response) => {
             setBookingId(response.data);
             console.log(response.data);
             setShow(true);
           })
           .catch((error) => {
             console.log(error);
           });
  };

  const handleClose = () => {
    setShow(false);
    setSelected([]);
    setBookingId(null);
    setTimeout(() => {
    setIsLoading(false);
    }, 2000);
    setReload(()=> !reload);
  };
  
  const handleCancel = () => {

    const url = `${AppURL}/api/v1/cancelBooking`;
    const config = {
      headers: { 'bookingid': bookingId }
       };
       axios
           .get(url,config)
           .then((response) => {
             console.log(response);
             handleClose();
           })
           .catch((error) => {
             console.log(error);
           });           
  };

  useEffect(() => {
    setIsLoading(true);
    const Url = `${AppURL}/api/v1/getAllSeats/${showid}`;

    axios
      .get(Url)
      .then((response) => {
        setSeatData(response.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reload]);

  return (
    <Outer>
      <Background url="https://image.tmdb.org/t/p/w780/nDLylQOoIazGyYuWhk21Yww5FCb.jpg" />
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <LeftContainer>
            <Poster src="https://image.tmdb.org/t/p/w780/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg" />
            <Text>Shang-Chi Legend of the Ten Rings</Text>
            <Text>
              <span>
                <h6>Available Shows</h6>
              </span>
              <div className="shows">
              {showsData.map(
                (item,i) => (<button key={i} id={item.showId} className="mt-2 mb-2 btn btn-small btn-outline-danger" onClick={handleShow}>
                {item.showTime}
              </button> ))}
              </div>
            </Text>
          </LeftContainer>
          <BlankSpace />
          <RightContainer>
            <SeatHandler rows={seatdata} setSelected={setSelected} showid={showid}/>
            {selected[0] && (
              <Footer>
                <span>
                  SELECTED : <h4>{selected.toString()}</h4>
                </span>
                <button className="btn btn-warning" onClick={handleOpen}>
                  Continue
                </button>
              </Footer>
            )}
          </RightContainer>
          <Modal show={show} onClose={handleClose} onCancel={handleCancel} id={bookingId} setIsLoading={setIsLoading}/>
        </Container>
      )}
    </Outer>
  );
}

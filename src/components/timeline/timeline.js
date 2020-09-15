import React, {useState} from "react";
import "../../css/timeline.scss";

export const Timeline = () => {

  let dates = ["6/12/2015", "7/13/2015", "8/15/2015", "10/22/2015", "11/2/2015", "12/22/2015"];
  let times = ["12:00 AM", "6:13 AM", "9:19 AM", "12:01 PM", "5:47 PM", "11:56 PM"];
  let monthSpan = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let [hovers, setHovers] = useState([false, false, false, false, false, false]);

//Format MM/DD/YYYY into string
  const dateSpan = (date) => {
    let month = date.split('/')[0];
    month = monthSpan[month - 1];
    let day = date.split('/')[1];
    if (day.charAt(0) == '0') {
      day = day.charAt(1);
    }
    let year = date.split('/')[2];

    //Spit it out!
    return month + " " + day + ", " + year;
  }

  const timeSpan = (time) => {
    return time;
  }

  const getTimeRelativeInt = (time) => {
    let totalMinutes = 1440;
    let relativeMinutes = 0;
    let [timeField, AMorPM] = time.split(" ");
    if (AMorPM === "PM") {
      relativeMinutes += 720;
    }
    let [hour, minutes] = timeField.split(":");
    if (hour === "12") {
      hour = "0";
    }
    relativeMinutes += (parseInt(hour) * 60 + parseInt(minutes));
    return relativeMinutes/totalMinutes;
  }

  // $(".circle").click(function () {
  //   let spanNum = $(this).attr("id");
  //   selectDate(spanNum);
  // });

  // const selectDate = (selector) => {
  //   $selector = "#" + selector;
  //   $spanSelector = $selector.replace("circle", "span");
  //   let current = $selector.replace("circle", "");
  //
  //   $(".active").removeClass("active");
  //   $($selector).addClass("active");
  //
  //   if ($($spanSelector).hasClass("right")) {
  //     $(".center").removeClass("center").addClass("left")
  //     $($spanSelector).addClass("center");
  //     $($spanSelector).removeClass("right")
  //   } else if ($($spanSelector).hasClass("left")) {
  //     $(".center").removeClass("center").addClass("right");
  //     $($spanSelector).addClass("center");
  //     $($spanSelector).removeClass("left");
  //   };
  // };


  const onMouseEnter = (index) => {
    let tempHovers = [...hovers];
    tempHovers[index] = !tempHovers[index];
    setHovers(tempHovers);
  }


  const getCircles = () => {
    let first = dates[0];
    let last = dates[dates.length - 1];

    let firstMonth = parseInt(first.split('/')[0]);
    let firstDay = parseInt(first.split('/')[1]);

    let lastMonth = parseInt(last.split('/')[0]);
    let lastDay = parseInt(last.split('/')[1]);

    let lastInt = ((lastMonth - firstMonth) * 30) + (lastDay - firstDay);


    return times.map((date, index) => {
      let thisMonth = parseInt(date.split('/')[0]);
      let thisDay = parseInt(date.split('/')[1]);

      //Integer representation of the date
      let thisInt = ((thisMonth - firstMonth) * 30) + (thisDay - firstDay);

      //Integer relative to the first and last dates
      // let relativeInt = thisInt / lastInt;
      let relativeInt = getTimeRelativeInt(date);
      // if (index === 0) {
      //   relativeInt = 0;
      // }
      //
      // if (index === dates.length - 1) {
      //   relativeInt = 0.99;
      // }

      let classNames = "circle";
      if (hovers[index]) {
        classNames += " hover";
      }

      //Draw the date circle
      return (
        <div className={classNames} id={"circle" + (index)} style={{left: relativeInt * 100 + "%"}} key={index}
             onMouseEnter={() => onMouseEnter(index)} onMouseLeave={() => onMouseEnter(index)}>
          <div className="popupSpan">{timeSpan(times[index])}</div>
        </div>
      )

    })
  }

  const getFirstContent = () => {
    return (
      <span id="span0" className="center">{dateSpan(dates[0])}</span>
    )
  }

  const getLastContent = () => {
    return (
      <span id={"span" + (dates.length - 1)} className="right">{dateSpan(dates[dates.length - 1])}</span>
    )
  }

  const getMiddleContent = () => {
    return dates.map((date, index) => {
      if (index === 0 || index === dates.length - 1) {
        return '';
      }
      return (
        <span id={"span" + index} className="right" key={index}>{dateSpan(date)}</span>
      )
    })
  }

  return (
    <div style={{marginTop: "100px"}}>
      <div id="lineCont">
        <div id="line">
          {getCircles()}
        </div>
        <div id="span">Date Placeholder</div>
      </div>
      {/*<div id="mainCont">*/}
      {/*  {getFirstContent()}*/}
      {/*  {getMiddleContent()}*/}
      {/*  {getLastContent()}*/}
      {/*</div>*/}
    </div>
  )
}
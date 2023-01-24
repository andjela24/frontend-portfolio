//Prvobitan kod. Greska je verovatno sto nije koriscen EventListener
/*document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("image-track");

  document.onmousedown = (e) => {
    track.dataset.mouseDownAt = e.clientx;
  };

  document.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
  };

  document.onmousemove = (e) => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientx,
      maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;

    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    nextPercentage = Math.min(Math.max(nextPercentage, -100), 0);
    //Math.min(nextPercentage, 0);
    //Math.max(nextPercentage, -100);

    track.dataset.percentage = nextPercentage;

    console.log("persentage", percentage);
    console.log("next persentage", nextPercentage);

    track.animate(
      [
        {
          transform: "translate(${nextPercentage}%, -50%)",
        },
      ],
      { duration: 1200, fill: "forwards" }
    );
    for (const image of track.getElementsByClassName("card-image")) {
      image.animate(
        {
          objectPosition: "${100 + nextPercentage}% center",
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };
});
*/

//Using animate function
/*
document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("image-track");

  document.addEventListener("mousedown", (e) => {
    track.dataset.mouseDownAt = e.clientX;
  });

  document.addEventListener("mouseup", (e) => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
  });

  document.addEventListener("mousemove", (e) => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = e.clientX - parseFloat(track.dataset.mouseDownAt),
      maxDelta = window.innerWidth / 2;

    let percentage = (mouseDelta / maxDelta) * 100;
    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    nextPercentage = Math.min(Math.max(nextPercentage, -100), 0);

    track.dataset.percentage = nextPercentage;

    track.animate(
      [
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
      ],
      { duration: 1200, fill: "forwards" }
    );
    for (const image of track.getElementsByClassName("card-image")) {
      image.animate(
        [
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
        ],
        { duration: 1200, fill: "forwards" }
      );
    }
  });
});
*/

//Without animate function
/*
document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("image-track");

  document.addEventListener("mousedown", (e) => {
    track.dataset.mouseDownAt = e.clientX;
  });

  document.addEventListener("mouseup", (e) => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
  });

  document.addEventListener("mousemove", (e) => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = e.clientX - parseFloat(track.dataset.mouseDownAt),
      maxDelta = window.innerWidth / 2;

    let percentage = (mouseDelta / maxDelta) * 100;
    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    nextPercentage = Math.min(Math.max(nextPercentage, -100), 0);

    track.dataset.percentage = nextPercentage;
    track.style.transform = `translate(${nextPercentage}%, -50%)`;
    for (const image of track.getElementsByClassName("card-image")) {
      image.style.objectPosition = `${100 + nextPercentage}% center`;
    }
  });
});
*/

//Function to use scrollwheel insted mouse without animate funtion
/*
document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("image-track");

  track.dataset.prevPercentage = 0;
  track.addEventListener("wheel", (e) => {
    e.preventDefault();
    let nextPercentage =
      parseFloat(track.dataset.prevPercentage) + e.deltaY / 10;
    nextPercentage = Math.min(Math.max(nextPercentage, -100), 0);
    track.dataset.prevPercentage = nextPercentage;
    track.style.transform = `translate(${nextPercentage}%, -50%)`;
    for (const image of track.getElementsByClassName("card-image")) {
      image.style.objectPosition = `${100 + nextPercentage}% center`;
    }
  });
});
*/

//Function to use scrollwheel insted mouse with animate funtion
//Only avaliabe on image-track
/*
document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("image-track");

  track.dataset.prevPercentage = 0;
  track.addEventListener("wheel", (e) => {
    e.preventDefault();
    let nextPercentage =
      parseFloat(track.dataset.prevPercentage) + e.deltaY / 10;
    nextPercentage = Math.min(Math.max(nextPercentage, -100), 0);
    track.dataset.prevPercentage = nextPercentage;

    track.animate(
      [
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
      ],
      { duration: 1200, fill: "forwards" }
    );
    for (const image of track.getElementsByClassName("card-image")) {
      image.animate(
        [
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
        ],
        { duration: 1200, fill: "forwards" }
      );
    }
  });
});
*/

//Function to use scrollwheel insted mouse with animate funtion
//Avaliabe on whole page
document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("image-track");

  document.addEventListener("wheel", (e) => {
    e.preventDefault();
    let nextPercentage =
      parseFloat(track.dataset.prevPercentage) + e.deltaY / 10;
    nextPercentage = Math.min(Math.max(nextPercentage, -100), 0);
    track.dataset.prevPercentage = nextPercentage;

    track.animate(
      [
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
      ],
      { duration: 1200, fill: "forwards" }
    );
    for (const image of track.getElementsByClassName("card-image")) {
      image.animate(
        [
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
        ],
        { duration: 1200, fill: "forwards" }
      );
    }
  });
});

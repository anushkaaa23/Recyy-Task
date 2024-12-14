function updateCountdown() {
    let thisInstant = Date.now(); 
    const newYear = new Date(2025, 0, 1); 
    let timeDifference = newYear - thisInstant; 

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const countdownElement = document.querySelector(".newYearCounter");
    countdownElement.innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;

    }
    
      
      setInterval(updateCountdown, 1000);
      updateCountdown();
      
      
      setInterval(updateCountdown, 1000); 
      updateCountdown();
      

    setInterval(updateCountdown, 1000);

    updateCountdown();
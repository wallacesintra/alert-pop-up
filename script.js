function customAlert() {
    // create a new div element for the custom alert
    const alertDiv = document.createElement("div");
  
    // set the text and styles for the custom alert
    // alertDiv.innerHTML = "This is a custom alert!";
    // alertDiv.style.position = "fixed";
    // alertDiv.style.top = "50%";
    // alertDiv.style.left = "50%";
    // alertDiv.style.transform = "translate(-50%, -50%)";
    // alertDiv.style.padding = "20px";
    // alertDiv.style.background = "#fff";
    // alertDiv.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.3)";
    // alertDiv.style.zIndex = "9999";

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Sintra';
    const p = document.createElement('p');
    p.innerHTML = 'ifiy ghig jgiog igig';
    const cancelBtn = document.createElement('i');
    cancelBtn.classList.add("fa" ,"fa-times");
    cancelBtn.addEventListener("click", function() {
       alertDiv.remove();
    });
    const a = document.createElement('a');
    a.appendChild(cancelBtn);

    const call = document.createElement('a');
    call.href = 'tel: 795123407';
    const callIcon = document.createElement('i');
    callIcon.classList.add('fa','fa-phone');
    call.appendChild(callIcon);

    alertDiv.appendChild(h1);
    alertDiv.appendChild(p);
    alertDiv.appendChild(a);
    alertDiv.appendChild(call);
    alertDiv.classList.add('alert');
    document.body.appendChild(alertDiv);

  // set a timer to remove the alert after 10 seconds
  // setTimeout(function() {
  //   alertDiv.remove();
  // }, 20000); // 10 seconds in milliseconds  

}

customAlert()

// const cancelBtn = document.getElementById('cancel');
// cancelBtn.onClick = cancel;

// function cancel() {
//   alertDiv.remove();
//   console.log("yfifi");
// }
  
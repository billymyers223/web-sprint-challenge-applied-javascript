//import { doc } from "prettier"

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const header = document.createElement('div');
  const Hdate = document.createElement('span');
  const Htitle = document.createElement('h1');
  const Htemp = document.createElement('temp');
  
  header.classList.add('header');
  Hdate.classList.add('date');
  Htemp.classList.add('temp');
  
  header.appendChild(Hdate);
  header.appendChild(Htitle);
  header.appendChild(Htemp);

  Hdate.textContent = date;
  Htitle.textContent= title;
  Htemp.textContent = temp;

return header;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  selector = document.querySelector('.header-container');
  selector.appendChild(Header('Billy Site','August 6th','Hi there and welcome!'));

}

export { Header, headerAppender }

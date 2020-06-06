show = false;
const iam = document.getElementById('i-am');

const showFindOutPanel = () => {

    if (!show) {
        show = !show;
         console.log(show);
        iam.classList.remove('slideout');
        iam.classList.add('slidein');
        iam.style.marginLeft = '0%';
        /* document.getElementById('i-am').style = "display: block !important;"; */
        
    } else {
        show = !show;
        console.log(show);
        /* document.getElementById('i-am').style ="display: none;"; */
        iam.classList.remove('slidein');
        iam.classList.add('slideout');
        iam.style.marginLeft = '100%';

    }

}




const options = {
     
};

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  var collapsibleElem = document.querySelector('.collapsible');
  var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);






/* iam.addEventListener("animationstart", listener, false);
iam.addEventListener("animationend", listener, false);
iam.addEventListener("animationiteration", listener, false); */
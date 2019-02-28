//- Stop school vid on close
function stopSchoolVid(vidSrc) {
  document.getElementsByClassName('school-video')[0].setAttribute('src', vidSrc)
};

//- Trigger events
async function doFormInputEvent( obj, name ) {
  try {
    var event = new Event( name, {target: obj, bubbles: true} );
    return obj ? obj.dispatchEvent(event) : false;
  }
  catch (e) {
    var event = document.createEvent('Event');
    event.initEvent(name, true, true);
    obj.dispatchEvent(event);
  }
}

//- onclick function for close form button
async function closeHsForm(formNode, formModalNode) {
  formNode.style.display = "none";
  formModalNode.style.display = "none";

  var formIframe = formNode.querySelector('iframe');
  var formIframeContent = (formIframe.contentWindow || formIframe.contentDocument).document;

  if (formIframeContent.querySelector('.submitted-message')) {
    location.reload();
  }
}

//- Show form on browser
async function showSchoolForm(interactionType, schoolName, courseName) {
  var form = document.querySelector(".hbspt-form");
  var formModal = document.querySelector('.school-forms-modal');
  var formIframe = form.querySelector('iframe');
  var formIframeContent = (formIframe.contentWindow || formIframe.contentDocument).document;
  var interactionInput = formIframeContent.querySelector('select[name="interaction_type"]');
  var schoolInput = formIframeContent.querySelector('input[name="school_name"]');
  var courseInput = formIframeContent.querySelector('input[name="course_name"]');

  //- Set values to input
  if (interactionInput && schoolInput && courseInput) {
    interactionInput.value = interactionType;
    schoolInput.value = schoolName;
    courseInput.value = courseName;

    //- Trigger these events so that the value will persist in the form
    ['change', 'input', 'blur'].forEach(function(event){
    doFormInputEvent(schoolInput, event);
    doFormInputEvent(courseInput, event);
    });
  }

  formModal.style.display = "block";
  form.style.display = "block";

  if (!form.querySelector('#hubspot-school-form-close-button')) {
    var formBtn = document.createElement("button");
    formBtn.innerHTML = '&times;';
    formBtn.setAttribute("id", "hubspot-school-form-close-button");
    formBtn.addEventListener("click", function(){
      closeHsForm(form, formModal);
    });
    form.appendChild(formBtn);
  }
};

//- Create School Form from Hubspot
async function createSchoolForm(interactionType, schoolName, courseName){
  hbspt.forms.create({
    portalId: '5513253',
    formId: '8b3c4267-7058-4ff9-a5cd-2eaf0b271b23',
    onFormReady: function() {
      showSchoolForm(interactionType, schoolName, courseName);
    }
  });
};

//- Allow clicking outside form modal content
window.onclick = function(event) {
  var clickTarget = event.target;
  var formModal = document.querySelector('.school-forms-modal');

  if (clickTarget == formModal) {
    var form = document.querySelector(".hbspt-form");
    var formIframe = form.querySelector('.hbspt-form iframe');
    var formIframeContent = (formIframe.contentWindow || formIframe.contentDocument).document;
    closeHsForm(form, formModal);
  }
};

//- Course Guide Form
function dlCourseGuide(){
  document.getElementById('cg_link').click();
}

function showCGForm(realForm) {
  console.log(realForm)
  var form = document.getElementsByClassName("hbspt-form");
  var formModal = document.getElementsByClassName('school-forms-modal');
  formModal[0].style.display = "block";
  form[0].style.display = "block";
  btn.addEventListener("click", function(){
    form[0].style.display = "none";
    formModal[0].style.display = "none";
  });
  form[0].appendChild(btn);

};

//- Course Guide Form
function createCGForm(formId){
  hbspt.forms.create({
    portalId: '5513253',
    formId: formId,
    onFormReady: function($form) {showCGForm($form)},
    onFormSubmit: dlCourseGuide,
    inlineMessage: 'Thank you for downloading the course guide!'
  });
}

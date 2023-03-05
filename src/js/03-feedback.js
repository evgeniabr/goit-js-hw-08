import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('.feedback-form');
const feedbackMessage = document.querySelector('textarea');
const feedBackEmail = document.querySelector('input');

const STORAGE_KEY = "feedback-form-state";



feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
feedbackForm.addEventListener('input', throttle(onFeedbackInput, 500));

populateFeedbackInfo();

function onFeedbackFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
     console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
}

function onFeedbackInput() {
    const feedBackInfo = {
        email: feedBackEmail.value,
        message: feedbackMessage.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedBackInfo));
}

function populateFeedbackInfo() {
    const savedFeedbackInfo = localStorage.getItem(STORAGE_KEY);
    if (savedFeedbackInfo) {
        feedBackEmail.value = JSON.parse(savedFeedbackInfo).email;
        feedbackMessage.value = JSON.parse(savedFeedbackInfo).message;
    } else {
        feedBackEmail.value = "";
        feedbackMessage.value = "";
        
    }
}

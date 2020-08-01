//unsubscribing from realtime fetch
const unsubBtn = document.querySelector('.unsub');

unsubBtn.addEventListener('click', () => {
    realTimeListener();
    console.log('Real Time listener deactivated!');
});

/* we will use this functionaity in future project and will explain the usage */
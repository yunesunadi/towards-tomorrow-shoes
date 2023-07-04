import getElement from "../utilities/getElement";

const countdown = getElement(".countdown");

const getCountDownTime = () => {
    const currentDate = new Date();
    const currentTime = currentDate.getTime();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const futureDay = currentDate.getDate() + 16;
    const futureDate = new Date(currentYear, currentMonth, futureDay, 0, 0, 0);
    const futureTime = futureDate.getTime();
    const timeDifference = futureTime - currentTime;
    const oneDayMilliseconds = 24 * 60 * 60 * 1000;
    const oneHourMilliseconds = 60 * 60 * 1000;
    const oneMinuteMilliseconds = 60 * 1000;
    const oneSecondMilliseconds = 1000;

    const dayLeft = Math.floor(timeDifference / oneDayMilliseconds);
    const hourLeft = Math.floor(
        (timeDifference % oneDayMilliseconds) / oneHourMilliseconds
    );
    const minuteLeft = Math.floor(
        (timeDifference % oneHourMilliseconds) / oneMinuteMilliseconds
    );
    const secondLeft = Math.floor(
        (timeDifference % oneMinuteMilliseconds) / oneSecondMilliseconds
    );

    const timeLeft = [
        {
            count: dayLeft,
            label: "days",
        },
        {
            count: hourLeft,
            label: "hours",
        },
        {
            count: minuteLeft,
            label: "minutes",
        },
        {
            count: secondLeft,
            label: "seconds",
        },
    ];

    countdown.innerHTML = timeLeft
        .map(({ count, label }) => {
            if (label === "days") {
                if (count < 10) {
                    count = `00${count}`;
                }
                if (count > 10 && count < 100) {
                    count = `0${count}`;
                }
            } else {
                if (count < 10) {
                    count = `0${count}`;
                }
            }
            return `<div class="countdown__container">
                        <p class="countdown__count">${count}</p>
                        <span class="countdown__label">${label}</span>
                    </div>
                    <span class="countdown__colon">:</span>`;
        })
        .join("");
};

const interval = setInterval(getCountDownTime, 1000);

let $ = document.querySelector.bind(document);

    function date() {
        let currentDate = new Date();
        let dateOptions = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };
        let date = currentDate.toLocaleDateString("en-GB", dateOptions);
        $('#date').innerHTML = date;
    }

    function greet() {
        let currentTime = new Date();
        let greet = Math.floor(currentTime.getHours() / 6);
        switch (greet) {
            case 0:
                $('.greeting').innerHTML = "Good night!";
                break;
            case 1:
                $('.greeting').innerHTML = "Good morning!";
                break;
            case 2:
                $('.greeting').innerHTML = "Good afternoon!";
                break;
            case 3:
                $('.greeting').innerHTML = "Good evening!";
                break;
        }
    }
    date();
    greet();
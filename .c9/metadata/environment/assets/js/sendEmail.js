{"filter":false,"title":"sendEmail.js","tooltip":"/assets/js/sendEmail.js","undoManager":{"mark":4,"position":4,"stack":[[{"start":{"row":0,"column":0},"end":{"row":16,"column":4},"action":"insert","lines":["    function sendMail(contactForm) {","        emailjs.send(\"gmail\", \"rosie\", {","                \"from_name\": contactForm.name.value,","                \"from_email\": contactForm.emailaddress.value,","                \"project_request\": contactForm.projectsummary.value","            })","            .then(","                function(response) {","                    console.log(\"SUCCESS\", response);","                },","                function(error) {","                    console.log(\"FAILED\", error);","                }","            );","        return false; // To block from loading a new page","    }","    "],"id":1}],[{"start":{"row":1,"column":35},"end":{"row":1,"column":36},"action":"remove","lines":["e"],"id":2},{"start":{"row":1,"column":34},"end":{"row":1,"column":35},"action":"remove","lines":["i"]},{"start":{"row":1,"column":33},"end":{"row":1,"column":34},"action":"remove","lines":["s"]},{"start":{"row":1,"column":32},"end":{"row":1,"column":33},"action":"remove","lines":["o"]},{"start":{"row":1,"column":31},"end":{"row":1,"column":32},"action":"remove","lines":["r"]}],[{"start":{"row":1,"column":31},"end":{"row":1,"column":32},"action":"insert","lines":["p"],"id":3},{"start":{"row":1,"column":32},"end":{"row":1,"column":33},"action":"insert","lines":["a"]},{"start":{"row":1,"column":33},"end":{"row":1,"column":34},"action":"insert","lines":["l"]},{"start":{"row":1,"column":34},"end":{"row":1,"column":35},"action":"insert","lines":["e"]},{"start":{"row":1,"column":35},"end":{"row":1,"column":36},"action":"insert","lines":["_"]}],[{"start":{"row":1,"column":36},"end":{"row":1,"column":37},"action":"insert","lines":["b"],"id":4},{"start":{"row":1,"column":37},"end":{"row":1,"column":38},"action":"insert","lines":["l"]},{"start":{"row":1,"column":38},"end":{"row":1,"column":39},"action":"insert","lines":["u"]},{"start":{"row":1,"column":39},"end":{"row":1,"column":40},"action":"insert","lines":["e"]}],[{"start":{"row":1,"column":40},"end":{"row":1,"column":41},"action":"insert","lines":["_"],"id":5},{"start":{"row":1,"column":41},"end":{"row":1,"column":42},"action":"insert","lines":["m"]},{"start":{"row":1,"column":42},"end":{"row":1,"column":43},"action":"insert","lines":["o"]},{"start":{"row":1,"column":43},"end":{"row":1,"column":44},"action":"insert","lines":["o"]},{"start":{"row":1,"column":44},"end":{"row":1,"column":45},"action":"insert","lines":["n"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":1,"column":45},"end":{"row":1,"column":45},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1567428907717,"hash":"2dbad7a8ddaa636178c85c5de1f42d89a965e226"}
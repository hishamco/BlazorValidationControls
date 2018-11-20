window.validation = {
    isRequired: function (element, msg) {
        var e = document.getElementById(element);
        e.required = true;
        var div = document.createElement("div");
        div.classList.add('invalid-feedback');
        div.innerHTML = msg;
        e.parentNode.insertBefore(div, e.nextSibling);
        validation.validateForms();
    },
    isInRange: function (element, min, max, msg) {
        var e = document.getElementById(element);
        e.min = min;
        e.max = max;
        var div = document.createElement("div");
        div.classList.add('invalid-feedback');
        div.innerHTML = msg;
        e.parentNode.insertBefore(div, e.nextSibling);
        validation.validateForms();
    },
    compareTo: function (element, compareElement, valueToCompare, msg) {
        var e = document.getElementById(element);
        if (compareElement == null) {
            var valueHiddenField = new HTMLInputElement();
            valueHiddenField.type = "hidden";
            var div = document.createElement("div");
            div.classList.add('invalid-feedback');
            div.innerHTML = msg;
            $(e).on('keyup keypress blur change', function () {
                e.classList.remove('is-valid', 'is-invalid');
                if (e.value === valueHiddenField.value) {
                    e.classList.add('is-valid');
                }
                else {
                    e.classList.add('is-invalid');
                }
            });
        }
        else {
            var ec = document.getElementById(compareElement);
            var div = document.createElement("div");
            div.classList.add('invalid-feedback');
            div.innerHTML = msg;
            e.parentNode.insertBefore(div, e.nextSibling);
            $(e).on('keyup keypress blur change', function () {
                e.classList.remove('is-valid','is-invalid');
                if (e.value == ec.value) {
                    e.classList.add('is-valid');
                }
                else {
                    lastChild.innerHTML = msg;
                    e.classList.add('is-invalid');
                }
            });
        }
        validation.validateForms();
    },
    validateRegEx: function (element, expression, msg) {
        var e = document.getElementById(element);
        e.pattern = expression;
        var div = document.createElement("div");
        div.classList.add('invalid-feedback');
        div.innerHTML = msg;
        e.parentNode.insertBefore(div, e.nextSibling);
        validation.validateForms();
    },
    validateForms: function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }
};
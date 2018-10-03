$(function($){
    'use strict';
    var login = {
        class: {
            textFieldFocus:'text__field--focus'
        },
        selector: {
            textField:'.text__field',
            forms: '#js-customer__login',
            inputs: 'input[type=password], input[type=text]',
            buttons: '#js-customer__submit'
        },
        init: function() {
            this.validation();
            this.handleEvent();
            this.focus();
        },
        focus: function() {
            // Focus
            $(login.selector.inputs).on('focus', function(){
                $(this).parent().addClass(login.class.textFieldFocus);
            });

            // Blur
            $(login.selector.inputs).on('blur', function(){
                login.focusToggle($(this));
            });
        },
        focusToggle: function($this){
            if($this.val()){
                $this.parent().addClass(login.class.textFieldFocus);
            }else{
                $this.parent().removeClass(login.class.textFieldFocus);
            }
        },
        handleEvent: function(){
            $(login.selector.buttons).on('click',function(){
                if($(login.selector.forms).valid()){
                    $.ajax({
                        type: 'POST',
                        url: 'success.php',
                        data: $(login.selector.forms).serialize(),
                        success: function () {
                            console.log('success');
                            //console.log(data);
                        }
                    });
                    return false; // required to block normal submit since you used ajax
                }
            });
        },
        validation: function(){
            $(login.selector.forms).validate({
                rules: {
                    user_name: {
                        required: true
                    },
                    password: {
                        required: true
                    }
                },
                messages: {
                    user_name: {
                        required: "Required"
                    },
                    password: {
                        required: "Required"
                    }
                }
            });
        }
    }
    login.init();
});

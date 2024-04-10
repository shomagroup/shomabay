// ------------ triggers after profile loaded
//
$('input[name="registration_type"]').on('change', function() {
    if( $(this).val() === "path_one" ) {
    $('input[path_two]').val('');$('input[path_two]').removeAttr('required');
    $('select[path_two]').find('option:selected').prop('selected', false);
    
    $('input[path_two][type="radio"], input[path_two][type="checkbox"]')
    .prop('checked', false);
    $('input[path_two][type="radio"], input[path_two][type="checkbox"]')
    .siblings("div.multi-option").removeClass("w--redirected-checked");
    
    $('input[path_one][_check][type="checkbox"]')
    .prop('checked', true);
    $('input[path_one][_check][type="checkbox"]')
    .siblings("div.multi-option").addClass("w--redirected-checked");
    
    $('input[path_one][req_]').attr('required',true);
    }
    if( $(this).val() === "path_two" ) {
    $('input[path_one]').val('');$('input[path_one]').removeAttr('required');
    $('select[path_one]').find('option:selected').prop('selected', false);
    
    $('input[path_one][type="radio"], input[path_one][type="checkbox"]')
    .prop('checked', false);
    $('input[path_one][type="radio"], input[path_one][type="checkbox"]')
    .siblings("div.multi-option").removeClass("w--redirected-checked");
    
    $('input[path_two][_check][type="checkbox"]')
    .prop('checked', true);
    $('input[path_two][_check][type="checkbox"]')
    .siblings("div.multi-option").addClass("w--redirected-checked");
    
    $('input[path_two][req_]').attr('required',true);
    }
    });
    
    $('input[contact_option]').on('change', function() {
    let $this = $(this);
    let group = $(this).data('group');
    
    if ($this.is(':checked')) {
    $this.closest('.option').siblings('input').attr('required', true).removeAttr('readonly');
    } else { 
    $this.closest('.option').siblings('input').removeAttr('required').attr('readonly', true).val('');
    }
    if ( ($(`input[contact_option][data-group="${group}"]:checked`).length) === 0 ) {
    if ( group !== "reg-agent" ) {
    $this.closest('.form-wrapper').siblings('.form-wrapper').find('input[contact_option]')
    .prop('checked', true);
    
    $this.closest('.form-wrapper').siblings('.form-wrapper').find('input[contact_option]')
    .siblings("div.multi-option").addClass("w--redirected-checked");
    
    $this.closest('.form-wrapper').siblings('.form-wrapper')
    .find('input:not([contact_option])').attr('required',true);
    $this.closest('.form-wrapper').siblings('.form-wrapper')
    .find('input:not([contact_option])').removeAttr('readonly');
    } else {
    let def = '.form-wrapper[sub_path="reg"] .form-wrapper .form-wrapper:nth-child(2)';
    if ($this.data('default') !== 1) {
    $(`${def} input[req_agent]`).attr('required',true).removeAttr('readonly');
    $(`${def} input[_check_agent]`).prop('checked', true);
    $(`${def} div.multi-option`).addClass("w--redirected-checked");
    } else {
    $(`${def}`).next().find('input[req_agent]').attr('required',true).removeAttr('readonly');
    $(`${def}`).next().find('input[_check_agent]').prop('checked', true);
    $(`${def}`).next().find('div.multi-option').addClass("w--redirected-checked");
    }
    }} else if ( (($(`input[contact_option][data-group="${group}"]:checked`).length) > 0) && (group == 'reg-agent') ) {
    $(`input[contact_option][data-group="reg-agent"]`).not($this).prop('checked', false);
    $(`input[contact_option][data-group="reg-agent"]`).not($this).siblings('div.multi-option').removeClass("w--redirected-checked");
    $(`input[contact_option][data-group="reg-agent"]`).not($this).closest('.form-wrapper')
    .find('input:not([contact_option])').val('');
    $(`input[contact_option][data-group="reg-agent"]`).not($this).closest('.form-wrapper')
    .find('input:not([contact_option])').attr('required',false);
    $(`input[contact_option][data-group="reg-agent"]`).not($this).closest('.form-wrapper')
    .find('input:not([contact_option])').attr('readonly',true);
    }
    });
    

    $('input[name="path_two_agent_type"]').on('change', function() {
    let $this = $(this).closest('label').attr('sub_path_selector');
    let options = ['new', 'reg'];
    
    let chosen = options.filter(option => option == $this)[0];
    let unchosen = options.filter(option => option !== $this)[0];
    
    if (chosen === 'reg') {
    let def = '.form-wrapper[sub_path="reg"] .form-wrapper .form-wrapper:nth-child(2)';
    $(`${def} input[req_agent]`).attr('required',true).removeAttr('readonly');
    $(`${def} input[_check_agent]`).prop('checked', true);
    $(`${def} div.multi-option`).addClass("w--redirected-checked");
    } else {
    $(`input[path_${chosen}][req_agent]`).removeAttr('readonly');
    $(`input[path_${chosen}][req_agent]`).attr('required',true);
    $(`input[path_${chosen}][_check_agent]`).prop('checked', true);
    $(`input[path_${chosen}][_check_agent]`)
    .siblings("div.multi-option").addClass("w--redirected-checked");
    }
    
    $(`input[path_${unchosen}]`).val('');
    $(`input[path_${unchosen}][req_agent]`).attr('required',false);
    $(`input[path_${unchosen}][req_agent]`).attr('readonly',true);
    $(`input[path_${unchosen}][_check_agent]`).prop('checked', false);
    $(`input[path_${unchosen}][_check_agent]`)
    .siblings("div.multi-option").removeClass("w--redirected-checked");
    
    });// pathtwo agent end
    
    $('select[name="utm_select"]').on('change', function() {
    if ($(this).find('option:selected').val() !== '' ) {
    $('input[name="utm_dynamic"]').addClass('open').attr('require',true);
    } else { 
    $('input[name="utm_dynamic"]').removeClass('open');
    $('input[name="utm_dynamic"]').removeAttr('require');
    $('input[name="utm_dynamic"]').val('');
    }
    });
    
    // message handler
    $('input[name="message"]').on('input', function() {
    if ( $(this).val() === '' ) {
    $('input[name="message_send"]').val('');
    } else {
    $('input[name="message_send"]').val( user.signature + $(this).val() );
    }
    });
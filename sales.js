$(document).ready(function() {
    // ------------ triggers after profile loaded
    $('input[name="client_count"]').val('0');
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
    
        addlead_reset();
    
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
        
        $(document).on('change', 'input[contact_option]', function() {
        let $this = $(this);
        let group = $(this).data('group');
        if ( $this.is(':checked') ) {
        $this.closest('.option').siblings('input').attr('required', true).removeAttr('readonly');
        } else { 
        $this.closest('.option').siblings('input').removeAttr('required').attr('readonly', true).val('');
        }
        
        if ( ($(`input[contact_option][data-group="${group}"]:checked`).length) === 0 ) {
        if ( (group !== "reg-agent") && (!(group.includes("new_lead_"))) ) {
        $this.closest('.form-wrapper').siblings('.form-wrapper').find('input[contact_option]')
        .prop('checked', true);
        
        $this.closest('.form-wrapper').siblings('.form-wrapper').find('input[contact_option]')
        .siblings("div.multi-option").addClass("w--redirected-checked");
        
        $this.closest('.form-wrapper').siblings('.form-wrapper')
        .find('input:not([contact_option])').attr('required',true);
        $this.closest('.form-wrapper').siblings('.form-wrapper')
        .find('input:not([contact_option])').removeAttr('readonly');
        } else if (group == "reg-agent") {
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
        addlead_reset();
        $(`input[req_agent]`).attr('readonly',true);
        
        if (chosen === 'reg') {
        addlead(1);
        let def = '.form-wrapper[sub_path="reg"] .form-wrapper .form-wrapper:nth-child(2)';
        $(`${def} input[req_agent]`).attr('required',true).removeAttr('readonly');
        $(`${def} input[_check_agent]`).prop('checked', true);
        $(`${def} div.multi-option`).addClass("w--redirected-checked");
        addlead_min = 1;
        } else {
        $(`input[path_${chosen}][req_agent]`).removeAttr('readonly');
        $(`input[path_${chosen}][req_agent]`).attr('required',true);
        $(`input[path_${chosen}][_check_agent]`).prop('checked', true);
        $(`input[path_${chosen}][_check_agent]`)
        .siblings("div.multi-option").addClass("w--redirected-checked");
        addlead_min = 0;
        }
        
        $(`input[path_${unchosen}]`).val('');
        $(`input[path_${unchosen}][req_agent]`).attr('required',false);
        $(`input[path_${unchosen}][req_agent]`).attr('readonly',true);
        $(`input[path_${unchosen}][_check_agent]`).prop('checked', false);
        $(`input[path_${unchosen}][_check_agent]`)
        .siblings("div.multi-option").removeClass("w--redirected-checked");
        
        });// pathtwo agent end
        
        $('select[name="utm_select"]').on('change', function() {
            $('input[name="utm_dynamic"]').removeClass('open');
            $('input[name="utm_dynamic"]').removeAttr('require');
            $('input[name="utm_dynamic"]').val('');
        if ($(this).find('option:selected').val() !== '') {
        $('input[name="utm_dynamic"]').addClass('open').attr('require',true);
        if ($(this).find('option:selected').val() == "SellingBrokers") {
            $('input[name="utm_dynamic"]').val('MLS Broker List');
        }
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
    
    
    // ---------- Lead Adder Start
    var leadcounter = 0; // Initialize counter
    var addlead_min = 0;
    
    function addlead(min) {
    if (!min){min = 0 ;}
    if (leadcounter < 5) {
    leadcounter++
    
    let leadtoadd = $('<div>', { class: 'form-wrapper mod-vertical', 'data-count-id': leadcounter}).append(
        $('<div>', { 
            class: 'form-info-text mar-left-auto sub-title margin-mod', 
            text: 'New Lead #'+leadcounter 
        }),
        $('<div>', { class: 'form-wrapper' }).append(
        $('<input>', {
            type: 'text',
            class: 'form-field w-input',
            name: 'path_two_new_lead_'+ leadcounter +'_fname',
            'data-name': 'path_two_new_lead_'+ leadcounter +'_fname',
            id: 'path_two_new_lead_'+ leadcounter +'_fname',
            maxlength: '256',
            required: 'required',
            placeholder: 'First Name'
        }),
        $('<input>', {
            type: 'text',
            class: 'form-field w-input',
            name: 'path_two_new_lead_'+ leadcounter +'_lname',
            'data-name': 'path_two_new_lead_'+ leadcounter +'_lname',
            id: 'path_two_new_lead_'+ leadcounter +'_lname',
            maxlength: '256',
            required: 'required',
            placeholder: 'Last Name'
        })),
        $('<div>', { class: 'form-wrapper mod-vertical' }).append(
        $('<div>', { class: 'form-wrapper exception-horizontal',}).append(
            $('<label>', { class: 'w-checkbox option s-form-check' }).append(
                $('<div>', {
                    class:'w-checkbox-input w-checkbox-input--inputType-custom multi-option with-border mod-1 w--redirected-checked'
                }),
                $('<input>', {
                    type: 'checkbox',
                    class: 'form-field w-input',
                    name: 'path_two_new_lead_'+ leadcounter +'_email_able',
                    style: 'opacity:0;position:absolute;z-index:-1',
                    'contact_option':'' , '_check':'' ,
                    'data-group':'new_lead_'+leadcounter
                }),
                $('<span>', {
                    class:'span-invi w-form-label',
                    for:'path_two_new_lead_'+ leadcounter +'_email_able',
                    text:'✔'
                })
            ),
            $('<input>', {
                type:'text',
                class: 'form-field w-input',
                name: 'path_two_new_lead_'+ leadcounter +'_email',
                'data-name': 'path_two_new_lead_'+ leadcounter +'_email',
                id: 'path_two_new_lead_'+ leadcounter +'_email',
                maxlength: '256',placeholder: 'Email',
                required: 'required',
            })
        ),
        $('<div>', { class: 'form-wrapper exception-horizontal',}).append(
            $('<label>', { class: 'w-checkbox option s-form-check' }).append(
                $('<div>', {
                    class:'w-checkbox-input w-checkbox-input--inputType-custom multi-option with-border mod-1 w--redirected-checked'
                }),
                $('<input>', {
                    type: 'checkbox',
                    class: 'form-field w-input',
                    name: 'path_two_new_lead_'+ leadcounter +'_phone_able',
                    style: 'opacity:0;position:absolute;z-index:-1',
                    'contact_option':'' , '_check':'' ,
                    'data-group':'new_lead_'+ leadcounter
                }),
                $('<span>', {
                    class:'span-invi w-form-label',
                    for:'path_two_new_lead_'+leadcounter +'_phone_able',
                    text:'✔'
                })
            ),
            $('<input>', {
                type:'text',
                class: 'form-field w-input',
                name: 'path_two_new_lead_'+ leadcounter +'_phone',
                'data-name': 'path_two_new_lead_'+ leadcounter +'_phone',
                id: 'path_two_new_lead_'+ leadcounter +'_phone',
                maxlength: '15',placeholder: 'Phone',
                required: 'required'
            })
        )
        )
    );
    
    $('.form-wrapper[data-lead-container]').append(leadtoadd);
    $("input[data-group='new_lead_" + leadcounter + "'][_check='']").prop('checked', true);
    if (leadcounter === 5) {
    $('.lead-add-remove[trigger-add-lead]').addClass('disabled');
    }
    if (leadcounter > min) {
    $('.lead-add-remove[trigger-re-add-lead]').removeClass('disabled');
    }
    $('input[name="client_count"]').val(leadcounter);
    } else {alert("Maximum of 5 leads per submission")}}
    
    function addlead_remove(min) {
    if (!min){min=0;}
    $('.form-wrapper[data-count-id="'+leadcounter+'"]').remove();
    if (leadcounter > min) {
    leadcounter--;
    }
    if (leadcounter === min) {
    $('.lead-add-remove[trigger-re-add-lead]').addClass('disabled');
    }
    if (leadcounter < 5) {
    $('.lead-add-remove[trigger-add-lead]').removeClass('disabled');
    }
    $('input[name="client_count"]').val(leadcounter);
    }
    
    function addlead_reset() {
    $('.lead-add-remove[trigger-re-add-lead]').addClass('disabled');
    $('.form-wrapper[data-lead-container]').empty();
    addlead_min = 0;
    leadcounter = 0; // Reset counter
    $('input[name="client_count"]').val(leadcounter);
    }
    
    $('[trigger-add-lead]').on('click', function() { 
    addlead();
    });
    $('[trigger-re-add-lead]').on('click', function() { 
    addlead_remove(addlead_min);
    });
    // ---------- Lead Adder End
    
    }); // DOM LOADED
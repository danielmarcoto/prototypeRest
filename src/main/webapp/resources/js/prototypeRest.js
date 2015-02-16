/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function showMessage(message){
    $('#alertMessageBox').remove();
    var template = '<div class="alert alert-success" role="alert" id="alertMessageBox">' + message + '</div>';
    $('.container').before(template);
    
    setTimeout(function(){
        $('#alertMessageBox').hide(500, function(){
            $('#alertMessageBox').remove();
        });
    }, 3000);
}

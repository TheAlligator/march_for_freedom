$(document).ready(function(){
    // hide divs
    function hideAll() {
        $('#VoicesText').hide();
        $('#artist').hide();
        $('#dev').hide();
        $('#MarchText').hide();
        $('#DemonstrationsText').hide();
        $('#ReactText').hide();
        $('#VigilText').hide();
        $('#ShandsText').hide();
        $('#MuralText').hide();
        $('#AcademiaText').hide();
        $('#ProtectText').hide();
        $('#EventsText').hide();
        $('#UnityText').hide();
        $('#JuneteenthText').hide();
      }

    //hide divs on start
    hideAll();
    //show home page
    $('#VoicesText').show();
    $('#artist').show();
    $('#dev').show();
  
    $('#Voices').click(function(){
      hideAll();
      $('#VoicesText').show();
      $('#artist').show();
      $('#dev').show();
    });

    $('#March').click(function(){
      hideAll();
      $('#MarchText').show();
    });

    $('#Demonstrations').click(function(){
      hideAll();
      $('#DemonstrationsText').show();
    });

    $('#React').click(function(){
      hideAll();
      $('#ReactText').show();
    });

    $('#Vigil').click(function(){
      hideAll();
      $('#VigilText').show();
    });

    $('#Shands').click(function(){
      hideAll();
      $('#ShandsText').show();
    });

    $('#Mural').click(function(){
      hideAll();
      $('#MuralText').show();
    });

    $('#Academia').click(function(){
      hideAll();
      $('#AcademiaText').show();
    });

    $('#Protect').click(function(){
      hideAll();
      $('#ProtectText').show();
    });

    $('#Unity').click(function(){
      hideAll();
      $('#UnityText').show();
    });

    $('#Events').click(function(){
      hideAll();
      $('#EventsText').show();
    });

    $('#Juneteenth').click(function(){
      hideAll();
      $('#JuneteenthText').show();
    });
});
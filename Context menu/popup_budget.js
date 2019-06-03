$(function(){
    chrome.storage.sync.get(['total'],function(budget){
        $('#total').text(budget.total);
    });
    $('#amount').keyup(function(){
        $('#total').text($('#amount').val())
    
    });
    $('#spendAmount').click(function(){
    chrome.storage.sync.get(['total'],function(budget){
    var newTotal=" ";
    if(budget.total)
    {   
        newTotal=budget.total;
    }
    var amount=$('#amount').val();
    if(amount)
    {   
        newTotal=amount;
    }
    chrome.storage.sync.set({'total': newTotal});
    $('#total').text(newTotal);
    $('#amount').val('');
    });
});
$('#resetTotal').click(function(){
    chrome.storage.sync.set({'total': "No Data"});
    $('#total').text("No Data");
});
});
